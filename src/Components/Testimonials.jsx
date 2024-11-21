import React from "react";

const Testimonials = () => {
  return (
    <section className="py-8 px-4 my-12 bg-[#D6F1F9] ">
      <h2 className="text-2xl font-bold text-[#3C4858] text-center mb-6">
        What Our Adventurers Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <blockquote className="p-4 border-l-4 border-green-600">
          <p>
            "The Rainforest Canopy Walk was absolutely breathtaking! Highly
            recommended."
          </p>
          <cite className="block mt-2 text-sm text-gray-500">- Emma T.</cite>
        </blockquote>
        <blockquote className="p-4 border-l-4 border-green-600">
          <p>
            "Loved the desert safari under the stars. Unforgettable experience!"
          </p>
          <cite className="block mt-2 text-sm text-gray-500">- John D.</cite>
        </blockquote>
        <blockquote className="p-4 border-l-4 border-green-600">
          <p>
            "A perfect mix of adventure and eco-conscious travel. The coral reef
            snorkeling was magical."
          </p>
          <cite className="block mt-2 text-sm text-gray-500">- Sarah W.</cite>
        </blockquote>
      </div>
    </section>
  );
};

export default Testimonials;
