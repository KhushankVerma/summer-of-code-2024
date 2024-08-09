function Navbar() {
  return (
    <div className="h-[50px] w-[100%]  border-none bg-[#c2e1df] self-start flex items-center justify-between font-[Poppins]">
      <div className="flex font-['Bebas_Neue'] text-[#235b58] font-extrabold text-[30px]">
        <img src="./logo-green.png" className="h-[30px] ml-5 mr-5" /> GLIDE
        <span className="font-['Bebas_Neue'] text-[#c03535]">POS</span>
      </div>
      <button className="bg-[#ef4848] p-2 pl-5 pr-5 rounded-[10px] mr-5 font-[Poppins]">
        LOGOUT
      </button>
    </div>
  );
}

export default Navbar;
