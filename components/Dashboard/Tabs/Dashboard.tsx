import PopularCars from "@/components/Micro/cards/PopularCars";
import Image from "next/image";
import React from "react";

const Dashboard = () => {
  return (
    <main className="flex mx-5 lg:flex-row flex-col justify-between lg:space-x-5">
      <div className="bg-white rounded-xl p-5 lg:w-6/12">
        <h3 className="text-xl font-bold pb-2">Transaction Details</h3>
        <img
          src="/assets/header/Maps.svg"
          alt=""
          className="w-full lg:w-[486px] lg:h-[272px]"
        />
        <nav className="flex justify-between py-3 text-text font-medium">
          <h3>Popular Cars</h3>
          <p className="text-primary">View All</p>
        </nav>
        <div className=" flex flex-col md:flex-row space-x-5 gap-y-5 overflow-x-auto">
          <PopularCars />
        </div>
      </div>
      <div className="lg:w-6/12 lg:mt-0 mt-7 ">
        <Image
          src="/assets/header/rental.svg"
          alt=""
          width={486}
          height={272}
        />

        <div className="bg-white rounded-xl p-5 my-7 w-full ">
          <nav className="flex justify-between text-text font-medium">
            <h3> Recent Transaction</h3>
            <p className="text-primary">View All</p>
          </nav>
          <p className="py-5">You have no recent transaction!</p>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
