"use client";

import qs from "qs";
import { cn } from "@/lib/utils";
import React, { FC, useEffect } from "react";
import { Title } from "./title";
import { Input } from "../ui/input";
import { RangeSlider } from "./range-slider";
import { CheckboxFilterGroup } from "./checkbox-filter-group";
import { useFilterIngredients } from "@/hooks/useFilterIngredients";
import { useSet } from "react-use";
import { useRouter } from "next/navigation";

type Props = {
  className?: string;
};
type PropsPrice = {
  priceFrom: number;
  priceTo: number;
};

const Filtres: FC<Props> = ({ className }) => {

  const router = useRouter();

  const { ingredients, loading, onAddId, selected } = useFilterIngredients();

  const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>([]));

  const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(new Set<string>([]));

  const [prices, setPrice] = React.useState<PropsPrice>({
    priceFrom: 0,
    priceTo: 1000,
  });

  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));

  const updatePrice = (name: keyof PropsPrice, value: number) => {
    setPrice({
      ...prices,
      [name]: value,
    });
  };

  useEffect(() => {
    const filters = {
      ...prices,
      pizzaTypes: Array.from(pizzaTypes),
      sizes: Array.from(sizes),
      ingredients: Array.from(selected),
    };
    const query = qs.stringify(filters, {
      arrayFormat: "comma",
    });

    router.push(`?${query}`);
  
  },[prices, pizzaTypes, sizes, ingredients]);

  return (
    <div className={cn("", className)}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />
      <CheckboxFilterGroup
        title="Тип теста"
        name="pizzaTypes"
        className="mb-5"
        items={[
          { text: "Тонкое", value: "1" },
          { text: "Традиционное", value: "2" }
        ]}
        onClickChekbox={togglePizzaTypes}
        selected={pizzaTypes}
      />
      <CheckboxFilterGroup
        title="Размеры"
        name="sizes"
        className="mb-5"
        items={[
          { text: "20 см", value: "20" },
          { text: "30 см", value: "30" },
          { text: "40 см", value: "40" },
        ]}
        onClickChekbox={toggleSizes}
        selected={sizes}
      />
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            value={String(prices.priceFrom)}
            onChange={({ target }) =>
              updatePrice("priceFrom", Number(target.value))
            }
          />
          <Input
            type="number"
            placeholder="1000"
            min={100}
            max={1000}
            defaultValue={String(prices.priceTo)}
            onChange={({ target }) =>
              updatePrice("priceTo", Number(target.value))
            }
          />
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[prices.priceFrom, prices.priceTo]}
          onValueChange={([priceFrom, priceTo]) =>
            setPrice({ priceFrom, priceTo })
          }
        />
      </div>
      <CheckboxFilterGroup
        title="Ингридиенты"
        name="ingredients"
        className="mt-5"
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickChekbox={onAddId}
        selected={selected}
      />
    </div>
  );
};

export default Filtres;
