import Container from "@/components/shared/container";
import Filtres from "@/components/shared/filtres";
import ProductGroupList from "@/components/shared/products-group-list";
import { Title } from "@/components/shared/title";
import TopBar from "@/components/shared/top-bar";
import prisma from "@/prisma/prisma-client";

export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      product: {
        include: {
          ingredients: true,
          items: true,
        },
      },
    },
  });
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar
        categories={categories.filter(
          (category) => category.product.length > 0
        )}
      />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filtres />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {categories.map(
                (category) =>
                  category.product.length > 0 && (
                    <ProductGroupList
                      title={category.name}
                      key={category.id}
                      categoryId={category.id}
                      items={category.product}
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
