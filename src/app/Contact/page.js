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

export default function AboutPage() {
  return (
    <main>

      <ContactHeader />

      <ContactDetails />

      <MessageSection />

    </main>
  );
}
