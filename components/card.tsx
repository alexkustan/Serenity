import Image, { StaticImageData } from "next/image";
import React from "react";
import locationIcon from "@/public/Images/LocationIcon.svg";

interface Label {
  text: string;
  color: string;
}

interface Props {
  image: StaticImageData;
  location: string;
  title: string;
  price: string;
  beds: number;
  baths: number;
  size: string;
  label?: Label;
}

export const Card: React.FC<Props> = ({
  image,
  location,
  title,
  price,
  beds,
  baths,
  size,
  label,
}) => {
  return (
    <a href="" className="bg-white shadow-sm overflow-hidden rounded-2xl">
      <div className="relative">
        <Image
          src={image}
          alt={title}
          className="w-full h-48 object-cover object-top"
        />
        {label && (
          <div
            className="absolute top-3 left-3 text-white text-xs px-2 py-1 rounded-2xl"
            style={{ backgroundColor: label.color }}
          >
            {label.text}
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center text-sm text-gray-500 mb-1">
          <Image src={locationIcon} alt="Location" className="mr-1" />
          <span>{location}</span>
        </div>
        <h3 className="font-medium mb-1 text-black">{title}</h3>
        <p className="font-medium mb-2 text-black">{price}</p>
        <div className="flex items-center text-sm text-gray-500 justify-between">
          <span>
            {beds} beds • {baths} baths
          </span>
          <span>{size}</span>
        </div>
      </div>
    </a>
  );
};
