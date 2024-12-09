import React from "react";
import { Carousel } from '@mantine/carousel'
import ReactPlayer from "react-player";

import { Burger, Button, Collapse, TextInput, Textarea } from "@mantine/core";

import p1 from './assets/1.jpeg'
import p2 from './assets/2.jpeg'
import p3 from './assets/3.jpeg'
import p4 from './assets/4.jpeg'
import p5 from './assets/5.jpeg'
import p6 from './assets/6.jpeg'
import p7 from './assets/7.jpeg'
import p8 from './assets/8.jpeg'

import v1 from './assets/1.mp4'
import v2 from './assets/2.mp4'
import v3 from './assets/3.mp4'
import v4 from './assets/4.mp4'
import v5 from './assets/5.mp4'
import v6 from './assets/6.mp4'
import v7 from './assets/7.mp4'
import v8 from './assets/8.mp4'
import v9 from './assets/9.mp4'

import wh from './assets/whatsapp.svg'

import { useDisclosure } from "@mantine/hooks";

import '@mantine/carousel/styles.css';

const useScrollIntoView = (offset = 0) => {
  const refs = React.useRef({}); 

  const setRef = React.useCallback((key) => {
    if (!refs.current[key]) {
      refs.current[key] = React.createRef();
    }
    return refs.current[key];
  }, []);

  const scrollIntoView = React.useCallback((key) => {
    const target = refs.current[key]?.current;
    if (target) {
      const top = target.offsetTop - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, [offset]);

  return { setRef, scrollIntoView };
};

function App() {

  const pics = [ p1, v1, p2, v2, p3, v3, p4, v4, p5, v5, p6, v6, v7, v8, v9]

  const [menu, menu_h] = useDisclosure()

  const { setRef, scrollIntoView } = useScrollIntoView(40)

  return (
    <>
      <img 
        className="object-cover min-h-screen w-full -z-10 fixed"
        src="https://images.wallpaperscraft.com/image/single/building_bottom_view_edges_1110172_1920x1080.jpg"
      />
      <div className="pt-8 md:pt-20 ">
        <div className="container bg-white p-4 sm:p-6 shadow-md">
          <div className="w-full flex-col">
            <header className="flex gap-4 justify-between">
              <div>
                LOGO
              </div>
              
              <div className="hidden sm:flex gap-4 items-center font-semibold">
                <p className="uppercase cursor-pointer" onClick={() => scrollIntoView('1')}>О нас</p>
                <p className="uppercase cursor-pointer" onClick={() => scrollIntoView('2')}>Каталог</p>
                <p className="uppercase cursor-pointer" onClick={() => scrollIntoView('3')}>Фотогалерея</p>
                <p className="uppercase cursor-pointer" onClick={() => scrollIntoView('4')}>Контакты</p>
              </div>


              <Burger
                opened={menu}
                onClick={() => menu_h.toggle()}
                className="block sm:hidden"
              />
            </header>
            <Collapse
              in={menu}
            >
              <div className="flex sm:hidden flex-col gap-4  font-semibold">
                <p className="uppercase cursor-pointer" onClick={() => {
                  scrollIntoView('1')
                  menu_h.toggle()
                }}>
                  О нас
                </p>
                <p className="uppercase cursor-pointer" onClick={() => {
                  scrollIntoView('2')
                  menu_h.toggle()
                }}> 
                  Каталог
                </p>
                <p className="uppercase cursor-pointer" onClick={() => {
                  scrollIntoView('3')
                  menu_h.toggle()
                }}>
                  Фотогалерея
                </p>
                <p className="uppercase cursor-pointer" onClick={() => {
                  scrollIntoView('4')
                  menu_h.toggle()
                }}>
                  Контакты
                </p>
              </div>
            </Collapse>
          </div>
        </div>

        <div className="container">
          <Carousel 
            withIndicators 
            height={400}
            className="md:-mx-3 mt-6 shadow-md"
            slideSize={'100%'}
            loop
            withControls={false}
          >
            <Carousel.Slide>
              <div className="relative w-full h-full bg-red-500">
                <img src={p1} alt="" className="w-full object-cover h-[400px]" />
                <div className="absolute top-1/2 -translate-y-1/2 left-4 max-w-sm ">
                  <p className="text-3xl text-white font-bold">Заголовок</p>
                  <p className="text-lg mt-4 text-white tracking-wider">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, dicta? </p>
                </div>
              </div>
            </Carousel.Slide>
            <Carousel.Slide>
              <div className="relative w-full h-full bg-blue-500">
                <img src={p2} alt="" className="w-full object-cover h-[400px]" />
                <div className="absolute top-1/2 -translate-y-1/2 left-4 max-w-sm ">
                  <p className="text-3xl text-white font-bold">Заголовок</p>
                  <p className="text-lg mt-4 text-white tracking-wider">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, dicta? </p>
                </div>
              </div>
            </Carousel.Slide>
            <Carousel.Slide>
              <div className="relative w-full h-full bg-green-500">
                <img src={p3} alt="" className="w-full object-cover h-[400px]" />
                <div className="absolute top-1/2 -translate-y-1/2 left-4 max-w-sm ">
                  <p className="text-3xl text-white font-bold">Заголовок</p>
                  <p className="text-lg mt-4 text-white tracking-wider">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, dicta? </p>
                </div>
              </div>
            </Carousel.Slide>
          </Carousel>
        </div>

        <div className="bg-white pt-5 mt-4">
          <div className="container mt-5">

            <div className="relative" ref={setRef('1')}>
              <h1 className="absolute -top-7 left-1/2 -translate-x-1/2 z-10 text-sm md:text-base p-3 rounded-xl bg-white uppercase font-bold tracking-wider border">О нас</h1>

              <div className="bg-zinc-50 py-10 md:-mx-3 mt-4 border p-3 space-y-4 shadow-md">

                <div>
                  <p className="text-lg font-">
                    Информация о заводе и продукции
                  </p>

                  <p className="mt-2 tracking-wide font-semibold ml-3">
                    Завод начал свою работу в 2011 году и за 13 лет успешной деятельности заслужил репутацию надежного и качественного производителя строительных материалов.
                  </p>
                </div>

                <div>
                  <p className="text-lg font-">
                    Производственные мощности
                  </p>

                  <p className="mt-2 tracking-wide font-semibold ml-3">
                  Ежегодный объем выпуска продукции составляет от 20 до 22 миллионов кирпичей.
                  </p>
                </div>

                <div>
                  <p className="text-lg font-">
                    Ассортимент продукции
                  </p>

                  <p className="mt-2 tracking-wide font-semibold ml-3">
                    Предприятие специализируется на выпуске керамического кирпича следующих видов:
                  </p>
                  <ul className="list-disc ml-8 mt-1">
                    <li>Одинарный полнотелый кирпич (размеры 250×120×65 мм).</li>
                    <li>Полуторный пустотелый кирпич (размеры 250×120×88 мм).</li>
                  </ul>

                  <p className="mt-2 tracking-wide font-semibold ml-3">
                    Технические характеристики продукции:
                  </p>
                  <ul className="list-disc ml-8 mt-1">
                  <li>Одинарный кирпич 1НФ М-150.</li>
                    <li>Полуторный кирпич 1,4НФ М-150.</li>
                  </ul>
                  
                </div>

                <div>
                  <p className="text-lg font-">
                    География продаж
                  </p>

                  <p className="mt-2 tracking-wide font-semibold ml-3">
                    Продукция завода востребована по всему Северному Казахстану, включая такие города, как:
                  </p>
                  <ul className="list-disc ml-8 mt-1">
                    <li>Астана</li>
                    <li>Караганда</li>
                    <li>Петропавловск</li>
                    <li>Костанай</li>
                    <li>Кокшетау</li>
                  </ul>
                  
                </div>

                <div>
                  <p className="text-lg font-">
                    Логистика и отправка
                  </p>

                  <p className="mt-2 tracking-wide font-semibold ml-3">
                    Для удобства клиентов завод располагает собственным железнодорожным тупиком, что позволяет производить отгрузку кирпича крытыми вагонами в минимальные сроки.
                  </p>
                  
                </div>

              
              </div>
            </div>

            <div className="relative mt-5 sm:mt-10" ref={setRef('2')}>
              <h1 className="absolute -top-7 left-1/2 -translate-x-1/2 z-10 text-sm md:text-base p-3 rounded-xl bg-white uppercase font-bold tracking-wider border">Каталог</h1>
              <div className="grid md:grid-cols-2 gap-4 border shadow-md md:-mx-3 mt-4 bg-zinc-50 py-8">
                <div className="text-center">
                  <img 
                    src={p7}
                    alt=""
                    className="mx-auto object-contain h-64 " 
                  />
                  <p className="mt-4 font-bold text-lg">Одинарный полнотелый</p>
                  <ul>
                    <li className="text-lg">250*120*65мм</li>
                    <li className="text-lg">M150</li>
                    <li className="text-lg">3 кг</li>
                  </ul>
                </div>
                <div className="text-center">
                  <img 
                    src={p8}
                    alt=""
                    className="mx-auto object-contain h-64 " 
                  />
                  <p className="mt-4 font-bold text-lg">Полуторный пустотелый</p>
                  <ul>
                    <li className="text-lg">250*120*88мм</li>
                    <li className="text-lg">M150</li>
                    <li className="text-lg">3.5 кг</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white pt-5" >
              <div className="relative" ref={setRef('3')}>
                <h1 className="absolute -top-7 left-1/2 -translate-x-1/2 z-10 text-sm md:text-base p-3 rounded-xl bg-white uppercase font-bold tracking-wider border">Фотогалерея</h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 border shadow-md md:-mx-3 mt-4 bg-zinc-50 py-10 px-3">
                  {pics.map((q, i) => {

                    if (q?.includes('.mp4')) {
                      console.log(i, 'i');
                      return (
                        <div className={"max-h-64"}>
                          <ReactPlayer
                            url={q}
                            controls
                            width={'100%'}
                            height={'100%'}
                          />
                        </div>
                      )
                    }

                    return (
                      <img src={q} alt="" key={i} className="object-contain"/>
                    )
                  })}
                </div>
              </div>
            </div>
            
            {/* <div className="relative mt-16">
              <h1 className="absolute -top-7 left-1/2 -translate-x-1/2 z-10 p-3 rounded-xl text-sm md:text-base bg-white uppercase font-bold tracking-wider border whitespace-nowrap">Оставить заявку</h1>
              <div className="bg-zinc-50 p-4 border shadow-md py-6 max-w-md mx-auto">
                <TextInput
                  label='Имя'
                  placeholder="Ваше имя"
                />
                <TextInput
                  label='Номер телефона'
                  placeholder="Ваш номер"
                />
                <Textarea
                  label='Сообщение'
                  placeholder="Напишите комментарий"
                />
                <div className="flex justify-center mt-4">
                  <Button>
                    Отправить
                  </Button>
                </div>
              </div>
            </div> */}
            
          </div>

          <footer className="relative bg-black mt-10" ref={setRef('4')}>
            <h1 className="absolute -top-7 left-1/2 -translate-x-1/2 text-sm md:text-base z-10 p-3 rounded-xl bg-white uppercase font-bold tracking-wider border">Контакты</h1>
            

            <div className="py-10 sm:py-16 container w-full rounded-[15px]">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 justify-between gap-10 w-full">
                <div className="space-y-6 text-white">
                  LOGO
                </div>
                <div className="space-y-6">
                  <h3 className="text-sm text-white uppercase">Компания</h3>
                  <ul className="space-y-2 font-semibold">
                    <li className="cursor-pointer text-white">О нас</li>
                    <li className="cursor-pointer text-white">Каталог</li>
                    <li className="cursor-pointer text-white">Фотогалерея</li>
                    <li className="cursor-pointer text-white">Контакты</li>
                  </ul>
                </div>
                <div className="space-y-6">
                  <h3 className="text-sm text-white uppercase">Адрес</h3>
                  <ul className="space-y-2 font-semibold">
                    <li className="cursor-pointer text-white">Город Алматы, Узынагаш</li>
                  </ul>
                </div>
                <div className="space-y-6">
                  <h3 className="text-sm text-white uppercase">Контакты</h3>
                  <ul className="space-y-2 font-semibold">
                    <a href="https://wa.me/77479198506" target="_blank">
                      <li className="cursor-pointer text-white whitespace-nowrap">+7 (747) 919 8506 (Макс)</li>
                    </a>
                    <a href="https://wa.me/77003897070" target="_blank">
                      <li className="cursor-pointer text-white whitespace-nowrap">+7 (700) 389 7070 (Дамир)</li>
                    </a>
                    <a href="https://wa.me/77754044210 " target="_blank">
                      <li className="cursor-pointer text-white whitespace-nowrap">+7 (775) 404 4210 (Аман)</li>
                    </a>
                    <a href="https://wa.me/77005005544" target="_blank">
                      <li className="cursor-pointer text-white whitespace-nowrap">+7 (700) 500 5544 (Ермахан)</li>
                    </a>

                  </ul>
                </div>

              </div>
            </div>
            
          </footer>

        </div>
      </div>
      
      <a href="https://wa.me/77479198506" target="_blank">
        <img src={wh} alt="" className="fixed z-20 bottom-4 right-4 w-14" />
      </a>
    </>
  );
}

export default App;
