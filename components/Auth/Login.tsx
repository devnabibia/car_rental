import React from "react";
import Button from "../Micro/button/Button";
import Image from "next/image";
import Link from "next/link";
import Supabase from "../Supabase/Supabase";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  React.useEffect(() => {
    Supabase.auth.onAuthStateChange(async (event) => {
      if (event === "SIGNED_OUT") {
        router.push("/");
      } else if (event === "SIGNED_IN") {
        router.push("/dashboard");
      }
    });
  }, []);

  return (
    <main className="lg:px-10 px-5 overflow-y-hidden md:space-x-10 w-full h-full container mx-auto py-10 flex justify-between">
      <section className="md:block hidden md:w-7/12">
        <div
          data-aos="fade-right"
          className=" bg-cover bg-[url('/assets/header/ads.svg')] h-full rounded-lg"
        >
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
      </section>

      <div className="md:w-5/12 w-full">
        <Auth
          supabaseClient={Supabase}
          providers={[]}
          appearance={{
            theme: ThemeSupa,
            style: {
              button: { background: "#3563E9", color: "white", height: "48px" },
              anchor: { color: "black" },
            },
          }}
        />
      </div>
    </main>
  );
};

export default Login;
