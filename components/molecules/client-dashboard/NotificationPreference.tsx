"use client";
import NotificationController from "@/components/atoms/NotificationController";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function NotificationPreference() {
  const [selected, setSelected] = useState("Daily");
  const options = ["Daily", "Weekly", "Monthly", "Never"];

  return (
    <div>
      <Card className="bg-transparent shadow-none border-none">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            Email Notification
          </CardTitle>
          <CardDescription>
            Control which emails you receive about your activity and important
            updates
          </CardDescription>
        </CardHeader>
        <CardContent className="bg-white dark:bg-[#00143473] py-6 rounded-xl">
          <NotificationController
            title="Daily Performance Reports"
            description="Receive a summary of your dashboard activity and insights."
          />
          <NotificationController
            title="Product Updates & Announcements"
            description="Stay informed about new features,improvements and changes"
          />
          <NotificationController
            title="Marketing & Promotional Emails"
            description="Receive offres,tips and news from Mujib AI & partners."
          />
          <NotificationController
            title="Security & Account Alerts"
            description="Important notifications about your account security."
          />
        </CardContent>
      </Card>

      <Card className="bg-transparent shadow-none border-none">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            In App Notification
          </CardTitle>
          <CardDescription>
            Control which emails you receive about your activity and important
            updates
          </CardDescription>
        </CardHeader>
        <CardContent className="bg-white dark:bg-[#00143473] py-6 rounded-xl">
          <NotificationController
            title=" New Message Notification"
            description="Get alerts for new messages or comments in linked integrations"
          />
          <NotificationController
            title="Task Completion Alerts"
            description="Receive a notification when a connected task or automation completes"
          />
          <NotificationController
            title="Feature Usage Tips & Tutorials"
            description="Receive in-app suggestions to help discover and utilize features"
          />
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 items-start justify-start">
        <Card className="bg-transparent shadow-none border-none">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Usage & Billing Alerts
            </CardTitle>
            <CardDescription>
              Controls which emails you receive about your activity and
              important updates.
            </CardDescription>
          </CardHeader>
          <CardContent className="bg-white dark:bg-[#00143473] py-6 rounded-xl">
            <NotificationController
              title="Usage Exceeds Limit"
              description="Notify when my plan usage approaches or exceeds limits"
            />
            <NotificationController
              title="Task Completion Alerts"
              description="Receive a notification when a connected task or automation completes"
            />
            <NotificationController
              title="New Invoice Ready"
              description="Receive an alert when a new invoice is generated for your subscription"
            />
          </CardContent>
        </Card>
        <Card className="bg-transparent shadow-none border-none">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Billing Alerts Frequency
            </CardTitle>
            <CardDescription>
              Controls how often you want to receive email.
            </CardDescription>
          </CardHeader>
          <CardContent className="bg-white dark:bg-[#00143473] py-6 rounded-xl">
            <div className="flex flex-col gap-4">
              <Label className="text-base font-medium text-white">
                Choose your preference.
              </Label>

              <div className="grid grid-cols-2 gap-4">
                {options.map((option) => (
                  <label
                    key={option}
                    className={`cursor-pointer h-20 rounded-2xl px-5 flex items-center gap-4 transition-all duration-200
              ${
                selected === option
                  ? "bg-[#3B82F633] border border-[#06B6D4]"
                  : "bg-[#3B82F614] border border-transparent hover:border-[#3B82F640]"
              }`}
                  >
                    <input
                      type="radio"
                      name="frequency"
                      value={option}
                      checked={selected === option}
                      onChange={() => setSelected(option)}
                      className="appearance-none w-5 h-5 border-2 border-[#06B6D4] rounded-full
                          checked:bg-[#06B6D4] checked:border-[#06B6D4]
                          transition-all duration-200 relative
                          before:content-[''] before:absolute before:inset-1
                          before:rounded-full before:bg-[#06B6D4]
                        checked:before:bg-white"
                    />
                    <span className="text-[16px] font-normal">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
