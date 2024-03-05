import React from "react";
import PopularCars from "../Micro/cards/PopularCars";
const Popular = () => {
  return (
    <main  id="products" className="mx-auto container px-5 lg:px-10 w-full">
      <nav className="flex justify-between py-4 text-text font-medium">
        <h3>Popular Cars</h3>
        <p className="text-primary">View All</p>
      </nav>
      <div className="lg:grid grid-cols-4 flex space-x-5 xl:overflow-hidden overflow-x-auto">
        <PopularCars/>
      </div>
    </main>
  );
};

export default Popular;
