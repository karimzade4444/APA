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
      draggable={false}
      onDragStart={(event) => event.preventDefault()}
      className="group flex h-24 w-[320px] shrink-0 cursor-grab items-start gap-4 border border-[#061d35]/10 bg-white px-5 py-3 transition-all duration-300 hover:border-[#d4af62] hover:bg-[#061d35] active:cursor-grabbing"
    >
      {/* Логотип */}
      <div className="flex h-14 w-20 shrink-0 self-center items-center justify-center">
        <Image
          src={resource.logo}
          alt={resource.name}
          width={100}
          height={70}
          draggable={false}
          className="max-h-14 w-auto max-w-full object-contain transition-all duration-300 group-hover:scale-105"
        />
      </div>

      {/* Название */}
      <div className="min-w-0 flex-1 self-center border-l border-[#061d35]/10 pl-4 text-left transition-colors duration-300 group-hover:border-white/20">
        <p className="flex h-[3.75rem] items-center overflow-hidden text-left text-[13px] font-medium leading-5 text-[#061d35] transition-colors duration-300 group-hover:text-white">
          <span className="line-clamp-3">{resource.name}</span>
        </p>

        <div className="mt-2 h-px w-8 bg-[#d4af62] transition-all duration-300 group-hover:w-14" />
      </div>
    </a>
  );
};

export default OfficialResourceCard;
