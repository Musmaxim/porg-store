import React, { FC, ReactNode } from "react";
import { Checkbox } from "../ui/checkbox";

export interface Props {
  text: string;
  value: string;
  endAdorment?: ReactNode;
  onCheckedChange?: (cheked: boolean) => void;
  checked?: boolean;
}

const FilterCheckBox: FC<Props> = ({
  text,
  value,
  endAdorment,
  onCheckedChange,
  checked,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        onCheckedChange={onCheckedChange}
        checked={checked}
        value={value}
        className="rounded-[8px] w-6 h-6"
        id={`checkbox-${String(value)}`}
      />
      <label
        htmlFor={`checkbox-${String(value)}`}
        className="leading-none cursor-pointer flex-1"
      >
        {text}
      </label>
      {endAdorment}
    </div>
  );
};

export default FilterCheckBox;
