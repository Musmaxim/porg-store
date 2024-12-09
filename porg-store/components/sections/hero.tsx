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
    { src: "/images/dog1.jpg", alt: "Собака 1" },
    { src: "/images/dog2.jpg", alt: "Собака 2" },
    { src: "/images/dog3.jpg", alt: "Собака 3" },
  ];

  return (
    <section className="">
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem
              key={index}
              className="flex items-center justify-center"
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center text-white bg-opacity-50">
                <h1 className="text-4xl font-bold">
                  Добро пожаловать в мир собак!
                </h1>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 z-10 text-white bg-black rounded-full p-2 hover:bg-gray-700 transition" />
        <CarouselNext className="absolute right-4 z-10 text-white bg-black rounded-full p-2 hover:bg-gray-700 transition" />
      </Carousel>
    </section>
  );
};

export default Hero;
