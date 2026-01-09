import Numbers from "../components/numbers.jsx";
import AboutHeader from "../components/AboutHeader.jsx";
import AboutMain from "../components/AboutMain.jsx";
import MeetCEO from "../components/MeetCEO.jsx";

export const metadata = {
  title: "About Us",
  description: "Learn about Aphamed Prints LTD - Nigeria's trusted printing and branding partner. Discover our story, mission, values, and commitment to delivering exceptional quality printing services.",
  keywords: ["about Aphamed Prints", "printing company Nigeria", "our story", "company mission", "printing services"],
  openGraph: {
    title: "About Us | Aphamed Prints LTD",
    description: "Nigeria's trusted printing and branding partner delivering exceptional quality",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main>
      <AboutHeader />

      <AboutMain />

      <Numbers />

      <MeetCEO />

      <div className="bg-[#D9D9D9] py-10 px-6 lg:px-12">
        <div className="container mx-auto text-center">
          <h1 className="font-bold text-xl md:text-2xl lg:text-3xl text-[#1B1B1B] leading-tight">
            APHAMED PRINTS
          </h1>

          <p className="italic text-sm md:text-base lg:text-lg font-medium text-[#1B1B1B] mt-2 leading-relaxed">
            Quality is our Job, and Your Satisfaction is our Priority.
          </p>
        </div>
      </div>
    </main>
  );
}
