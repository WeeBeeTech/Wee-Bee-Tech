import React, { useState } from "react";
import axios from "axios";
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/contact", formData)
      .then((response) => {
        console.log("Form submitted successfully:", response.data);
        setFormData({
          name: "",
          email: "",
          number: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("There was an error submitting the form:", error);
      });
  };

  return (
    <div className="dark:bg-gray-950 dark:text-white duration-300 px-4 py-10">
      <div className="container mx-auto max-w-lg bg-white dark:bg-gray-900 shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-white text-center">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2 dark:text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-gray-300 dark:border-gray-700 p-3 rounded-md focus:ring-primary focus:border-primary dark:bg-gray-800 dark:text-white"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 dark:text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-gray-300 dark:border-gray-700 p-3 rounded-md focus:ring-primary focus:border-primary dark:bg-gray-800 dark:text-white"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 dark:text-gray-300">Phone Number</label>
            <input
              type="text"
              name="number"
              value={formData.number}
              onChange={handleChange}
              className="w-full border-gray-300 dark:border-gray-700 p-3 rounded-md focus:ring-primary focus:border-primary dark:bg-gray-800 dark:text-white"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 dark:text-gray-300">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border-gray-300 dark:border-gray-700 p-3 rounded-md focus:ring-primary focus:border-primary dark:bg-gray-800 dark:text-white"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-md font-medium hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
