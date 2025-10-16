"use client";

import { AdminLayout } from "@/app/_components/Adminlayout";
import { CreateFoodDialog } from "@/app/_components/Fooddialog";
import { AddCategory } from "../_components/Addcategory";

export default function ProductPage() {
  return (
    <AdminLayout>
      <>
        <AddCategory />
      </>
      <>
        <CreateFoodDialog />
      </>
    </AdminLayout>
  );
}
