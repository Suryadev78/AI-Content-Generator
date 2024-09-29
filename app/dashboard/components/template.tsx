"use client";
import { content } from "@/lib/content";
import Link from "next/link";
// React
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
export default function Template({ searchInput }: { searchInput: string }) {
  const [template, setTemplate] = useState(content);
  useEffect(() => {
    if (searchInput && searchInput.length > 2) {
      const filteredTemplate = content.filter((item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setTemplate(filteredTemplate);
    } else {
      setTemplate(content);
    }
  }, [searchInput]);
  return (
    <div className="bg-slate-100 grid grid-cols-1 md:grid-cols-3 gap-3 mx-5 mt-5">
      {template.length === 0 ? (
        <div className="text-center col-span-full">No templates found</div>
      ) : (
        template.map((item) => (
          <motion.div
            key={item.slug}
            whileHover={{ scale: 0.9 }}
            onHoverStart={() => {}}
            onHoverEnd={() => {}}
          >
            <div className="p-2 flex justify-center bg-white h-[180px] rounded-md">
              <Link
                href={`/dashboard/${item.slug}`}
                className="flex flex-col justify-center items-center gap-3"
              >
                {item.icon && <item.icon className="h-8 w-8" />}
                <h2>{item.name}</h2>
              </Link>
            </div>
          </motion.div>
        ))
      )}
    </div>
  );
}
