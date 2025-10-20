"use client";

import { motion } from "framer-motion";
import { Sheet, SheetContent, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import LanguageSwitcher from "@/components/atoms/LanguageSwitcher";
import { ThemeSwitcher } from "@/components/atoms/ThemeSwitcher";

const links = [
  { name: "Features", href: "#features" },
  { name: "Why Us", href: "#why-us" },
  { name: "Pricing", href: "#pricing" },
  { name: "Target Sector", href: "#target-sector" },
  { name: "Contact", href: "#contact" },
  { name: "About", href: "#about" },
];

export default function MobileView({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent side="top" className="p-6 bg-background">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          <ul className="flex flex-col gap-4 mt-6">
            {links.map((link) => (
              <li key={link.name}>
                <SheetClose asChild>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="relative block w-full text-lg text-foreground/90 hover:text-primary transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link.name}
                  </Link>
                </SheetClose>
              </li>
            ))}

            <li>
              <SheetClose asChild>
                <Button
                  variant="default"
                  className="w-full rounded-3xl px-9 py-6"
                >
                  Get started
                </Button>
              </SheetClose>
            </li>
            <li>
              <SheetClose asChild>
                <Button
                  variant="outline"
                  className="w-full rounded-3xl px-9 py-6  border-2 font-semibold border-primary text-primary"
                >
                  Enroll
                </Button>
              </SheetClose>
            </li>
            <li>
              <SheetClose asChild>
                <LanguageSwitcher />
              </SheetClose>
            </li>
            <li>
              <SheetClose asChild>
                <ThemeSwitcher />
              </SheetClose>
            </li>
          </ul>
        </motion.div>
      </SheetContent>
    </Sheet>
  );
}
