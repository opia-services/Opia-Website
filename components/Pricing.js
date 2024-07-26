import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Feature from "../components/Feature";
import { useState } from "react";


const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const [visibleDiv, setVisibleDiv] = useState(null);

  const showDiv = (divId) => {
    setVisibleDiv(divId);
  };

  return (
    <div
      className="w-full bg-gradient-to-b from-white-300 to-white-500 py-14"
      id="pricing"
    >
      <div className="flex flex-col justify-center w-full max-w-screen-xl px-6 mx-auto text-center sm:px-8 lg:px-16">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl font-medium leading-relaxed sm:text-3xl lg:text-4xl text-black-600"
            >
              Choose Your Plan
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="w-10/12 mx-auto my-2 leading-normal text-center sm:w-7/12 lg:w-6/12"
            >
              Let's choose the package that is best for you and explore it happily
              and cheerfully.
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row grid-cols-1 gap-4 px-6 py-8 sm:grid-flow-col sm:grid-cols-3 lg:gap-12 lg:py-12 sm:px-0 lg:px-6">
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                initial="hidden"
                animate="visible" 
                variants={scrollAnimation}
                className="flex flex-col items-center justify-center px-6 py-4 border-2 border-gray-500 rounded-xl lg:px-12 xl:px-20"
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <div className="p-4 mt-6 lg:p-0 lg:mt-16">
                  <Image
                    src="/assets/Free.png"
                    width={145}
                    height={165}
                    alt="Free Plan"
                  />
                </div>
                <p className="my-2 text-lg font-medium capitalize text-black-600 sm:my-7">
                  Filing services
                </p>
                <ul className="flex flex-col items-start justify-start flex-grow pl-6 text-left list-inside xl:pl-0 text-black-500">
                  <li className="relative my-2 check custom-list">
                    Marriage Certificate
                  </li>
                  <li className="relative my-2 check custom-list">
                    Birth Certificate
                  </li>
                  <li className="relative my-2 check custom-list">
                    Tax filings
                  </li>
                  <li className="relative my-2 check custom-list">
                    Tax Inquiry
                  </li>
                  <li className="relative my-2 check custom-list">
                    Passport renewal
                  </li>
                </ul>
                <div className="flex flex-col justify-center flex-none w-full mt-12 mb-8">
                  <p className="mb-4 text-2xl text-center text-black-600 ">
                    Find out more
                  </p>
                  <ButtonOutline onClick={() => showDiv("div1")}>Select</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={scrollAnimation}
                className="flex flex-col items-center justify-center px-6 py-4 border-2 border-gray-500 rounded-xl lg:px-12 xl:px-20"
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
              <div className="p-4 mt-6 lg:p-0 lg:mt-16">
                <Image
                  src="/assets/Standard.png"
                  width={145}
                  height={165}
                  alt="Standard Plan"
                />
              </div>
              <p className="my-2 text-lg font-medium capitalize text-black-600 sm:my-7">
                Massage Services{" "}
              </p>
              <ul className="flex flex-col items-start justify-start flex-grow pl-6 text-left list-inside xl:pl-0 text-black-500">
                <li className="relative my-2 check custom-list">
                  Aromatherapy Massage
                </li>
                <li className="relative my-2 check custom-list">
                  Basic Back Massage
                </li>
                <li className="relative my-2 check custom-list">
                  Foot Massage
                </li>
                <li className="relative my-2 check custom-list">
                  Full Body Maasage
                </li>
                <li className="relative my-2 check custom-list">
                  Sports Massage{" "}
                </li>
              </ul>
              <div className="flex flex-col justify-center flex-none w-full mt-12 mb-8">
                <p className="mb-4 text-2xl text-center text-black-600 ">
                  Find out more
                </p>
                <a className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-orange-500 text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-orange-500 hover:text-white-500 transition-all hover:shadow-orange" href='https://www.instagram.com/ms.oswald_healinghands?igsh=aTQzcnB0eWNnNGph'> Find Out More</a>
              </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={scrollAnimation}
                className="flex flex-col items-center justify-center px-6 py-4 border-2 border-gray-500 rounded-xl lg:px-12 xl:px-20"
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
              <div className="p-4 mt-6 lg:p-0 lg:mt-16">
                <Image
                  src="/assets/Premium.png"
                  width={145}
                  height={165}
                  alt="Premium Plan"
                />
              </div>
              <p className="my-2 text-lg font-medium capitalize text-black-600 sm:my-7">
                Social media marketing{" "}
              </p>
              <ul className="flex flex-col items-start justify-start flex-grow pl-6 text-left list-inside xl:pl-0 text-black-500">
                <li className="relative my-2 check custom-list">
                  Multiple page management 
                </li>
                <li className="relative my-2 check custom-list">
                  Organic follower Growth
                </li>
                <li className="relative my-2 check custom-list">
                  Content Posting
                </li>
                <li className="relative my-2 check custom-list">
                  Page Content
                </li>
                <li className="relative my-2 check custom-list">
                  Marketing Plans{" "}
                </li>
                <li className="relative my-2 check custom-list">
                  Graphic Design{" "}
                </li>
              </ul>
              <div className="flex flex-col justify-center flex-none w-full mt-12 mb-8">
                <p className="mb-4 text-2xl text-center text-black-600 ">
                  Find out more
                </p>
                <ButtonOutline onClick={() => showDiv("div2")}> Select</ButtonOutline>
              </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
        <div>
        <div className={visibleDiv === "div1" ? "flex" : "hidden"}>
          This is Div 1 content.
        </div>
        <div className={visibleDiv === "div2" ? "flex" : "hidden"}>
          This is Div 2 content.
        </div>
        </div>
        <div className="flex flex-col w-full my-16" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="w-9/12 mx-auto text-2xl font-medium leading-normal sm:text-3xl lg:text-4xl text-black-600 sm: lg:w-4/12">
              Trusted by Thousands of Happy Customers{" "}
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="w-10/12 mx-auto mt-4 mb-2 leading-normal sm:w-7/12 lg:w-6/12"
            >
              These are the stories of our customers who have joined us with great
              pleasure when using these amazing services.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="flex flex-col w-full py-12">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{duration: 3}}>
              <div className="absolute z-10 flex flex-col items-center justify-between w-full px-6 py-8 rounded-xl sm:py-14 sm:px-12 lg:px-16 sm:flex-row bg-white-500">
                <div className="flex flex-col w-10/12 mb-6 text-left sm:w-7/12 lg:w-5/12 sm:mb-0">
                  <h5 className="text-xl font-medium leading-relaxed text-black-600 sm:text-2xl lg:text-3xl">
                    Contact us Now for <br /> the best services in Jamaica!
                  </h5>
                  <p>We can't wait to hear from you</p>
                </div>
                <ButtonPrimary>Contact</ButtonPrimary>
              </div>
              <div
                className="absolute top-0 left-0 right-0 w-11/12 mx-auto mt-8 bg-black-600 opacity-5 roudned-lg h-60 sm:h-56"
                style={{ filter: "blur(114px)" }}
                ></div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Pricing;