export interface Service {
  id: string
  title: string
  description: string
  price: string
  features: string[]
  badge?: string
  cta: string
  link: string
  popular?: boolean
}

export interface Testimonial {
  id: string
  name: string
  role: string
  photo: string
  quote: string
  result: string
}

export interface FAQItem {
  id: string
  question: string
  answer: string
}

export interface MethodStep {
  id: string
  icon: string
  title: string
  description: string
}

export interface Stat {
  value: string
  label: string
}

export const heroStats: Stat[] = [
  { value: "500+", label: "Apprenants formés" },
  { value: "98%", label: "Taux de satisfaction" },
  { value: "4+", label: "Années d'expérience" },
]

export const methodSteps: MethodStep[] = [
  {
    id: "clarte",
    icon: "target",
    title: "Clarté",
    description:
      "On définit ton positionnement unique, ton audience cible et ton message qui convertit. Fini le contenu au hasard.",
  },
  {
    id: "contenu",
    icon: "pen",
    title: "Contenu",
    description:
      "Tu apprends à créer du contenu stratégique qui attire, engage et positionne ton expertise naturellement.",
  },
  {
    id: "communaute",
    icon: "users",
    title: "Communauté",
    description:
      "Tu bâtis une audience fidèle qui interagit, partage et recommande ton travail spontanément.",
  },
  {
    id: "conversion",
    icon: "trending",
    title: "Conversion",
    description:
      "Tu transformes ton audience en clients récurrents grâce à des tunnels de vente et des offres irrésistibles.",
  },
]

export const services: Service[] = [
  {
    id: "formation-facebook-dominator",
    title: "Facebook Dominator",
    description:
      "La formation complète pour dominer Facebook : algorithme, contenu viral, publicité et monétisation. De zéro à expert en 30 jours.",
    price: "25 000 FCFA",
    features: [
      "12 modules vidéo complets",
      "Templates de posts prêts à l'emploi",
      "Accès au groupe privé d'entraide",
      "Mises à jour à vie",
      "Certificat de fin de formation",
    ],
    cta: "Accéder à la formation",
    link: "https://willenock-m-essou.mymaketou.store/products/facebook-dominator",
    popular: true,
    badge: "Le plus populaire",
  },
  {
    id: "coaching-1-1",
    title: "Coaching 1-on-1",
    description:
      "Un accompagnement personnalisé pour accélérer ta croissance. On travaille ensemble sur ta stratégie de contenu et ton business.",
    price: "Sur devis",
    features: [
      "4 sessions de 60 minutes",
      "Audit complet de ta présence en ligne",
      "Stratégie de contenu sur mesure",
      "Support WhatsApp entre les sessions",
      "Plan d'action personnalisé",
    ],
    cta: "Réserver un appel",
    link: "https://wa.me/2290157729738",
  },
  {
    id: "programme-groupe",
    title: "Programme Communauté",
    description:
      "Rejoins un groupe de freelances motivés et avance ensemble vers tes objectifs de croissance en ligne.",
    price: "15 000 FCFA/mois",
    features: [
      "2 masterclass par mois",
      "Accès au groupe privé",
      "Feedback sur ton contenu",
      "Networking avec d'autres freelances",
      "Ressources exclusives chaque semaine",
    ],
    cta: "Rejoindre le programme",
    link: "https://wa.me/2290157729738",
  },
]

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Aïcha D.",
    role: "Graphiste freelance — Cotonou",
    photo: "AD",
    quote:
      "Avant le coaching de Willenock, je postais sans stratégie. En 60 jours, j'ai doublé mon nombre de clients grâce à un contenu qui parle vraiment à ma cible.",
    result: "+3000 abonnés en 60 jours",
  },
  {
    id: "t2",
    name: "Koffi M.",
    role: "Consultant marketing — Lomé",
    photo: "KM",
    quote:
      "La méthode W a complètement changé ma vision du contenu. Je suis passé de 200 à 5000 abonnés qualifiés en 3 mois. Mon chiffre d'affaires a suivi.",
    result: "x3 CA en 90 jours",
  },
  {
    id: "t3",
    name: "Fatou B.",
    role: "Copywriter — Abidjan",
    photo: "FB",
    quote:
      "Willenock m'a appris à transformer mes compétences en contenu qui vend. Aujourd'hui, 70% de mes clients viennent de mes publications Facebook.",
    result: "70% de clients via le contenu",
  },
  {
    id: "t4",
    name: "Ibrahim S.",
    role: "Community manager — Ouagadougou",
    photo: "IS",
    quote:
      "Le programme communauté m'a donné la discipline et la stratégie qui me manquaient. Je gère maintenant 8 comptes clients avec des résultats concrets.",
    result: "8 clients récurrents",
  },
  {
    id: "t5",
    name: "Prisca L.",
    role: "Coach bien-être — Porto-Novo",
    photo: "PL",
    quote:
      "Je ne savais pas du quoi poster ni comment. Grâce à la formation Facebook Dominator, j'ai une ligne éditoriale claire et des résultats chaque semaine.",
    result: "+1500 abonnés en 45 jours",
  },
  {
    id: "t6",
    name: "David A.",
    role: "Photographe — Dakar",
    photo: "DA",
    quote:
      "Willenock comprend le marché africain comme personne. Ses conseils sont pratiques, applicables immédiatement et ils marchent. Je recommande à 100%.",
    result: "x5 engagement rate",
  },
]

export const faqData: FAQItem[] = [
  {
    id: "faq1",
    question: "Pour qui sont tes formations et coaching ?",
    answer:
      "Mes programmes s'adressent aux freelances, auto-entrepreneurs et créateurs de contenu en Afrique francophone qui veulent bâtir une audience engagée et rentable. Que tu sois graphiste, consultant, coach ou community manager, tu trouveras une solution adaptée.",
  },
  {
    id: "faq2",
    question: "Combien de temps faut-il pour voir des résultats ?",
    answer:
      "Les premiers résultats sont visibles dès 2 à 4 semaines si tu appliques la méthode avec régularité. Pour des résultats significatifs (croissance d'audience, clients récurrents), compte 60 à 90 jours d'application cohérente.",
  },
  {
    id: "faq3",
    question: "Est-ce que je dois déjà avoir une présence en ligne ?",
    answer:
      "Non, pas du tout. Que tu partes de zéro ou que tu aies déjà une audience, la méthode s'adapte à ton niveau. On commence là où tu es et on avance ensemble.",
  },
  {
    id: "faq4",
    question: "Comment se passe le coaching 1-on-1 ?",
    answer:
      "Le coaching se fait en visio (WhatsApp, Google Meet ou Zoom). On commence par un audit de ta présence en ligne, puis on établit un plan d'action personnalisé. Tu as accès à mon support WhatsApp entre les sessions pour toutes tes questions.",
  },
  {
    id: "faq5",
    question: "Quels moyens de paiement acceptez-vous ?",
    answer:
      "J'accepte les paiements par Mobile Money (MTN, Moov, Wave), virement bancaire et PayPal. Des facilités de paiement sont disponibles pour les programmes longue durée.",
  },
  {
    id: "faq6",
    question: "Y a-t-il une garantie de résultats ?",
    answer:
      "Je ne peux pas garantir un chiffre précis car les résultats dépendent de ton implication. En revanche, je garantis un accompagnement de qualité, une méthode éprouvée et un support réactif. Si après 30 jours tu n'es pas satisfait, on trouve une solution ensemble.",
  },
]

export const navLinks = [
  { label: "À propos", href: "#about" },
  { label: "Méthode", href: "#method" },
  { label: "Services", href: "#services" },
  { label: "Témoignages", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
]
