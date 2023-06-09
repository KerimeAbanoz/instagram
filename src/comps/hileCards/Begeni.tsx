import React from "react";

const Begeni = () => {
  return (
    <div>
      <div className="xl:h-[550px] w-[60wv] mx-4 my-2 p-6 rounded-lg shadow bg-gray-800 border-gray-700">
        <a href="#">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            İnstagram Beğeni Hilesi
          </h5>
        </a>
        <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
          Hayatımızdaki bazı anları paylaşmak isteriz bu anları ölümsüzleştirmek
          için artık sosyal medya üzerinden yola çıktığımız teknoleji çağında
          sizleri düşünerek bu fotoğrafların kolay yoldan keşfete düşmesi ve
          paylaştığınız herbir gönderinin çok fazla kişi tarafından
          beğenilemesini sağlarız. Bir işletmeyi keşfete düşürmek instagram
          beğeni hilesi Peki bunu nasıl yapmalıyız, sisteme giriş yaptıktan
          sonra{" "}
          <span className="cursor-pointer text-[#7eaafa]">
            instagram beğeni hilesi
          </span>{" "}
          uygulayacağınız fotografınızı sağ üst köşeden link adresini al kısmına
          basıyoruz. Daha sonra bu link sisteme giriş yaptıktan sonra beğeni
          gönder butonuna basarak kopyaladığımız bu linki bu kısma
          yapıştırıyoruz. Gelen beğeniler sitemizi kulanarak hızlı yolda
          büyümenin en iyi yoludur.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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

export default Begeni;
