import React from "react";

function SignIn() {
  return (
    <div className="flex justify-center mt-20 mx-2">
      <div className="flex flex-col bg-white w-[390px] space-y-6 p-5 rounded-xl shadow-xl border-2">
        <input
          type="text"
          placeholder="First Name"
          className="w-74 h-11 pl-2 border rounded-lg outline-blue-400"
        />
        <input
          type="text"
          placeholder="Middle Name"
          className="w-74 h-11 pl-2 border rounded-lg outline-blue-400"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="w-74 h-11 pl-2 border rounded-lg outline-blue-400"
        />
        <input
          type="date"
          placeholder="Date of Birth"
          className="w-74 h-11 border rounded-lg outline-blue-400 p-2"
        />
        <button className="bg-blue-500 text-white h-11 rounded-lg">
          <b>Create New Account</b>
        </button>
      </div>
    </div>
  );
}

export default SignIn;
