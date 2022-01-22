import React from "react";
import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";

export default function Feed() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
      <section className="md:col-span-2">
        {/* Stories */}
        <Stories />
        {/* Posts */}
        <Posts />
      </section>
      <section className="hidden xl:inline-grid md:col-span-1">
        {/* Mini Profile */}
        <div className="fixed">

        <MiniProfile />
        </div>
        {/* Suggestions */}
      </section>
    </main>
  );
}
