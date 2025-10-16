import { ReactNode } from "react";
import { Header } from "@/app/_components/Header";
import { Sidebar } from "./Sidebar";
import { CreateFoodDialog } from "./Fooddialog";
import { FoodList } from "./Foodlist";

//wrapper component
export const AdminLayout = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const customStyle = className + " w-full h-screen";
  return (
    <div className="flex gap-6 bg-secondary">
      <Sidebar />
      <div className={customStyle}>
        <Header />

        {children}
      </div>
    </div>
  );
};
