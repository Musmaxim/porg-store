import Hero from "@/components/sections/hero";
import Products from "@/components/sections/products";
import Services from "@/components/sections/services";
import { productsData } from "@/lib/temporary";


export default function Home() {
  return (
   <>
   <Hero/>
   <Products products={productsData}/>
   <Services/>
   </>
  );
}
