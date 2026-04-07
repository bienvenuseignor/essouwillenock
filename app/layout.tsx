import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/lib/theme"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  preload: true,
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "Willenock Essou | Coach Création de Contenu pour Freelances",
  description:
    "Apprends à créer du contenu stratégique et à bâtir une audience engagée, fidèle et rentable. Formations et coaching pour freelances et auto-entrepreneurs.",
  metadataBase: new URL("https://willenockessou.com"),
  openGraph: {
    title: "Willenock Essou | Coach Création de Contenu pour Freelances",
    description:
      "Apprends à créer du contenu stratégique et à bâtir une audience engagée, fidèle et rentable.",
    url: "https://willenockessou.com",
    siteName: "Willenock Essou",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/willenock-hero.webp",
        width: 1200,
        height: 630,
        alt: "Willenock Essou - Coach Création de Contenu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Willenock Essou | Coach Création de Contenu pour Freelances",
    description:
      "Apprends à créer du contenu stratégique et à bâtir une audience engagée, fidèle et rentable.",
    images: ["/images/willenock-hero.webp"],
  },
  alternates: {
    canonical: "https://willenockessou.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/icone-willenock.png",
    apple: "/images/icone-willenock.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://willenockessou.com/#person",
        name: "Willenock Essou",
        url: "https://willenockessou.com",
        jobTitle: "Coach Création de Contenu",
        description:
          "Coach et formateur spécialisé dans la création de contenu et le growth de communauté en ligne pour freelances et auto-entrepreneurs.",
        sameAs: [
          "https://web.facebook.com/profile.php?id=61562996469656",
          "https://wa.me/2290157729738",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://willenockessou.com/#website",
        url: "https://willenockessou.com",
        name: "Willenock Essou",
        publisher: { "@id": "https://willenockessou.com/#person" },
      },
      {
        "@type": "FAQPage",
        "@id": "https://willenockessou.com/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Pour qui sont tes formations et coaching ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Mes programmes s'adressent aux freelances, auto-entrepreneurs et créateurs de contenu en Afrique francophone qui veulent bâtir une audience engagée et rentable.",
            },
          },
          {
            "@type": "Question",
            name: "Combien de temps faut-il pour voir des résultats ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Les premiers résultats sont visibles dès 2 à 4 semaines. Pour des résultats significatifs, compte 60 à 90 jours d'application cohérente.",
            },
          },
          {
            "@type": "Question",
            name: "Est-ce que je dois déjà avoir une présence en ligne ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Non, pas du tout. Que tu partes de zéro ou que tu aies déjà une audience, la méthode s'adapte à ton niveau.",
            },
          },
        ],
      },
    ],
  }

  return (
    <html lang="fr" className={`${plusJakartaSans.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://wa.me" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
        >
          Aller au contenu principal
        </a>
        <ThemeProvider>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
