import React from "react";
import { AiOutlineSafety } from "react-icons/ai";
import { FaRegDotCircle } from "react-icons/fa";
import Button from "../Micro/button/Button";
import Image from "next/image";
import { toast } from "react-toastify";
import { usePaystackPayment } from "react-paystack";
import { useRouter } from "next/router";

type PaystackProps = {
  reference: string;
  email: string;
  amount: number;
  publicKey: any;
};

const Payment = ({ item }: any) => {
  const router = useRouter();
  const config: PaystackProps = {
    reference: new Date().getTime().toString(),
    email: "Morent@gmail.com",
    amount: item?.price * 80000,
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
  };

  const initializePayment = usePaystackPayment(config);
  const onSuccess = () => {
    toast.error("Your rental has been successfully booked 🎉");
    setTimeout(() => {
      router.push("/");
    }, 1000);
  };

  const onClose = () => {
    toast.error("Your rental has been cancelled, please try again later");
  };

  const tax = 5;
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Your rental has been successfully booked 🎉");
    setTimeout(() => {
      router.push("/");
    }, 1500);
  };
  return (
    <main className="mx-auto container py-7 px-5 flex lg:flex-row flex-col-reverse justify-between lg:space-x-5">
      <form className="lg:w-7/12" onSubmit={handleSubmit}>
        <div className=" bg-white rounded-xl p-5 lg:my-0 my-7">
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg font-bold">Billings Info</h3>
              <p className="py-1">Please enter your billing info</p>
            </div>
            <p className="text-text">Step 1 of 4</p>
          </div>
          <div className="grid sm:grid-cols-2 sm:gap-x-7 gap-y-3 py-2">
            <label className="flex flex-col font-medium ">
              Name
              <input
                placeholder="Your name"
                required
                className="my-3 rounded-lg bg-input p-4"
              />
            </label>
            <label className="flex flex-col font-medium ">
              Phone Number
              <input
                type="number"
                placeholder="Phone Number"
                required
                className="my-3 rounded-lg bg-input input p-4"
              />
            </label>
            <label className="flex flex-col font-medium ">
              Address
              <input
                placeholder="Address"
                required
                className="my-3 rounded-lg bg-input p-4"
              />
            </label>
            <label className="flex flex-col font-medium ">
              Town/City
              <input
                placeholder="Town/City"
                required
                className="my-3 rounded-lg bg-input p-4"
              />
            </label>
          </div>
        </div>

        <div className=" bg-white p-5 my-8 rounded-xl">
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg font-bold">Rental Info</h3>
              <p className="py-1">Please select your rental date</p>
            </div>

            <p className="text-text">Step 2 of 4</p>
          </div>
          <h3 className="py-4 flex items-center font-semibold text-lg">
            <span className="pr-2 text-primary">
              <FaRegDotCircle />
            </span>
            Pick-Up
          </h3>
          <div className="grid sm:grid-cols-2 sm:gap-x-7 gap-y-3 py-2">
            <label className="flex flex-col font-medium ">
              Locations
              <select
                placeholder="Your Location"
                required
                className="my-3 rounded-lg font-normal bg-input p-4"
              >
                <option>Select your city</option>
                <option>Benin</option>
                <option>Lagos</option>
                <option>Abuja</option>
                <option>Ibadun</option>
                <option>Port Hacourt</option>
                <option>Sokoto</option>
                <option>Enugu</option>
                <option>Calabar</option>
                <option>Kano</option>
              </select>
            </label>
            <label className="flex flex-col font-medium ">
              Date
              <input
                placeholder="Rental date"
                required
                className="my-3 rounded-lg bg-input p-4"
              />
            </label>

            <label className="flex flex-col font-medium ">
              Time{" "}
              <input
                placeholder="Rental time"
                required
                className="my-3 rounded-lg bg-input p-4"
              />
            </label>
          </div>

          <h3 className="py-4 flex items-center font-semibold text-lg">
            <span className="pr-2 text-primary">
              <FaRegDotCircle />
            </span>
            Drop-Off
          </h3>

          <div className="grid sm:grid-cols-2 sm:gap-x-7 gap-y-3 py-2">
            <label className="flex flex-col font-medium ">
              Locations
              <select
                required
                className="my-3 rounded-lg font-normal bg-input p-4"
              >
                <option>Select your city</option>
                <option>Benin</option>
                <option>Lagos</option>
                <option>Abuja</option>
                <option>Ibadun</option>
                <option>Port Hacourt</option>
                <option>Sokoto</option>
                <option>Enugu</option>
                <option>Calabar</option>
                <option>Kano</option>
              </select>
            </label>
            <label className="flex flex-col font-medium ">
              Date
              <input
                placeholder="Drop-off date"
                required
                className="my-3 rounded-lg bg-input p-4"
              />
            </label>

            <label className="flex flex-col font-medium ">
              Time{" "}
              <input
                placeholder="Rental time"
                required
                className="my-3 rounded-lg bg-input p-4"
              />
            </label>
          </div>
        </div>

        <div className=" bg-white p-5 rounded-xl">
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg font-bold">Payment Method</h3>
              <p className="py-1">Select your payment method</p>
            </div>
            <p className="text-text">Step 3 of 4</p>
          </div>
          <div className="grid sm:grid-cols-2 sm:gap-x-7 gap-y-3 py-2">
            <label className="flex flex-col font-medium ">
              Card Number
              <input
                placeholder="Your Number"
                type="number"
                maxLength={16}
                required
                className="my-3 rounded-lg bg-input input select-none p-4"
              />
              <style>
                {`
            input::-webkit-outer-spin-button,
            input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0; }`}
              </style>
            </label>

            <label className="flex flex-col font-medium ">
              Expiration Date
              <input
                placeholder="Expiration Date"
                required
                type="number"
                className="my-3 rounded-lg input bg-input p-4"
              />
            </label>
            <label className="flex flex-col font-medium ">
              Card Holder{" "}
              <input
                type="text"
                placeholder="Card Holder"
                required
                className="my-3 rounded-lg bg-input p-4"
              />
            </label>
            <label className="flex flex-col font-medium ">
              CVC
              <input
                placeholder="Town/City"
                type="password"
                required
                maxLength={3}
                className="my-3 rounded-lg bg-input p-4"
              />
            </label>
          </div>

          <div className="grid gap-x-7 gap-y-5 py-7">
            <div className="bg-input py-4 px-4 rounded-xl flex justify-between">
              <label className="flex items-center font-medium text-lg  ">
                <input
                  type="checkbox"
                  onChange={(e) => {
                    e.target.checked
                      ? initializePayment(onSuccess, onClose)
                      : null;
                  }}
                  className="my-3 rounded-lg bg-input w-7 h-7 mr-3"
                />
                Paystack
              </label>
              <Image
                src="/assets/details/paystack.png"
                alt="paystack logo"
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
          </div>
        </div>

        <div className=" bg-white p-5 my-8 rounded-xl">
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg font-bold">Confirmation</h3>
              <p className="py-1 max-w-[180px] sm:max-w-[300px]">
                Few clicks and your rental is ready!
              </p>
            </div>
            <p className="text-text">Step 4 of 4</p>
          </div>
          <div className="grid gap-x-7 gap-y-5 py-7">
            <label className="flex items-center font-medium sm:text-base text-sm bg-input py-2 px-4 rounded-xl">
              <input
                type="checkbox"
                required
                className="my-3 rounded-lg bg-input lg:w-5 lg:h-5 w-10 h-10 mr-3"
              />
              I agree with receiving newsletter emails. No spam, promised!
            </label>
            <label className="flex items-center font-medium sm:text-base text-sm bg-input py-2 px-4 rounded-xl">
              <input
                type="checkbox"
                required
                className="my-3 rounded-lg bg-input lg:w-5 lg:h-5 w-10 h-10 mr-3"
              />
              I agree with our terms, conditions and privacy policy.
            </label>
          </div>
          <Button className="bg-primary w-32 h-12">Proceed Now</Button>
          <div className="py-5">
            <AiOutlineSafety className="text-4xl my-2" />
            <p className="font-medium">All your data are safe</p>
            <p className="text-text text-sm py-1">
              We are using the most advanced security to provide you the best
              experience ever.
            </p>
          </div>
        </div>
      </form>

      {item && (
        <section className="lg:w-5/12 h-fit p-5 rounded-xl bg-white">
          <div>
            <h3 className="text-xl font-semibold">Rental Summary</h3>
            <p className="text-text py-2 sm:text-base text-sm">
              Prices are based on daily rentals; extended rental beyond a day is
              exclusive to existing customers.
            </p>
          </div>
          <div className="flex sm:flex-row flex-col-reverse justify-between py-5">
            <img
              src={item?.image}
              alt="car"
              className="rounded-md bg-[url('/assets/header/ads2.svg')] px-3 border-primary w-[190px] h-[100px] sm:w-[210px] sm:h-[124px]"
            />
            <div>
              <h3 className="sm:text-2xl text-xl font-bold">{item?.name}</h3>
              <div className="flex items-center">
                <img
                  src="/assets/details/Review.svg"
                  alt="review"
                  className="rounded-md my-5"
                />
                <p className="pl-2 sm:block hidden text-text">440+ Reviewer</p>
              </div>
            </div>
          </div>
          <hr className="my-5" />
          <div className="">
            <div className="flex justify-between text-lg">
              <p className=" text-text">Subtotal(1 day)</p>
              <p className="font-bold">${item?.price}.00</p>
            </div>
            <div className="flex justify-between text-lg py-5">
              <p className="text-text">Tax</p>
              <p className="font-bold">${tax}.00</p>
            </div>
            <div
              className="text-lg my-5 bg-input
           rounded-xl p-6"
            >
              <p className="text-text">Apply for promo code</p>
            </div>
            <div className="flex sm:flex-row flex-col justify-between py-5">
              <div>
                <p className="text-xl font-semibold">Total Rental Price</p>
                <p className="text-text sm:text-base text-xs">
                  Overall price and includes rental tax
                </p>
              </div>
              <p className="text-2xl font-bold sm:py-0 py-2">
                ${item?.price + tax}
              </p>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default Payment;
