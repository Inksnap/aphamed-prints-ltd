import MapSection from "../components/map.jsx";
import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { PiTiktokLogoThin } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import ContactHeader from "../components/ContactHeader.jsx";
import ContactDetails from "../components/ContactDetails.jsx";
import MessageSection from "../components/MessageSection.jsx";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with Aphamed Prints LTD. Contact us for quotes, inquiries, or questions about our printing and branding services. We're here to help bring your ideas to life.",
  keywords: ["contact Aphamed Prints", "printing quotes", "customer service", "printing inquiries", "contact printing company"],
  openGraph: {
    title: "Contact Us | Aphamed Prints LTD",
    description: "Get in touch for quotes, inquiries, or questions about our printing services",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main>

      <ContactHeader />

      <ContactDetails />

      <MessageSection />

    </main>
  );
}
