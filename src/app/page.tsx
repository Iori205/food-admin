"use client";

import { Sidebar } from "@/app/_components/Sidebar";
import Card from "./_components/Card";

import FoodList from "./_components/Foodlist";

export default function Home() {
  return (
    <div className="w-full h-screen bg-secondary">
      {/* <div>
        <Sidebar />
      </div> */}

      <div className="flex gap-4">
        <Card />
        <FoodList />
      </div>
    </div>
  );
}
