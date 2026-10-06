import Image from "next/image";


const Brand = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-25 w-25 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#d4af62] mt-3 mb-3">
        <Image
          src="/images/logo/academy-logo.png"
          alt="Academy Logo"
          width={200}
          height={200}
          className="h-full w-full object-contain"
        />
      </div>

      <div>
        <p className="text-lg font-medium uppercase tracking-[0.18em] text-[#d4af62]">
          АКАДЕМИЯ
        </p>

        <h1 className="text-xl font-semibold font-serif leading-tight text-white">
          ГОСУДАРСТВЕННОГО УПРАВЛЕНИЯ
        </h1>

        <p className="text-xs text-white/60">
          при Президенте Республики Таджикистан
        </p>
      </div>
    </div>
  );
};

export default Brand;
