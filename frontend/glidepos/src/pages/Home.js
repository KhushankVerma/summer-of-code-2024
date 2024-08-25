import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Customer from "./Components/Customer";
import httpClient from "../httpClient";
import { useNavigate } from "react-router-dom";

httpClient.defaults.withCredentials = true;

function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", email: "", isAdmin: false });
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await httpClient.get(
          "http://127.0.0.1:5000/auth/current_user"
        );
        console.log(resp.data);
        setUser({
          name: resp.data.s_name,
          email: resp.data.s_email,
          isAdmin: resp.data.s_isAdmin,
        });
      } catch (error) {
        navigate("/login");
      }
    };
    fetchUser();
  }, []);
  return (
    <>
      <div className="self-start flex flex-col w-[100%] h-full ">
        <Navbar />
        <div className="flex h-full">
          <Sidebar name={user.name} email={user.email} isAdmin={false} />
          <Customer />
        </div>
      </div>
    </>
  );
}

export default Home;
