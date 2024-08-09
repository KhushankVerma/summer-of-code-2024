import React from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Customer from "./Components/Customer";

function Home() {
  return (
    <>
      <div className="self-start flex flex-col w-[100%] h-full ">
        <Navbar />
        <div className="flex h-full">
          <Sidebar name="khush" email="sample@gmail.com" isAdmin={false} />
          <Customer />
        </div>
      </div>
    </>
  );
}

export default Home;
