import { cn } from "@/lib/utils";
import React, { FC } from "react";
import { Title } from "./title";
import { FilterCheckBox } from "./filter-checkbox";
import { Input } from "../ui/input";
import { RangeSlider } from "./range-slider";
import { CheckboxFilterGroup } from "./checkbox-filter-group";

type Props = {
  className?: string;
};

const Filtres: FC<Props> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />
      <div className="flex flex-col gap-4">
        <FilterCheckBox text="Можно собирать" value="1" />
        <FilterCheckBox text="Новинки" value="2" />
      </div>
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            defaultValue={0}
          />
          <Input
            type="number"
            placeholder="1000"
            min={100}
            max={1000}
            defaultValue={1000}
          />
        </div>
        <RangeSlider min={0} max={1000} step={10} />
      </div>
      <CheckboxFilterGroup
        title="Ингридиенты"
        className="mt-5"
        limit={6}
        defaultItems={[
          {
            text: "Сырный соус",
            value: "1",
          },
          {
            text: "Моцарелла",
            value: "2",
          },
          {
            text: "Соленые огурчики",
            value: "3",
          },
          {
            text: "Чеснок",
            value: "4",
          },
          {
            text: "Красный лук",
            value: "5",
          },
          {
            text: "Томаты",
            value: "6",
          },
        ]}
        items={[
          {
            text: "Сырный соус",
            value: "1",
          },
          {
            text: "Моцарелла",
            value: "2",
          },
          {
            text: "Соленые огурчики",
            value: "3",
          },
          {
            text: "Чеснок",
            value: "4",
          },
          {
            text: "Красный лук",
            value: "5",
          },
          {
            text: "Томаты",
            value: "6",
          },
        ]}
      />
    </div>
  );
};

export default Filtres;
