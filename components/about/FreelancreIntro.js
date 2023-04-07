/* eslint-disable @next/next/no-img-element */
import React from "react";
import Typewriter from "typewriter-effect";

const FreelancreIntro = () => {
    return (
        <div className="w-full">
                <div className="container  sm:flex sm:gap-10 mt-10 sm:mt-20">
                    <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
                            <img src="/img/Afred_Zhou.jpeg" className="rounded-full w-96" alt="" />
                        </div>
                            <h1 className="">
                                Hello, My name is Afred Zhou,I love design and I hope to make
                                awesome designs and also I  create a&nbsp;
                                <span
                                    style={{ fontSize: "35px", lineHeight: "49px" }}
                                    className="cd-words-wrapper"
                                >
                  <Typewriter
                      options={{
                          wrapperClassName: "color-font fw-600",
                          strings: [
                              "Mobile Apps",
                              "Landing Pages",
                              "Awesome Design",
                          ],
                          autoStart: true,
                          loop: true,
                      }}
                      loop={true}
                      onInit={(typewriter) => {
                          typewriter;
                      }}
                  />
                </span>
                            </h1>
                </div>
                    <div className=" mx-auto py-20 block sm:flex sm:justify-between items-center">
                        <ul className="flex">
                            <li className="flex">
                                <div className="text-8xl	">
                                    <h3>12</h3>
                                </div>
                                <div className="">
                                    <p>
                                        Years <br /> Of Experience
                                    </p>
                                </div>
                            </li>

                            <li className="flex">
                                <div className="text-8xl	">
                                    <h3>165</h3>
                                </div>
                                <div className="">
                                    <p>
                                        Projects Completed <br /> In 19 Countries
                                    </p>
                                </div>
                            </li>

                            <li >
                                <a href="mailto:your@email.com?subject=Subject">
                                    <div className="flex">
                                        <div className="">
                                            <div className="full-width">
                                                <p>Get In Touch</p>
                                                <h6>afred.zhou.cn@Gmail.Com</h6>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="">
                                                <span className=""></span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
            <div className="line bottom left"></div>
        </div>
    );
};

export default FreelancreIntro;
