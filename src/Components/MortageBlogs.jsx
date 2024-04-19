import React, { useState } from "react";
import blogs from "./Assets/blogs";

const MortageBlogs = () => {
  const [selectedTitle, setSelectedTitle] = useState("blog-one");
  return (
    <div>
      <div className=" capitalize mx-20">
        <div className=" flex justify-between">
          <div>
            <p className=" text-2xl font-semibold mb-7">titles</p>
            <ul className=" space-y-7 text-gray-400">
              <li
                className={`${
                  selectedTitle === "blog-one"
                    ? " border-l-2 border-orange-900 p-1.5 text-black"
                    : ""
                }`}
                onClick={() => setSelectedTitle("blog-one")}
              >
                mortage terms
              </li>
              <li
                className={`${
                  selectedTitle === "blog-two"
                    ? " border-l-2 border-orange-900 p-1.5 text-black"
                    : ""
                }`}
                onClick={() => setSelectedTitle("blog-two")}
              >
                how a mortage calculator can help
              </li>
              <li
                className={`${
                  selectedTitle === "blog-three"
                    ? " border-l-2 border-orange-900 p-1.5 text-black"
                    : ""
                }`}
                onClick={() => setSelectedTitle("blog-three")}
              >
                deciding how much mouse you can afford
              </li>
              <li
                className={`${
                  selectedTitle === "blog-four"
                    ? " border-l-2 border-orange-900 p-1.5 text-black"
                    : ""
                }`}
                onClick={() => setSelectedTitle("blog-four")}
              >
                how to lower your monthly mortage payment
              </li>
              <li
                className={`${
                  selectedTitle === "blog-five"
                    ? " border-l-2 border-orange-900 p-1.5 text-black"
                    : ""
                }`}
                onClick={() => setSelectedTitle("blog-five")}
              >
                next steps on getting a mortage
              </li>
              <li
                className={`${
                  selectedTitle === "blog-six"
                    ? " border-l-2 border-orange-900 p-1.5 text-black"
                    : ""
                }`}
                onClick={() => setSelectedTitle("blog-six")}
              >
                mortage calculator: alternative uses
              </li>
              <li
                className={`${
                  selectedTitle === "blog-seven"
                    ? " border-l-2 border-orange-900 p-1.5 text-black"
                    : ""
                }`}
                onClick={() => setSelectedTitle("blog-seven")}
              >
                terms explained
              </li>
            </ul>
          </div>
          <div className=" w-[65%] space-y-5">
            <p className="text-2xl font-semibold">{blogs[0].title}</p>
            <p className=" leading-6">{blogs[0].content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MortageBlogs;
