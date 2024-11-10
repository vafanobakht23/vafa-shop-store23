import React from "react";
import dynamic from "next/dynamic";
import Loading from "./components/Loading";

const Home = dynamic(() => import("@/app/home/components/Home"), {
  ssr: false,
  loading: () => <Loading />,
});

const page = () => {
  return <Home />;
};

export default page;
