"use client";
import SearchBar from "./components/Search-bar";
import Template from "./components/template";
import { useState } from "react";
export default function DashboardPage() {
  const [searchInput, setSearchInput] = useState<string>("");
  console.log(searchInput);
  return (
    <div className="">
      <SearchBar onSearchInput={setSearchInput} />
      <Template searchInput={searchInput} />
    </div>
  );
}
