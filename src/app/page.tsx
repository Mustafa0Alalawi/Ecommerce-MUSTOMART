// "use client";

import Slider from "../app/components/Slider";
import ProductList from "../app/components/ProductList";
import CategoryList from "./components/CategoryList";
import { useEffect, useContext, Suspense } from "react";
import { useWixClient } from "@/hooks/useWixClient";
import { wixClientServer } from "@/lib/wixClientServer";

const HomePage = async () => {
  // const myWixClient = useWixClient();

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const res = await myWixClient.products.queryProducts().find();
  //     console.log(res);
  //   };

  //   getProducts();
  // }, [myWixClient]);

  // const wixClient = await wixClientServer();
  // const res = await wixClient.products.queryProducts().find();
  // console.log(res);


  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl"> Featured Products </h1>
        <Suspense fallback={"Loading"}>
          <ProductList
            categoryId={process.env.NEXT_PUBLIC_FEATURED_PRODUCT_CATEGORY_ID!}
            limit={4}
          />
        </Suspense>
      </div>
      <div className="mt-24 px-4">
        <h1 className="text-2xl md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">
          Categories
        </h1>
        <Suspense fallback={"Loading"}>
        <CategoryList />
        </Suspense>
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl"> New Products </h1>
        <ProductList
          categoryId={process.env.NEXT_PUBLIC_FEATURED_PRODUCT_CATEGORY_ID!}
          limit={4}
        />
      </div>
    </div>
  );
};

export default HomePage;
