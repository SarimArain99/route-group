import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="h-14 border-b-2 flex justify-between px-5 items-center bg-blue-500 text-white">
      <h1 className="text-xl">Route.Groups</h1>
      <div className="space-x-5">
        <Link href="/signin">Sign In</Link>
        <Link href="/signup">Sign Up</Link>
      </div>
    </header>
  );
}

export default Header;
