"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

export default function UpgradePage() {
  const handleclick = async () => {
    alert("Upgrade to Pro");
  };
  return (
    <div className="pl-1  bg-slate-100">
      <div className="mx-5  ">
        <div className="p-1 ">
          <h3 className="text-center scroll-m-20 text-2xl font-semibold tracking-tight">
            Upgrade to Pro
          </h3>
        </div>

        <Card className="mt-3 w-72">
          <CardHeader>
            <CardTitle>10$ One-Time Buy</CardTitle>
            <CardDescription>10,000 AI Credits</CardDescription>
          </CardHeader>
          <CardContent>
            <div className=" justify-center items-start">
              <p>
                <Check></Check> 10,000 AI Credits{" "}
              </p>
              <p>
                <Check></Check> 100,000 Words/purchase{" "}
              </p>
              <p>
                <Check></Check> All Template Access{" "}
              </p>
              <p>
                <Check></Check> Retain All Features{" "}
              </p>
            </div>
          </CardContent>
          <div className="flex justify-center mb-4">
            <button
              onClick={handleclick}
              className="inline-flex h-10 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              Upgrade to Pro
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
}
