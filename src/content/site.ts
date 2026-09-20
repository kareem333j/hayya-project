/**
 * HAYYA — editable site content.
 *
 * Everything a non-developer may need to change lives in this file:
 * contact details, product categories, partnerships and all EN/AR copy.
 * Edit values here; components read from this file only.
 */

import mangoes from "@/assets/prod-mangoes.jpg.asset.json";
import tomatoes from "@/assets/prod-tomatoes.jpg.asset.json";
import bellPeppers from "@/assets/prod-bell-peppers.jpg.asset.json";
import greenGrapes from "@/assets/prod-grapes-green.jpg.asset.json";
import pomegranates from "@/assets/prod-pomegranates.jpg.asset.json";
import mixedGrapes from "@/assets/prod-grapes-mixed.jpg.asset.json";

export type Lang = "en" | "ar";

/* ------------------------------------------------------------------ */
/* COMPANY CONTACT DETAILS — edit here                                */
/* ------------------------------------------------------------------ */
export const company = {
  name: "HAYYA",
  email: "rezk@hayya-eg.com",
  emailIsValid: true,
  phone: "+20 10 60010040",
  phoneHref: "+201060010040",
  landline: "0220301452",
  landlineHref: "0220301452",
  facebook: "https://www.facebook.com/share/1GL3ZtikM8/?mibextid=wwXIfr",
  instagram: "https://www.instagram.com/hayya.egypt",
  linkedin: "https://www.linkedin.com/company/hayya-engineering-and-development",
  location: { en: "C31 University Mall - El Shorouk City - Cairo", ar: "C31 الجامعه مول - مدينة الشروق - القاهره" },
  /**
   * Inquiry form destination. When email is enabled, the form
   * sends a notification to the company email above.
   */
  formEndpoint: null as string | null,
};

/* ------------------------------------------------------------------ */
/* PRODUCT CATEGORIES — add, edit or remove freely                     */
/* ------------------------------------------------------------------ */
export const products = [
  {
    id: "potatoes",
    image: "/products/potato.jpeg",
    en: {
      name: "Potatoes",
      desc: "High-quality Egyptian potatoes, grown in fertile soil and sorted carefully for export markets.",
    },
    ar: {
      name: "بطاطس",
      desc: "بطاطس مصرية عالية الجودة، تُزرع في تربة خصبة وتُفرز بعناية لأسواق التصدير.",
    },
  },
  {
    id: "oranges",
    image: "/products/oranges.jpg",
    en: {
      name: "Fresh Oranges",
      desc: "Premium Egyptian citrus selected for sweetness, juiciness, and perfect condition upon arrival.",
    },
    ar: {
      name: "برتقال طازج",
      desc: "حمضيات مصرية ممتازة يتم اختيارها بناءً على المذاق الحلو والعصارة الكثيفة لتصلك بأفضل حالة.",
    },
  },
  {
    id: "aromatic-leaves",
    image: "/products/aromatic-leaves.jpg",
    en: {
      name: "Rosemary & Aromatic Herbs",
      desc: "Fresh export-quality herbs including rosemary and anise, harvested and packed meticulously to preserve their natural aroma.",
    },
    ar: {
      name: "روزماري وأعشاب عطرية",
      desc: "أعشاب طازجة للتصدير تشمل الروزماري (إكليل الجبل) والينسون، تُحصد وتُعبأ بعناية للحفاظ على رائحتها الطبيعية.",
    },
  },
  {
    id: "mangoes",
    image: mangoes.url,
    en: {
      name: "Fresh Mangoes",
      desc: "Egyptian mangoes selected and packed for export, with attention to ripeness, size, and condition.",
    },
    ar: {
      name: "مانجو طازج",
      desc: "مانجو مصري يتم اختياره وتعبئته للتصدير مع الاهتمام بنضجه وحجمه وحالته.",
    },
  },
  {
    id: "tomatoes",
    image: tomatoes.url,
    en: {
      name: "Tomatoes",
      desc: "Fresh Egyptian tomatoes sourced for commercial buyers and prepared to agreed specifications.",
    },
    ar: {
      name: "طماطم",
      desc: "طماطم مصرية طازجة يتم توريدها للمشترين التجاريين وتجهيزها وفق المواصفات المتفق عليها.",
    },
  },
  {
    id: "bell-peppers",
    image: bellPeppers.url,
    en: {
      name: "Bell Peppers",
      desc: "Colorful bell peppers packed for export, graded for size, color, and freshness.",
    },
    ar: {
      name: "فلفل حلو",
      desc: "فلفل حلو ملون يتم تعبئته للتصدير وفرزه حسب الحجم واللون والطزاجة.",
    },
  },
  {
    id: "green-grapes",
    image: greenGrapes.url,
    en: {
      name: "Green Grapes",
      desc: "Egyptian green table grapes handled with care for bunches, berry size, and export quality.",
    },
    ar: {
      name: "عنب أخضر",
      desc: "عنب مصري أخضر للأكل يتم تداوله بعناية للحفاظ على العناقيد وحجم الحبة وجودة التصدير.",
    },
  },
  {
    id: "pomegranates",
    image: pomegranates.url,
    en: {
      name: "Pomegranates",
      desc: "Premium Egyptian pomegranates selected for skin quality, size, and shelf-ready presentation.",
    },
    ar: {
      name: "رمان",
      desc: "رمان مصري ممتاز يتم اختياره حسب جودة القشرة والحجم ومظهره الجاهز للعرض.",
    },
  },
  {
    id: "table-grapes",
    image: mixedGrapes.url,
    en: {
      name: "Table Grapes",
      desc: "A range of Egyptian table grape varieties prepared for international markets and buyer programs.",
    },
    ar: {
      name: "عنب للأكل",
      desc: "مجموعة من أصناف العنب المصري للأكل يتم تجهيزها للأسواق الدولية وبرامج المشترين.",
    },
  },
];

/* ------------------------------------------------------------------ */
/* PARTNERSHIPS — business / contractual relationships                 */
/* ------------------------------------------------------------------ */
export const partners = [
  {
    id: "tahya-misr",
    name: "Tahya Misr",
    nameAr: "تحيا مصر",
    en: "A business and contractual relationship supporting HAYYA's agricultural sourcing and supply operations.",
    ar: "علاقة عمل وتعاقدية تدعم عمليات التوريد الزراعي والإمداد لدى هيّا.",
  },
  {
    id: "el-watanya",
    name: "El Watanya",
    nameAr: "الوطنية",
    en: "A business and contractual relationship supporting reliable sourcing and supply continuity.",
    ar: "علاقة عمل وتعاقدية تدعم موثوقية التوريد واستمرارية الإمداد.",
  },
];

/* ------------------------------------------------------------------ */
/* COPY (EN / AR)                                                      */
/* ------------------------------------------------------------------ */
export const copy = {
  en: {
    dir: "ltr" as const,
    nav: {
      home: "Home",
      about: "About Us",
      products: "Products",
      services: "Services",
      why: "Why HAYYA",
      projects: "Our Projects",
      partnerships: "Partnerships",
      contact: "Contact",
      quote: "Request a Quote",
      menu: "Open menu",
      close: "Close menu",
    },
    hero: {
      eyebrow: "YOUR BRIDGE TO GLOBAL TRADE",
      title: "From the land of Egypt to global markets.",
      sub: "Hayya connects Egyptian producers with trusted buyers and suppliers across borders — from fresh crops to industrial steel products.",
      primary: "Explore our services ↗",
      secondary: "Start a conversation",
      trust: "Egyptian Agricultural Products | B2B Export | Reliable Supply",
    },
    trust: [
      { title: "Egyptian Origin", desc: "Premium agricultural products sourced from Egypt." },
      { title: "Quality Focus", desc: "Careful product selection and quality-focused handling." },
      {
        title: "Reliable Supply",
        desc: "Built around consistent sourcing and professional operations.",
      },
      { title: "B2B Export", desc: "Serving international buyers and commercial partners." },
    ],
    about: {
      label: "About HAYYA",
      title: "Quality is Our Motto... Now Globally Certified! 🌟",
      body: "Today, we are proud to share that Hayya for Engineering & Development has obtained the ISO 9001:2015 global certification. Why does this matter to you as a client?",
      cta: "Learn More About HAYYA",
      points: [
        "Ensures you are dealing with a management system following the strictest international standards.",
        "Reflects our commitment to continuous development in our import and real estate marketing services.",
        "Confirms that your trust in us is built on professional and documented foundations.",
      ],
      conclusion: "We grow with your trust, and the best is yet to come, God willing! 🚀",
    },
    products: {
      label: "Our Products",
      title: "Egyptian Produce, Prepared for Global Markets",
      sub: "Product categories below are indicative. Availability depends on season and buyer specification — contact us to confirm current lines.",
      cta: "Request Information",
    },
    services: {
      label: "Our Services",
      title: "Business Areas We Excel In",
      sub: "HAYYA provides comprehensive services across multiple sectors, connecting quality with global standards.",
      items: [
        {
          id: "agriculture",
          title: "Agricultural Products Export",
          desc: "Exporting premium Egyptian agricultural products to global markets with a strict focus on quality, freshness, and reliability.",
          cta: "View Products",
          link: "/products",
          image: "/services/agricultural_export.jpg"
        },
        {
          id: "real-estate",
          title: "Real Estate Marketing & Investment",
          desc: "Expert real estate services, offering premium property marketing, investment consulting, and development solutions in Egypt.",
          cta: "Our Projects",
          link: "/#projects",
          image: "/services/real_estate.jpg"
        },
        {
          id: "import-export",
          title: "Import & Commercial Agencies",
          desc: "Facilitating international trade through reliable import operations and acting as trusted commercial agents for global brands.",
          cta: "Our Projects",
          link: "/#projects",
          image: "/services/import_export.jpg"
        },
        {
          id: "industrial",
          title: "General Supplies & Industrial Products",
          desc: "Sourcing and supplying high-quality industrial materials and general supplies to meet diverse commercial and operational needs.",
          cta: "Our Projects",
          link: "/#projects",
          image: "/services/industrial_supplies.jpg"
        }
      ]
    },
    promo: {
      label: "Our Operations",
      title: "See HAYYA in Action",
      sub: "Watch our short documentary to see how we source, prepare, and export our premium agricultural products to the world.",
    },
    process: {
      label: "Quality & Sourcing",
      title: "From Source to Shipment",
      sub: "A straightforward, professional approach built around the requirements of commercial buyers.",
      steps: [
        {
          n: "01",
          title: "Sourcing",
          desc: "Selecting agricultural products through reliable sourcing relationships.",
        },
        {
          n: "02",
          title: "Quality Selection",
          desc: "Focusing on product quality, freshness, and consistency.",
        },
        {
          n: "03",
          title: "Preparation",
          desc: "Professional preparation and handling according to buyer requirements.",
        },
        {
          n: "04",
          title: "Export",
          desc: "Supporting the process of delivering products to international buyers.",
        },
      ],
    },
    why: {
      label: "Why HAYYA",
      title: "Why Partner With HAYYA",
      items: [
        { title: "Reliable Sourcing", desc: "Strong agricultural sourcing relationships." },
        {
          title: "Quality Focus",
          desc: "Attention to freshness, product condition, and consistency.",
        },
        {
          title: "Professional Communication",
          desc: "Clear communication with international buyers and partners.",
        },
        {
          title: "Flexible B2B Supply",
          desc: "Solutions designed around commercial buyer requirements.",
        },
        { title: "Egyptian Agricultural Origin", desc: "Access to products sourced from Egypt." },
        {
          title: "Long-Term Partnerships",
          desc: "Focused on building sustainable business relationships.",
        },
      ],
    },
    partnerships: {
      label: "Partnerships",
      title: "Built on Strong Business Relationships",
      body: "HAYYA works through established business and contractual relationships with trusted Egyptian entities, supporting reliable agricultural sourcing and supply operations.",
      note: "Relationship type: business and contractual",
    },
    global: {
      label: "Global Markets",
      title: "From Egypt to Global Markets",
      body: "We are focused on connecting Egyptian agricultural products with international buyers and building dependable long-term export relationships.",
      cta: "Start a Business Inquiry",
    },
    cta: {
      title: "Looking for a Reliable Egyptian Produce Supplier?",
      body: "Tell us what you are looking for, and our team will get back to you regarding availability and supply requirements.",
      primary: "Request a Quote",
      secondary: "Contact HAYYA",
    },
    contact: {
      label: "Contact",
      title: "Let's Talk Business",
      sub: "Share your requirements and our team will respond regarding availability and supply.",
      emailLabel: "Email",
      emailNote: "Address as supplied — pending confirmation.",
      phoneLabel: "Phone",
      locationLabel: "Location",
      form: {
        name: "Full Name",
        companyName: "Company Name",
        email: "Business Email",
        country: "Country",
        phone: "Phone Number",
        product: "Product of Interest",
        quantity: "Estimated Quantity",
        message: "Message",
        submit: "Send Inquiry",
        optional: "Optional",
        notice:
          "Inquiries are sent by email to rezk@hayya-eg.com. Email delivery is being set up now, so send may be disabled briefly until the domain is verified.",
        success:
          "Thank you — your inquiry has been sent. We will reply to rezk@hayya-eg.com or contact you directly.",
        errors: {
          name: "Please enter your full name.",
          company: "Please enter your company name.",
          email: "Please enter a valid business email.",
          country: "Please enter your country.",
          message: "Please tell us briefly what you need.",
        },
      },
    },
    footer: {
      desc: "Egyptian agricultural export company connecting quality-focused Egyptian produce with international B2B buyers.",
      nav: "Navigation",
      products: "Products",
      contact: "Contact",
      language: "Language",
      rights: "© 2026 HAYYA. All rights reserved.",
    },
  },

  ar: {
    dir: "rtl" as const,
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      products: "المنتجات",
      services: "خدماتنا",
      why: "لماذا هيّا",
      projects: "مشاريعنا",
      partnerships: "الشراكات",
      contact: "اتصل بنا",
      quote: "اطلب عرض سعر",
      menu: "فتح القائمة",
      close: "إغلاق القائمة",
    },
    hero: {
      eyebrow: "جسر العبور إلى التجارة العالمية",
      title: "من ارض مصر إلى الأسواق العالمية.",
      sub: "تربط هيّا المنتجين المصريين بالمشترين والموردين الموثوقين عبر الحدود — من المحاصيل الطازجة إلى منتجات الصلب الصناعية.",
      primary: "استكشف خدماتنا ↗",
      secondary: "ابدأ محادثة",
      trust: "منتجات زراعية مصرية | تصدير للشركات | إمداد موثوق",
    },
    trust: [
      { title: "منشأ مصري", desc: "منتجات زراعية متميزة يتم توريدها من مصر." },
      { title: "تركيز على الجودة", desc: "اختيار دقيق للمنتجات وتداول يركز على الجودة." },
      { title: "إمداد موثوق", desc: "قائم على توريد منتظم وعمليات احترافية." },
      { title: "تصدير للشركات", desc: "نخدم المشترين الدوليين والشركاء التجاريين." },
    ],
    about: {
      label: "عن هيّا",
      title: "الجودة هي شعارنا.. واليوم أصبحت موثقة عالمياً! 🌟",
      body: "نشارككم اليوم فخرنا بحصول شركة هيا للهندسة والتطوير على شهادة الأيزو العالمية ISO 9001:2015. لماذا يهمك هذا كعميل؟",
      cta: "اعرف المزيد عن هيّا",
      points: [
        "يضمن لك التعامل مع منظومة إدارية تتبع أدق المعايير الدولية.",
        "يعكس حرصنا على التطوير المستمر لخدماتنا في الاستيراد والتسويق العقاري.",
        "يؤكد أن ثقتكم بنا مبنية على أسس احترافية وموثقة.",
      ],
      conclusion: "نحن نكبر بثقتكم، والقادم أفضل بإذن الله! 🚀",
    },
    products: {
      label: "منتجاتنا",
      title: "محاصيل مصرية مُجهّزة للأسواق العالمية",
      sub: "فئات المنتجات التالية إرشادية، ويعتمد التوافر على الموسم ومواصفات المشتري — تواصل معنا لتأكيد الخطوط المتاحة حاليًا.",
      cta: "اطلب معلومات",
    },
    services: {
      label: "خدماتنا",
      title: "مجالات العمل التي نتميز بها",
      sub: "تقدم هيّا خدمات متكاملة عبر قطاعات متعددة، لتربط بين الجودة والمعايير العالمية.",
      items: [
        {
          id: "agriculture",
          title: "تصدير المنتجات الزراعية",
          desc: "تصدير منتجات زراعية مصرية ممتازة للأسواق العالمية مع تركيز صارم على الجودة والطزاجة والموثوقية.",
          cta: "عرض المنتجات",
          link: "/products",
          image: "/services/agricultural_export.jpg"
        },
        {
          id: "real-estate",
          title: "التسويق العقاري والاستثمار",
          desc: "خدمات عقارية متخصصة، نقدم حلول تسويق للعقارات المتميزة، استشارات استثمارية، وحلول تطوير في مصر.",
          cta: "مشاريعنا",
          link: "/#projects",
          image: "/services/real_estate.jpg"
        },
        {
          id: "import-export",
          title: "خدمات الاستيراد والتوكيلات التجارية",
          desc: "تسهيل التجارة الدولية من خلال عمليات استيراد موثوقة والعمل كوكلاء تجاريين موثوقين للعلامات التجارية العالمية.",
          cta: "مشاريعنا",
          link: "/#projects",
          image: "/services/import_export.jpg"
        },
        {
          id: "industrial",
          title: "التوريدات العامة والمنتجات الصناعية",
          desc: "توريد وإمداد المواد الصناعية عالية الجودة والتوريدات العامة لتلبية الاحتياجات التجارية والتشغيلية المتنوعة.",
          cta: "مشاريعنا",
          link: "/#projects",
          image: "/services/industrial_supplies.jpg"
        }
      ]
    },
    promo: {
      label: "عملياتنا",
      title: "شاهد هيّا في العمل",
      sub: "شاهد فيلمنا الوثائقي القصير لترى كيف نقوم بتوريد وتجهيز وتصدير منتجاتنا الزراعية الممتازة إلى العالم.",
    },
    process: {
      label: "الجودة والتوريد",
      title: "من المصدر إلى الشحن",
      sub: "منهج واضح واحترافي مبني على متطلبات المشترين التجاريين.",
      steps: [
        {
          n: "٠١",
          title: "التوريد",
          desc: "اختيار المنتجات الزراعية من خلال علاقات توريد موثوقة.",
        },
        { n: "٠٢", title: "انتقاء الجودة", desc: "التركيز على جودة المنتج وطزاجته واتساقه." },
        { n: "٠٣", title: "التجهيز", desc: "تجهيز وتداول احترافي وفق متطلبات المشتري." },
        { n: "٠٤", title: "التصدير", desc: "دعم عملية إيصال المنتجات إلى المشترين الدوليين." },
      ],
    },
    why: {
      label: "لماذا هيّا",
      title: "لماذا الشراكة مع هيّا",
      items: [
        { title: "توريد موثوق", desc: "علاقات توريد زراعي قوية." },
        { title: "تركيز على الجودة", desc: "اهتمام بالطزاجة وحالة المنتج والاتساق." },
        { title: "تواصل احترافي", desc: "تواصل واضح مع المشترين والشركاء الدوليين." },
        { title: "إمداد مرن للشركات", desc: "حلول مصممة حول متطلبات المشترين التجاريين." },
        { title: "منشأ زراعي مصري", desc: "وصول إلى منتجات يتم توريدها من مصر." },
        { title: "شراكات طويلة المدى", desc: "نركز على بناء علاقات عمل مستدامة." },
      ],
    },
    partnerships: {
      label: "الشراكات",
      title: "مبنية على علاقات عمل قوية",
      body: "تعمل هيّا من خلال علاقات عمل وتعاقدية قائمة مع جهات مصرية موثوقة، بما يدعم موثوقية التوريد الزراعي وعمليات الإمداد.",
      note: "نوع العلاقة: عمل وتعاقد",
    },
    global: {
      label: "الأسواق العالمية",
      title: "من مصر إلى الأسواق العالمية",
      body: "نركز على ربط المنتجات الزراعية المصرية بالمشترين الدوليين وبناء علاقات تصدير موثوقة وطويلة المدى.",
      cta: "ابدأ استفسارًا تجاريًا",
    },
    cta: {
      title: "تبحث عن مورّد مصري موثوق للمحاصيل الزراعية؟",
      body: "أخبرنا بما تبحث عنه وسيتواصل معك فريقنا بشأن التوافر ومتطلبات الإمداد.",
      primary: "اطلب عرض سعر",
      secondary: "تواصل مع هيّا",
    },
    contact: {
      label: "اتصل بنا",
      title: "لنتحدث في العمل",
      sub: "شاركنا متطلباتك وسيرد فريقنا بشأن التوافر والإمداد.",
      emailLabel: "البريد الإلكتروني",
      emailNote: "العنوان كما ورد — في انتظار التأكيد.",
      phoneLabel: "الهاتف",
      locationLabel: "الموقع",
      form: {
        name: "الاسم الكامل",
        companyName: "اسم الشركة",
        email: "البريد الإلكتروني للعمل",
        country: "الدولة",
        phone: "رقم الهاتف",
        product: "المنتج المطلوب",
        quantity: "الكمية التقديرية",
        message: "الرسالة",
        submit: "إرسال الاستفسار",
        optional: "اختياري",
        notice:
          "يتم إرسال الاستفسارات بالبريد إلى rezk@hayya-eg.com. جارٍ إعداد خدمة البريد الآن، وقد يكون الإرسال متوقفًا مؤقتًا حتى يتم التحقق من النطاق.",
        success:
          "شكرًا لك — تم إرسال استفسارك. سنتواصل معك عبر rezk@hayya-eg.com أو نتصل بك مباشرة.",
        errors: {
          name: "يُرجى إدخال الاسم الكامل.",
          company: "يُرجى إدخال اسم الشركة.",
          email: "يُرجى إدخال بريد إلكتروني صحيح.",
          country: "يُرجى إدخال الدولة.",
          message: "يُرجى توضيح ما تحتاجه بإيجاز.",
        },
      },
    },
    footer: {
      desc: "شركة مصرية للتصدير الزراعي تربط المنتجات المصرية عالية الجودة بالمشترين الدوليين.",
      nav: "التنقل",
      products: "المنتجات",
      contact: "اتصل بنا",
      language: "اللغة",
      rights: "© ٢٠٢٦ هيّا. جميع الحقوق محفوظة.",
    },
  },
};

export type Copy = typeof copy.en;

/* ------------------------------------------------------------------ */
/* CATALOG PAGE + ADMIN COPY (EN / AR)                                 */
/* ------------------------------------------------------------------ */
export const catalogCopy = {
  en: {
    pageLabel: "Product Catalog",
    pageTitle: "Egyptian Produce, Prepared for Global Markets",
    pageSub:
      "Our current export lines. Availability depends on season and buyer specification — contact us to confirm what is shipping now.",
    empty: "No products are published yet.",
    loading: "Loading products…",
    error: "Products could not be loaded. Please try again.",
    viewAll: "View Full Catalog",
    backHome: "Back to Home",
    season: "Season",
    inquire: "Request Information",
    manage: "Manage Catalog",
    admin: {
      title: "Product Catalog",
      sub: "Add, edit and remove the products shown on your website.",
      signInTitle: "Sign in to manage your catalog",
      signInSub: "Only your account can change products.",
      email: "Email",
      password: "Password",
      signIn: "Sign In",
      signUp: "Create Account",
      google: "Continue with Google",
      signOut: "Sign Out",
      noAccess:
        "This account cannot manage the catalog. Sign in with the account that owns the catalog.",
      newProduct: "Add Product",
      editProduct: "Edit Product",
      nameEn: "Name (English)",
      nameAr: "Name (Arabic)",
      descEn: "Description (English)",
      descAr: "Description (Arabic)",
      seasonField: "Season (optional)",
      photo: "Photo",
      uploadPhoto: "Upload photo",
      uploading: "Uploading…",
      order: "Display order",
      published: "Visible on the website",
      featured: "Show on the home page",
      save: "Save Product",
      saving: "Saving…",
      cancel: "Cancel",
      edit: "Edit",
      remove: "Delete",
      confirmRemove: "Delete this product? This cannot be undone.",
      saved: "Saved.",
      nameRequired: "An English name is required.",
      photoRequired: "Please add a photo.",
    },
  },
  ar: {
    pageLabel: "كتالوج المنتجات",
    pageTitle: "محاصيل مصرية مُجهّزة للأسواق العالمية",
    pageSub:
      "خطوط التصدير الحالية لدينا. يعتمد التوافر على الموسم ومواصفات المشتري — تواصل معنا لتأكيد المتاح حاليًا.",
    empty: "لا توجد منتجات منشورة بعد.",
    loading: "جارٍ تحميل المنتجات…",
    error: "تعذّر تحميل المنتجات. حاول مرة أخرى.",
    viewAll: "عرض الكتالوج الكامل",
    backHome: "العودة للرئيسية",
    season: "الموسم",
    inquire: "اطلب معلومات",
    manage: "إدارة الكتالوج",
    admin: {
      title: "كتالوج المنتجات",
      sub: "أضف وحرّر واحذف المنتجات الظاهرة على موقعك.",
      signInTitle: "سجّل الدخول لإدارة الكتالوج",
      signInSub: "حسابك فقط يمكنه تعديل المنتجات.",
      email: "البريد الإلكتروني",
      password: "كلمة المرور",
      signIn: "تسجيل الدخول",
      signUp: "إنشاء حساب",
      google: "الدخول باستخدام Google",
      signOut: "تسجيل الخروج",
      noAccess: "هذا الحساب لا يمكنه إدارة الكتالوج. سجّل الدخول بالحساب المالك للكتالوج.",
      newProduct: "إضافة منتج",
      editProduct: "تحرير المنتج",
      nameEn: "الاسم (إنجليزي)",
      nameAr: "الاسم (عربي)",
      descEn: "الوصف (إنجليزي)",
      descAr: "الوصف (عربي)",
      seasonField: "الموسم (اختياري)",
      photo: "الصورة",
      uploadPhoto: "تحميل صورة",
      uploading: "جارٍ التحميل…",
      order: "ترتيب العرض",
      published: "ظاهر على الموقع",
      featured: "إظهار في الصفحة الرئيسية",
      save: "حفظ المنتج",
      saving: "جارٍ الحفظ…",
      cancel: "إلغاء",
      edit: "تحرير",
      remove: "حذف",
      confirmRemove: "حذف هذا المنتج؟ لا يمكن التراجع.",
      saved: "تم الحفظ.",
      nameRequired: "الاسم بالإنجليزية مطلوب.",
      photoRequired: "يرجى إضافة صورة.",
    },
  },
};
