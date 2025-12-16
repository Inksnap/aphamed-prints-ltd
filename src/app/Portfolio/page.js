import { AiFillBehanceSquare } from "react-icons/ai";
import { FaGoogleDrive } from "react-icons/fa";

export default function PortfolioPage() {
  return (
    <main className="p-10 text-center">
      <div className="font-bold text-2xl">
        {/* See More Buttons */}
        <div className="text-center mt-5">
          {/* <div className="text-center michroma-font text-(--accent-color) mb-4">
            <p>See More</p>
          </div> */}
          <div className="flex justify-center flex-wrap gap-4">
            <button className="bg-(--secondary-color) rounded-sm py-2 px-8 merienda-font mt-2">
              <a
                href="https://www.behance.net/gallery/226929635/APHAMED-PROJECT"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillBehanceSquare className="text-(--accent-color) text-xl" />
              </a>
            </button>
            <button className="bg-(--secondary-color) rounded-sm py-2 px-8 merienda-font mt-2">
              <a
                href="https://drive.google.com/drive/folders/1CoAou0NdC5bKnvCPlQTUU1thQ5VqCX4X"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGoogleDrive className="text-(--accent-color) text-xl" />
              </a>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
