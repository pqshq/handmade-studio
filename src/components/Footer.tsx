type FooterProps = {
  brand: string;
  copyright: string;
};

export function Footer({ brand, copyright }: FooterProps) {
  return (
    <footer className="border-t border-[#ded2c2] bg-[#211b16] px-6 py-8 text-sm text-[#e8dccd]">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <span className="font-semibold uppercase tracking-[0.18em]">
          {brand}
        </span>
        <span>{copyright}</span>
      </div>
    </footer>
  );
}
