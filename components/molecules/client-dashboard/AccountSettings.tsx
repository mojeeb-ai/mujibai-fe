"use client";
import PasswordInput from "@/components/atoms/PasswordInput";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function AccountSettings() {
  return (
    <div className="w-full">
      <Card className="bg-transparent shadow-none border-none">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            Profile Settings
          </CardTitle>
        </CardHeader>

        <CardContent className="p-6 dark:bg-[#00143473] bg-[#FFFFFFBF] rounded-2xl">
          <div className="flex flex-col gap-2 mb-6">
            <h1 className="font-semibold text-lg">Profile Information</h1>
            <p className="text-sm text-gray-400">
              Update your personal details and contact information.
            </p>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* First Name */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="firstName" className="text-sm font-medium">
                First Name
              </Label>
              <Input
                id="firstName"
                type="text"
                placeholder="Your first name"
                className="bg-[#06B6D40F] dark:bg-[#FFFFFF0F] border-none text-white placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-primary"
              />
            </div>

            {/* Last Name */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="lastName" className="text-sm font-medium">
                Last Name
              </Label>
              <Input
                id="lastName"
                type="text"
                placeholder="Your last name"
                className="bg-[#06B6D40F] dark:bg-[#FFFFFF0F] border-none text-white placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-primary"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Your email address"
                className="bg-[#06B6D40F] dark:bg-[#FFFFFF0F] border-none text-white placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-primary"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="phone" className="text-sm font-medium">
                Phone
              </Label>
              <Input
                id="phone"
                type="text"
                placeholder="Your phone number"
                className="bg-[#06B6D40F] dark:bg-[#FFFFFF0F] border-none text-white placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-primary"
              />
            </div>

            {/* Location */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="location" className="text-sm font-medium">
                Location
              </Label>
              <Input
                id="location"
                type="text"
                placeholder="Your location"
                className="bg-[#06B6D40F] dark:bg-[#FFFFFF0F] border-none text-white placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-primary"
              />
            </div>

            {/* Bio */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="bio" className="text-sm font-medium">
                Bio
              </Label>
              <Input
                id="bio"
                type="text"
                placeholder="Your bio"
                className="bg-[#06B6D40F] dark:bg-[#FFFFFF0F] border-none text-white placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-primary"
              />
            </div>

            {/* ===== Password Section ===== */}
            <div className="flex flex-col col-span-full mt-8 gap-2">
              <h1 className="font-semibold text-lg">Password Management</h1>
              <p className="text-sm text-gray-400">
                Update your password for enhanced account security.
              </p>
            </div>

            {/* Current Password */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="currentPassword" className="text-sm font-medium">
                Current Password
              </Label>
              <PasswordInput placeholder="********" />
            </div>

            {/* New Password */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="newPassword" className="text-sm font-medium">
                New Password
              </Label>
              <PasswordInput placeholder="********" />
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="confirmPassword" className="text-sm font-medium">
                Confirm Password
              </Label>
              <PasswordInput placeholder="********" />
            </div>

            {/* Save Button */}
            <div className="col-span-full flex justify-end mt-6">
              <Button
                className="font-semibold px-8 py-2 rounded-full"
                type="button"
              >
                Save Changes
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
