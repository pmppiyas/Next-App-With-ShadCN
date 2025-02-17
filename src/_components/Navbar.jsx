import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="border border-white w-full py-6 flex items-center justify-between">
      <Link className="text-2xl font-medium text-green-500" href="/">
        Home
      </Link>
      <Link className="text-2xl font-medium text-green-500" href="my_class">
        {" "}
        My Class
      </Link>
      <Link className="text-2xl font-medium text-green-500" href="shadcn">
        ShadCN
      </Link>
    </div>
  );
}
