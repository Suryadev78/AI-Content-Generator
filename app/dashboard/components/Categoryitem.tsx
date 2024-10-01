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
    <div>
      <Button onClick={handleOnclick} key={value}>
        {name}
      </Button>
    </div>
  );
}
