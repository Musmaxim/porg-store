import Link from "next/link";
import React, { FC } from "react";
import { Title } from "./title";
import { Plus } from "lucide-react";
import { Button } from "../ui/button";

type Props = {
  className?: string;
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

const ProductCard: FC<Props> = ({ className, id, name, price, imageUrl }) => {
  return (
    <div className={className}>
      <Link href="/product/1">
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <img className="w-[215px] h-[215px]" src={imageUrl} alt={name} />
        </div>
        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
        <p className="text-sm text-gray-500">
          Цыпленок, моцарелла, сыры Чеддер и Пармезан, сырный соус, томаты, соу,
          чеснок
        </p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            от <b> {price} ₽</b>
          </span>

          <Button variant="secondary" className="text-base font-bold">
            <Plus size={20} className="mr-2" />
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
