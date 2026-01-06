"use client";

import { useEffect, useState } from "react";
import { FaImage, FaTrash, FaCopy, FaCheck } from "react-icons/fa";

export default function AdminImages() {
  const [images, setImages] = useState([]);
  const [copiedUrl, setCopiedUrl] = useState("");

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      // Get all products and extract image URLs
      const response = await fetch("/api/products");
      const products = await response.json();
      
      const allImages = [];
      products.forEach(product => {
        if (product.image) {
          allImages.push({ url: product.image, name: product.name });
        }
        if (product.gallery) {
          product.gallery.forEach(img => {
            allImages.push({ url: img, name: product.name });
          });
        }
      });
      
      setImages(allImages);
    } catch (error) {
      console.error("Failed to fetch images:", error);
    }
  };

  const copyToClipboard = (url) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(""), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-blue-800">
          <strong>Note:</strong> Images are automatically added when you upload them in the Products section. 
          You can copy image URLs from here to use elsewhere.
        </p>
      </div>

      {images.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm p-12 text-center">
          <FaImage className="text-6xl text-gray-300 mx-auto mb-4" />
          <p className="text-xl text-gray-600">No images uploaded yet</p>
          <p className="text-gray-500 mt-2">Upload images through the Products section</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden border group"
            >
              <div className="relative h-40 bg-gray-100">
                <img
                  src={image.url}
                  alt={image.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
                  <button
                    onClick={() => copyToClipboard(image.url)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-gray-800 px-3 py-2 rounded-lg flex items-center gap-2 text-sm"
                  >
                    {copiedUrl === image.url ? (
                      <>
                        <FaCheck className="text-green-600" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <FaCopy />
                        <span>Copy URL</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
              <div className="p-2">
                <p className="text-xs text-gray-600 truncate">{image.name}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
