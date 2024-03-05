import React from "react";
import Item from "../Micro/cards/Item";

const Recommendation = () => {
  return (
    <main className="mx-auto container px-5 lg:px-10 py-8 w-full">
      <nav className="flex justify-between py-4 text-text font-medium">
        <h3>Recommended Cars</h3>
        <p className="text-primary">View All</p>
      </nav>
      <div className="sm:grid xl:grid-cols-4 sm:grid-cols-2 flex flex-col gap-x-5 gap-y-7">
        <Item />
      </div>
    </main>
  );
};

export default Recommendation;
