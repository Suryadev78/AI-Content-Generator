"use client";
import { Auth } from "@/app/components/Auth";
import { SearchIcon } from "lucide-react";
import CategoryComponent from "./Category";
const categories = [
  {
    name: "All",
    value: "All",
  },
  {
    name: "Youtube",
    value: "Youtube",
  },
  {
    name: "Tiktok",
    value: "Tiktok",
  },
  {
    name: "LinkedIn",
    value: "LinkedIn",
  },
  {
    name: "Instagram",
    value: "Instagram",
  },
  {
    name: "Twitter",
    value: "Twitter",
  },
];

export default function SearchBar({
  onSearchInput,
}: {
  onSearchInput: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="mx-5 py-2">
      <div className="flex flex-col md:flex-row justify-between px-4 py-4">
        <div className="flex gap-2 items-center px-1 py-1 bg-white border rounded-full w-full md:w-[30%]">
          <SearchIcon className="ml-1" />
          <input
            onChange={(e) => onSearchInput(e.target.value)}
            type="text"
            placeholder="Search..."
            className="bg-transparent  w-full outline-none "
          />
        </div>
        <div className="mx-4 bg-white px-1 rounded-lg flex justify-center mt-4 md:mt-0">
          <CategoryComponent item={categories} />
        </div>
        <div className="flex items-center mt-4 md:mt-0">
          <Auth />
        </div>
      </div>
    </div>
  );
}
