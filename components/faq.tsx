import Image from "next/image";
import React from "react";
import luxuryApartment from "@/public/Images/luxuryApartment.jpg";

export const Faq: React.FC = () => {
  return (
    <section className="md:py-20 py-12 px-12 bg-gray-50 text-[#1F2937]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-light mb-12 text-center">
          Frequently Asked Questions
        </h2>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-16">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition">
              <div className="flex items-center mb-4">
                <i className="ri-calendar-line text-primary text-2xl mr-4"></i>
                <h3 className="text-xl font-medium">
                  Private Viewing Experience
                </h3>
              </div>
              <p className="text-gray-600">
                Enjoy a personalized property tour with our luxury concierge
                team. We offer flexible scheduling for both in-person and
                virtual viewings, complete with detailed property insights and
                neighborhood orientation.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition">
              <div className="flex items-center mb-4">
                <i className="ri-bank-line text-primary text-2xl mr-4"></i>
                <h3 className="text-xl font-medium">
                  Premium Financing Solutions
                </h3>
              </div>
              <p className="text-gray-600">
                Access exclusive financing options through our network of
                private banks. Our wealth management team provides personalized
                consultation for luxury mortgages, including international
                financing.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition">
              <div className="flex items-center mb-4">
                <i className="ri-global-line text-primary text-2xl mr-4"></i>
                <h3 className="text-xl font-medium">Global Buyer Services</h3>
              </div>
              <p className="text-gray-600">
                Our dedicated international desk offers comprehensive support
                for overseas buyers, handling everything from legal requirements
                to lifestyle integration and property management.
              </p>
            </div>
          </div>
          <div>
            <Image
              src={luxuryApartment}
              alt="Luxury property interior"
              className="w-full h-full object-cover object-top rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
