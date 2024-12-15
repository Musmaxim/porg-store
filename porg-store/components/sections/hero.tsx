"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Hero = () => {
  const slides = [
    {
      src: "/images/dog1.jpg",
      alt: "Собака 1",
      title: "Собака 1",
      description: "Это описание для собаки 1.",
    },
    {
      src: "/images/dog2.jpg",
      alt: "Собака 2",
      title: "Собака 2",
      description: "Это описание для собаки 2.",
    },
    {
      src: "/images/dog3.jpg",
      alt: "Собака 3",
      title: "Собака 3",
      description: "Это описание для собаки 3.",
    },
    {
      src: "/images/dog1.jpg",
      alt: "Собака 1",
      title: "Собака 1",
      description: "Это описание для собаки 1.",
    },
    {
      src: "/images/dog2.jpg",
      alt: "Собака 2",
      title: "Собака 2",
      description: "Это описание для собаки 2.",
    },
    {
      src: "/images/dog3.jpg",
      alt: "Собака 3",
      title: "Собака 3",
      description: "Это описание для собаки 3.",
    },
  ];

  return (
    <section className="relative">
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent className="transition-transform duration-800 ease-in-out"> {/* Добавьте плавный переход */}
          {slides.map((slide, index) => (
            <CarouselItem
              key={index}
              className="relative md:basis-1/2 lg:basis-1/3 pl-0" // Используйте h-full для CarouselItem
            >
               <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 p-4">
                <h1 className="text-4xl xl:text-5xl font-bold mb-2">{slide.title}</h1>
                <p className="text-2xl xl:text-3xl">{slide.description}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 z-10 text-white bg-black rounded-full p-2 transition" />
        <CarouselNext className="absolute right-4 z-10 text-white bg-black rounded-full p-2 transition" />
      </Carousel>
    </section>
  );
};

export default Hero;