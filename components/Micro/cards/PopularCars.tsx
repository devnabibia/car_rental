import React from "react";
import Button from "../button/Button";
import { BsFuelPumpDieselFill, BsFillPeopleFill } from "react-icons/bs";
import { GiSteeringWheel } from "react-icons/gi";
import Supabase from "@/components/Supabase/Supabase";
import Link from "next/link";

const PopularCars = () => {
  const tag = "popular";
  const [popularCars, setPopularCars] = React.useState<null | any>(null);
  React.useEffect(() => {
    const fetchCars = async () => {
      const { data, error } = await Supabase.from("cars").select();
      if (error) {
        console.log(error);
      }
      setPopularCars(data);
    };
    fetchCars();
  }, []);

  const filterCars = popularCars?.filter(
    (popular: { [key: string]: string }) => {
      return popular.tag === tag;
    }
  );

  return (
    <>
      {filterCars &&
        filterCars.map((popularCar: { [key: string]: string }) => (
          <div
            className="rounded-lg p-4 bg-white"
            key={popularCar.id}
            data-aos="fade-in"
          >
            <div>
              <div>
                <hgroup>
                  <h3 className="text-base font-bold">{popularCar.name}</h3>
                  <h4 className="font-medium text-lg lg:text-base text-text">
                    {popularCar.type}
                  </h4>
                </hgroup>
              </div>
              <img
                src={popularCar.image}
                alt="car"
                className="my-12 w-[270px] h-[108px]"
              />
            </div>
            <div>
              <ul className="flex justify-between text-text text-sm">
                <li className="flex items-center">
                  <span className="pr-2 text-base">
                    <BsFuelPumpDieselFill />
                  </span>
                  {popularCar.tank}L
                </li>
                <li className="flex items-center">
                  <span className="pr-2 text-base">
                    <GiSteeringWheel />
                  </span>
                  Manual
                </li>
                <li className="flex items-center">
                  <span className="pr-2 text-base">
                    <BsFillPeopleFill />
                  </span>
                  {popularCar.people}
                </li>
              </ul>
              <div className="flex pt-5 justify-between">
                <p className="text-base font-medium text-text">
                  <span className="text-black font-bold text-base">
                    ${popularCar.price}.00/
                  </span>
                  day
                </p>
                <Link href={`/details/${popularCar.id}`}>
                  <Button className="bg-primary w-20  ml-10 lg:ml-5 xl:ml-10 text-sm text-white font-medium">
                    Rent Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default PopularCars;
