'use client'

import { cn } from "@/lib/utils";
import React, { FC } from "react";

type Variant = {
  name: string;
  value: string;
  disabled?: boolean;
};

interface Props {
  items: readonly Variant[];
  onClick?: (value: Variant["value"]) => void;
  className?: string;
  selectedValue?: Variant["value"];
}

const GroupVariants: FC<Props> = ({
  className,
  items,
  onClick,
  selectedValue,
}) => {
  return (
    <div
      className={cn(
        className,
        "flex justify-between bg-[#F3F3F7] rounded-3xl select-none"
      )}
    >
      {items.map((item) => (
        <button
          key={item.value}
          onClick={() => onClick?.(item.value)}
          className={cn(
            "flex items-center justify-center cursor-pointer h-[30px] px-5 flex-1 rounded-3xl transition-all duration-400 text-sm",
            {"text-gray-500 opacity-50 pointer-events-none" : item.disabled,
            "bg-[#ffffff]" : item.value === selectedValue}
          )}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default GroupVariants;
