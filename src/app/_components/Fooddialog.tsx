import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChangeEvent, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { Textarea } from "@/components/ui/textarea";
import { FoodCard } from "./Foodcard";

type CategoryType = {
  name: string;
  _id: string;
};

export const CreateFoodDialog = () => {
  const [image, setImage] = useState<File | undefined>();
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [ingredients, setIngredients] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [categories, setCategories] = useState<CategoryType[]>([]);

  const getCategories = async () => {
    const response = await fetch("http://localhost:4000/api/categories");
    const data = await response.json();
    setCategories(data.data);
  };
  useEffect(() => {
    getCategories();
  }, []);

  const addFoodHandler = async () => {
    if (!name || !price || !image || !ingredients || !selectedCategory) {
      alert("All fields are required");
      return;
    }
    const form = new FormData();

    form.append("name", name);
    form.append("price", String(price));
    form.append("image", image);
    form.append("ingredients", ingredients);
    form.append("categoryId", selectedCategory);

    try {
      const response = await fetch("http://localhost:4000/api/food", {
        method: "POST",
        body: form,
      });

      const data = await response.json();
      if (response.ok) {
        alert("Food created successfully!");
        setName("");
        setPrice(0);
        setImage(undefined);
        setIngredients("");
        setSelectedCategory(null);
      } else {
        alert(data.error || "Failed to create food");
      }
    } catch (error) {
      alert("Failed to create food");
    }
  };

  const nameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const priceChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value));
  };
  const fileChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };
  type NewType = HTMLTextAreaElement;

  const ingredientsChangeHandler = (e: ChangeEvent<NewType>) => {
    setIngredients(e.target.value);
  };

  return (
    <div>
      <div></div>
      <div className="bg-[#FFF] border mr-10 rounded-[12px]">
        <div>
          <div className="p-5 flex justify-between flex-wrap">
            <div className="w-[270px] h-[241px] border-2 border-red-500 border-dashed rounded-2xl">
              <div className="text-center p-[58.38px] flex flex-wrap justify-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="w-10 h-10 bg-red-500 border rounded-[20px] hover:bg-primary">
                      <div className="flex justify-center items-center pt-2.5 pr-0">
                        <BsPlusLg className="text-white size-[16px] " />
                      </div>
                    </div>
                  </DialogTrigger>
                  <p className="pt-6">Add new Dish to Salads </p>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Add new Dish to Appetizers</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4">
                      <div className="flex gap-6">
                        <div className="grid gap-3">
                          <Label htmlFor="name">Food name</Label>
                          <Input
                            id="name"
                            name="name"
                            value={name}
                            onChange={nameChangeHandler}
                            placeholder="Type food name"
                          />
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="price">Food price</Label>
                          <Input
                            id="price"
                            name="price"
                            type="number"
                            value={price}
                            onChange={priceChangeHandler}
                            placeholder="Type food price"
                          />
                        </div>
                      </div>
                      <div className="grid gap-3">
                        {categories.length > 0 && (
                          <Select
                            onValueChange={(value) =>
                              setSelectedCategory(value)
                            }
                          >
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="Category" />
                            </SelectTrigger>
                            <SelectContent>
                              {categories.map((category) => {
                                return (
                                  <SelectItem
                                    key={category._id}
                                    value={category._id}
                                  >
                                    {category.name}
                                  </SelectItem>
                                );
                              })}
                            </SelectContent>
                          </Select>
                        )}
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="ingredients">Ingredients</Label>
                        <Textarea
                          id="ingredients"
                          name="ingredients"
                          value={ingredients}
                          onChange={ingredientsChangeHandler}
                          placeholder="List ingredients..."
                        />
                      </div>
                      <div className="grid w-full max-w-sm items-center gap-3">
                        <Label htmlFor="picture">Food image</Label>
                        <Input
                          id="picture"
                          type="file"
                          onChange={fileChangeHandler}
                        />
                      </div>
                      <div className="flex justify-end">
                        <Button
                          type="submit"
                          size={"sm"}
                          className="w-fit px-4 py-[10px]"
                          onClick={addFoodHandler}
                        >
                          <p className="leading-5">Add Dish</p>
                        </Button>
                      </div>
                    </div>
                    <DialogFooter></DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
        <FoodCard />
      </div>
    </div>
  );
};
