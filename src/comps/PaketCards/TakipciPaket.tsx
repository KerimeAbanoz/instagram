import React from "react";
import BinTakipci from "../PaketCards/BinTakipci";
import İkibesyüzTakipci from "../PaketCards/İkibesyüzTakipci";
import BesbinTakipci from "../PaketCards/BesbinTakipci";
const TakipciPaket = () => {
  return (
    <div className="border-t-[1px] border-neutral-600 py-3 ">
      <h1 className="text-center text-3xl">İNSTAGRAM TAKİPÇİ SATIN AL</h1>

      <div className="flex justify-center flex-wrap gap-24">
        <BinTakipci />
        <İkibesyüzTakipci />
        <BesbinTakipci />
      </div>
    </div>
  );
};

export default TakipciPaket;
