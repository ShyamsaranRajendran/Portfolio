import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon } from 'lucide-react';

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  const handleChange = (e) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
          Name
        </label>
        <motion.input
          whileFocus={{ scale: 1.01 }}
          type="text"
          id="name"
          name="name"
          value={formState.name}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white/5 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          Email
        </label>
        <motion.input
          whileFocus={{ scale: 1.01 }}
          type="email"
          id="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white/5 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Message
        </label>
        <motion.textarea
          whileFocus={{ scale: 1.01 }}
          id="message"
          name="message"
          value={formState.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 bg-white/5 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all"
          required
        />
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:from-purple-600 hover:to-pink-600 transition-all"
      >
        <SendIcon className="w-5 h-5" />
        Send Message
      </motion.button>
    </form>
  );
};

const ContactInfo = () => {
  const items = [
    {
      icon: MailIcon,
      title: 'Email',
      content: 'hello@johndeveloper.com'
    },
    {
      icon: PhoneIcon,
      title: 'Phone',
      content: '+1 (555) 123-4567'
    },
    {
      icon: MapPinIcon,
      title: 'Location',
      content: 'San Francisco, CA'
    }
  ];

  return (
    <div className="space-y-8">
      {items.map((item) => (
        <motion.div
          key={item.title}
          whileHover={{ x: 10 }}
          className="flex items-center gap-4"
        >
          <div className="p-3 bg-purple-500/20 rounded-lg">
            <item.icon className="w-6 h-6 text-purple-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-400">{item.content}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm">
            <ContactForm />
          </div>
          <div className="flex items-center">
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;