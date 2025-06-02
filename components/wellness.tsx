import Image from "next/image";
import React from "react";
import wellness from "@/public/Images/wellness.jpg";
import "remixicon/fonts/remixicon.css";

export const Wellness: React.FC = () => {
  return (
    <section className="md:py-20 py-16 px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 grid-rows-2 md:grid-rows-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 md:col-span-1 relative overflow-hidden rounded-lg shadow-xl">
            <Image
              src={wellness}
              alt="Quiet Oasis Retreat"
              className="w-full h-full object-cover object-top rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
              <h2 className="text-white text-3xl mb-3">
                Luxury Villa & Wellness Retreat
              </h2>
              <p className="text-gray-200 mb-6">
                Immerse yourself in the epitome of luxury living. Our signature
                villa combines contemporary design with natural elements,
                featuring an infinity pool, private spa, and breathtaking
                panoramic views.
              </p>
              <button className="bg-primary cursor-pointer text-white px-6 py-2 bg-black rounded-lg whitespace-nowrap hover:bg-gray-900 transition">
                Book Now
              </button>
            </div>
          </div>
          <div className="grid grid-rows-3 gap-4">
            <div className="bg-gray-100 p-6 flex items-center rounded-lg">
              <div>
                <h3 className="text-xl mb-2 text-[#1F2937]">
                  Exclusive Design
                </h3>
                <p className="text-gray-600">
                  Award-winning architecture with premium materials
                </p>
              </div>
            </div>
            <div className="bg-gray-100 p-6 flex items-center rounded-lg">
              <div>
                <h3 className="text-xl mb-2 text-[#1F2937]">5.0</h3>
                <div className="flex text-yellow-400 mb-2">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>
                <p className="text-gray-600">Based on 128 reviews</p>
              </div>
            </div>
            <div className="bg-black p-6 flex items-center rounded-lg">
              <div>
                <h3 className="text-white text-xl mb-2">
                  Limited Availability
                </h3>
                <p className="text-gray-300">
                  Only 3 units remaining in this exclusive collection
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
