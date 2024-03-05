import Image from "next/image";
import React from "react";
import Button from "../Micro/button/Button";
import Item from "../Micro/cards/Item";
import PopularCars from "../Micro/cards/PopularCars";
import Reviews from "../Reviews/Reviews";
import Link from "next/link";

const Details = ({ item }: any) => {
  return (
    <main className="px-5 lg:px-10 py-7 mx-auto container">
      {item && (
        <>
          <div className="flex lg:space-x-5 justify-between flex-col lg:flex-row">
            <section className="lg:w-7/12">
              <div data-aos="fade-in" className="w-full bg-cover bg-[url('/assets/header/ads2.svg')] h-min rounded-lg">
                <div className="p-5 w-full">
                  <h1 className="sm:text-3xl md:text-3xl xl:text-3xl text-xl lg:max-w-sm  font-medium text-white">
                    Get cars with the best design and acceleration
                  </h1>
                  <p className="text-white max-w-sm text-sm sm:text-lg lg:text-base py-3">
                    We offer cars with the best design and acceleration
                    futuristic and elegant sports car
                  </p>
                  <div className="py-2 w-full flex items-center justify-center">
                    <img
                      src={item?.image}
                      alt="car"
                      className="my-3 lg:w-[426px] lg:h-[125px] w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center py-5 sm:space-x-3">
                <img
                  src={item?.image}
                  alt="car"
                  className="rounded-md bg-[url('/assets/header/ads2.svg')] px-3 border-primary w-[96px] h-[64px] sm:w-[210px] sm:h-[124px]"
                />

                <img
                  src="/assets/details/View 2.svg"
                  alt="view car"
                  className="rounded-md w-[96px] h-[64px] sm:w-[148px] sm:h-[124px]"
                />
                <img
                  src="/assets/details/View 3.svg"
                  alt="view car"
                  className="rounded-md w-[96px] h-[64px] sm:w-[148px] sm:h-[124px]"
                />
              </div>
            </section>

            <section className="lg:w-5/12 h-fit p-5 bg-white rounded-xl flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold">{item?.name}</h3>
                <img
                  src="/assets/details/Review.svg"
                  alt="review"
                  className="rounded-md my-5"
                />
                <p className=" font-light text-lg">
                  {item?.name} stands as the quintessence of exceptional
                  performance, drawing inspiration from the most demanding
                  testing arena: the racetrack. Its prowess on the road has
                  transformed it into an embodiment of unmatched excellence,
                  capturing the essence of both power and precision.
                </p>
                <div className="grid grid-cols-2 gap-5 py-5">
                  <p className="text-text">
                    Type:{" "}
                    <span className="text-black font-semibold">
                      {item?.type}
                    </span>
                  </p>
                  <p className="text-text">
                    Capacity:{" "}
                    <span className="text-black font-semibold">
                      {item?.people}
                    </span>
                  </p>
                  <p className="text-text">
                    Steering:{" "}
                    <span className="text-black font-semibold">Automatic</span>
                  </p>

                  <p className="text-text">
                    Gasoline:{" "}
                    <span className="text-black font-semibold">
                      {item?.tank}L
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex sm:flex-row flex-col justify-between">
                <p className="text-xl font-bold">
                  ${item?.price}.00/
                  <span className="font-medium text-lg text-text">day</span>
                </p>
                <Link href={`/details/${item?.id}/payment`} className="my-5 sm:my-0">
                  <Button className="animate-bounce bg-primary rounded-md w-36">
                    Pay Now
                  </Button>
                </Link>
              </div>
            </section>
          </div>
          
          <section className="">
            <Reviews />
          </section>

          <section className="pt-7">
            <h4 className="text-text font-medium text-lg py-5">Recent Cars</h4>
            <div className="lg:grid grid-cols-4 flex space-x-5 xl:overflow-hidden overflow-x-auto">
              <PopularCars />
            </div>
          </section>
          <section className="py-7">
            <h4 className="text-text font-medium text-lg py-5">
              Recommended Cars
            </h4>
            <div className="sm:grid xl:grid-cols-4 sm:grid-cols-2 flex flex-col gap-x-5 gap-y-7">
              <Item />
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default Details;
