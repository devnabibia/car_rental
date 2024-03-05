import Image from "next/image";
import React from "react";
import Button from "../Micro/button/Button";
import Pick from "../Micro/cards/Pick";
import Link from "next/link";

const Header = () => {
  return (
    <header className="mx-auto container lg:pt-8 px-5  lg:px-10" id="pickup">
      <div className="flex justify-between space-x-5 ">
        <div  data-aos="fade-right" className="lg:w-[640px] w-full bg-cover bg-[url('/assets/header/ads.svg')] h-min rounded-lg">
          <div className="p-5 w-full">
            <h1 className="sm:text-3xl text-xl lg:max-w-[320px] font-medium text-white">
              The Best Platform for Car Rental
            </h1>
            <p className="text-white max-w-[300px] text-sm sm:text-base py-3">
              Ease of doing a car rental safely and reliably. Of course at a low
              price.
            </p>
            <Link href="/#products">
              <Button className="bg-primary">Rental Car</Button>
            </Link>
            <div className="flex justify-center py-2 items-center w-full">
              <Image
                src="/assets/header/car1.svg"
                alt="ads"
                width={406}
                height={116}
                className="rounded-md "
              />
            </div>
          </div>
        </div>
        <div  data-aos="fade-left" className="relative lg:h-[360px] w-[640px] lg:block hidden bg-[url('/assets/header/ads2.svg')] rounded-lg bg-primary">
          <div className="absolute top-0 p-5 w-full">
            <h1 className="text-3xl max-w-[320px] font-medium text-white">
              Easy way to rent a car at a low price{" "}
            </h1>
            <p className="text-white max-w-[300px] py-3">
              Providing cheap car rental services and safe and comfortable
              facilities.
            </p>
            <Link href="/#products">
              <Button className="bg-[#54A6FF]">Rental Car</Button>
            </Link>
            <div className="flex justify-center items-center py-2 w-full">
              <Image
                src="/assets/header/car2.svg"
                alt="ads"
                width={340}
                height={108}
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
      <section className=" relative flex xl:flex-row flex-col justify-between w-full">
        <Pick one="Locations" two="Date" three="Time" heading="Pick-Up" />
        <div className="absolute top-32 xl:top-16 flex justify-center items-center w-full">
          <Image
            src="/assets/header/Switch.svg"
            alt="ads"
            width={110}
            height={110}
            className="rounded-md"
          />
        </div>
        <Pick one="Locations" two="Date" three="Time" heading="Drop-Off" />
      </section>
    </header>
  );
};

export default Header;
