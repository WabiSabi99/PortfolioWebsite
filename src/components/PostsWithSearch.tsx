// PostsWithSearch.tsx
// Provides a search input to filter blog posts by title, and displays the filtered list.

"use client";

import { PostMetadata } from "@/lib/posts";
import { Delete } from "lucide-react";
import { useState } from "react";
import Posts from "./Posts";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";

interface Props {
  posts: PostMetadata[];
}

export default function PostsWithSearch({ posts }: Props) {
  const [query, setQuery] = useState(""); // Search query state
  const filtered = posts.filter((post) =>
    post.title?.toLowerCase().includes(query.toLowerCase()), // Filter posts by title
  );

  const resetFilter = () => setQuery(""); // Clear search

  return (
    <div className="flex flex-col gap-12">
      <div className="flex items-center gap-3">
        <Input
          type="text"
          placeholder="Search something..."
          value={query}
          onChange={(e) => setQuery(e.target.value)} // Update query on input
        />
        <Button
          size="sm"
          variant="secondary"
          onClick={resetFilter}
          disabled={query.length === 0}
        >
          Clear
          <Delete className="ml-2 size-4" /> {/* Clear icon */}
        </Button>
      </div>

      <Posts posts={filtered} /> {/* Show filtered posts */}
    </div>
  );
}
