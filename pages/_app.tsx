import React from "react";
import "@/styles/globals.css";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import type { AppProps } from "next/app";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  React.useLayoutEffect(() => {
    AOS.init({ duration: 1900, once: true });
    AOS.refresh();
  });

  const router = useRouter();
  return (
    <main className="font-font overflow-x-hidden">
    
      {router.pathname.includes("dashboard") ? null : <Navbar />}
      <Component {...pageProps} />
      <Footer />
      <ToastContainer
        position="top-right"
        transition={Slide}
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </main>
  );
}
