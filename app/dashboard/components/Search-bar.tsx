import { Auth } from "@/app/components/Auth";
import { SearchIcon } from "lucide-react";

export default function SearchBar({
  onSearchInput,
}: {
  onSearchInput: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="mx-5 py-">
      <div className="flex justify-between md:flex-row px-4 py-4">
        <div className="flex gap-2 items-center py-1  bg-white border rounded-full w-full md:w-[30%]">
          <SearchIcon className="ml-1" />
          <input
            onChange={(e) => onSearchInput(e.target.value)}
            type="text"
            placeholder="Search..."
            className="bg-transparent w-full outline-none "
          />
        </div>
        <div>
          <Auth />
        </div>
      </div>
    </div>
  );
}
