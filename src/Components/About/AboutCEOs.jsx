import React from 'react';
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const AboutCEOs = () => {
  const ceos = [
    {
      id: 1,
      name: "John Doe",
      title: "CEO & Co-Founder",
      bio: "John has been a pioneer in the industry with over 15 years of leadership experience.",
      image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?crop=faces&fit=crop&w=200&h=200",
    },
    {
      id: 2,
      name: "Jane Smith",
      title: "CEO & Co-Founder",
      bio: "Jane is a visionary leader, dedicated to driving change and innovation in the company.",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=faces&fit=crop&w=200&h=200",
    },
    {
      id: 3,
      name: "Michael Brown",
      title: "CEO & Co-Founder",
      bio: "With a strategic mindset, Michael leads our team with a focus on sustainable growth.",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=faces&fit=crop&w=200&h=200",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 p-4">
      {ceos.map((ceo) => (
        <div
          key={ceo.id}
          className="max-w-xs text-center p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow"
        >
          <img
            src={ceo.image}
            alt={ceo.name}
            className="w-24 h-24 mx-auto rounded-full mb-4"
          />
          <h3 className="text-xl font-semibold">{ceo.name}</h3>
          <h5 className="text-gray-600 mb-2">{ceo.title}</h5>
          <p className="text-gray-700 mb-4">{ceo.bio}</p>
          <div className="flex justify-center gap-4 text-2xl text-gray-600">
            <FaLinkedin />
            <FaFacebook />
            <FaInstagram />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutCEOs;
