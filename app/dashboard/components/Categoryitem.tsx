"use client";
import { Category } from "./Category";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import qs from "querystring";

export default function Categoryitem({ name, value }: Category) {
  const path = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const isSelected = category === value;

  function handleOnclick() {
    const query = qs.stringify({
      category: isSelected ? null : value,
    });

    const url = `${path}?${query}`; // Combine path with query string
    router.push(url);
    console.log(url);
  }

  return (
    <div className="hidden md:block  flex-wrap justify-center md:justify-start">
      <Button
        onClick={handleOnclick}
        key={value}
        className="mb-2 md:mb-0 md:mr-2"
      >
        {name}
      </Button>
    </div>
  );
}
