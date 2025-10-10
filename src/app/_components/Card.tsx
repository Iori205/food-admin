"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BsPlusLg } from "react-icons/bs";
import { Textarea } from "@/components/ui/textarea";
import { CiImageOn } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import { ReactNode, useState } from "react";
import { MdCancel } from "react-icons/md";
export default function Card() {
  const [pev, setPev] = useState("");
  const imageput = (e: string | any) => {
    const file = e.target.files[0];
    const filepev = URL.createObjectURL(file);
    setPev(filepev);
  };

  return (
    <div className="w-[239px] h-[225px] border-2 border-red-500 border-dashed rounded-2xl">
      <div className="p-[58.38px] text-center">
        <Dialog>
          <DialogTrigger>
            <div className="w-10 h-10 bg-red-500 border rounded-[20px]">
              <div className="flex justify-center items-center pt-2.5 pr-0">
                <BsPlusLg className="text-white size-[16px]" />
              </div>
            </div>
          </DialogTrigger>
          <p>Add new Dish to Salads </p>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add new Dish to Appetizers</DialogTitle>
              <div className="flex gap-6">
                <div>
                  <p>Food name</p>
                  <input
                    className="border rounded-[6px] w-[194px] h-[38px]"
                    placeholder="Type food name"
                  />
                </div>
                <div>
                  <p>Food price</p>
                  <input
                    className="border rounded-[6px] w-[194px] h-[38px]"
                    placeholder="Type food price"
                  />
                </div>
              </div>
              <div>
                <p>Ingredients</p>
                <Textarea
                  className="border rounded-[6px] w-[412px] h-[90px] flex justify-end"
                  placeholder="List ingredients..."
                />
              </div>
              <div>
                <p>Food image</p>
                <div className="w-[412px] h-[106px] border rounded-[6px] relative">
                  <img
                    className="absolute border rounded-[6px] inset-0 h-full w-full object-cover object-center"
                    src={pev}
                  ></img>
                  <input
                    onChange={(e) => imageput(e)}
                    type="file"
                    className="absolute opacity-0 inset-0"
                  />
                  <CiImageOn />
                  <p className="text-[14px]">
                    Choose a file or drag & drop it here
                  </p>
                  <Button variant="ghost">
                    <MdCancel className="text-gray-400 size-4" />
                  </Button>
                </div>
              </div>
              <div>
                <Button variant="outline">Add Dish</Button>
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
