import React from "react";
import { Clinic } from "./Data";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

const App = () => {
  const [value, setValue] = React.useState(5);
  const [value1, setValue1] = React.useState(4);
  return (
    <div className="container w-full m-auto max-w-7xl">
      <div className="border border-[#ff2f6b] px-3 py-3 w-[755px] mt-5">
        <div className="flex ">
          <div className="border w-[130px] h-[130px] flex items-center justify-center">
            <img
              src="https://nssmed.uz/static/media/logo.0e9ec22976eb2dd3e13d.png"
              alt="qwe"
              width={100}
              height={100}
            />
          </div>
          <div className="w-full ml-3">
            <a
              href=""
              className="text-[#ff2f6b] font-bold text-[1em] underline"
            >
              Lab Medical
            </a>
            <div className="flex items-center">
              <Box sx={{ "& > legend": { mt: 2 } }}>
                <Rating name="read-only" value={value} readOnly />
              </Box>
              <a href="" className="text-[#007bff] text-[1em] font-normal">
                19 отзывов
              </a>
            </div>
            <p className="bg-[#f2f2f2] p-1 text-[#212529] text-[1em] font-normal flex w-[134px]">
              Частная клиника
            </p>
            <div className="flex items-center gap-1">
              <img
                src="https://clinics.uz/img/adress_icon.png"
                alt=""
                width={20}
                height={20}
              />
              <p className="text-[#212529] text-[1em] font-normal ">
                Адрес клиники ул. Истирохат, дом 60А, Учтепинский район, Ташкент
              </p>
            </div>
            <div className="flex items-center gap-1">
              <h1 className="font-semibold text-[#212529] text-[1em]">
                Ориентир:
              </h1>
              <p className="text-[#212529] text-[1em] font-normal">
                ул. Генерала Узакова
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
                +998-55-508-30-30
              </a>
            </div>
            <h1 className="bg-[#ff9] text-[#000] text-xs px-[5px] w-[295px]">
              Скажите, что нашли номер телефона на Клиникс уз
            </h1>
            <div className="flex items-center gap-1">
              <h1 className="font-semibold text-[#212529] text-[1em]">
                Время работы:
              </h1>
              <p className="text-[#212529] text-[1em] font-normal">
                Пн-сб 07:30-20:00
              </p>
            </div>
            <h1 className="text-[1.5em] font-medium">Врачи</h1>
            <div className="flex gap-3 border-b border-[#8ec1ff] w-full mb-5">
              <div>
                <img
                  src="https://nssmed.uz/static/media/nilufar.1767647d0320dea47a73.jpg"
                  alt="img"
                  width={130}
                  height={100}
                  className="h-[150px]"
                />
                <Box sx={{ "& > legend": { mt: 1 } }}>
                  <Rating
                    name="read-only"
                    value={value1}
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
                  Атаджанова Нилюфар Рахимовна
                </a>
                <h1 className="text-[1em] font-medium text-[#212529]">
                  Онкогинеколог
                </h1>
                <h1 className="text-[1em] font-normal text-[#212529]">
                  Стаж более 16 лет
                </h1>
              </div>
            </div>
            <div className="w-[80%]">
              <div className="space-y-1 text-sm font-normal text-black">
                <div className="flex items-center">
                  <span>Первичная консультация гинеколога</span>
                  <span className="flex-grow border-t border-dotted border-gray-400 mx-2 h-0 text-[13px] leading-[16px] font-normal text-[#212529]"></span>
                  <span className="text-[#ec483e] text-[13px] leading-[16px] font-normal">
                    цена по звонку
                  </span>
                </div>
                <div className="flex items-center">
                  <span>Удаление внутриматочной спирали ВМС</span>
                  <span className="flex-grow border-t border-dotted border-gray-400 mx-2 h-0 text-[13px] leading-[16px] font-normal text-[#212529]"></span>
                  <span className="text-[#ec483e] text-[13px] leading-[16px] font-normal">
                    цена по звонку
                  </span>
                </div>
                <div className="flex items-center">
                  <span>Лазер (лазерная терапия)</span>
                  <span className="flex-grow border-t border-dotted border-gray-400 mx-2 h-0 text-[13px] leading-[16px] font-normal text-[#212529]"></span>
                  <span className="text-[#ec483e] text-[13px] leading-[16px] font-normal">
                    цена по звонку
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
          Lab Medical - территория здоровья, где каждый пациент получает
          индивидуальный комплексный подход и доступ к лучшим мировым
          медицинским технологиям. Мы собрали уникальную команду экспертов –
          которые работают вместе на благо пациентов. Командная работа ...
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
    </div>
  );
};

export default App;
