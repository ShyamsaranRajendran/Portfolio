import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO at TechStart',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    content: 'Working with John was an absolute pleasure. His attention to detail and creative approach to problem-solving made our project a huge success.'
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    content: 'The website John built for us exceeded all expectations. His technical expertise combined with design sensibility created an outstanding user experience.'
  },
  {
    name: 'Emily Davis',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    content: 'John\'s ability to translate our vision into reality was remarkable. The animations and interactions he created brought our brand to life.'
  }
];

const TestimonialCard = ({ testimonial }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        y: 20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    }
  }, []);

  return (
    <motion.div
      ref={cardRef}
      whileHover={{ scale: 1.05 }}
      className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="relative w-16 h-16">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="rounded-full object-cover w-full h-full"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 opacity-20" />
        </div>
        <div>
          <h3 className="text-xl font-semibold">{testimonial.name}</h3>
          <p className="text-gray-400">{testimonial.role}</p>
        </div>
      </div>
      <p className="text-gray-300 italic">&ldquo;{testimonial.content}&rdquo;</p>
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Client Testimonials</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Don't just take my word for it - here's what my clients have to say
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;