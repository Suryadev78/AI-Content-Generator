"use client";
import { CreditCard, History, Rocket, WandSparkles } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Sidebar() {
  const path = usePathname();
  console.log(path);
  const menulist = [
    {
      name: "Magic tools",
      icon: WandSparkles,
      path: "/dashboard",
    },
    {
      name: "Output History",
      icon: History,
      path: "/dashboard/history",
    },
    {
      name: "Upgrade",
      icon: CreditCard,
      path: "/dashboard/upgrade",
    },
  ];
  return (
    <div className="p-3 bg-white h-[800px] ">
      <div className="items-center flex flex-col">
        <Rocket />
        <div className="text-xl">StartupX</div>
      </div>
      <div className="mt-5 h-max flex flex-col justify-between">
        {menulist.map((menu) => (
          <Link
            className={`flex gap-2 mb-2 p-3 ${
              path === menu.path ? "bg-gray-900 text-white" : "bg-white"
            } hover:bg-gray-900 hover:text-white rounded-lg items-center cursor-pointer`}
            href={menu.path}
            key={menu.name}
          >
            <menu.icon className="h-6 w-6" />
            {menu.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
