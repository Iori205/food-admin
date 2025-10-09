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
export default function Menu() {
  const [pev, setPev] = useState("");
  const [inputvalue, setInputvalue] = useState("");
  const imageput = (e: string | any) => {
    const file = e.target.files[0];
    const filepev = URL.createObjectURL(file);
    setPev(filepev);
  };
  console.log(inputvalue);
  return (
    <Dialog>
      <DialogTrigger>
        <div className="w-10 h-10 bg-red-500 border rounded-[20px]">
          <div className="flex justify-center items-center pt-2.5 pr-0">
            <BsPlusLg className="text-white size-[16px]" />
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add new category</DialogTitle>
          <div className="flex gap-6">
            <div>
              <p>Category name</p>
              <input
                className="border rounded-[6px] w-[194px] h-[38px]"
                placeholder="Type category name..."
                onChange={(e) => setInputvalue(e.target.value)}
              />
            </div>
          </div>
          <div>
            <Button variant="outline">Add category</Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
