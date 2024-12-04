"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog";
import React from "react";
import { Product } from "@prisma/client";
import { cn } from "@/lib/utils";
import { Title } from "../title";

interface Props {
  className?: string;
  product: Product;
}

export const ChooseProductMOdal = ({ product, className }: Props) => {
  return (
    <Dialog open={Boolean(product)}>
      <DialogContent
        className={cn(
          "p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden",
          className
        )}
      >
        <Title>{product.name}</Title>
      </DialogContent>
    </Dialog>
  );
};