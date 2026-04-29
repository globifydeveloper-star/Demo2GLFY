"use client";

import wilsonLogo from "@/assets/clients/wilson.png";
import instarunwayLogo from "@/assets/clients/instarunway.png";
import salomonLogo from "@/assets/clients/salomon.png";
import isroLogo from "@/assets/clients/isro.png";
import moherLogo from "@/assets/clients/moher.png";
import motoavenueLogo from "@/assets/clients/motoavenue.png";
import mrStartLogo from "@/assets/clients/mr-start.png";
import telnysLogo from "@/assets/clients/telnys.png";
import riadLogo from "@/assets/clients/riad.png";
import judithLeiberLogo from "@/assets/clients/judith-leiber.png";

const clients = [
  { name: "Salomon", logo: salomonLogo.src },
  { name: "Wilson", logo: wilsonLogo.src },
  { name: "InstaRunway", logo: instarunwayLogo.src },
  { name: "ISRO", logo: isroLogo.src },
  { name: "Moher", logo: moherLogo.src },
  { name: "Moto Avenue", logo: motoavenueLogo.src },
  { name: "MR START", logo: mrStartLogo.src },
  { name: "Telnys", logo: telnysLogo.src },
  { name: "Ri-Ad", logo: riadLogo.src },
  { name: "Judith Leiber", logo: judithLeiberLogo.src },
];

const WebDevClients = () => {
  return (
    <section className="py-14 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-8">
        <p className="text-center text-sm font-semibold tracking-[0.25em] uppercase text-neutral-400">
          Trusted by Leading Brands Worldwide
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        <div className="flex">
          <div className="flex shrink-0 animate-marquee gap-20 items-center pr-20">
            {clients.map((client) => (
              <img
                key={client.name}
                src={client.logo}
                alt={client.name}
                loading="lazy"
                decoding="async"
                className="h-16 md:h-20 w-auto object-contain shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            ))}
          </div>
          <div className="flex shrink-0 animate-marquee gap-20 items-center pr-20">
            {clients.map((client) => (
              <img
                key={`${client.name}-dup`}
                src={client.logo}
                alt={client.name}
                loading="lazy"
                decoding="async"
                className="h-16 md:h-20 w-auto object-contain shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevClients;
