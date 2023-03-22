import React from "react";
import BegeniPaket from "./PaketCards/BegeniPaket";
import BinTakipci from "./PaketCards/BinTakipci";
import İkibesyüzTakipci from "./PaketCards/İkibesyüzTakipci";
import BesbinTakipci from "./PaketCards/BesbinTakipci";
import İkiyüzelliBegeni from "./PaketCards/İkiyüzelliBegeni";
import BesyuzBegeni from "./PaketCards/BesyuzBegeni";
import BinBegeni from "./PaketCards/BinBegeni";

const Paketler = () => {
  return (
    <>
      <div id="paketler" className="mb-24">
        <h1 className="text-4xl mb-8">En Çok Satan Paketlerimiz</h1>
        <p className="text-gray-200 text-[18px]">
          Sizler için oluşturduğumuz ve en çok satan paketlerimiz aşağida
          listelenmiştir. Hemen satın alarak instagram'da fenomen olun. <br />{" "}
          <span className="font-bold text-white">
            Satın Almadan önce oku! :
          </span>{" "}
          Kullanıcılar sisteme giren günlük kişilerdir. Yani gerçek kişilerden
          oluşmaktadır. Bu yüzden satın aldığınızda düşüşler elbet olacaktır.
          Kullanıcılar gerçek olduğu için sevmediği veya tanımadığı bir kişiyi
          takip etmek yada beğenmek istemez.Önerimiz güzel insanların hoşuna
          gidecek paylaşımlar yapan sayfalarınıza takipçi çekmektir. <br />{" "}
          <span className="font-bold  text-white">İletişim/Whatsapp:</span> 0
          (543) 433 34 85
        </p>
      </div>

      {/* takipci paketleri */}
      <div className="border-t-[1px] border-neutral-600 py-3 ">
        <h1 className="text-center text-3xl">İNSTAGRAM TAKİPÇİ SATIN AL</h1>
        <div className="flex justify-center flex-wrap sm:gap-24">
          <BinTakipci />
          <İkibesyüzTakipci />
          <BesbinTakipci />
        </div>
      </div>

      {/* Beğeni paketleri */}
      <div className="border-t-[1px] border-neutral-600 py-3 ">
        <h1 className="text-center text-3xl">İNSTAGRAM BEĞENİ SATIN AL</h1>
        <div className="flex justify-center flex-wrap sm:gap-24">
          <İkiyüzelliBegeni />
          <BesyuzBegeni />
          <BinBegeni />
        </div>
      </div>
    </>
  );
};

export default Paketler;
