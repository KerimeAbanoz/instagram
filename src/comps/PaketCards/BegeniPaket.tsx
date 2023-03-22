import React from "react";
import İkiyüzelliBegeni from "../PaketCards/İkiyüzelliBegeni";
import BesyuzBegeni from "../PaketCards/BesyuzBegeni";
import BinBegeni from "../PaketCards/BinBegeni";

const BegeniPaket = () => {
  return (
    <div className="border-t-[1px] border-neutral-600 py-3 ">
      <h1 className="text-center text-3xl">İNSTAGRAM BEĞENİ SATIN AL</h1>

      <div className="flex justify-center flex-wrap gap-24">
        <İkiyüzelliBegeni />
        <BesyuzBegeni />
        <BinBegeni />
      </div>
    </div>
  );
};

export default BegeniPaket;
