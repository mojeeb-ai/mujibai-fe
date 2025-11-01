import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

/**
 * EnrollmentForm — Company Enrollment Form section
 */
export default function EnrollmentForm() {
  return (
    <div
      className="
        rounded-2xl p-8 w-full
        bg-[#FFFFFFCC] dark:bg-[#06B6D40F]
        shadow-[0_0_25px_rgba(0,0,0,0.05)]
        backdrop-blur-md
        transition-all duration-200
      "
    >
      <h2 className="text-2xl font-semibold mb-6 text-foreground">
        Company Enrollment form
      </h2>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="flex flex-col gap-1">
          <Label className="text-sm font-medium">
            Full Name <span className="text-cyan-500">*</span>
          </Label>
          <Input
            placeholder="Your full name"
            className="bg-[#06B6D40F] border-none rounded-lg h-11 text-gray-900 placeholder:text-gray-500"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <Label className="text-sm font-medium">
            Email <span className="text-cyan-500">*</span>
          </Label>
          <Input
            placeholder="Your email"
            className="bg-[#06B6D40F] border-none rounded-lg h-11 text-gray-900 placeholder:text-gray-500"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1">
          <Label className="text-sm font-medium">
            Phone <span className="text-cyan-500">*</span>
          </Label>
          <Input
            placeholder="Your phone"
            className="bg-[#06B6D40F] border-none rounded-lg h-11 text-gray-900 placeholder:text-gray-500"
          />
        </div>

        {/* Company Name */}
        <div className="flex flex-col gap-1">
          <Label className="text-sm font-medium">
            Company Name <span className="text-cyan-500">*</span>
          </Label>
          <Input
            placeholder="Your company name"
            className="bg-[#06B6D40F] border-none rounded-lg h-11 text-gray-900 placeholder:text-gray-500"
          />
        </div>

        {/* Company Website */}
        <div className="flex flex-col gap-1">
          <Label className="text-sm font-medium">
            Company Website <span className="text-cyan-500">*</span>
          </Label>
          <Input
            placeholder="Your company website URL"
            className="bg-[#06B6D40F] border-none rounded-lg h-11 text-gray-900 placeholder:text-gray-500"
          />
        </div>

        {/* Address */}
        <div className="flex flex-col gap-1">
          <Label className="text-sm font-medium">
            Address <span className="text-cyan-500">*</span>
          </Label>
          <Input
            placeholder="Your address"
            className="bg-[#06B6D40F] border-none rounded-lg h-11 text-gray-900 placeholder:text-gray-500"
          />
        </div>

        {/* Industry */}
        <div className="flex flex-col gap-1">
          <Label className="text-sm font-medium">
            Industry <span className="text-cyan-500">*</span>
          </Label>
          <Input
            placeholder="Your industry"
            className="bg-[#06B6D40F] border-none rounded-lg h-11 text-gray-900 placeholder:text-gray-500"
          />
        </div>

        {/* Commercial Register */}
        <div className="flex flex-col gap-1">
          <Label className="text-sm font-medium">
            Commercial Register <span className="text-cyan-500">*</span>
          </Label>
          <Input
            placeholder="Your commercial register"
            className="bg-[#06B6D40F] border-none rounded-lg h-11 text-gray-900 placeholder:text-gray-500"
          />
        </div>

        {/* Tax ID */}
        <div className="flex flex-col gap-1">
          <Label className="text-sm font-medium">
            Tax ID <span className="text-cyan-500">*</span>
          </Label>
          <Input
            placeholder="Your tax ID start with #"
            className="bg-[#06B6D40F] border-none rounded-lg h-11 text-gray-900 placeholder:text-gray-500"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1 md:col-span-2">
          <Label className="text-sm font-medium">
            Message <span className="text-cyan-500">*</span>
          </Label>
          <Textarea
            placeholder="Your message"
            className="bg-[#06B6D40F] border-none rounded-lg text-gray-900 placeholder:text-gray-500 h-24"
          />
        </div>
      </form>

      {/* Submit Button */}
      <div className="flex justify-end mt-8">
        <Button className="bg-[#00B4D8] hover:bg-[#0096C7] text-white px-8 py-2 rounded-full shadow-md transition">
          Submit Application
        </Button>
      </div>
    </div>
  );
}
