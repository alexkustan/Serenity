import Image from "next/image";
import React from "react";
import img1 from "@/public/Images/Beachfront property.png";
import img2 from "@/public/Images/Desert home.png";
import img3 from "@/public/Images/Hillside villa.png";
import img4 from "@/public/Images/Lakeside cabin.png";
import img5 from "@/public/Images/Luxury forest home.png";
import img6 from "@/public/Images/Mountain chalet.png";

export const Welcome: React.FC = () => {
  return (
    <section className="py-20 px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="lg:text-4xl text-3xl font-light mb-8 text-center text-black ">
          Welcome to Serenity
        </h2>
        <p className="lg:text-lg md:text-sm text-[12px]  text-gray-600 max-w-[811px] mx-auto text-center mb-12">
          Discover a collection of exceptional properties where modern design
          meets natural beauty. Our curated homes offer the perfect balance of
          luxury, comfort, and harmony with the environment.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Image src={img1} alt={"one of our properties"} />
          <Image src={img2} alt={"one of our properties"} />
          <Image src={img3} alt={"one of our properties"} />
          <Image
            src={img4}
            alt={"one of our properties"}
            className="md:flex hidden"
          />
          <Image
            src={img5}
            alt={"one of our properties"}
            className="md:flex hidden"
          />
          <Image
            src={img6}
            alt={"one of our properties"}
            className="md:flex hidden"
          />
        </div>
      </div>
    </section>
  );
};
