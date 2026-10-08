"use client";

import Image from "next/image";
import type { OfficialResource } from "@/data/officialResources";

type OfficialResourceCardProps = {
  resource: OfficialResource;
};

const OfficialResourceCard = ({ resource }: OfficialResourceCardProps) => {
  return (
    <a
      href={resource.href}
      target="_blank"
      rel="noopener noreferrer"
      title={resource.name}
      className="group flex h-24 w-[270px] shrink-0 items-center gap-4 border border-[#061d35]/10 bg-white px-5 transition-all duration-300 hover:border-[#d4af62] hover:bg-[#061d35]"
    >
      {/* Логотип */}
      <div className="flex h-14 w-20 shrink-0 items-center justify-center">
        <Image
          src={resource.logo}
          alt={resource.name}
          width={100}
          height={70}
          className="max-h-20 w-auto max-w-full object-contain transition-all duration-300 group-hover:scale-105"
        />
      </div>

      {/* Название */}
      <div className="border-l border-[#061d35]/10 pl-4 transition-colors duration-300 group-hover:border-white/20">
        <p className="text-xs font-medium leading-5 text-[#061d35] transition-colors duration-300 group-hover:text-white">
          {resource.name}
        </p>

        <div className="mt-2 h-px w-8 bg-[#d4af62] transition-all duration-300 group-hover:w-14" />
      </div>
    </a>
  );
};

export default OfficialResourceCard;
