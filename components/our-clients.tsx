import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Container from "./container";
import Separator from "./seperator";

const clients = [
  {
    name: "WPP",
    logo: "/clients/bwin.svg",
  },
  {
    name: "Nationale Nederlanden",
    logo: "/clients/entain.svg",
  },
  {
    name: "Yelp",
    logo: "/clients/arena.svg",
  },
  {
    name: "test2",
    logo: "/clients/betboo.svg",
  },
  {
    name: "test3",
    logo: "/clients/ultrapay.png",
  },
];

const OurClients = () => {
  return (
    <Separator className="h-auto md:h-auto">
      <Container className="border-x border-neutral-200/70">
        <div className="flex min-h-16 items-center justify-center border-b border-neutral-200/70 px-4 py-5 text-center sm:min-h-20">
          <p className="max-w-[90%] text-sm leading-6 text-text-muted sm:text-base md:max-w-none">
            Join 8,530+ brands and agencies using Payintelli
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className={cn(
                "flex h-24 items-center justify-center border-b border-r border-neutral-200/70 px-6",
                "sm:h-28 md:h-24",
                index % 2 === 1 && "max-sm:border-r-0",
                index % 3 === 2 && "sm:max-lg:border-r-0",
                index === clients.length - 1 && "lg:border-r-0",
              )}
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={150}
                height={60}
                className="max-h-10 w-auto max-w-36 object-contain opacity-90 sm:max-h-9 sm:max-w-34 md:max-h-10 md:max-w-38"
              />
            </div>
          ))}
        </div>
      </Container>
    </Separator>
  );
};

export default OurClients;
