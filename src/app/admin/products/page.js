"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { 
  FaPlus, FaEdit, FaTrash, FaEye, FaTimes, FaUpload,
  FaImage, FaSave, FaSearch 
} from "react-icons/fa";

export default function AdminProducts() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [uploadingImage, setUploadingImage] = useState(false);
  const [uploadingThumbnail, setUploadingThumbnail] = useState(false);
  const [specificationsText, setSpecificationsText] = useState("{}");
  const [reviewsText, setReviewsText] = useState("[]");

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "Prints",
    image: "",
    unit: "",
    description: "",
    features: [],
    specifications: {},
    gallery: [],
    reviews: []
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    // Check if we should open modal for add/edit
    const action = searchParams.get("action");
    const editId = searchParams.get("edit");
    
    if (action === "add") {
      openAddModal();
    } else if (editId) {
      const product = products.find(p => p.id === parseInt(editId));
      if (product) {
        openEditModal(product);
      }
    }
  }, [searchParams, products]);

  useEffect(() => {
    // Filter products
    let filtered = products;
    
    if (searchTerm) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (filterCategory !== "All") {
      filtered = filtered.filter(p => p.category === filterCategory);
    }
    
    setFilteredProducts(filtered);
  }, [products, searchTerm, filterCategory]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  };

  const openAddModal = () => {
    setEditingProduct(null);
    setFormData({
      name: "",
      price: "",
      category: "Prints",
      image: "",
      unit: "",
      description: "",
      features: [],
      specifications: {},
      gallery: [],
      reviews: []
    });
    setSpecificationsText(`{
  "size": "",
  "material": "",
  "printing": "",
  "finishing": "",
  "quantity": "",
  "turnaround": ""
}`);
    setReviewsText(`[
  {
    "name": "",
    "rating": 5,
    "comment": "",
    "date": "",
    "verified": true
  }
]`);
    setShowModal(true);
  };

  const openEditModal = (product) => {
    setEditingProduct(product);
    setFormData({
      ...product,
      features: product.features || [],
      specifications: product.specifications || {},
      gallery: product.gallery || [],
      reviews: product.reviews || []
    });
    setSpecificationsText(JSON.stringify(product.specifications || {}, null, 2));
    setReviewsText(JSON.stringify(product.reviews || [], null, 2));
    setShowModal(true);
  };

  const handleImageUpload = async (e, type = "main") => {
    const files = type === "gallery" ? Array.from(e.target.files) : [e.target.files[0]];
    if (!files.length || !files[0]) return;

    if (type === "main") {
      setUploadingImage(true);
    } else {
      setUploadingThumbnail(true);
    }

    try {
      const uploadedUrls = [];
      
      // Upload each file
      for (const file of files) {
        const formDataUpload = new FormData();
        formDataUpload.append("file", file);
        
        const response = await fetch("/api/upload", {
          method: "POST",
          body: formDataUpload,
        });

        const data = await response.json();
        
        if (data.success) {
          uploadedUrls.push(data.imageUrl);
        } else {
          // Failed to upload this file
        }
      }
      
      // Update form data with uploaded images
      if (uploadedUrls.length > 0) {
        if (type === "main") {
          setFormData({ ...formData, image: uploadedUrls[0] });
          alert("Image uploaded successfully!");
        } else {
          setFormData({ 
            ...formData, 
            gallery: [...(formData.gallery || []), ...uploadedUrls] 
          });
          alert(`${uploadedUrls.length} image${uploadedUrls.length > 1 ? 's' : ''} uploaded successfully!`);
        }
      } else {
        alert("Failed to upload images");
      }
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Failed to upload image: " + error.message);
    } finally {
      if (type === "main") {
        setUploadingImage(false);
      } else {
        setUploadingThumbnail(false);
      }
      // Reset file input
      e.target.value = "";
    }
  };

  const removeGalleryImage = (index) => {
    const newGallery = formData.gallery.filter((_, i) => i !== index);
    setFormData({ ...formData, gallery: newGallery });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Parse JSON fields before submitting
      let specs = {};
      let reviews = [];
      
      try {
        const trimmedSpecs = specificationsText.trim();
        if (trimmedSpecs && trimmedSpecs !== '{}') {
          specs = JSON.parse(trimmedSpecs);
          // Remove empty string values
          Object.keys(specs).forEach(key => {
            if (specs[key] === "") delete specs[key];
          });
        }
      } catch (err) {
        alert("Invalid JSON format in Specifications field");
        return;
      }
      
      try {
        const trimmedReviews = reviewsText.trim();
        if (trimmedReviews && trimmedReviews !== '[]') {
          reviews = JSON.parse(trimmedReviews);
          // Filter out empty reviews
          reviews = reviews.filter(r => r.name && r.comment);
        }
      } catch (err) {
        alert("Invalid JSON format in Reviews field");
        return;
      }
      
      const dataToSubmit = {
        ...formData,
        specifications: specs,
        reviews: reviews,
        // Ensure gallery and features are always arrays
        gallery: formData.gallery || [],
        features: formData.features || []
      };

      // Include ID if editing
      if (editingProduct) {
        dataToSubmit.id = editingProduct.id;
        dataToSubmit.slug = editingProduct.slug;
      }
      
      const url = "/api/products";
      const method = editingProduct ? "PUT" : "POST";
      
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSubmit),
      });
      
      if (response.ok) {
        const result = await response.json();
        await fetchProducts();
        setShowModal(false);
        alert(editingProduct ? "Product updated!" : "Product added!");
      } else {
        const errorData = await response.json();
        alert(`Failed to save product: ${errorData.error || 'Unknown error'}`);
      }
    } catch (error) {
      alert("Failed to save product: " + error.message);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    try {
      const response = await fetch(`/api/products?id=${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        await fetchProducts();
        alert("Product deleted!");
      }
    } catch (error) {
      console.error("Failed to delete product:", error);
      alert("Failed to delete product");
    }
  };

  const categories = ["All", "Prints", "Branding", "Design", "Signage", "Other"];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-xl text-gray-600">Loading products...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>
        </div>

        <div className="flex gap-3">
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <button
            onClick={openAddModal}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            <FaPlus />
            <span>Add Product</span>
          </button>
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm p-12 text-center">
          <FaImage className="text-6xl text-gray-300 mx-auto mb-4" />
          <p className="text-xl text-gray-600 mb-4">No products found</p>
          <button
            onClick={openAddModal}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
          >
            Add Your First Product
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border flex flex-col"
            >
              <div className="relative h-48 bg-gray-100 flex-shrink-0">
                <img
                  src={product.image || "/image/placeholder.png"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "/image/placeholder.png";
                  }}
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
                  {product.category || 'Other'}
                </div>
              </div>

              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-bold text-lg text-gray-800 mb-1 truncate" title={product.name}>
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-2 h-5">{product.unit || 'N/A'}</p>
                <p className="text-xl font-bold text-blue-600 mb-4">
                  ₦{product.price}
                </p>

                <div className="flex gap-2">
                  <Link
                    href={`/Products/${product.id}`}
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-lg transition-colors text-sm"
                  >
                    <FaEye />
                    <span>View</span>
                  </Link>
                  <button
                    onClick={() => openEditModal(product)}
                    className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors text-sm"
                  >
                    <FaEdit />
                    <span>Edit</span>
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg transition-colors"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 p-2 md:p-4 overflow-y-auto">
          <div className="bg-white rounded-xl w-full max-w-3xl my-4 md:my-8">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 md:p-6 border-b">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                {editingProduct ? "Edit Product" : "Add New Product"}
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600 text-xl md:text-2xl"
              >
                <FaTimes />
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSubmit} className="p-4 md:p-6 space-y-4 md:space-y-6">
              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Product Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price *
                  </label>
                  <input
                    type="text"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="e.g., 25,000"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    required
                  >
                    <option value="Prints">Prints</option>
                    <option value="Branding">Branding</option>
                    <option value="Design">Design</option>
                    <option value="Signage">Signage</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Unit *
                  </label>
                  <input
                    type="text"
                    value={formData.unit}
                    onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="e.g., Per 50"
                    required
                  />
                </div>
              </div>

              {/* Main Image Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Main Product Image *
                </label>
                <div className="flex items-center gap-4">
                  {formData.image && (
                    <img
                      src={formData.image}
                      alt="Preview"
                      className="w-24 h-24 object-cover rounded-lg border"
                    />
                  )}
                  <label className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg cursor-pointer transition-colors">
                    <FaUpload />
                    <span>{uploadingImage ? "Uploading..." : "Upload Image"}</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(e, "main")}
                      className="hidden"
                      disabled={uploadingImage}
                    />
                  </label>
                </div>
              </div>

              {/* Gallery Images */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gallery Images (Optional)
                </label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {formData.gallery && formData.gallery.map((img, index) => (
                    <div key={index} className="relative">
                      <img
                        src={img}
                        alt={`Gallery ${index + 1}`}
                        className="w-20 h-20 object-cover rounded-lg border"
                      />
                      <button
                        type="button"
                        onClick={() => removeGalleryImage(index)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600"
                      >
                        <FaTimes className="text-xs" />
                      </button>
                    </div>
                  ))}
                </div>
                <label className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg cursor-pointer transition-colors inline-flex">
                  <FaUpload />
                  <span>{uploadingThumbnail ? "Uploading..." : "Add Gallery Images"}</span>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={(e) => handleImageUpload(e, "gallery")}
                    className="hidden"
                    disabled={uploadingThumbnail}
                  />
                </label>
                <p className="text-xs text-gray-500 mt-1">You can select multiple images at once</p>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Overview / Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  rows="4"
                  placeholder="Enter product overview and description..."
                />
              </div>

              {/* Features */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Features (comma-separated)
                </label>
                <textarea
                  value={formData.features ? formData.features.join(", ") : ""}
                  onChange={(e) => setFormData({ 
                    ...formData, 
                    features: e.target.value.split(",").map(f => f.trim()).filter(f => f) 
                  })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  rows="3"
                  placeholder="Feature 1, Feature 2, Feature 3"
                />
              </div>

              {/* Specifications */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Specifications - Just edit the values
                </label>
                <textarea
                  value={specificationsText}
                  onChange={(e) => setSpecificationsText(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none font-mono text-sm"
                  rows="8"
                  placeholder='Fill in the values'
                />
                <p className="text-xs text-gray-500 mt-1">Edit the values in the template above. Keep the JSON format intact.</p>
              </div>

              {/* Reviews */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Customer Reviews - Just edit the values
                </label>
                <textarea
                  value={reviewsText}
                  onChange={(e) => setReviewsText(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none font-mono text-sm"
                  rows="10"
                  placeholder='Fill in customer reviews'
                />
                <p className="text-xs text-gray-500 mt-1">Enter reviews as JSON array. Each review should have: name, rating, comment, date, verified</p>
              </div>

              {/* Form Actions */}
              <div className="flex flex-col-reverse sm:flex-row gap-3 pt-4 border-t">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  <FaSave />
                  <span>{editingProduct ? "Update Product" : "Add Product"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
