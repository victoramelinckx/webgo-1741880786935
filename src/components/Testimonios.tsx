"use client";
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { FcGoogle } from "react-icons/fc";
import { Carousel, CarouselContent, CarouselItem } from "./ui/Carousel";
import Autoplay from "embla-carousel-autoplay";

interface Testimonial {
  id: number;
  text: string;
  author: string;
  position: string;
  image: string;
}

export default function Testimonios() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "We had the pleasure of working with Moving for our recent office relocation. Their team was professional, efficient, and made the entire process stress-free. Highly recommend their services!",
      author: "Sarah Johnson",
      position: "Operations Director, TechCorp",
      image: "/vacio.jpg",
    },
    {
      id: 2,
      text: "Moving helped us transition to our new headquarters with minimal disruption to our business. Their attention to detail and careful handling of our equipment was impressive.",
      author: "Michael Chen",
      position: "CEO, Innovate Solutions",
      image: "/vacio.jpg",
    },
    {
      id: 3,
      text: "The team at Moving went above and beyond our expectations. They were flexible with our timeline changes and provided excellent communication throughout the entire moving process.",
      author: "Emily Rodriguez",
      position: "Facilities Manager, Global Enterprises",
      image: "/vacio.jpg",
    },
    {
      id: 4,
      text: "I've used many moving companies in the past, but none compare to the level of service provided by Moving. They truly understand the complexities of corporate relocations.",
      author: "David Thompson",
      position: "COO, Future Finance",
      image: "/vacio.jpg",
    },
  ];

  return (
    <section className="w-full py-20 ">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-6xl">
            Why people love Moving
          </h2>
          <div className="flex flex-row items-center justify-center mt-8">
            <FcGoogle className=" w-12 h-auto mr-2" />
            <span className="text-2xl font-bold text-black mr-2">4.7</span>
            <FaStar className="w-6 fill-yellow-400" />
            <FaStar className="w-6 fill-yellow-400" />
            <FaStar className="w-6 fill-yellow-400" />
            <FaStar className="w-6 fill-yellow-400" />
            <FaStar className="w-6 fill-yellow-400" />
            <span className="ml-2 text-xl font-medium text-black">
              +3200 Reviews
            </span>
          </div>
        </div>

        <div className="w-full mx-auto px-4">
          <Carousel
            plugins={[plugin.current]}
            opts={{
              loop: true,
              align: "center",
              slidesToScroll: 1,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 min-w-[550px] max-w-[550px] h-auto"
                >
                  <Card className="bg-white shadow-md h-full">
                    <CardContent className="p-6 md:p-8 flex flex-col ">
                      <div className="flex mb-10 space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className=" w-7 h-auto  fill-yellow-400 "
                          />
                        ))}
                      </div>
                      <p className="text-muted-foreground text-[20px] leading-[170%] mb-6">
                        {`"${testimonial.text}"`}
                      </p>
                      <div className="flex items-center mt-auto">
                        <div className="relative h-12 w-12 rounded-full overflow-hidden mr-5">
                          <Image
                            src={testimonial.image || "/vacio.jpg"}
                            alt={testimonial.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="text-left">
                          <h4 className="font-normal text-xl text-gray-400">
                            {testimonial.author}
                          </h4>
                          <p className="text-sm text-gray-400 text-muted-foreground">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
