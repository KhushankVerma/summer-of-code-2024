import React from "react";
import { useState } from "react";

function Itembar() {
  const categories = [
    "Fruits & Vegetables",
    "Foodgrains, Oil & Masala",
    "Bakery, Cakes & Dairy",
    "Beverages",
    "Snacks & Branded Foods",
    "Beauty & Hygiene",
    "Cleaning & Household",
    "Kitchen, Garden & Pets",
    "Lunch Boxes & Bags",
    "Umbrellas & Rainwear",
    "Eggs, Meat & Fish",
  ];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className="w-[25%] border-r-2 border-[#c2e1df] flex flex-col">
      <div className="flex items-end h-[50px]">
        <div className="flex items-center mt-[20px] text-[#878787]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 m-[5px] ml-[10px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 6h.008v.008H6V6Z"
            />
          </svg>
          CATEGORY{" "}
        </div>
      </div>
      <div>
        {categories.map((category) => (
          <div className="flex items-center justify-center h-[50px] text-black">
            {selectedCategory === category ? (
              <div className="h-[40px] w-[80%] m-[5px] bg-[#d0d0d0] rounded-[5px] flex items-center">
                <div className="m-[5px] ml-[10px]">{category}</div>
              </div>
            ) : (
              <div
                className="h-[40px] m-[5px] w-[80%] flex items-center"
                onClick={(e) => {
                  setSelectedCategory(e.target.id);
                  console.log(e.target["id"]);
                }}
              >
                <div className="m-[5px] ml-[10px]" id={category}>
                  {category}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Itembar;
