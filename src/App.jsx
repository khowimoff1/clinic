import React from "react";
import { Clinic } from "./Data";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

const App = () => {
  const [value, setValue] = React.useState(5);
  const [value1, setValue1] = React.useState(4);
  return (
    <div className="container w-full m-auto max-w-7xl">
      <div className="border border-[#ff2f6b] px-3 py-3 w-[755px]">
        <div className="flex ">
          <div className="border w-[130px] h-[130px] flex items-center justify-center">
            <img
              src="data:image/webp;base64,UklGRhAFAABXRUJQVlA4IAQFAAAwGQCdASpkAGQAPm02lkgkIyIhJVn5KIANiWMAVSpyUMptoP106VP0Hbxr+t3sAeW57If+RreHhL4gPRD8Dsx/cPyv5AdrD/D721kv/ZeADqR3m3+l4wagB/Gv6l/wPSs/2/8v5zfor9iPgF/mP9Y/6XrX+xj0S/2WHgmN9F7qGxK5T0o2RbLhQbxfy1ikTQG8coVX04p1hbupx87XAKEDAL7iOlah0/Sst9LPeeZ3GbGxJ+8vkuemtUWwJ+TRDuJ40f4m7u9/+IZ4417vovfwy4AA/vxKAAe/xajPZAGmgDt66O309o8GjDI6QCzlHsM/2BQuUp16CUiW7H3yHZL7Wa5U3uXyPVjLiPpjfjcJdsLe/YlDlnHhBNKr6i09i4rofc/xJpV+e/1G11UsqHj34cAr4VEsR1ht9aocpr8XMm8RiDnuQeGovphZOu0gEdd+kScTMltGTzUbEZybFlhChb3X7HZJTYTIUFP7skCdyXe7u9y4gumTwAdDhVf3EBz6DhYhVFyEoMj4ngi5a77ExRYBfHxl94Xi2P4n4d7g0fkv1KOMS0p2MnXUwPg8S48xNBnUXmnSILPFSBvjbumj74L/Ly3Ll4Pr+OFekYUr9rfT8dnx/0Vg6MRXbdGC7tij+27cQP9WhVTuMqGFBO7OMYRw7tzIhzlO7R86Vg8ffn61j+FZy7zLNd28OLiW3ICBqijw5wCTVUUYaQD6Ka7iO6OpZhY2BJxYHtYACIhNXBdCFt7A/ijMaDwVjIopIYy1ZpcI4CtCPrWW1/qhr3XpSfN3fndH3RLnSCsHigmAqKOjO2qhNqZDaWa/gVfxdbwJCe7N9mpnqQNlbmRzohopXMPW/gn7x51Paoh+CXqs35i6vAFer5dWwZ+/5Uqwkpphqn//eSTi2C1j6/kxKUZDibImbagCvsn9nyPKhqXieoMSogBLESpAUXiTFe8HkzwED2Qfxxv8QsQNzPBm9UEvzj43dkAQksy0C7PWsEfadlksKEr7oyuU+UQK1WkJkLC5x+vSd49PO/JDtQJ2r3ZairMJN2MEks7OoQpyPupES5VnuMzpxNrcBqy9hrQXJVZZc9NwhFeslWFtfxcL10Ogt/8ljrEhekiraFNo/vuHmH9NsQXEk9nTr8ocm+ZUG3blmgz9+yp+S5lw7ok8xXzWWnZWY3WQBjfoEuAMJuUDb73L6MHujt2fv+3Ky7tZkXVj0qI39GvzlN6NnMpB4bvz49bCUv/i7+i01EaVly9PuGzi/5NpKrtSOSm/N1pDtVyk0r4rvz3iV6ZH//Sj5wxxKX6pHm/VJeXNlF/ud5086L++6KwAcaDJMkN4lcCHbFA9gUE15mWr9h7cQ7+abPZNvzp7UDuX5zRQJ/ue18JKReNkOa8ajfIzXjv8t2Xkc/6V5lDotqjX4ayG1540wbXsCbpZRZAEt83x9A8SceYDDP/cv6xUgxVxSQ+/F4X0f+lb3F/Z2M0gADsyHujBb/KxEwHlB7z4Q5irZUgZFzQFMihHpZTlFPs1XbDS+DgM3tx4pmEMkgzIak3crs9GFMxMc1mDi5jWcJR1gxPFwfESfkUjy608LsyeDqTJP8QdOhOuRQuRJ6UTqbqJgb1EDUHUuC7BtW/zGbjgFfitIBUAMf0DSE7211PyLwFK+EnhdToqXwlCSFrW768tp0KeDP6zQahpwM9Fjz4FXNLHEWeUAAAAAAA="
              alt="qwe"
              width={100}
              height={100}
            />
          </div>
          <div className="ml-3">
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
                +998-55-516-60-04
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
            <div className="flex gap-3 border-b border-[#8ec1ff] w-full">
              <div>
                <img
                  src="data:image/webp;base64,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"
                  alt="img"
                  width={100}
                  height={100}
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
                  Абдуллаева Феруза Тургуновна
                </a>
                <h1 className="text-[1em] font-medium text-[#212529]">
                  Акушер, Гинеколог
                </h1>
                <h1 className="text-[1em] font-normal text-[#212529]">
                  Стаж работы: 39 лет Врач высшей категории
                </h1>
              </div>
            </div>
            <div>
              <div class="space-y-1 text-sm font-normal text-black">
                <div class="flex items-center">
                  <span>Первичная консультация гинеколога</span>
                  <span class="flex-grow border-t border-dotted border-gray-400 mx-2 h-0 text-[13px] leading-[16px] font-normal text-[#212529]"></span>
                  <span class="text-[#ec483e] text-[13px] leading-[16px] font-normal">
                    цена по звонку
                  </span>
                </div>
                <div class="flex items-center">
                  <span>Удаление внутриматочной спирали ВМС</span>
                  <span class="flex-grow border-t border-dotted border-gray-400 mx-2 h-0 text-[13px] leading-[16px] font-normal text-[#212529]"></span>
                  <span class="text-[#ec483e] text-[13px] leading-[16px] font-normal">
                    цена по звонку
                  </span>
                </div>
                <div class="flex items-center">
                  <span>Лазер (лазерная терапия)</span>
                  <span class="flex-grow border-t border-dotted border-gray-400 mx-2 h-0 text-[13px] leading-[16px] font-normal text-[#212529]"></span>
                  <span class="text-[#ec483e] text-[13px] leading-[16px] font-normal">
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
