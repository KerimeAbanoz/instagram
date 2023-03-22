import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className=" dark:bg-[#151521] border-t-[1px] grid grid-cols-1 lg:grid-cols-4 border-gray-700 px-8 lg:px-24 py-8 gap-8">
      <div>
        <Link href="/" className="inline-block mb-8">
          <img
            src="https://app.beyaztakip.com/media/logos/logo_dark.png"
            alt="Beyaz Takip Logo"
          />
        </Link>
        <ul>
          <li>
            <a className="inline-block mb-4 text-blue-700 font-light" href="#">
              instagram beğeni ve takipçi sitesi
            </a>
          </li>
          <li>
            <a className=" text-blue-700 font-light" href="#">
              Araçlar
            </a>
          </li>
          <li>
            <a className=" text-blue-700 font-light" href="#">
              Paketler
            </a>
          </li>
          <li>
            <a className=" text-blue-700 font-light" href="#">
              Blog
            </a>
          </li>
          <li>
            <p className="inline-block mt-4">
              Copyright © 2023{" "}
              <a className=" text-blue-700 font-light" href="#">
                beyaztakip.com
              </a>{" "}
            </p>
          </li>
        </ul>
      </div>

      <div className="">
        <Link href="/" className=" dark:text-neutral-500">
          <h1 className="inline-block mb-2 font-bold text-gray-600 text-xl">
            NASIL ÇALIŞIR
          </h1>
        </Link>
        <p className="text-sm">
          Kredileriniz ile dilediğiniz paylaşımınıza beğeni ve profilinize
          takipçi gönderebilirsiniz.{" "}
          <a href="#" className=" text-blue-700 font-light">
            Paketler
          </a>{" "}
          bölümünden uygun fiyatlar ile bir paket satın alabilirsiniz.
        </p>
      </div>

      <div className="">
        <Link href="/" className=" dark:text-neutral-500">
          <h1 className="inline-block mb-2 font-bold text-gray-600 text-xl">
            {" "}
            KİMLER KULLANABİLİR
          </h1>
        </Link>
        <p className="text-sm">
          Instagram üyeliği olan herkes sistemi kullanabilir. Instagram
          hesabınızla giriş yapın ve hemen kullanmaya başlayın. Kullanım
          ücretsizdir. Kredi satın almadıkça hiçbir ücret ödemezsiniz.
        </p>
      </div>

      <div className="">
        <Link href="/" className=" dark:text-neutral-500">
          <h1 className="inline-block mb-2 font-bold text-gray-600 text-xl">
            {" "}
            BİZE ULAŞIN
          </h1>
        </Link>
        <p className="text-sm">
          Her türlü soru ve görüşleriniz için{" "}
          <a href="#" className=" text-blue-700 font-light">
            {" "}
            İletişim
          </a>{" "}
          kanallarımızdan bizimle irtibat kurabilirsiniz.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
