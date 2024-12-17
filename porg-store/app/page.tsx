import Hero from "@/components/sections/hero";
import Products from "@/components/sections/products";
import { productsData } from "@/lib/temporary";


export default function Home() {
  return (
   <>
   <Hero/>
   <Products products={productsData}/>
   </>
  );
}
