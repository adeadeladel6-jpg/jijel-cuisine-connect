import starterImg from "@/assets/dish-starter.jpg";
import mainImg from "@/assets/dish-main.jpg";
import dessertImg from "@/assets/dish-dessert.jpg";
import drinkImg from "@/assets/dish-drink.jpg";
import seafoodImg from "@/assets/dish-seafood.jpg";
import grillImg from "@/assets/dish-grill.jpg";

export type Category = "seafood" | "grills" | "mains" | "starters" | "desserts" | "drinks";

export type MenuItem = {
  id: string;
  category: Category;
  image: string;
  /** null = price by weight (حسب الميزان) */
  price: number | null;
  popular?: boolean;
  ar: { name: string; desc?: string };
  fr: { name: string; desc?: string };
};

export const categoryImage: Record<Category, string> = {
  seafood: seafoodImg,
  grills: grillImg,
  mains: mainImg,
  starters: starterImg,
  desserts: dessertImg,
  drinks: drinkImg,
};

export const menuItems: MenuItem[] = [
  // ── المأكولات البحرية (حسب الميزان)
  { id: "dorade", category: "seafood", image: seafoodImg, price: null, popular: true, ar: { name: "دوراد" }, fr: { name: "Dorade" } },
  { id: "merlan", category: "seafood", image: seafoodImg, price: null, ar: { name: "ميرلون" }, fr: { name: "Merlan" } },
  { id: "rouget", category: "seafood", image: seafoodImg, price: null, ar: { name: "روجي" }, fr: { name: "Rouget" } },
  { id: "crevettes", category: "seafood", image: seafoodImg, price: null, popular: true, ar: { name: "كروفات" }, fr: { name: "Crevettes" } },
  { id: "espadon", category: "seafood", image: seafoodImg, price: null, ar: { name: "اسبادون" }, fr: { name: "Espadon" } },
  { id: "thon", category: "seafood", image: seafoodImg, price: null, ar: { name: "طون" }, fr: { name: "Thon" } },
  { id: "limon-fish", category: "seafood", image: seafoodImg, price: null, ar: { name: "ليمون" }, fr: { name: "Liche (Limon)" } },
  { id: "sardine", category: "seafood", image: seafoodImg, price: null, ar: { name: "سردين" }, fr: { name: "Sardine" } },

  // ── المشاوي واللحوم
  { id: "lham", category: "grills", image: grillImg, price: 80, popular: true, ar: { name: "لحم" }, fr: { name: "Viande (brochette)" } },
  { id: "kebda", category: "grills", image: grillImg, price: 120, ar: { name: "كبدة" }, fr: { name: "Foie" } },
  { id: "kebab", category: "grills", image: grillImg, price: 80, ar: { name: "كباب" }, fr: { name: "Kebab" } },
  { id: "malfouf", category: "grills", image: grillImg, price: 100, ar: { name: "ملفوف" }, fr: { name: "Malfouf" } },
  { id: "merguez", category: "grills", image: grillImg, price: 80, ar: { name: "مرقاز" }, fr: { name: "Merguez" } },
  { id: "escalope", category: "grills", image: grillImg, price: 50, ar: { name: "إسكالوب" }, fr: { name: "Escalope" } },
  { id: "filet", category: "grills", image: grillImg, price: 1200, ar: { name: "فيلي" }, fr: { name: "Filet" } },
  { id: "entrecote", category: "grills", image: grillImg, price: 1200, ar: { name: "أنثرقوط" }, fr: { name: "Entrecôte" } },
  { id: "viande-hachee", category: "grills", image: grillImg, price: 400, ar: { name: "فيونداشي" }, fr: { name: "Viande hachée" } },
  { id: "agneau", category: "grills", image: grillImg, price: null, ar: { name: "أنيو" }, fr: { name: "Agneau" } },
  { id: "poulet-roti", category: "grills", image: grillImg, price: 1400, popular: true, ar: { name: "دجاج محمر", desc: "نصف دجاج: 700 دج" }, fr: { name: "Poulet rôti", desc: "Demi-poulet : 700 DZD" } },
  { id: "cuisse-vapeur", category: "grills", image: grillImg, price: 400, ar: { name: "كويس مفور" }, fr: { name: "Cuisse à la vapeur" } },
  { id: "roti-veau", category: "grills", image: grillImg, price: 1800, ar: { name: "روطي دوفو" }, fr: { name: "Rôti de veau" } },

  // ── الأطباق الرئيسية
  { id: "soupe-legumes", category: "mains", image: mainImg, price: 250, ar: { name: "حساء الخضر" }, fr: { name: "Soupe de légumes" } },
  { id: "soupe-poisson", category: "mains", image: mainImg, price: 350, ar: { name: "حساء السمك" }, fr: { name: "Soupe de poisson" } },
  { id: "chorba-frik", category: "mains", image: mainImg, price: 250, popular: true, ar: { name: "شربة فريك" }, fr: { name: "Chorba Frik" } },
  { id: "chorba-zitoun", category: "mains", image: mainImg, price: 250, ar: { name: "شربة زيتون" }, fr: { name: "Chorba aux olives" } },
  { id: "gratin-blette", category: "mains", image: mainImg, price: 400, ar: { name: "قراطان سلق" }, fr: { name: "Gratin de blettes" } },
  { id: "gratin-chouflour", category: "mains", image: mainImg, price: 400, ar: { name: "قراطان شفلور" }, fr: { name: "Gratin de chou-fleur" } },
  { id: "gratin-aubergine", category: "mains", image: mainImg, price: 400, ar: { name: "قراطان بادنجان" }, fr: { name: "Gratin d'aubergines" } },
  { id: "escalope-ikram", category: "mains", image: mainImg, price: 1000, ar: { name: "اسكلوط الاكرام" }, fr: { name: "Escalope El Ikram" } },
  { id: "seiche-sauce", category: "mains", image: seafoodImg, price: 2000, ar: { name: "سيبيا انصوص" }, fr: { name: "Seiche en sauce" } },
  { id: "mechoui-mouton", category: "mains", image: grillImg, price: 2000, popular: true, ar: { name: "مشوي خروف" }, fr: { name: "Méchoui d'agneau" } },
  { id: "mechoui-chevre", category: "mains", image: grillImg, price: 2000, ar: { name: "مشوي ماعز" }, fr: { name: "Méchoui de chèvre" } },
  { id: "tajine-chiwa", category: "mains", image: mainImg, price: 1200, ar: { name: "طاجين شواء" }, fr: { name: "Tajine grillé" } },
  { id: "poulet-farci", category: "mains", image: mainImg, price: 1200, ar: { name: "بولي فارصي" }, fr: { name: "Poulet farci" } },
  { id: "tajine-fromage", category: "mains", image: mainImg, price: 1200, ar: { name: "طاجين فرماج" }, fr: { name: "Tajine au fromage" } },
  { id: "mtawem", category: "mains", image: mainImg, price: 600, ar: { name: "مثوم" }, fr: { name: "Mtewem" } },
  { id: "chtiha-lham", category: "mains", image: mainImg, price: 900, ar: { name: "شطيحة لحم" }, fr: { name: "Chtiha viande" } },
  { id: "mfawar-mouton", category: "mains", image: mainImg, price: 2200, ar: { name: "مفور خروف" }, fr: { name: "Agneau vapeur" } },
  { id: "mfawar-chevre", category: "mains", image: mainImg, price: 2000, ar: { name: "مفور ماعز" }, fr: { name: "Chèvre vapeur" } },

  // ── المقبلات والمعجنات
  { id: "salade-variee", category: "starters", image: starterImg, price: 250, ar: { name: "سلطة متنوعة" }, fr: { name: "Salade variée" } },
  { id: "salade-macedoine", category: "starters", image: starterImg, price: 350, ar: { name: "سلطة ماسيدوان" }, fr: { name: "Salade macédoine" } },
  { id: "salade-thon", category: "starters", image: starterImg, price: 400, ar: { name: "سلطة تونة" }, fr: { name: "Salade au thon" } },
  { id: "bourek-poulet", category: "starters", image: starterImg, price: 250, popular: true, ar: { name: "بوراك دجاج" }, fr: { name: "Bourek au poulet" } },
  { id: "bourek-crevettes", category: "starters", image: starterImg, price: 500, ar: { name: "بوراك كرفات" }, fr: { name: "Bourek aux crevettes" } },
  { id: "matlou", category: "starters", image: starterImg, price: 100, ar: { name: "مطبوع / كسرة" }, fr: { name: "Matlou / Kesra" } },
  { id: "frites", category: "starters", image: starterImg, price: 200, ar: { name: "فريت" }, fr: { name: "Frites" } },
  { id: "riz", category: "starters", image: starterImg, price: 250, ar: { name: "روز" }, fr: { name: "Riz" } },
  { id: "puree", category: "starters", image: starterImg, price: 250, ar: { name: "بيري" }, fr: { name: "Purée" } },
  { id: "spaghetti", category: "starters", image: starterImg, price: 300, ar: { name: "سباقيتي" }, fr: { name: "Spaghetti" } },
  { id: "macaroni", category: "starters", image: starterImg, price: 300, ar: { name: "مقارون" }, fr: { name: "Macaroni" } },
  { id: "pois-chiches", category: "starters", image: starterImg, price: 200, ar: { name: "حميص" }, fr: { name: "Pois chiches" } },

  // ── التحلية
  { id: "flan", category: "desserts", image: dessertImg, price: 150, ar: { name: "فلو" }, fr: { name: "Flan" } },
  { id: "tiramisu", category: "desserts", image: dessertImg, price: 200, popular: true, ar: { name: "تيراميسو" }, fr: { name: "Tiramisu" } },
  { id: "pomme", category: "desserts", image: dessertImg, price: 150, ar: { name: "تفاح" }, fr: { name: "Pomme" } },
  { id: "banane", category: "desserts", image: dessertImg, price: 150, ar: { name: "موز" }, fr: { name: "Banane" } },
  { id: "pasteque", category: "desserts", image: dessertImg, price: 200, ar: { name: "دلاع" }, fr: { name: "Pastèque" } },
  { id: "salade-fruits", category: "desserts", image: dessertImg, price: 300, ar: { name: "سلطة الفواكه" }, fr: { name: "Salade de fruits" } },
  { id: "raisin", category: "desserts", image: dessertImg, price: null, ar: { name: "عينب" }, fr: { name: "Raisin" } },

  // ── المشروبات
  { id: "soda-grand", category: "drinks", image: drinkImg, price: 150, popular: true, ar: { name: "حمود / كوكاكولا / بيبسي (قارورة كبيرة)", desc: "القارورة الصغيرة: 80 دج" }, fr: { name: "Hamoud / Coca / Pepsi (grande bouteille)", desc: "Petite bouteille : 80 DZD" } },
  { id: "canette", category: "drinks", image: drinkImg, price: 100, ar: { name: "كوانيت (كوكاكولا / بيبسي / حمود)" }, fr: { name: "Canette (Coca / Pepsi / Hamoud)" } },
  { id: "eau", category: "drinks", image: drinkImg, price: 50, ar: { name: "ماء كبير" }, fr: { name: "Grande eau" } },
];
