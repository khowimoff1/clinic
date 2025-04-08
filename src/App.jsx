import React from "react";
import { Clinic } from "./Data";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

const App = () => {
  const [value, setValue] = React.useState(5);
  const [value1, setValue1] = React.useState(4);
  return (
    <div className="container w-full m-auto max-w-7xl">
      <div className="border border-[#ff2f6b] px-3 py-3 w-[755px] my-5">
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
                  width={100}
                  height={100}
                  className="h-[120px]"
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
      <div className="border border-[#ff2f6b] px-3 py-3 w-[755px] my-5">
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
              Ватан тиббиёт маркази
            </a>
            <div className="flex items-center">
              <Box sx={{ "& > legend": { mt: 2 } }}>
                <Rating name="read-only" value={value} readOnly />
              </Box>
              <a href="" className="text-[#007bff] text-[1em] font-normal">
                4 отзывов
              </a>
            </div>
            <p className="bg-[#f2f2f2] p-1 text-[#212529] text-[1em] font-normal flex w-[134px]">
              Частная клиника
            </p>

            <div className="inline-block px-4 py-2 my-1 text-sm text-white bg-red-500 rounded-full">
              Скидка 50% на консультацию у всех врачей – каждую пятницу
            </div>
            <div className="flex items-center gap-1">
              <img
                src="https://clinics.uz/img/adress_icon.png"
                alt=""
                width={20}
                height={20}
              />
              <p className="text-[#212529] text-[1em] font-normal ">
                26-й квартал, ул. Лутфий, Учтепинский район, Ташкент
              </p>
            </div>
            <div className="flex items-center gap-1">
              <h1 className="font-semibold text-[#212529] text-[1em]">
                Ориентир:
              </h1>
              <p className="text-[#212529] text-[1em] font-normal">
                Кинотеатр "Ватан
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
                +998-71-205-57-48
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
                Круглосуточно 24/7
              </p>
            </div>
            <h1 className="text-[1.5em] font-medium">Врачи</h1>
            <div className="flex gap-3 border-b border-[#8ec1ff] w-full mb-3 pb-3">
              <div>
                <img
                  src="data:image/webp;base64,UklGRqAEAABXRUJQVlA4TJMEAAAvY8AYAG+joG0bJvxJd/8wmP/5n3+1bdswo0sS5Q1d04hEJCKg0ltVwfmzKCtN/nElkUBt27a3TfM8b41aVWAwcSZ14uwFJi4Z7A3ZcfZeBqMofXr//x+g9Q51foro/wTQ/x+V31OP9/rKBR4aHw/YlBr4eHorydHhu15l37O3b3uIiYh9xUTE+dTogUCyQvbqbFd3WXnDin0ipebKnlJcYcWKiUixYiIq74rO9cCqZpXiZQpm7s3VKs0nQaN/tPLY536/UX1eITXbgRZc1tmmUSYi1Uv9fWquVpns7WpM+mrkt2Cs3KyMsJoX7dETZc9ks4uI672kauXe8i/VwO/xhsqDfr9f6+qpd82LwWiGrWF+VrsTUJyJiYiZmImZiJmnIhMS9bItRPNvX1U5prP6Xcye+/aoUolJM+/CED6wNQZ5QsxX3SsdwRhW2Lk6xMKqa9wSC7HMjgWhDdLxHZuBFRh1bEPs/OxWKTSDtGvlVK+YxI/5dkpUcWoGBrBX4d+RhJpL/EEfOk8VkRelNJ3aFu0rZSIi9T1JVp061HU4zBQvhSlrLpUiLTibKFHygKQeulS+1YCTaUWp/g5S2kUC2Z8qUcbRqzACICKhKgrg20q3ouzs+bXppUgk8ooBP1pjHpNWvioEoLP/bsBj0l0InXf1vhKTSe+mAORnMt2LAkDF2KNCmDb2sgjkrbFlceyBiMi5MqTarg1ARMLAUCUSEak49DiGaUNNiAiGHGrGZIuN8KHEph36mBDdN9ItCfPu8KnE8YYN8BfEpMXOlNoJcuUZeBhK4ok7VSThDWvjr0iSwJmFFAm7tPXdSjJGXeF1ScVuSZN3Imkf2RHvW5r8+YK18GekyZVypI4MIg3WwIuQjBhwQ+1I5ptZzsVzkhlf2Ynu22wSzasc3mvJ+cN3Qa0hh2DzPmfg6j7y4AU7MCh5IQg/P2QmIi71rNxAgGwS9toXnCMb9i4gAjldm28ubJxBRHDcyYED37Y7+5Cc4eCXCCICACIiuHk9jxyCXWUV3zsEbr8dfJmfGBkZn519Mjv/ckz1rUWQRCD82KXWlxqNqfHxqcbi++XWeVuA3cCq7d2p3pFnnzZ20/frTMR3Z1uHnai9vz7uEbFa3k1vLb8Yf1Ce+rzONnnNfQEgGRH6TETEzIqZiYh4EZIRAC5fV5jsvftZAMmLQxXLPADJDezX2A7+6bXoxQvO4XVEK1pltoCrl9CFR5yFeRN6BNEsG+MpgWjreJylCV0CfFGG+Ckg+tHK0i0Q7cC2MtMQs2imlS7F7LYywCOAGZHuJF6GIXxmfUFoDJclJiKehTFMsS7ehZgGVpiZKhHENKJAE49DLMQskzqBmMcGsxbVFiujCn2EWNmrZwp24HwCdmBDC59YIoAtCDgfl2GLtcC8BlqEOAnEoEPkUANvu7LYaDQaHT0oaQhdCYiIzzUN5PMhDpGux/mqBSSvOQ8PSgF9pNzDRbT89wipSUgtGLxWyRxTyQNFIy9IZ/XfCrzg1Bgn9xbOH2Hyr7HDMDEqmnQEsXPR+z+P2Xq9Xm8XHUQEKDiz/0AAAA=="
                  alt="img"
                  width={100}
                  height={100}
                  className="h-[100px]"
                />
              </div>
              <div>
                <a
                  href=""
                  className="text-[#007bff] text-[20px] font-normal hover:underline hover:text-[#000]"
                >
                  Тангирова Назира
                </a>
                <h1 className="text-[1em] font-medium text-[#212529]">
                  Гинеколог, Маммолог
                </h1>
                <h1 className="text-[1em] font-normal text-[#212529]">
                  Стаж работы: 12 лет Врач высшей категории
                </h1>
              </div>
            </div>
            <div className="flex gap-3 border-b border-[#8ec1ff] w-full mb-3 pb-3">
              <div>
                <img
                  src="https://clinics.uz/images/doctors/xABKMSrFBkgDtis72VGRuki5Ni9l4ECzooteY3LUF_small.jpg.pagespeed.ic.uVnNrstNkD.webp"
                  alt="img"
                  width={100}
                  height={100}
                  className="h-[100px]"
                />
              </div>
              <div>
                <a
                  href=""
                  className="text-[#007bff] text-[20px] font-normal hover:underline hover:text-[#000]"
                >
                  Хасанова Эльмира Юлдашевна
                </a>
                <h1 className="text-[1em] font-medium text-[#212529]">
                  Акушер-гинеколог, Маммолог, Репродуктолог (ЭКО)
                </h1>
                <h1 className="text-[1em] font-normal text-[#212529]">
                  Стаж работы: 16 лет Врач первой категории
                </h1>
                <h1 className="text-[1em] font-normal text-[#212529]">
                  График: Пн-Сб с 09:00 до 17:00
                </h1>
              </div>
            </div>
            <div className="flex gap-3 border-b border-[#8ec1ff] w-full mb-3 pb-3">
              <div>
                <img
                  src="https://clinics.uz/images/doctors/xapOGiOPGTVcLzqTRhXQIR96G4m8UCk6EiJIj57yC_small.jpg.pagespeed.ic.2Bi9EUo_mm.webp"
                  alt="img"
                  width={100}
                  height={100}
                  className="h-[100px]"
                />
              </div>
              <div>
                <a
                  href=""
                  className="text-[#007bff] text-[20px] font-normal hover:underline hover:text-[#000]"
                >
                  Тогаймуродова Зебунисо Фахриддиновна
                </a>
                <h1 className="text-[1em] font-medium text-[#212529]">
                  Гинеколог
                </h1>
                <h1 className="text-[1em] font-normal text-[#212529]">
                  Стаж работы: 3 года
                </h1>
                <h1 className="text-[1em] font-normal text-[#212529]">
                  График: Пн-Сб с 17:00 до 23:00
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
