import React from "react";
import Navbar from "./Components/Navbar";
import Menu from "./Components/Menu";
import Itembar from "./Components/Itembar";

function Items() {
  return (
    <div className="w-full h-full flex">
      <div className="w-[73%]">
        <Navbar Items={true} className=" z-10" />
        <Itembar />
      </div>
      <Menu />
    </div>
  );
}

export default Items;
