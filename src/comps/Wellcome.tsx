import React from "react";

const Wellcome = () => {
  return (
    <div className="flex justify-center">
      <div className="overflow-hidden flex-1 pb-24 justify-center items-center dark:bg-[#151521]">
        <div
          className={`mt-[10vh] mx-auto overflow-hidden relative w-[350px] sm:w-[600px] h-[300px] rounded-[8px] bg-gray-100 dark:bg-[#1c1c1c] before:content-[""] before:absolute before:w-[380px] before:h-[420px] before:top-[-50%] before:left-[-50%] after:content-[""] after:absolute after:w-[380px] after:h-[420px] after:top-[-50%] after:left-[-50%] custom-linear-gradient`}
        >
          <form className="absolute inset-[2px] rounded-[8px] z-[10] form flex flex-col p-20 form-background text-center">
            <div className="m-auto">
              <h1 className="font-[600] text-lg text-red-100">
                İnstagram Beğeni ve Takipçi Hilesi
              </h1>
              <h1>Sosyal Medya Hizmetleri</h1>

              <button
                className="flex justify-between border-none outline-none bg-red-700 hover:bg-red-600 custom-input w-[300px] mt-[15px] rounded-[4px] font-[600] cursor-pointer"
                type="button"
              >
                Giriş Yap
              </button>
              <button
                className="flex justify-between border-none outline-none bg-red-700 hover:bg-red-600 custom-input w-[300px] mt-[15px] rounded-[4px] font-[600] cursor-pointer"
                type="button"
              >
                Paket Satın al
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Wellcome;
