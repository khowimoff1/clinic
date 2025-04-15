import React, { useEffect, useState } from "react";
import { Clinic } from "./Data";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { FaArrowUp } from "react-icons/fa";

const App = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="container flex flex-col items-center w-full m-auto max-w-7xl">
      {showButton && (
        <div
          onClick={scrollToTop}
          className="fixed flex items-center justify-center w-10 h-10 text-white transition bg-pink-500 rounded-full shadow-lg cursor-pointer bottom-5 right-5 hover:bg-pink-600"
        >
          <FaArrowUp/>
        </div>
      )}
      <div className="grid grid-cols-3 gap-5 mt-10">
        {Clinic?.map((item, index) => (
          <a
            href={`#${item.medic}`}
            key={index}
            className="px-5 py-5 bg-white shadow-lg cursor-pointer rounded-xl hover:bg-gray-100"
          >
            <img
              src={item.uslugiImg}
              alt={item.medic}
              className="w-[200px] h-[130px] rounded-xl"
            />
            <p className="mt-2 font-semibold">{item.medic}</p>
          </a>
        ))}
      </div>
      <div>
        {Clinic?.map((item, index) => (
          <div
            id={item.medic}
            key={index}
            className="border border-[#ff2f6b] px-3 py-3 w-[755px] my-5 "
          >
            <div className="flex ">
              <div className="border w-[130px] h-[130px] flex items-center justify-center">
                <img src={item?.image} alt="qwe" width={100} height={100} />
              </div>
              <div className="w-full ml-3">
                <a
                  href=""
                  className="text-[#ff2f6b] font-bold text-[1em] underline"
                >
                  {item?.medic}
                </a>
                <div className="flex items-center">
                  <Box sx={{ "& > legend": { mt: 2 } }}>
                    <Rating name="read-only" value={item.rating} readOnly />
                  </Box>
                  <a href="" className="text-[#007bff] text-[1em] font-normal ">
                    {item?.ratingText}
                  </a>
                </div>
                <p className="bg-[#f2f2f2] p-1 text-[#212529] text-[1em] font-normal flex w-[134px]">
                  {item?.clinic}
                </p>
                <div className="flex items-center gap-1">
                  <img
                    src="https://clinics.uz/img/adress_icon.png"
                    alt=""
                    width={20}
                    height={20}
                  />
                  <p className="text-[#212529] text-[1em] font-normal ">
                    {item?.adres}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <h1 className="font-semibold text-[#212529] text-[1em]">
                    Ориентир:
                  </h1>
                  <p className="text-[#212529] text-[1em] font-normal">
                    {item.orientr}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <div className="bg-[#eae9e9] p-[5px] text-[#212529] text-[1em] font-normal">
                    ☎
                  </div>
                  <a
                    href=""
                    className="bg-[#eae9e9] font-bold p-[5px] text-[#212529] hover:text-[#0056b3] hover:underline text-[1em]"
                  >
                    {item?.phone}
                  </a>
                </div>
                <h1 className="bg-[#ff9] text-[#000] text-xs px-[5px] w-[295px]">
                  {item?.searchPhone}
                </h1>
                <div className="flex items-center gap-1">
                  <h1 className="font-semibold text-[#212529] text-[1em]">
                    Время работы:
                  </h1>
                  <p className="text-[#212529] text-[1em] font-normal">
                    {item.date}
                  </p>
                </div>
                <h1 className="text-[1.5em] font-medium">{item.job}</h1>
                {item?.jobs?.map((doctor, index) => (
                  <div
                    key={index}
                    className="flex gap-3 border-b border-[#8ec1ff] w-full mb-5"
                  >
                    <div>
                      <img
                        src={doctor?.vrachImg}
                        alt="img"
                        width={100}
                        height={100}
                        className="h-[120px]"
                      />
                      <Box sx={{ "& > legend": { mt: 1 } }}>
                        <Rating
                          name="read-only"
                          value={doctor?.vrachRating}
                          readOnly
                          sx={{ fontSize: "1rem" }}
                        />
                      </Box>
                    </div>
                    <div>
                      <a
                        href=""
                        className="text-[#007bff] text-[20px] font-normal hover:underline hover:text-[#000]"
                      >
                        {doctor?.name}
                      </a>
                      <h1 className="text-[1em] font-medium text-[#212529]">
                        {doctor.vrachJob}
                      </h1>
                      <h1 className="text-[1em] font-normal text-[#212529]">
                        {doctor.staj}
                      </h1>
                    </div>
                  </div>
                ))}
                <div className="w-[80%]">
                  <div className="space-y-1 text-sm font-normal text-black">
                    <div className="flex items-center">
                      <span>Первичная консультация гинеколога</span>
                      <span className="flex-grow border-t border-dotted border-gray-400 mx-2 h-0 text-[13px] leading-[16px] font-normal text-[#212529]"></span>
                      <span className="text-[#ec483e] text-[13px] leading-[16px] font-normal">
                        {item?.consultation}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span>Удаление внутриматочной спирали ВМС</span>
                      <span className="flex-grow border-t border-dotted border-gray-400 mx-2 h-0 text-[13px] leading-[16px] font-normal text-[#212529]"></span>
                      <span className="text-[#ec483e] text-[13px] leading-[16px] font-normal">
                        {item.IUD}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span>Лазер (лазерная терапия)</span>
                      <span className="flex-grow border-t border-dotted border-gray-400 mx-2 h-0 text-[13px] leading-[16px] font-normal text-[#212529]"></span>
                      <span className="text-[#ec483e] text-[13px] leading-[16px] font-normal">
                        {item?.lazer}
                      </span>
                    </div>
                  </div>
                  <a
                    href=""
                    className="hover:underline text-[#007bff] text-[1em] font-normal"
                  >
                    Все цены
                  </a>
                </div>
              </div>
            </div>
            <p className="pt-5 pb-5 pr-5 text-xs font-normal font-italic text-[#212529] border-b">
              {item?.text}
            </p>
            <ul className="inline-block text-[1em] font-normal text-[#212529] mt-5 list-disc my-4 ps-10 [unicode-bidi:isolate]">
              <li className="float-left text-[14px] list-none mb-[10px] border-r border-[#e4e4e4] align-middle pe-3 ps-[12px]">
                ✅ ПЦР-анализ
              </li>
              <li className="float-left text-[14px] list-none mb-[10px] border-r border-[#e4e4e4] align-middle pe-3 ps-[12px]">
                ✅ ИФА (Антитела Ig М+G)
              </li>
              <li className="float-left text-[14px] list-none mb-[10px] border-r border-[#e4e4e4] align-middle pe-3 ps-[12px]">
                ✅ ИХЛА (Антитела IgM и IgG)
              </li>
              <li className="float-left text-[14px] list-none mb-[10px] border-r border-[#e4e4e4] align-middle pe-3 ps-[12px]">
                ✅ Выезд на дом или офис
              </li>
              <li className="float-left text-[14px] list-none mb-[10px] border-r border-[#e4e4e4] align-middle pe-3 ps-[12px]">
                ✅ Справка для аэропорта (Рус/Eng)
              </li>
              <li className="float-left text-[14px] list-none mb-[10px]  border-[#e4e4e4] align-middle pe-3 ps-[12px]">
                <a href="#" className="text-blue-600 hover:underline">
                  &gt;&gt;&gt; Подробнее
                </a>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
