import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className=" mx-auto container px-5 pb-4 lg:px-10 py-10">
      <div className="flex lg:flex-row flex-col justify-between ">
        <section className="lg:max-w-[250px] max-w-[280px] space-y-2">
          <h2 className="text-primary text-2xl font-bold">MORENT</h2>
          <p className="text-sm">
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </section>
        <section className="grid lg:grid-cols-3 grid-cols-2 lg:gap-y-0 gap-y-10 pt-10 lg:space-x-20 text-sm">
          <div>
            <h3 className="pb-5 font-semibold text-base">About</h3>
            <ul className="space-y-5">
              <li>How it works</li>
              <li>Featured</li>
              <li>Partnership</li>
              <li>Bussiness Relation</li>
            </ul>
          </div>
          <div>
            <h3 className="pb-5 font-semibold text-base">Community</h3>
            <ul className="space-y-5">
              <li>Events</li>
              <li>Blog</li>
              <li>Podcast</li>
              <li>Invite a friend</li>
            </ul>
          </div>
          <div>
            <h3 className="pb-5 font-semibold text-base">Socials</h3>
            <ul className="space-y-5">
              <li>Discord</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </div>
        </section>
      </div>
      <hr className="my-6" />
      <section className="flex lg:flex-row flex-col-reverse justify-between text-sm font-medium">
        <div>
          <p>©2022 MORENT. All rights reserved</p>
        </div>
        <div className="lg:space-x-10 flex lg:justify-start items-center lg:items-start justify-between lg:pb-0 pb-6">
          <p>Privacy & Policy</p>
          <p>Terms & Condition</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
