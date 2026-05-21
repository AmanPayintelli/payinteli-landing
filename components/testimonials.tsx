"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { motion } from "motion/react";

import Container from "./container";
import { testimonial } from "@/data/testimonial-data";

const Testimonials = () => {
  const columns = [
    testimonial.filter((_, index) => index % 3 === 0),
    testimonial.filter((_, index) => index % 3 === 1),
    testimonial.filter((_, index) => index % 3 === 2),
  ];

  return (
    <div className="bg-primary-soft">
      <Container className="w-full">
        <div className="flex flex-col items-center justify-center px-4 py-14 text-center sm:py-16 md:py-18">
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-text-heading sm:text-4xl md:text-5xl">
            Don&apos;t just take{" "}
            <span className="text-primary">our word for it</span>
          </h2>

          <p className="mt-4 max-w-sm text-sm leading-6 text-text-heading/70 sm:max-w-xl sm:text-base md:text-lg md:leading-7">
            Our clients are our best proof. See why growing businesses choose
            PayIntelli to accept, manage, and scale payments.
          </p>

          <div className="mt-7 inline-flex max-w-full items-center gap-2 rounded-full border border-neutral-300/70 bg-white px-3 py-1.5 text-xs text-neutral-500 sm:mt-8 sm:px-4 sm:py-2 sm:text-sm">
            <Star className="size-3.5 shrink-0 fill-primary text-primary sm:size-4" />
            <span className="font-semibold text-text-heading">4.8</span>
            <span className="truncate">trusted by growing businesses</span>
          </div>
        </div>

        <div className="grid h-180 w-full grid-cols-1 gap-3 overflow-hidden px-4 mask-t-from-80% mask-b-from-50% sm:grid-cols-2 lg:grid-cols-3">
          {columns.map((column, columnIndex) => (
            <TestimonialColumn
              key={columnIndex}
              items={column}
              reverse={columnIndex === 1}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;

const TestimonialColumn = ({
  items,
  reverse = false,
}: {
  items: typeof testimonial;
  reverse?: boolean;
}) => {
  const duplicatedItems = [...items, ...items];

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex flex-col items-center gap-3"
        animate={{
          y: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicatedItems.map((item, index) => (
          <TestimonialCard
            key={`${item.name}-${index}`}
            name={item.name}
            message={item.message}
            profile_pic={item.profile_pic}
            position={item.position}
          />
        ))}
      </motion.div>
    </div>
  );
};

const TestimonialCard = ({
  name,
  message,
  profile_pic,
  position,
}: {
  name: string;
  message: string;
  profile_pic: string;
  position: string;
}) => {
  return (
    <div className="w-full rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm sm:max-w-sm">
      <p className="text-base leading-7 text-text-heading sm:text-lg">
        {message}
      </p>

      <div className="mt-7 flex items-center gap-3">
        <div className="relative size-11 shrink-0 overflow-hidden rounded-full bg-neutral-100">
          <Image
            src={profile_pic}
            alt={`${name} profile picture`}
            fill
            className="object-cover"
          />
        </div>

        <div className="text-left">
          <h4 className="text-sm font-semibold text-text-heading">{name}</h4>
          <p className="mt-0.5 text-sm text-neutral-500">{position}</p>
        </div>
      </div>
    </div>
  );
};
