import React from "react";
import { Card } from "./card";

import forestRetreat from "@/public/Images/Forest Retreat.jpg";
import beachVilla from "@/public/Images/Beach Villa.jpg";
import urbanLoft from "@/public/Images/Urban Loft.jpg";
import mountainCabin from "@/public/Images/Mountain Cabin.jpg";
import cityCondo from "@/public/Images/City Condo.jpg";
import desertOasis from "@/public/Images/Desert Oasis.jpg";
import lakeHouse from "@/public/Images/Lake House.jpg";
import tropicalBungalow from "@/public/Images/Tropical Bungalow.jpg";

export const Offers: React.FC = () => {
  const properties = [
    {
      image: forestRetreat,
      location: "Aspen, Colorado",
      title: "Forest Haven Retreat",
      price: "$2,450,000",
      beds: 4,
      baths: 3,
      size: "3,200 sq ft",
      label: { text: "New Listing", color: "#000000" },
    },
    {
      image: beachVilla,
      location: "Malibu, California",
      title: "Oceanfront Paradise",
      price: "$5,950,000",
      beds: 5,
      baths: 6,
      size: "6,800 sq ft",
      label: { text: "-15%", color: "#F97316" },
    },
    {
      image: urbanLoft,
      location: "Scottsdale, Arizona",
      title: "Desert Oasis Villa",
      price: "$3,275,000",
      beds: 4,
      baths: 4.5,
      size: "4,500 sq ft",
    },
    {
      image: mountainCabin,
      location: "Vail, Colorado",
      title: "Alpine Luxury Chalet",
      price: "$4,150,000",
      beds: 5,
      baths: 5.5,
      size: "5,200 sq ft",
      label: { text: "Featured", color: "#22C55E" },
    },
    {
      image: cityCondo,
      location: "Lake Tahoe, Nevada",
      title: "Lakefront Serenity",
      price: "$3,850,000",
      beds: 4,
      baths: 3.5,
      size: "3,800 sq ft",
    },
    {
      image: desertOasis,
      location: "Santa Barbara, California",
      title: "Hillside Vista Estate",
      price: "$6,750,000",
      beds: 6,
      baths: 7,
      size: "7,500 sq ft",
    },
    {
      image: lakeHouse,
      location: "Portland, Oregon",
      title: "Glass Treehouse Retreat",
      price: "$2,950,000",
      beds: 3,
      baths: 2.5,
      size: "2,800 sq ft",
    },
    {
      image: tropicalBungalow,
      location: "Kauai, Hawaii",
      title: "Tropical Island Escape",
      price: "$4,950,000",
      beds: 4,
      baths: 4,
      size: "3,900 sq ft",
      label: { text: "Last One", color: "#A855F7" },
    },
  ];

  return (
    <section className="py-16 px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10 text-black">
          <h2 className="lg:text-3xl md:text-2xl text-lg font-light">
            Limited-Time Offers You Can&apos;t Miss!
          </h2>
          <a href="" className="hover:underline">
            See all
          </a>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6 mb-8">
          {properties.map((property, index) => (
            <Card key={index} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
};
