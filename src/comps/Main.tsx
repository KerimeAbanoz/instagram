import React from "react";
import Wellcome from "../comps/Wellcome";
import Araclar from "./Araclar";
import BlogYazilari from "./BlogYazilari";
import Begeni from "./hileCards/Begeni";
import Takipci from "./hileCards/Takipci";
import Yorum from "./hileCards/Yorum";
import Paketler from "./Paketler";

const Main = () => {
  return (
    <div className="dark:bg-[#151521] px-4 sm:px-24">
      <Wellcome />
      {/* takipçi - beğeni - yorum hileleri yazıları */}
      <div className="grid grid-frow-row md:grid-cols-2 xl:grid-cols-3 mb-24">
        <Takipci />
        <Begeni />
        <Yorum />
      </div>
      {/* <Araclar /> */}
      <Paketler />
      {/* <BlogYazilari /> */}
    </div>
  );
};

export default Main;
