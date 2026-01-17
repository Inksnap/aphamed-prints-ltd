import { AiFillBehanceSquare } from "react-icons/ai";
import { FaGoogleDrive } from "react-icons/fa";
import Portfolio from "../components/portfolio.jsx";

export const metadata = {
  title: "Portfolio",
  description: "Explore our portfolio of creative printing and design work. View our Behance gallery and Google Drive collection showcasing successful projects and satisfied clients.",
  keywords: ["portfolio", "design work", "printing examples", "creative projects", "case studies", "client work"],
  openGraph: {
    title: "Portfolio | Aphamed Prints LTD",
    description: "Explore our portfolio of creative printing and design projects",
    type: "website",
  },
};

export default function PortfolioPage() {
  return <Portfolio />;
}
