import { BsPencil } from "react-icons/bs";
import { FoodList } from "./Foodlist";
import { useState, useEffect } from "react";
import { Pencil } from "lucide-react";
type Food = {
  name: string;
  ingredients: string;
  price: number;
  categoryId: string;
  imageUrl: string;
};

export const FoodCard = () => {
  const [foods, setFoods] = useState<Food[]>([]);

  useEffect(() => {
    const getFoods = async () => {
      const res = await fetch("http://localhost:4000/api/food");
      const data = await res.json();
      setFoods(data.data);
    };
    getFoods();
  }, []);

  return (
    <div className="flex gap-5">
      {foods.map((food) => {
        return (
          <div key={food.name}>
            <div
              className="w-[270px] h-[241px]  rounded-[20px]  flex-col  flex   border-1 border-border items-center p-4 justify-between
                      "
            >
              <img
                className="w-[239px] h-[129px] rounded-[12px] absolute"
                src={food.imageUrl}
                alt=""
              />
              <div className="bg-white w-10 h-10 relative  rounded-full text-white text-center items-center flex justify-center text-2xl top-18 left-22 px-2 py-4">
                <Pencil className="text-red-500 w-[19px]" />
              </div>
              <div className="flex-col text-[14px] justify-center">
                <div className="flex justify-between items-center">
                  <h1 className="text-red-500 font-medium">{food.name}</h1>
                  <p className="text-[12px]">{food.price}</p>
                </div>

                <p className="text-[12px] mt-[8px]">{food.ingredients}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
