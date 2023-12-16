import React from "react";
import styles from "../style";
import {discount, robot} from "../assets";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div className={`${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row item-center py-[6px] bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span>
            Discount for <span className="text-white">1 Months</span>Account
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1>
            The Next<br className="sm:block hidden"></br> Genereation Payment
            Method.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
