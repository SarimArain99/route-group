import React from "react";

function SignIn() {
  return (
    <div className="flex justify-center mt-20 mx-2">
      <div className="flex flex-col bg-white w-[390px] space-y-6 p-5 rounded-xl shadow-xl border-2">
        <input
          type="text"
          placeholder="Email Address or Phone Number"
          className="w-74 h-11 pl-2 border rounded-lg outline-blue-400"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-74 h-11 pl-2 border rounded-lg outline-blue-400"
        />
        <button className="bg-[#0866FF] text-white h-11 rounded-lg">
          <b>login</b>
        </button>
        <a
          className="text-[#087EFF] text-center"
          href=""
        >
          Forgotten Password?
        </a>
        <hr />
        <button className="bg-gray-500 text-white h-11 rounded-lg">
          <b>Create New Account</b>
        </button>
      </div>
    </div>
  );
}

export default SignIn;
