"use client";
import Image from "next/image";
import notFound from "@/assets/images/404.svg";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";

const NotFoundPage = () => {
  const { push } = useRouter();
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-screen-lg px-40">
        <main className="flex flex-col justify-center items-center text-center">
          <Image
            className="h-auto max-w-[90%] md:max-w-[100%] lg:max-w-[100%]"
            alt="404"
            src={notFound}
          />
          <div className="flex flex-col items-center gap-4 mt-4">
            <p className="m-0 text-sm font-normal leading-tight text-slate-900">
              Oops! Page not found
            </p>
            <Button
              size="large"
              className="!w-44 !text-base !hover:text-white !hover:cursor-pointer !bg-blue-500 !text-white mt-1"
              onClick={() => push("/home")}
            >
              Go Back Home
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
};
export default NotFoundPage;
