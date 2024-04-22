"use client";

import { log } from "console";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

function SearchBox() {
  const [input, setInput] = useState("");
  
  const router = useRouter()

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;

    router.push('/search?term=${input}');
  };

  return (
    <form
      onSubmit={handleSearch}
      className="max-w-6xl max-auto flex justify-between items-center px-5 color:red"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search Keywords..."
        className="flex-1 h-14 rounded-sm placeholder-gray-500 text-gray-500 outline-none bg-transparent dark:text-orange-400"
      />

      <button
        className="text-orange-400 disabled:text-gray-400"
        type="submit"
        disabled={!input}
      >
        Search
      </button>
    </form>
  );
}

export default SearchBox;
