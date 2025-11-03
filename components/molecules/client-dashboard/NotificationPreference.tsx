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
import { useTranslations } from "next-intl";

export default function NotificationPreference() {
  const t = useTranslations("settings.notificationPreference");
  const [selected, setSelected] = useState("Daily");
  const options = [
    t("newInvoice.daily"),
    t("newInvoice.weekly"),
    t("newInvoice.monthly"),
    t("newInvoice.never"),
  ];

  return (
    <div>
      <Card className="bg-transparent shadow-none border-none">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            {t("emailsNotifications.title")}
          </CardTitle>
          <CardDescription>{t("emailsNotifications.subTitle")}</CardDescription>
        </CardHeader>
        <CardContent className="bg-white dark:bg-[#00143473] py-6 rounded-xl">
          <NotificationController
            title={t("emailsNotifications.dailyPerformanceReportsTitle")}
            description={t(
              "emailsNotifications.dailyPerformanceReportsSubTitle"
            )}
          />
          <NotificationController
            title={t("emailsNotifications.productUpdatesTitle")}
            description={t("emailsNotifications.productUpdatesSubTitle")}
          />
          <NotificationController
            title={t("emailsNotifications.marketingTitle")}
            description={t("emailsNotifications.marketingSubTitle")}
          />
          <NotificationController
            title={t("emailsNotifications.securityTitle")}
            description={t("emailsNotifications.securitySubTitle")}
          />
        </CardContent>
      </Card>

      <Card className="bg-transparent sha dow-none border-none">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            {t("inAppNotifications.title")}
          </CardTitle>
          <CardDescription>{t("inAppNotifications.subTitle")}</CardDescription>
        </CardHeader>
        <CardContent className="bg-white dark:bg-[#00143473] py-6 rounded-xl">
          <NotificationController
            title={t("inAppNotifications.newMessageTitle")}
            description={t("inAppNotifications.newMessageSubTitle")}
          />
          <NotificationController
            title={t("inAppNotifications.taskCompletionTitle")}
            description={t("inAppNotifications.taskCompletionSubTitle")}
          />
          <NotificationController
            title={t("inAppNotifications.featureUsageTipsTitle")}
            description={t("inAppNotifications.featureUsageTipsSubTitle")}
          />
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 items-start justify-start">
        <Card className="bg-transparent shadow-none border-none">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              {t("usageBilling.title")}
            </CardTitle>
            <CardDescription>{t("usageBilling.subTitle")}</CardDescription>
          </CardHeader>
          <CardContent className="bg-white dark:bg-[#00143473] py-6 rounded-xl">
            <NotificationController
              title={t("usageBilling.usageExceedsTitle")}
              description={t("usageBilling.usageExceedsSubTitle")}
            />
            <NotificationController
              title={t("usageBilling.taskCompletionAlertsTitle")}
              description={t("usageBilling.taskCompletionAlertsSubTitle")}
            />
            <NotificationController
              title={t("usageBilling.newInvoiceTitle")}
              description={t("usageBilling.newInvoiceSubTitle")}
            />
          </CardContent>
        </Card>
        <Card className="bg-transparent shadow-none border-none">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              {t("newInvoice.title")}
            </CardTitle>
            <CardDescription>{t("newInvoice.subTitle")}</CardDescription>
          </CardHeader>
          <CardContent className="bg-white dark:bg-[#00143473] py-6 rounded-xl">
            <div className="flex flex-col gap-4">
              <Label className="text-base font-medium text-white">
                {t("newInvoice.chooseYourPreference")}
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
