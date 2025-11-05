import Link from "next/link";
import LanguageSwitcher from "../atoms/LanguageSwitcher";
import { ThemeSwitcher } from "../atoms/ThemeSwitcher";
import { Button } from "../ui/button";

export default function ActionsButtons() {
  return (
    <div className="sm:flex hidden justify-center items-center gap-2">
      <ThemeSwitcher />
      <LanguageSwitcher />
      <div className="flex gap-2.5">
        <Button
          className="rounded-full font-medium dark:text-white"
          variant="default"
        >
          <Link href={"/login"} className="px-9 py-3">
            Get Started
          </Link>
        </Button>
        <Button
          className="rounded-full font-bold hover:bg-transparent hover:text-primary border-2 border-primary text-primary dark:border-primary"
          variant="outline"
        >
          <Link href={"/enroll"} className="px-9 py-3">
            Enroll
          </Link>
        </Button>
      </div>
    </div>
  );
}
