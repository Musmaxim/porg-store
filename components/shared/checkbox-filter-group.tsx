"use client";

import React, { FC, useState } from "react";

import { FilterCheckBoxProps, FilterCheckBox } from "./filter-checkbox";
import { Input } from "../ui/input";
import { Skeleton } from "../ui/skeleton";

type Item = FilterCheckBoxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItems?: Item[];
  limit?: number;
  loading?: boolean;
  searchInputPlaceholder?: string;
  onClickChekbox?: (id:string) => void;
  selected?: Set<string>;
  defaultValue?: string[];
  className?: string;
  name?: string;
}

export const CheckboxFilterGroup: FC<Props> = ({
  title,
  items,
  defaultItems,
  limit=5,
  loading,
  searchInputPlaceholder = "Поиск...",
  className,
  onClickChekbox,
  selected,
  name,
}) => {
  const [showAll, setShowAll] = useState(false);

  const [searchValue, setSearchValue] = useState("");

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  if (loading) {
    return (
      <div className={className}>
        {...Array(limit)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} className="h-6 mb-4 rounded-[8px]" />
          ))}
      </div>
    );
  }

  const list = showAll
    ? items.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLocaleLowerCase())
      )
    : (defaultItems || items).slice(0, limit);

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
        {list && list.map((item, index) => (
          <FilterCheckBox
            key={index}
            text={item.text}
            value={item.value}
            endAdorment={item.endAdorment}
            checked={selected?.has(item.value)}
            onCheckedChange={()=> onClickChekbox?.(item.value)}
            name={name}
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
