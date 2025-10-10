"use client";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChangeEvent, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BsPlusLg } from "react-icons/bs";
type Category = {
  _id: string;
  name: string;
};

export const AddCategory = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [newCategory, setNewCategory] = useState<string | undefined>();
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const getCategories = async () => {
    const result = await fetch("http://localhost:4000/api/categories");
    const responseData = await result.json();
    console.log({ responseData });
    const { data } = responseData;
    console.log(data);
    setCategories(data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const newCategoryNameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewCategory(e.target.value);
  };
  const createCategoryHandler = async () => {
    await fetch("http://localhost:4000/api/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newCategory,
      }),
    });
    setNewCategory("");
    setModalOpen(false);
    await getCategories();
  };

  // const deleteCategoryHandler = async (category: string) => {
  //   await fetch("http://localhost:4000/api/categories/delete", {
  //     method: "POST",
  //     mode: "no-cors",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify(category),
  //   });
  // };

  return (
    <div className="bg-[#FFF] border rounded-[12px]">
      <div className="p-6">
        <p className="font-semibold text-xl leading-7 pb-4">Dishes category</p>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category._id}
              variant="outline"
              className="border rounded-[25%]"
            >
              <div>{category.name}</div>
            </Button>
          ))}

          <Dialog open={modalOpen} onOpenChange={setModalOpen}>
            <DialogTrigger asChild>
              {/* <Badge
                onClick={() => setModalOpen(true)}
                variant={"outline"}
                className="cursor-pointer hover:bg-gray-500/20"
              >
                +
              </Badge> */}

              <div onClick={() => setModalOpen(true)}>
                <div className="w-10 h-10 bg-red-500 border rounded-[20px] hover:bg-primary">
                  <div className="flex justify-center items-center pt-2.5 pr-0">
                    <BsPlusLg className="text-white size-[16px]" />
                  </div>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="w-[463px] p-6">
              <DialogHeader>
                <DialogTitle>Add new category</DialogTitle>
              </DialogHeader>
              <p>Category name</p>
              <Input
                type="text"
                placeholder="new category"
                onChange={newCategoryNameChangeHandler}
              />
              <Button onClick={createCategoryHandler}>Add category</Button>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};
