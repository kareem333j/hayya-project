import { supabase } from "@/integrations/supabase/client";
import type { Lang } from "@/content/site";

export const PRODUCT_BUCKET = "product-images";

export type Product = {
  id: string;
  name_en: string;
  name_ar: string;
  description_en: string;
  description_ar: string;
  image_url: string;
  image_path: string;
  season: string;
  is_published: boolean;
  is_featured: boolean;
  sort_order: number;
};

export type ProductWithImage = Product & { displayImage: string | null };

const SELECT =
  "id,name_en,name_ar,description_en,description_ar,image_url,image_path,season,is_published,is_featured,sort_order";

/** Turn stored uploads into temporary readable links; keep plain links as-is. */
async function withImages(rows: Product[]): Promise<ProductWithImage[]> {
  const paths = rows.map((r) => r.image_path).filter((p) => p.length > 0);
  const signed = new Map<string, string>();

  if (paths.length > 0) {
    const { data } = await supabase.storage.from(PRODUCT_BUCKET).createSignedUrls(paths, 60 * 60);
    data?.forEach((entry, i) => {
      const path = paths[i];
      if (path && entry.signedUrl) signed.set(path, entry.signedUrl);
    });
  }

  return rows.map((row) => {
    let displayImage = row.image_path ? (signed.get(row.image_path) ?? null) : row.image_url || null;
    
    if (!row.image_path) {
      const nameEn = (row.name_en || "").toLowerCase();
      const nameAr = (row.name_ar || "");
      let fallback = null;

      if (nameEn.includes("mango") || nameAr.includes("مانجو")) fallback = "/products/mangoes.jpg";
      else if (nameEn.includes("tomato") || nameAr.includes("طماطم")) fallback = "/products/tomatoes.jpg";
      else if (nameEn.includes("chili") || nameAr.includes("شطة") || nameAr.includes("حار")) fallback = "/products/chili-peppers.jpg";
      else if (nameEn.includes("pepper") || nameAr.includes("فلفل")) fallback = "/products/bell-peppers.jpg";
      else if (nameEn.includes("grape") || nameAr.includes("عنب")) fallback = "/products/grapes.jpg";
      else if (nameEn.includes("pomegranate") || nameAr.includes("رمان")) fallback = "/products/pomegranates.jpg";
      else if (nameEn.includes("guava") || nameAr.includes("جوافة")) fallback = "/products/guavas.jpg";
      else if (nameEn.includes("strawberry") || nameAr.includes("فراولة")) fallback = "/products/strawberries.jpg";
      else if (nameEn.includes("orange") || nameEn.includes("citrus") || nameAr.includes("برتقال")) fallback = "/products/oranges.jpg";
      else if (nameEn.includes("cabbage") || nameAr.includes("كرنب") || nameAr.includes("ملفوف")) fallback = "/products/cabbage.jpg";
      else if (nameEn.includes("peach") || nameAr.includes("خوخ")) fallback = "/products/peaches.jpg";

      if (fallback) displayImage = fallback;
    }

    return {
      ...row,
      displayImage,
    };
  });
}

export async function fetchPublishedProducts(): Promise<ProductWithImage[]> {
  const { data, error } = await supabase
    .from("products")
    .select(SELECT)
    .eq("is_published", true)
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: true });
  if (error) throw error;
  return withImages((data ?? []) as Product[]);
}

export async function fetchAllProducts(): Promise<ProductWithImage[]> {
  const { data, error } = await supabase
    .from("products")
    .select(SELECT)
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: true });
  if (error) throw error;
  return withImages((data ?? []) as Product[]);
}

export type ProductInput = Omit<Product, "id">;

export function emptyProduct(): ProductInput {
  return {
    name_en: "",
    name_ar: "",
    description_en: "",
    description_ar: "",
    image_url: "",
    image_path: "",
    season: "",
    is_published: true,
    is_featured: false,
    sort_order: 0,
  };
}

export async function createProduct(input: ProductInput) {
  const { error } = await supabase.from("products").insert(input);
  if (error) throw error;
}

export async function updateProduct(id: string, input: ProductInput) {
  const { error } = await supabase.from("products").update(input).eq("id", id);
  if (error) throw error;
}

export async function deleteProduct(product: Product) {
  const { error } = await supabase.from("products").delete().eq("id", product.id);
  if (error) throw error;
  if (product.image_path) {
    await supabase.storage.from(PRODUCT_BUCKET).remove([product.image_path]);
  }
}

export async function uploadProductImage(file: File): Promise<string> {
  const ext = (file.name.split(".").pop() ?? "jpg").toLowerCase();
  const path = `${crypto.randomUUID()}.${ext}`;
  const { error } = await supabase.storage
    .from(PRODUCT_BUCKET)
    .upload(path, file, { contentType: file.type || "application/octet-stream", upsert: false });
  if (error) throw error;
  return path;
}

export function localName(product: Product, lang: Lang) {
  if (lang === "ar") return product.name_ar || product.name_en;
  return product.name_en || product.name_ar;
}

export function localDesc(product: Product, lang: Lang) {
  if (lang === "ar") return product.description_ar || product.description_en;
  return product.description_en || product.description_ar;
}
