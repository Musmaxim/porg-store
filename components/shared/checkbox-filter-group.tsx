"use client";

import React, { FC, useState } from "react";

import { FilterCheckBoxProps, FilterCheckBox } from "./filter-checkbox";
import { Input } from "../ui/input";

type Item = FilterCheckBoxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItems: Item[];
  limit: number;
  searchInputPlaceholder?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string[];
  className: string;
}

export const CheckboxFilterGroup: FC<Props> = ({
  title,
  items,
  defaultItems,
  limit,
  searchInputPlaceholder = "Поиск...",
  className,
  onChange,
  defaultValue,
}) => {
  const [showAll, setShowAll] = useState(false);

  const [searchValue, setSearchValue] = useState("");

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const list = showAll ? items.filter((item)=>item.text.toLowerCase().includes(searchValue.toLocaleLowerCase())) : defaultItems;

  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>

      {showAll && (
        <div className="mb-5">
          <Input
            onChange={onChangeSearch}
            placeholder={searchInputPlaceholder}
            className="bg-gray-50 border-none"
          />
        </div>
      )}

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {list.map((item, index) => (
          <FilterCheckBox
            key={index}
            text={item.text}
            value={item.value}
            endAdorment={item.endAdorment}
            checked={false}
            onCheckedChange={(test) => console.log(test)}
          />
        ))}
      </div>
      {items.length > limit && (
        <div className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}>
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-primary mt-3"
          >
            {showAll ? "Скрыть" : "Показать все"}
          </button>
        </div>
      )}
    </div>
  );
};
