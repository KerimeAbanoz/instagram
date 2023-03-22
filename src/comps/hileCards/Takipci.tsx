import React from "react";

const Takipci = () => {
  return (
    <div>
      <div className=" xl:h-[550px] w-[60wv] mx-4 my-2 p-6 rounded-lg shadow bg-gray-800 border-gray-700">
        <a href="#">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            İnstagram Takipçi Hilesi
          </h5>
        </a>
        <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
          Dünyanın en gelişmiş panellerinden biri olan beyaztakip sizlere çok
          kolay bir şekilde takipçilerinizi yükseltmenizi ve arkadaşlarınız
          arasında en çok takipçisi olan kişi olmanıza olanak sağlıyor.
          Hayatımızda yaptığımız tüm alışkanlıklardan biri sosyalmedya olduğunu
          ve sosyal medyanın hayatımızdaki önemini çok iyi biliyoruz. Biz bu
          sosyal medyanın en iyi halinde ve teknoleji dönemindeyken sizlerin en
          iyi şekilde bu{" "}
          <span className="cursor-pointer text-[#7eaafa]">
            instagram takipçi hilesi
          </span>{" "}
          platformlarından yararlanmanız için sizler bir çok araç ve paketler
          sunduk bu paketler ve araçları kullanarak hızlı ve emin adımlarla
          sosyal medyada yükselişe geçebilirsiniz. Sistemlere giriş yaparken
          lütfen sizlerinden başkalarını takip edeceğini unutmayın. Bu sistemi
          kullandıktan sonra takipçileriniz hergün düzenli olarak giriş
          yaparsanız yükselişe gecip ,büyümenize,popüler olmanıza bir adım daha
          atmış olacaksınız.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
        >
          Pakete Git
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Takipci;
