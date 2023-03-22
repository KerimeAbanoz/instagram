import React from "react";

const BesbinTakipci = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="overflow-hidden flex-1 justify-center items-center dark:bg-[#151521]">
          <div
            className={`mt-[10vh] mx-auto overflow-hidden relative w-[300px] h-[500px] rounded-[8px] before:content-[""] before:absolute before:w-[380px] before:h-[420px] before:top-[-50%] before:left-[-50%] after:content-[""] after:absolute after:w-[380px] after:h-[420px] after:top-[-50%] after:left-[-50%] custom-linear-gradient`}
          >
            <form className="absolute inset-[2px] rounded-[8px] z-[10] form flex flex-col p-20  bg-black bg-opacity-70">
              <div className="text-center border-b-2 border-neutral-100 py-3 px-6 dark:border-neutral-600 dark:text-neutral-50 ">
                5.000 TAKİPÇİ <br />
                <span className="line-through"> 225.00 TL</span> 175.00 TL
              </div>
              <div className="p-6">
                <button
                  type="button"
                  className="inline-block rounded bg-red-800 px-4 pt-2.5 pb-2 text-xs font-medium text-white shadow-[0_4px_9px_-4px_#f0654f] transition duration-150 ease-in-out hover:bg-red-600 ] mb-4"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  HAVALE/EFT İLE SATIN AL
                </button>
                <button
                  type="button"
                  className="inline-block rounded bg-red-800 px-6 pt-2.5 pb-2 text-xs font-medium leading-normal text-white shadow-[0_4px_9px_-4px_#f0654f] transition duration-150 ease-in-out hover:bg-red-600 ] "
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  KREDİ KARTI İLE SATIN AL
                </button>
              </div>
              <p className="border-t-2 border-neutral-100 py-3 text-center dark:border-neutral-600 dark:text-neutral-50 leading-[35px] text-lg">
                ✔︎ 2.500 Adet Takipçi! <br /> ✔︎ Düşüşler olabilir <br /> ✔︎
                Şifre istemiyoruz!
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BesbinTakipci;
