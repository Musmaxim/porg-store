import { hashSync } from "bcrypt";
import prisma from "./prisma-client";
import { _ingredients, categories, products } from "./constants";
import { Prisma } from "@prisma/client";

const randomDecimalNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: "User",
        email: "user@example.com",
        password: hashSync("111111", 10),
        verified: new Date(),
        role: "USER",
      },
      {
        fullName: "Admin",
        email: "admin@example.com",
        password: hashSync("111111", 10),
        verified: new Date(),
        role: "ADMIN",
      },
    ],
  });
  await prisma.category.createMany({
    data: categories,
  });
  await prisma.ingredient.createMany({
    data: _ingredients,
  });
  await prisma.product.createMany({
    data: products,
  });
  const pizza1 = await prisma.product.create({
    data: {
      name: "Пепперони фреш",
      image:
        "https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp",
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(0, 5),
      },
    },
  });

  const pizza2 = await prisma.product.create({
    data: {
      name: "Сырная",
      image:
        "https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp",
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(5, 10),
      },
    },
  });

  const pizza3 = await prisma.product.create({
    data: {
      name: "Чоризо фреш",
      image:
        "https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp",
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(10, 40),
      },
    },
  });
  await prisma.productItem.createMany({
    data: [
      // Пицца "Пепперони фреш"
      {
        productId: pizza1.id,
        pizzaType: 1,
        price: randomDecimalNumber(190, 600),
        size: 20,
      },
      {
        productId: pizza1.id,
        pizzaType: 2,
        price: randomDecimalNumber(190, 600),
        size: 30,
      },
      {
        productId: pizza1.id,
        pizzaType: 2,
        price: randomDecimalNumber(190, 600),
        size: 40,
      },

      // Пицца "Сырная"
      {
        productId: pizza2.id,
        pizzaType: 1,
        price: randomDecimalNumber(190, 600),
        size: 20,
      },
      {
        productId: pizza2.id,
        pizzaType: 1,
        price: randomDecimalNumber(190, 600),
        size: 30,
      },
      {
        productId: pizza2.id,
        pizzaType: 1,
        price: randomDecimalNumber(190, 600),
        size: 40,
      },
      {
        productId: pizza2.id,
        pizzaType: 2,
        price: randomDecimalNumber(190, 600),
        size: 20,
      },
      {
        productId: pizza2.id,
        pizzaType: 2,
        price: randomDecimalNumber(190, 600),
        size: 30,
      },
      {
        productId: pizza2.id,
        pizzaType: 2,
        price: randomDecimalNumber(190, 600),
        size: 40,
      },

      // Пицца "Чоризо фреш"
      {
        productId: pizza3.id,
        pizzaType: 1,
        price: randomDecimalNumber(190, 600),
        size: 20,
      },
      {
        productId: pizza3.id,
        pizzaType: 2,
        price: randomDecimalNumber(190, 600),
        size: 30,
      },
      {
        productId: pizza3.id,
        pizzaType: 2,
        price: randomDecimalNumber(190, 600),
        size: 40,
      },

      // Остальные продукты
      { productId: 1, price: randomDecimalNumber(190, 600) },
      { productId: 2, price: randomDecimalNumber(190, 600) },
      { productId: 3, price: randomDecimalNumber(190, 600) },
      { productId: 4, price: randomDecimalNumber(190, 600) },
      { productId: 5, price: randomDecimalNumber(190, 600) },
      { productId: 6, price: randomDecimalNumber(190, 600) },
      { productId: 7, price: randomDecimalNumber(190, 600) },
      { productId: 8, price: randomDecimalNumber(190, 600) },
      { productId: 9, price: randomDecimalNumber(190, 600) },
      { productId: 10, price: randomDecimalNumber(190, 600) },
      { productId: 11, price: randomDecimalNumber(190, 600) },
      { productId: 12, price: randomDecimalNumber(190, 600) },
      { productId: 13, price: randomDecimalNumber(190, 600) },
      { productId: 14, price: randomDecimalNumber(190, 600) },
      { productId: 15, price: randomDecimalNumber(190, 600) },
      { productId: 16, price: randomDecimalNumber(190, 600) },
      { productId: 17, price: randomDecimalNumber(190, 600) },
    ],
  });
}
async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.log(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(0);
  });
