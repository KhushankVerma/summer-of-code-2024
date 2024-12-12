import httpClient from "../../httpClient";

function Navbar({ Items }) {
  const logoutUser = async () => {
    try {
      const resp = await httpClient.get("http://127.0.0.1:5000/auth/logout");
      console.log(resp.data);
      if (resp.status === 200) {
        window.location.href = "/login";
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="h-[50px] w-[100%]  border-none bg-[#c2e1df] self-start flex items-center justify-between font-[Poppins]">
      <div className="flex font-['Bebas_Neue'] text-[#235b58] font-extrabold text-[30px]">
        <img src="./logo-green.png" className="h-[30px] ml-5 mr-5" /> GLIDE
        <span className="font-['Bebas_Neue'] text-[#c03535]">POS</span>
      </div>
      {Items != true && (
        <button
          className="bg-[#ef4848] p-2 pl-5 pr-5 rounded-[10px] mr-5 font-[Poppins]"
          onClick={() => {
            logoutUser();
          }}
        >
          LOGOUT
        </button>
      )}
      {Items && (
        <form onSubmit={handleSubmit} className="flex mr-[90px]">
          <input
            className=" h-[40px] text-[16px] m-[2px] mr-[20px] px-[14px] py-[12px] outline-none border border-solid border-[#878787] rounded-[10px]"
            type="text"
            id="search"
            placeholder="Search"
          />
          <button
            className="bg-[#4ecdc4] p-[5px] h-[40px] rounded-[10px] text-white text-[20px] m-[2px]"
            type="submit"
          >
            {"->"}
          </button>
        </form>
      )}
    </div>
  );
}

export default Navbar;
