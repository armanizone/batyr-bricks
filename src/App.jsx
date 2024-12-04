import React from "react";
import { Carousel } from '@mantine/carousel'

import '@mantine/carousel/styles.css';
import { BackgroundImage, Button, TextInput, Textarea } from "@mantine/core";



function App() {
  return (
    <>
    <img 
      className="object-cover min-h-screen w-full -z-10 fixed"
      src="https://images.wallpaperscraft.com/image/single/building_bottom_view_edges_1110172_1920x1080.jpg"
    />
    <div className="pt-20 ">
      <div className="container bg-white p-6">
        <header className="flex gap-4 justify-between">
          <div>
            LOGO
          </div>
          <div className="flex gap-4 items-center text-lg font-semibold">
            <p>О нас</p>
            <p>Каталог</p>
            <p>Контакты</p>
          </div>
        </header>
      </div>

      <div className="container">
        <Carousel 
          withIndicators 
          height={400}
          className="-mx-3 mt-6"
          slideSize={'100%'}
          loop
          withControls={false}
        >
          <Carousel.Slide>
            <div className="relative w-full h-full bg-red-500">
              <div className="absolute top-1/2 -translate-y-1/2 left-4 max-w-sm ">
                <p className="text-3xl text-white font-bold">Заголовок</p>
                <p className="text-lg mt-4 text-white tracking-wider">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, dicta? </p>
              </div>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div className="relative w-full h-full bg-blue-500">
              <div className="absolute top-1/2 -translate-y-1/2 left-4 max-w-sm ">
                <p className="text-3xl text-white font-bold">Заголовок</p>
                <p className="text-lg mt-4 text-white tracking-wider">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, dicta? </p>
              </div>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div className="relative w-full h-full bg-green-500">
              <div className="absolute top-1/2 -translate-y-1/2 left-4 max-w-sm ">
                <p className="text-3xl text-white font-bold">Заголовок</p>
                <p className="text-lg mt-4 text-white tracking-wider">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, dicta? </p>
              </div>
            </div>
          </Carousel.Slide>
        </Carousel>
      </div>

      <div className="bg-white pt-5">
        <div className="container mt-5">
          <div className="relative">
            <h1 className="absolute -top-7 left-1/2 -translate-x-1/2 z-10 text-2xl p-3 rounded-xl bg-white uppercase font-bold tracking-wider border">Каталог</h1>
            <div className="grid grid-cols-2 gap-4 border-2 -mx-3 mt-4 bg-zinc-50 py-6 relative">
              <div className="text-center">
                <img 
                  src='https://enki.kz/sites/default/files/styles/catalog_image/public/ryad_14_compressed.jpg?itok=BUyEKyli' 
                  alt=""
                  className="mx-auto" 
                />
                <p className="mt-4 font-bold text-lg">Рядовой кирпич</p>
              </div>
              <div className="text-center">
                <img 
                  src='https://enki.kz/sites/default/files/styles/catalog_image/public/ryad_14_compressed.jpg?itok=BUyEKyli' 
                  alt=""
                  className="mx-auto" 
                />
                <p className="mt-4 font-bold text-lg">Лицевой кирпич</p>
              </div>
            </div>
          </div>

          {/* <div className="relative -mx-3">
            <h1 className="absolute -top-7 left-1/2 -translate-x-1/2 z-10 text-2xl p-3 rounded-xl bg-white uppercase font-bold tracking-wider border">Преимущества</h1>

            <div className="grid grid-cols-4 gap-4">
              <div>


              </div>
              <div>


              </div>
              <div>


              </div>
              <div>


              </div>
            </div>
          </div> */}
          
          
          <footer className="relative mt-16">
            <h1 className="absolute -top-7 left-1/2 -translate-x-1/2 z-10 p-3 rounded-xl bg-white uppercase font-bold tracking-wider border">Оставить заявку</h1>
            <div className="bg-zinc-50 p-4 border py-6 max-w-md mx-auto">
              <TextInput
                label='ФИО'
              />
              <TextInput
                label='Номер телефона'
              />
              <Textarea
                label='Сообще ние'
              />
              <div className="flex justify-center mt-4">
                <Button>
                  Отправить
                </Button>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
