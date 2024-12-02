import React from "react";

function App() {

  return (
    <>
      <div className="bg-white text-gray-800">
        <header className="bg-orange-600 text-white">
          <div className="container mx-auto flex flex-col md:flex-row justify-between md:items-center py-4 px-6 gap-4">
            <div className="text-xl font-bold whitespace-nowrap">TOO "VIE BATYR"</div>
            <nav className="flex flex-col md:flex-row gap-4">
              <a href="#" className="hover:text-gray-300 whitespace-nowrap">
                О нас
              </a>
              <a href="#" className="hover:text-gray-300 whitespace-nowrap">
                Каталог
              </a>
              <a href="#" className="hover:text-gray-300 whitespace-nowrap">
                Новости
              </a>
              <a href="#" className="hover:text-gray-300 whitespace-nowrap">
                Контакты
              </a>
            </nav>
            <div className="space-x-4">

              <button className="bg-gray-900 text-white px-4 py-2 rounded whitespace-nowrap">
                Скачать прайс
              </button>
            </div>
          </div>
        </header>
        <section className="relative">
          <img
            src="https://via.placeholder.com/1440x600"
            alt="Hero Image"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-3xl font-bold mb-4">TOO "VIE BATYR"</h1>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam!
              </p>
                <button
                  href="#"
                  className="bg-orange-500 px-6 py-3 text-white rounded hover:bg-orange-600 mt-2"
                >
                  Подробнее
                </button>
            </div>
          </div>
        </section>
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Популярные товары</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-4 shadow rounded">
                <div className="h-40 bg-gray-200" />
                <h3 className="text-lg font-bold mt-4">Кирпич шоколад</h3>
                <p className="text-orange-500 text-xl">160 тенге</p>
              </div>
              <div className="bg-white p-4 shadow rounded">
                <div className="h-40 bg-gray-200" />
                <h3 className="text-lg font-bold mt-4">Кирпич красный</h3>
                <p className="text-orange-500 text-xl">120 тенге</p>
              </div>
              <div className="bg-white p-4 shadow rounded">
                <div className="h-40 bg-gray-200" />
                <h3 className="text-lg font-bold mt-4">Кирпич морков</h3>
                <p className="text-orange-500 text-xl">105 тенге</p>
              </div>
              <div className="bg-white p-4 shadow rounded">
                <div className="h-40 bg-gray-200" />
                <h3 className="text-lg font-bold mt-4">Кирпич шоколад</h3>
                <p className="text-orange-500 text-xl">140 тенге</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Преимущества
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 text-center">
              <div>
                <div className="h-16 w-16 bg-orange-500 rounded-full mx-auto mb-4" />
                <h3 className="font-bold">Высокая производительность</h3>
              </div>
              <div>
                <div className="h-16 w-16 bg-orange-500 rounded-full mx-auto mb-4" />
                <h3 className="font-bold">Экологичность продукции</h3>
              </div>
              <div>
                <div className="h-16 w-16 bg-orange-500 rounded-full mx-auto mb-4" />
                <h3 className="font-bold">Широкий ассортимент</h3>
              </div>
              <div>
                <div className="h-16 w-16 bg-orange-500 rounded-full mx-auto mb-4" />
                <h3 className="font-bold">Испанские технологии</h3>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Новости</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-white shadow rounded overflow-hidden">
                <div className="h-40 bg-gray-300" />
                <div className="p-4">
                  <h3 className="font-bold text-lg">
                    Технологии кладки кирпичной стены
                  </h3>
                  <p className="mt-2 text-sm">
                    Описание статьи о технологии кирпичной кладки.
                  </p>
                  <a href="#" className="text-orange-500 mt-4 inline-block">
                    Подробнее
                  </a>
                </div>
              </div>
              <div className="bg-white shadow rounded overflow-hidden">
                <div className="h-40 bg-gray-300" />
                <div className="p-4">
                  <h3 className="font-bold text-lg">
                    Правила кладки лицевого кирпича
                  </h3>
                  <p className="mt-2 text-sm">
                    Описание статьи о правилах кирпичной кладки.
                  </p>
                  <a href="#" className="text-orange-500 mt-4 inline-block">
                    Подробнее
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <p>Адрес: Казахстан, г. Кокшетау</p>
              <p>Телефон: +7(162) 41-11-03</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Компания</h3>
              <ul>
                <li>
                  <a href="#" className="hover:underline">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Каталог
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Напишите нам</h3>
              <form>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full mb-4 p-2 rounded"
                />
                <input
                  placeholder="Ваш номер"
                  className="w-full mb-4 p-2 rounded"
                />
                <textarea
                  placeholder="Предпочтения"
                  className="w-full mb-4 p-2 rounded"
                  defaultValue={""}
                />
                <div className="flex justify-center">
                  <button className="bg-orange-500 px-4 py-2 rounded text-white">
                    Отправить
                  </button>
                </div>
              </form>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
