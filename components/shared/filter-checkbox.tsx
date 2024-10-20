import React, { FC, ReactNode } from "react";
import { Checkbox } from "../ui/checkbox";

export interface FilterCheckBoxProps {
  text: string;
  value: string;
  endAdorment?: ReactNode;
  onCheckedChange?: (cheked: boolean) => void;
  checked?: boolean;
  name?: string;
}

export const FilterCheckBox: FC<FilterCheckBoxProps> = ({
  text,
  value,
  endAdorment,
  onCheckedChange,
  checked,
  name,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        onCheckedChange={onCheckedChange}
        checked={checked}
        value={value}
        className="rounded-[8px] w-6 h-6"
        id={`checkbox-${String(name)}-${String(value)}`}
      />
      <label
        htmlFor={`checkbox-${String(name)}-${String(value)}`}
        className="leading-none cursor-pointer flex-1"
      >
        {text}
      </label>
      {endAdorment}
    </div>
  );
};
