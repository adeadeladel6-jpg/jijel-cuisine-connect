import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "ar" | "fr";

export const PHONE = "+213655700950";
export const PHONE_DISPLAY = "+213 655 70 09 50";

type Dict = Record<string, string>;

const ar: Dict = {
  brandName: "مطعم دار الضيافة",
  brandTagline: "جيجل",
  navHome: "الرئيسية",
  navAbout: "من نحن",
  navMenu: "القائمة",
  navReserve: "حجز طاولة",
  navContact: "الموقع والاتصال",
  callNow: "اتصل الآن",

  heroKicker: "حي العربي بن مهيدي، جيجل",
  heroTitle: "نكهة أصيلة في أجواء عائلية دافئة",
  heroSubtitle:
    "أطباق محضّرة بحب، غداء وعشاء وحلويات شهية، في مكان مريح يجمع العائلة والأصدقاء في قلب جيجل.",
  heroCtaMenu: "تصفّح القائمة",
  heroCtaReserve: "احجز طاولة",
  heroCtaCall: "اطلب / اتصل الآن",
  heroOpenToday: "مفتوح اليوم حتى منتصف الليل",

  aboutKicker: "من نحن",
  aboutTitle: "قصتنا: مائدة تجمع العائلة",
  aboutP1:
    "منذ افتتاحنا في حي العربي بن مهيدي بجيجل، ونحن نؤمن أن الطعام الجيد يبدأ من المكوّنات الطازجة وينتهي بابتسامة الضيف. مطبخنا يقدّم أطباقًا محلية وعالمية بلمسة بيتية.",
  aboutP2:
    "أجواؤنا هادئة ودافئة، مناسبة للعائلات والمجموعات، مع خدمة سريعة وطاولات مريحة للغداء والعشاء والحلويات. نستقبلكم كل يوم بترحاب حقيقي.",
  featDinein: "تناول في المطعم",
  featTakeout: "خدمة الطلبات الخارجية",
  featReserve: "حجز الطاولات",
  featFamily: "مناسب للعائلات والمجموعات",
  featAccess: "مراحيض مهيّأة لذوي الاحتياجات",
  featCash: "الدفع نقدًا فقط",

  menuKicker: "القائمة",
  menuTitle: "أطباقنا المميزة",
  menuNote: "الأسعار بالدينار الجزائري (دج) وقد تتغيّر حسب الموسم.",
  catAll: "الكل",
  catStarters: "المقبلات",
  catMains: "الأطباق الرئيسية",
  catDesserts: "الحلويات",
  catDrinks: "المشروبات",
  tagPopular: "الأكثر طلبًا",

  resKicker: "حجز",
  resTitle: "احجز طاولتك",
  resSubtitle: "املأ النموذج وسنستقبلك في الموعد المحدد. التأكيد فوري.",
  fName: "الاسم الكامل",
  fPhone: "رقم الهاتف",
  fDate: "التاريخ",
  fTime: "الوقت",
  fGuests: "عدد الأشخاص",
  fNotes: "طلبات خاصة",
  fNotesPh: "طاولة قرب النافذة، كرسي أطفال...",
  fSubmit: "تأكيد الحجز",
  resCashNotice: "تنبيه: الدفع نقدًا فقط عند الوصول.",
  resOk: "تم استلام حجزك بنجاح!",
  resOkDesc: "سنتصل بك لتأكيد الموعد. الدفع نقدًا فقط عند الوصول.",
  resErr: "يرجى ملء جميع الحقول المطلوبة بشكل صحيح.",
  resFail: "تعذّر إرسال الحجز، يرجى المحاولة مرة أخرى.",
  guests: "أشخاص",

  contactKicker: "زورونا",
  contactTitle: "الموقع وساعات العمل",
  address: "حي العربي بن مهيدي، جيجل، الجزائر",
  hours: "ساعات العمل",
  hoursSatThu: "السبت – الخميس",
  hoursFri: "الجمعة",
  hoursSatThuVal: "10:59 صباحًا – 12:00 منتصف الليل",
  hoursFriVal: "10:59 صباحًا – 01:00 صباحًا",
  friBadge: "ساعات ممتدة",
  phone: "الهاتف",
  quickLinks: "روابط سريعة",
  rights: "جميع الحقوق محفوظة",
  langSwitch: "FR",
};

const fr: Dict = {
  brandName: "Restaurant Dar Dhiafa",
  brandTagline: "Jijel",
  navHome: "Accueil",
  navAbout: "À propos",
  navMenu: "Menu",
  navReserve: "Réserver",
  navContact: "Contact",
  callNow: "Appeler",

  heroKicker: "Cité Larbi Ben M'hidi, Jijel",
  heroTitle: "Un goût authentique, une ambiance familiale",
  heroSubtitle:
    "Des plats préparés avec passion — déjeuners, dîners et desserts — dans un cadre chaleureux au cœur de Jijel.",
  heroCtaMenu: "Voir le menu",
  heroCtaReserve: "Réserver une table",
  heroCtaCall: "Commander / Appeler",
  heroOpenToday: "Ouvert aujourd'hui jusqu'à minuit",

  aboutKicker: "À propos",
  aboutTitle: "Notre histoire : une table qui rassemble",
  aboutP1:
    "Depuis notre ouverture à la cité Larbi Ben M'hidi à Jijel, nous croyons qu'une bonne cuisine commence par des produits frais et se termine par le sourire du client.",
  aboutP2:
    "Une atmosphère cosy et chaleureuse, idéale pour les familles et les groupes, avec un service rapide pour le déjeuner, le dîner et les desserts.",
  featDinein: "Sur place",
  featTakeout: "À emporter",
  featReserve: "Réservation de table",
  featFamily: "Familles & groupes",
  featAccess: "Toilettes accessibles PMR",
  featCash: "Paiement en espèces uniquement",

  menuKicker: "Menu",
  menuTitle: "Nos spécialités",
  menuNote: "Prix en Dinar Algérien (DZD), susceptibles de changer.",
  catAll: "Tout",
  catStarters: "Entrées",
  catMains: "Plats principaux",
  catDesserts: "Desserts",
  catDrinks: "Boissons",
  tagPopular: "Populaire",

  resKicker: "Réservation",
  resTitle: "Réservez votre table",
  resSubtitle: "Remplissez le formulaire, confirmation immédiate.",
  fName: "Nom complet",
  fPhone: "Téléphone",
  fDate: "Date",
  fTime: "Heure",
  fGuests: "Nombre de personnes",
  fNotes: "Demandes spéciales",
  fNotesPh: "Table près de la fenêtre, chaise bébé...",
  fSubmit: "Confirmer la réservation",
  resCashNotice: "Rappel : paiement en espèces uniquement à l'arrivée.",
  resOk: "Réservation bien reçue !",
  resOkDesc: "Nous vous appellerons pour confirmer. Paiement en espèces à l'arrivée.",
  resErr: "Merci de remplir correctement tous les champs requis.",
  resFail: "Échec de l'envoi de la réservation, veuillez réessayer.",
  guests: "personnes",

  contactKicker: "Nous trouver",
  contactTitle: "Adresse & horaires",
  address: "Cité Larbi Ben M'hidi, Jijel, Algérie",
  hours: "Horaires d'ouverture",
  hoursSatThu: "Samedi – Jeudi",
  hoursFri: "Vendredi",
  hoursSatThuVal: "10:59 – 00:00",
  hoursFriVal: "10:59 – 01:00",
  friBadge: "Horaires étendus",
  phone: "Téléphone",
  quickLinks: "Liens rapides",
  rights: "Tous droits réservés",
  langSwitch: "ع",
};

const dicts: Record<Lang, Dict> = { ar, fr };

type Ctx = { lang: Lang; dir: "rtl" | "ltr"; t: (k: string) => string; toggle: () => void };

const LangContext = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ar");
  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  const value = useMemo<Ctx>(
    () => ({
      lang,
      dir,
      t: (k) => dicts[lang][k] ?? k,
      toggle: () => setLang((l) => (l === "ar" ? "fr" : "ar")),
    }),
    [lang, dir],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
