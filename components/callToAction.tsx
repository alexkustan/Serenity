import React from "react";

export const CallToACtion: React.FC = () => {
  return (
    <section className="md:py-20 py-14 px-12 relative bg-cover bg-center bg-[url(/Images/ctaBg.jpg)]">
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-2xl">
          <h2 className="text-white text-4xl font-light mb-6">
            Join the Serenity Resident Club
          </h2>
          <p className="text-gray-200 text-lg mb-8">
            Become a member of our exclusive community and enjoy premium
            benefits including priority access to new listings, private events,
            concierge services, and special partner offers.
          </p>
          <form className="flex mb-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 w-full border-none rounded-l-lg focus:ring-0 bg-white text-[#9CA3AF]"
            />
            <button className=" text-white px-6 py-3 rounded-r-lg whitespace-nowrap bg-black hover:bg-gray-800 transition">
              Subscribe Now
            </button>
          </form>
          <p className="text-gray-300 text-sm">
            By subscribing, you agree to our privacy policy and terms of
            service.
          </p>
        </div>
      </div>
    </section>
  );
};
