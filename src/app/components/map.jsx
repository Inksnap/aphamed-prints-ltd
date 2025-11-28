export default function MapSection() {
  return (
    <div className="mt-12 space-y-6">
      <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps?q=42+Market+Street+Somolu+Lagos&z=16&output=embed"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="text-center">
        <h3 className="text-xl font-bold text-(--primary-color)">
          Visit Us At Our Location
        </h3>
        <p className="text-md text-gray-700 mt-1">
          42 Market Street, Somolu, Lagos, Nigeria
        </p>

        <a
          href="https://www.google.com/maps/dir/?api=1&destination=42+Market+Street+Somolu+Lagos"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-6 py-3 bg-(--primary-color) text-white rounded-lg shadow-md hover:bg-(--primary-hover)"
        >
          Get Directions
        </a>
      </div>
    </div>
  );
}
