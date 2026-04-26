type FooterProps = {
  brand: string;
  copyright: string;
};

export function Footer({ brand, copyright }: FooterProps) {
  return (
    <footer className="border-t border-[#3a2f26] bg-[#211b16] px-6 py-10 text-sm text-[#e8dccd] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <span className="font-semibold uppercase tracking-[0.18em]">
          {brand}
        </span>
        <span>{copyright}</span>
      </div>
    </footer>
  );
}
