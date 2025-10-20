"use client";
import logo from "@/public/logo.svg";
import Image from "next/image";
import Navbar from "../molecules/landing/Navbar";
import ActionsButtons from "./ActionsButtons";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import MobileView from "../molecules/landing/MobileView";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="flex justify-around items-center py-5">
      <div className="logo">
        <Image src={logo} alt="logo" width={200} height={200} />
      </div>
      <Navbar />
      <ActionsButtons />

      <div className="sm:hidden flex">
        <Button className="flex" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </Button>
      </div>
      <MobileView onClose={() => setIsMenuOpen(false)} open={isMenuOpen} />
    </header>
  );
}
