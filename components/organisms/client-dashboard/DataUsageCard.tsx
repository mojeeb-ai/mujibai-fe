"use client";
import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud } from "lucide-react";
import Link from "next/link";

/**
 * DataUsageCard — visualizes current data usage with a clean, compact layout.
 */
export default function DataUsageCard({ used = 52.7, total = 100 }) {
  const remaining = useMemo(() => total - used, [used, total]);

  return (
    <Card className="w-full bg-transparent border-0 shadow-none">
      <CardHeader className="text-center">
        <CardTitle className="text-xl font-semibold text-foreground text-left">
          Data Usage
        </CardTitle>
      </CardHeader>

      <CardContent className="dark:bg-[#001434A6] bg-[#FFFFFFBF]  rounded-2xl p-6 flex flex-col items-center">
        <div className="relative w-[220px] h-[140px] flex items-center justify-center">
          {/* Centered overlay text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-1">
            <p className="text-primary text-sm leading-tight flex items-center gap-1 ">
              <Cloud fill="#06B6D4" /> Data
            </p>
            <h3 className="text-3xl font-semibold text-foreground leading-none">
              {remaining.toFixed(2)} GB
            </h3>
            <p className="text-sm text-foreground leading-tight">
              of {total} GB left
            </p>
            <Link
              href="#"
              className="underline text-sm text-foreground hover:text-primary transition-colors"
            >
              More
            </Link>
          </div>
        </div>

        <Button className="w-full mt-6 text-foreground rounded-full py-4 bg-cyan-400 font-semibold hover:bg-cyan-300 transition-colors">
          Upgrade Plan
        </Button>
      </CardContent>
    </Card>
  );
}
