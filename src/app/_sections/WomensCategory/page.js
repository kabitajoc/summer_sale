import React from "react";
import Image from "next/image";
import womenwear from "../../../../public/HomeImages/women.png";
import womenwear1 from "../../../../public/HomeImages/women1.png";
import womenwear2 from "../../../../public/HomeImages/women2.png";
import womenwear3 from "../../../../public/HomeImages/women3.png";

function WomensCategory() {
  const categories = [
    {
      img: womenwear,
      title: "Hoodies & Sweatshirt",
    },
    {
      img: womenwear1,
      title: "Coats & Parkas",
    },
    {
      img: womenwear2,
      title: "Tees & T-Shirt",
    },
    {
      img: womenwear3,
      title: "Boxers",
    },
  ];
  return (
    <>
      <h3 className="text-4xl font-bold mb-10 border-l-4 border-gray-800 pl-4">
        Womens Category
      </h3>
      <div className=" flex justify-around">
        {categories.map((category, index) => (
          <div key={index}>
            <Image src={category.img} alt={`${category.title}`} />
            <div className=" flex justify-between">
              <div>
                <h5 className=" font-extrabold">{category.title}</h5>
                <span>Explore Now !</span>
              </div>
              <div className="svg pt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="14"
                  viewBox="0 0 20 14"
                  fill="none"
                >
                  <path
                    d="M18.9571 7.71798C19.2843 7.39075 19.2843 6.86022 18.9571 6.533L13.6247 1.20059C13.2975 0.873368 12.7669 0.873368 12.4397 1.20059C12.1125 1.52781 12.1125 2.05835 12.4397 2.38557L17.1796 7.12549L12.4397 11.8654C12.1125 12.1926 12.1125 12.7232 12.4397 13.0504C12.7669 13.3776 13.2975 13.3776 13.6247 13.0504L18.9571 7.71798ZM0.489258 7.9634L18.3646 7.9634V6.28758L0.489258 6.28758L0.489258 7.9634Z"
                    fill="#797979"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default WomensCategory;
