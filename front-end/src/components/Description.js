import React from "react";
import { Link } from "react-router-dom";
const description = () => {
  return (
    <>
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div class="max-w-2xl mx-auto">

          
          <div class="carousel w-full mt-2">
        <div id="slide1" class="carousel-item relative w-full overflow-hidden">
          <img src="/images/default.jpg" class="w-full" alt="slider" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" class="carousel-item relative w-full">
          <img src="/images/default.jpg" class="w-full" alt="slider" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" class="carousel-item relative w-full">
          <img src="/images/default.jpg" class="w-full" alt="slider" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" class="carousel-item relative w-full">
          <img src="/images/default.jpg" class="w-full" alt="slider" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                BRAND NAME
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                about this projects
              </h1>
              <ul className="text-grey-200 text-1xl">
                <li className="text-1xl font-bold text-base-900">product name: Code Companion</li>
                <li className="text-1xl font-bold text-base-900">date created: 12,dec 2022</li>
                <li className="text-1xl font-bold text-base-900">size: 4GB</li>
                <li className="text-1xl font-bold text-base-900">devloper/organization name: Tech Nodes</li>
              </ul>
              <p className="leading-relaxed mt-10">
              CodeCompanion is a comprehensive and user-friendly web-based tool designed to support and enhance the development process for software engineers.
              </p>
              <div className="flex">
                <button className="flex mr-5 text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                  Preview
                </button>
                
              </div>
                <h2 className="text-gray-900 text-3xl title-font font-medium mb-1 mt-10">
                  description
                </h2>
                <p className="leading-relaxed">
                    <ul class="list-disc marker:text-blue-500">
                        <li className="mt-3">Code Companion is a website that provides a variety of tools and features for software developers</li>
                        <li className="mt-3">It aims to make coding more accessible, efficient, and enjoyable. With features such as a code comment adder, space and time complexity and space complexity analyzer, code explainer, and error finder, Code Companion offers a comprehensive solution for software development needs.</li>
                        <li className="mt-3"> Whether you're a beginner or an experienced developer, Code Companion can help you write better code, understand your code's performance, and resolve errors.</li>
                        <li className="mt-3">With its user-friendly interface and easy-to-use tools, Code Companion is the perfect companion for all your coding needs.</li>
                        
                    </ul>
                    </p>
                
                <h2 className="text-gray-900 text-3xl title-font font-medium mb-1 mt-10">
                  How to setup project
                </h2>

                <p>To install the CodeCompanion application, follow these steps:</p>

                <ol>
                    <li className="mt-3">Clone the repository: <code>git clone "https://github.com/TechNodes2-0/CodeCompanion.git"</code></li>
                    <li className="mt-3">Navigate to the <code>client</code> folder using the command <code>cd C:\Users\Admin\Desktop\Git\CodeCompanion\client</code></li>
                    <li className="mt-3">Host the application on localhost by running <code>npm run dev</code></li>
                    <li className="mt-3">Access the application at <code>http://localhost:5173/</code></li>
                </ol>

                <h2 className="text-gray-900 text-3xl title-font font-medium mb-1 mt-10">
                  Tech Used
                </h2>

                <ul class="list-disc marker:text-blue-500">
                    <li>HTML</li>
                    <li>TAILWIND</li>
                    <li>JAVASCRIPT</li>
                    <li>OPEN AI</li>
                    <li>NODE JS</li>
                </ul>


                <h2 className="text-gray-900 text-3xl title-font font-medium mb-1 mt-10">
                  features
                </h2>

                <ul class="list-disc marker:text-blue-500">
                    <li>Comment adder</li>
                    <li>T.C. Cheker</li>
                    <li>Code Cheker</li>
                </ul>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default description;
