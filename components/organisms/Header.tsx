"use client";

import Navbar from "../molecules/landing/Navbar";
import ActionsButtons from "./ActionsButtons";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import MobileView from "../molecules/landing/MobileView";
import Logo from "../atoms/Logo";
import { User } from "@/types/types";
// import { useTranslations } from "next-intl";
export default function Header({ user }: { user: User | null }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="flex justify-around items-center py-5">
      <Logo />
      <Navbar />
      <ActionsButtons user={user} />

      <div className="sm:hidden flex">
        <Button className="flex" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </Button>
      </div>
      <MobileView onClose={() => setIsMenuOpen(false)} open={isMenuOpen} />
    </header>
  );
}
