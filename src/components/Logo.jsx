import React from "react";
import { Link } from "react-router-dom";
import logo from "/logo.svg";

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 text-2xl">
      <img src={logo} alt="Logo" className="h-12 w-12" />
      <span className="font-bold">
        Shop<span className="text-brandGreen">Simp</span>
      </span>
    </Link>
  );
}
