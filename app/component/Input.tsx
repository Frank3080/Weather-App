"use client";
import React from "react";
import { GrSearch } from "react-icons/gr";

export default function Input({
  handleSearch,
  setLocation,
}: {
  handleSearch: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <form className="flex items-center md:w-1/2 w-full order-2 md:order-1">
      <input
        className="w-full bg-transparent border-b-2 placeholder-white outline-none text-white"
        type="text"
        placeholder="Search city"
        onKeyDown={handleSearch}
        onChange={(e) => setLocation(e.target.value)}
      />
      <div className="ml-[-25px] text-white cursor-pointer">
        <GrSearch />
      </div>
    </form>
  );
}
