"use client";
import { fetchData } from "@/api/useApi";
import { Products } from "@/types/product";
import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import SearchBox from "./Search";
import { PRODUCTS_API } from "@/api/routes";
import NoProductsFound from "@/components/NoProductFound";

const Home = () => {
  const [posts, setPosts] = useState<Products[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function initPosts(): Promise<any> {
      const res = await fetchData(PRODUCTS_API);
      //@ts-ignore
      setPosts(res.products);
    }
    initPosts();
  }, []);

  const filteredPosts = posts?.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <SearchBox setSearch={setSearch} />
      {filteredPosts.length === 0 ? (
        <NoProductsFound />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10 gap-x-20 gap-y-4">
          {filteredPosts.map((post) => (
            <div key={post.id} className="col-span-1">
              <Cards post={post} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
