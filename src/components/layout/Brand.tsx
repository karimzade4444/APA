const Brand = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#d4af62]">
        <span className="text-2xl font-semibold text-[#d4af62]"></span>
      </div>

      <div>
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#d4af62]">
          Академия
        </p>

        <h1 className="text-lg font-semibold leading-tight text-white">
          Государственного управления
        </h1>

        <p className="text-xs text-white/60">
          при Президенте Республики Таджикистан
        </p>
      </div>
    </div>
  );
};

export default Brand;
