import Image from "next/image";
import { ArrowUpRight, UserRound } from "lucide-react";

type ProfilePortraitProps = {
  name: string;
  photo?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  showActionIcon?: boolean;
  fillParent?: boolean;
};

export function ProfilePortrait({
  name,
  photo,
  className = "relative h-56 w-full",
  imageClassName = "object-cover object-[center_35%]",
  priority = false,
  sizes = "(max-width: 767px) 100vw, 50vw",
  showActionIcon = false,
  fillParent = false,
}: ProfilePortraitProps) {
  return (
    <div
      className={`${fillParent ? "absolute inset-0" : `relative ${className}`} shrink-0 overflow-hidden bg-[#061d35]`}
    >
      {photo ? (
        <Image
          src={photo}
          alt={name}
          fill
          priority={priority}
          sizes={sizes}
          className={`${imageClassName} transition-transform duration-700`}
        />
      ) : (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(201,164,92,0.19),transparent_48%),linear-gradient(145deg,#102d49,#061d35_68%)]" />
          <div className="pointer-events-none absolute -right-10 -top-16 size-52 rounded-full border border-[#c9a45c]/20" />
          <div className="pointer-events-none absolute -right-1 -top-7 size-32 rounded-full border border-[#c9a45c]/15" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex size-24 items-center justify-center rounded-full border border-[#d4af62]/50 bg-white/[0.04] text-[#d4af62] shadow-[0_0_50px_rgba(201,164,92,0.12)]">
              <UserRound size={42} strokeWidth={1.15} />
            </div>
          </div>
        </>
      )}
      <div className="absolute inset-0 bg-linear-to-t from-[#061d35]/75 via-transparent to-transparent" />
      {showActionIcon && (
        <div className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/50 bg-[#061d35]/80 text-white transition group-hover:rotate-45 group-hover:border-[#d4af62] group-hover:text-[#d4af62]">
          <ArrowUpRight size={17} aria-hidden="true" />
        </div>
      )}
    </div>
  );
}
