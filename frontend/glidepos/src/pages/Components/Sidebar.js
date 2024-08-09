import React from "react";
import { useState, useEffect } from "react";

function Sidebar({ name, email, isAdmin }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="w-[25%] h-full border-r-2 border-[#c2e1df] flex flex-col items-center bg-white">
      <div className="m-8 mb-4 h-[120px] w-[120px] text-[100px] text-[white] rounded-[50%] border flex justify-center items-center bg-[#c2e1df]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-11"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
      </div>
      <div className=" text-[28px]">{name}</div>
      <div className="text-[14px]">{email.toLowerCase()}</div>
      <div className="bg-[#3ecbc2] p-3 w-[200px] px-5 my-5 rounded-[30px] text-[20px] text-white font-['Poppins'] flex justify-center">
        {!isAdmin && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-7 mr-[8px]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        )}
        {"   "}
        {isAdmin ? "Admin" : "Cashier"}
      </div>
      <div className="text-[20px]">{time.toLocaleTimeString()}</div>
    </div>
  );
}

export default Sidebar;
