"use client";

import { useEffect, useState } from "react";

export default function ManageProducts() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    title: "",
    price: "",
    category: "",
  });

  const [editId, setEditId] = useState(null);

  // Load data from LocalStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(saved);
  }, []);

  // Save to LocalStorage
  const saveToLocal = (data) => {
    localStorage.setItem("products", JSON.stringify(data));
  };

  // Handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add or Edit Product
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.price || !form.category) return;

    if (editId === null) {
      // ADD
      const newProduct = {
        id: Date.now(),
        ...form,
        price: Number(form.price),
      };

      const updated = [...products, newProduct];
      setProducts(updated);
      saveToLocal(updated);

    } else {
      // EDIT
      const updated = products.map((item) =>
        item.id === editId ? { ...item, ...form } : item
      );
      setProducts(updated);
      saveToLocal(updated);
      setEditId(null);
    }

    setForm({ title: "", price: "", category: "" });
  };

  // Load data into form for editing
  const handleEdit = (product) => {
    setEditId(product.id);
    setForm({
      title: product.title,
      price: product.price,
      category: product.category,
    });
  };

  // Delete Product
  const handleDelete = (id) => {
    const filtered = products.filter((item) => item.id !== id);
    setProducts(filtered);
    saveToLocal(filtered);
  };

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="text-2xl font-bold mb-4">Manage Products</h1>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="space-y-3 mb-8">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {editId === null ? "Add Product" : "Save Changes"}
        </button>
      </form>

      {/* PRODUCT LIST */}
      <div className="space-y-4">
        {products.length === 0 && (
          <p className="text-gray-500">No products added yet.</p>
        )}

        {products.map((item) => (
          <div
            key={item.id}
            className="border p-4 rounded flex justify-between items-center"
          >
            <div>
              <h2 className="font-semibold">{item.title}</h2>
              <p className="text-sm text-gray-600">{item.category}</p>
              <p className="font-bold">${item.price}</p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(item)}
                className="px-3 py-1 bg-yellow-500 text-white rounded"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(item.id)}
                className="px-3 py-1 bg-red-600 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
