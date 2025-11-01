import Link from "next/link";
import Logo from "../atoms/Logo";
import PasswordInput from "../atoms/PasswordInput";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function LoginPage() {
  return (
    <div className="w-screen h-screen relative flex justify-center items-center">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
            w-[65%] h-[65%] rounded-full 
            bg-[#06B6D4]/70 blur-[160px] 
            opacity-60 z-[-1]"
      ></div>
      <div className="sm:w-[50%] w-[100%] h-[50%] flex items-center justify-center flex-col gap-5 ">
        <Logo />
        <div className="sm:w-[100%] md:w-[80%] lg:w-[60%] border-t-1 border-b-1 border-white p-10 rounded-2xl bg-[#FFFFFF80] dark:bg-[#06B6D40F]">
          <h1 className="text-2xl font-semibold">Account Login</h1>
          <form className="flex flex-col gap-4 py-5">
            <div>
              <Label>Email</Label>
              <Input
                type="text"
                placeholder="Your Email"
                className="w-full mt-3 focus:outline-none focus:ring-2 border-none focus:ring-[#06B6D4] bg-[#06B6D40F] dark:bg-[#3B82F633] placeholder:text-[#000000BF] dark:placeholder:text-[#FFFFFFBF]"
              />
            </div>
            <div>
              <Label>Password</Label>
              <PasswordInput placeholder="Your Password" />
            </div>
            <div className="w-full flex justify-end items-center">
              <Link
                href="/forget-password"
                className="text-primary capitalize font-semibold hover:underline"
              >
                forget password?
              </Link>
            </div>
            <Button
              type="submit"
              className="w-full rounded-full text-white capitalize py-5 text-md mt-2"
            >
              Log In
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
