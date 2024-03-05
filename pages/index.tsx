import Header from "@/components/Header/Header";
import Popular from "@/components/Popular/Popular";
import Recommendation from "@/components/Recommendation/Recommendation";
import React from "react";
import Head from "next/head";

export default function Home() {
  return (
    <main className="bg-[#F6F7F9] mt-8 lg:mt-0">
        <Head>
        <title>Morent</title>
        <meta
          name="description"
          content="The Best Platform for Car Rental"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Morent" />
        <meta
          property="og:description"
          content="The Best Platform for Car Rental"
        />
        <meta
          property="og:image"
          content="https://car-rental.brimble.app/assets/SEO.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="https://car-rental.brimble.app/assets/SEO.png"
        />
        <meta
          property="twitter:url"
          content="https://car-rental.brimble.app/"
        />
        <meta name="twitter:title" content="Morent" />
        <meta
          name="twitter:description"
          content="The Best Platform for Car Rental"
        />
        <meta
          name="twitter:image"
          content="https://car-rental.brimble.app/assets/SEO.png"
        />
      </Head>
      <Header />
      <Popular />
      <Recommendation/>
    </main>
  );
}
