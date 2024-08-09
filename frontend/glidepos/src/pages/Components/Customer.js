import React from "react";
import { useState } from "react";
import "./label.css";

function Customer() {
  const [Name, setName] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Address, setAddress] = useState("");
  const [Show, setShow] = useState(false);
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");

  return (
    <>
      <div className="m-[10px] w-[50%] py-[40px] flex flex-col p-[20px] pl-[35px]">
        <div className="text-[25px] px-[10px] ">Enter Customer Details</div>
        <div className="text-[12px] px-[10px] text-[#878787] pt-[5px] pb-[10px]">
          (*) indicates required fields
        </div>
        {/* <hr className="border border-solid border-[#878787]" /> */}
        <form
          id="customer-form"
          onSubmit={(e) => {
            e.preventDefault();
            if (
              document.querySelector("#name").value === "" ||
              document.querySelector("#mobile").value === ""
            ) {
              alert("Name and Mobile are mandatory!");
              return;
            }
            setShow(true);
            setName(document.querySelector("#name").value);
            setMobile(document.querySelector("#mobile").value);
            setAddress(
              document.querySelector("#address").value === ""
                ? "NONE"
                : document.querySelector("#address").value
            );
          }}
          className="flex flex-col w-[100%] h-full justify-between px-[100px]"
        >
          <div>
            <div className="mt-[30px] mb-[10px] flex items-center">
              <input
                className=" flex-grow h-[50px] text-[16px] m-[2px] px-[14px] py-[12px] outline-none border border-solid border-[#878787] rounded-[10px]"
                type="text"
                id="name"
                value={value1}
                onChange={(e) => {
                  setValue1(e.target.value);
                }}
              />
              <label
                htmlFor="name"
                className=" absolute h-[50px] text-[16px] m-[2px] px-[14px] py-[12px] border border-solid border-transparent"
              >
                <div className="text">Name*</div>
              </label>
            </div>
            <div className="my-[10px] flex items-center">
              <input
                className=" flex-grow h-[50px] text-[16px] m-[2px] px-[14px] py-[12px] outline-none border border-solid border-[#878787] rounded-[10px]"
                type="text"
                id="mobile"
                value={value2}
                onChange={(e) => {
                  setValue2(e.target.value);
                }}
              />
              <label
                htmlFor="mobile"
                className=" absolute h-[50px] text-[16px] m-[2px] px-[14px] py-[12px] border border-solid border-transparent"
              >
                <div className="text">Phone no.*</div>
              </label>
            </div>
            <div className="my-[10px] flex">
              <textarea
                className="flex-grow text-[16px] m-[2px] px-[14px] py-[12px] outline-none border border-solid border-[#878787] rounded-[10px]"
                name="input"
                id="address"
                value={value3}
                onChange={(e) => {
                  setValue3(e.target.value);
                }}
                rows="4"
              ></textarea>
              <label
                htmlFor="address"
                className=" absolute text-[16px] m-[2px] px-[14px] py-[12px] border border-solid border-transparent"
              >
                <div className="text">Address</div>
              </label>
            </div>
          </div>
          <div className="flex flex-row-reverse my-[30px]">
            <input
              type="submit"
              value="Proceed"
              className="bg-[#4ecdc4] p-[10px] px-[20px] rounded-[20px] text-[16px]  text-white self-end"
            />
          </div>
        </form>
      </div>
      {Show && (
        <div className="w-[23%] bg-[#37ab7a] text-white rounded-[20px] m-[10px] ml-0 mr-[20px] flex flex-col justify-between">
          <div className="flex flex-col items-center w-full">
            <div className="text-[20px] m-[30px] mb-[10px] self-start">
              Details Entered
            </div>
            <hr className="border-[1px] border-white w-[80%]" />
            <div className="text-[16px] mx-[30px] mt-[20px] self-start">
              Name
            </div>
            <div className="mx-[30px] self-stretch mt-[4px] text-white text-[16px] outline-none border-[2px] border-solid rounded-[10px] px-[10px] py-[5px]">
              {Name}
            </div>
            <div className="text-[16px] mx-[30px] mt-[20px] self-start">
              Phone No.
            </div>
            <div className="mx-[30px] self-stretch mt-[4px] text-white text-[16px] outline-none border-[2px] border-solid rounded-[10px] px-[10px] py-[5px]">
              {Mobile}
            </div>
            <div className="text-[16px] mx-[30px] mt-[20px] self-start">
              Address
            </div>
            <div className="mx-[30px] self-stretch mt-[4px] text-white text-[16px] outline-none border-[2px] border-solid rounded-[10px] px-[10px] py-[5px]">
              {Address}
            </div>
          </div>
          <div className="flex flex-row-reverse w-[100%] ">
            <button className="bg-[#1efc61] p-2 px-5 rounded-[20px] text-[17px] text-[#187735] my-[30px] w-full mx-[30px]">
              Proceed to Checkout {"->"}
            </button>
          </div>
        </div>
      )}
      {!Show && (
        <div className="w-[23%] bg-[#31a59d] text-slate-200 rounded-[20px] m-[10px] ml-0 mr-[20px] flex flex-col justify-center items-center text-center">
          Enter Customer Details to Proceed to Checkout
        </div>
      )}
    </>
  );
}

export default Customer;
