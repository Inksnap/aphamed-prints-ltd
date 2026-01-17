import { Montserrat, Merienda, Michroma } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar.jsx";
import Preloader from "./components/Preloader.jsx";
import Footertwo from "./components/footertwo.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import ChatWidget from "./components/ChatWidget.jsx";

export const metadata = {
  title: {
    default: "Aphamed Prints LTD - Quality Printing & Branding Services in Nigeria",
    template: "%s | Aphamed Prints LTD"
  },
  description: "Leading printing and branding company in Nigeria offering flyers, business cards, banners, signage, custom merchandise, and professional design services. Fast delivery, premium quality.",
  keywords: ["printing services Nigeria", "branding services", "business cards", "flyers", "banners", "signage", "custom printing", "design services", "Aphamed Prints", "print shop Nigeria", "commercial printing", "large format printing"],
  authors: [{ name: "Aphamed Prints LTD" }],
  creator: "Aphamed Prints LTD",
  publisher: "Aphamed Prints LTD",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://aphamed.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Aphamed Prints LTD - Quality Printing & Branding Services",
    description: "Professional printing and branding services in Nigeria. Business cards, flyers, banners, signage, and more. Premium quality, fast delivery.",
    url: 'https://aphamed.com',
    siteName: 'Aphamed Prints LTD',
    images: [
      {
        url: 'https://aphamed.com/image/logo.svg',
        width: 800,
        height: 600,
        alt: 'Aphamed Prints LTD Logo',
      },
    ],
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aphamed Prints LTD - Quality Printing Services',
    description: 'Professional printing and branding services in Nigeria',
    images: ['https://aphamed.com/image/logo.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/image/favicon.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/image/favicon.png", sizes: "180x180", type: "image/png" },
      { url: "/favicon.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
    shortcut: "/image/favicon.png",
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700"],
  variable: "--font-montserrat",
});

const merienda = Merienda({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800", "900"],
  variable: "--font-merienda",
});

const michroma = Michroma({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-michroma",
}); 

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="inline"
      className={`${montserrat.variable} ${merienda.variable} ${michroma.variable}`}
    >
      <head>
        <title>Aphamed Prints LTD</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="overflow-x-hidden">
        <div className="overflow-hidden">
         <Preloader />
        <Navbar />
        <main>{children}</main>
        <Footertwo />
        <WhatsAppButton />
        <ChatWidget />
        </div>
        {/* Tawk.to live chat script - loads on all pages */}
        <script
          dangerouslySetInnerHTML={{
            __html: `var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();(function(){var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];s1.async=true;s1.src='https://embed.tawk.to/696b2cf40f26dd197d65d180/1jf5af7nb';s1.charset='UTF-8';s1.setAttribute('crossorigin','*');s0.parentNode.insertBefore(s1,s0);})();`,
          }}
        />
      </body>
    </html>
  );
}
