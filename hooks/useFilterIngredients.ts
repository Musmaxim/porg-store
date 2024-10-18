import { Api } from "@/services/api-client";
import { Ingredient } from "@prisma/client";
import { useEffect, useState } from "react";

interface ReturnProps {
  ingredients: Ingredient[];
  loading: boolean;
}

export const useFilterIngredients = (): ReturnProps => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchIngredients() {
      try {
        setLoading(true);
        const ingredients = await Api.ingredients.getAll();
        setIngredients(ingredients);
        return ingredients;
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchIngredients();
  }, []);
  return { ingredients, loading };
};
