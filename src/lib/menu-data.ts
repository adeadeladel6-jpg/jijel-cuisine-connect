import starterImg from "@/assets/dish-starter.jpg";
import mainImg from "@/assets/dish-main.jpg";
import dessertImg from "@/assets/dish-dessert.jpg";
import drinkImg from "@/assets/dish-drink.jpg";

export type Category = "starters" | "mains" | "desserts" | "drinks";

export type MenuItem = {
  id: string;
  category: Category;
  image: string;
  price: number;
  popular?: boolean;
  ar: { name: string; desc: string };
  fr: { name: string; desc: string };
};

export const menuItems: MenuItem[] = [
  {
    id: "chorba",
    category: "starters",
    image: starterImg,
    price: 250,
    popular: true,
    ar: { name: "شربة فريك", desc: "شربة تقليدية باللحم والفريك والخضر الطازجة." },
    fr: { name: "Chorba Frik", desc: "Soupe traditionnelle à la viande, frik et légumes frais." },
  },
  {
    id: "bourek",
    category: "starters",
    image: starterImg,
    price: 200,
    ar: { name: "بوراك باللحم", desc: "أوراق دّيول مقرمشة محشوة باللحم المفروم والجبن." },
    fr: { name: "Bourek à la viande", desc: "Feuilles croustillantes farcies viande hachée et fromage." },
  },
  {
    id: "salade",
    category: "starters",
    image: starterImg,
    price: 180,
    ar: { name: "سلطة مشوية", desc: "فلفل وطماطم مشوية بزيت الزيتون والثوم." },
    fr: { name: "Salade grillée", desc: "Poivrons et tomates grillés, huile d'olive et ail." },
  },
  {
    id: "mixed-grill",
    category: "mains",
    image: mainImg,
    price: 1200,
    popular: true,
    ar: { name: "مشوي مشكل", desc: "بروشيت لحم ودجاج وكفتة مع بطاطا مقلية وسلطة." },
    fr: { name: "Grillade mixte", desc: "Brochettes viande, poulet et kefta, frites et salade." },
  },
  {
    id: "poulet",
    category: "mains",
    image: mainImg,
    price: 900,
    ar: { name: "دجاج مشوي", desc: "نصف دجاجة متبّلة ومشوية على الفحم مع صلصة المنزل." },
    fr: { name: "Poulet grillé", desc: "Demi-poulet mariné grillé au charbon, sauce maison." },
  },
  {
    id: "poisson",
    category: "mains",
    image: mainImg,
    price: 1400,
    popular: true,
    ar: { name: "سمك طازج من جيجل", desc: "سمك اليوم مشوي مع ليمون وخضر موسمية." },
    fr: { name: "Poisson frais de Jijel", desc: "Poisson du jour grillé, citron et légumes de saison." },
  },
  {
    id: "couscous",
    category: "mains",
    image: mainImg,
    price: 800,
    ar: { name: "كسكس باللحم", desc: "كسكس بيتي بمرق الخضر واللحم الطري." },
    fr: { name: "Couscous à la viande", desc: "Couscous maison, bouillon de légumes et viande tendre." },
  },
  {
    id: "baklawa",
    category: "desserts",
    image: dessertImg,
    price: 150,
    popular: true,
    ar: { name: "بقلاوة بالعسل", desc: "طبقات رقيقة باللوز والعسل الطبيعي." },
    fr: { name: "Baklawa au miel", desc: "Fines couches d'amandes et miel naturel." },
  },
  {
    id: "tiramisu",
    category: "desserts",
    image: dessertImg,
    price: 350,
    ar: { name: "تيراميسو", desc: "كريمة الماسكاربوني مع القهوة والكاكاو." },
    fr: { name: "Tiramisu", desc: "Crème mascarpone, café et cacao." },
  },
  {
    id: "crepe",
    category: "desserts",
    image: dessertImg,
    price: 300,
    ar: { name: "كريب بالشوكولاتة", desc: "كريب طري بالشوكولاتة والفواكه الجافة." },
    fr: { name: "Crêpe au chocolat", desc: "Crêpe moelleuse chocolat et fruits secs." },
  },
  {
    id: "the",
    category: "drinks",
    image: drinkImg,
    price: 100,
    ar: { name: "أتاي بالنعناع", desc: "شاي أخضر بالنعناع الطازج والصنوبر." },
    fr: { name: "Thé à la menthe", desc: "Thé vert, menthe fraîche et pignons." },
  },
  {
    id: "cafe",
    category: "drinks",
    image: drinkImg,
    price: 120,
    popular: true,
    ar: { name: "قهوة إسبريسو", desc: "قهوة محمّصة طازجة بنكهة قوية." },
    fr: { name: "Café expresso", desc: "Café fraîchement torréfié, arôme intense." },
  },
  {
    id: "jus",
    category: "drinks",
    image: drinkImg,
    price: 250,
    ar: { name: "عصير طبيعي", desc: "برتقال أو فراولة أو ليمون طازج." },
    fr: { name: "Jus naturel", desc: "Orange, fraise ou citron pressé." },
  },
];
