import React from "react";
import BiArrowFromButtom from "react-icons/bi";
import { useEffect, useState } from "react";

// const classNames = (...classes) => {
//   return classes.filter(Boolean).join(" ");
// };

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          className="fixed bottom-[50px] right-[50px] h-[50px] w-[50px] text-[50px] bg-red-600 rounded-full"
          onClick={scrollUp}
        >
          ^
        </button>
      )}
    </div>
  );
};

export default BackToTop;
