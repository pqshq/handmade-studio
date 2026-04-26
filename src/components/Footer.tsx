type FooterProps = {
  brand: string;
  copyright: string;
};

export function Footer({ brand, copyright }: FooterProps) {
  return (
    <footer className="border-t border-neutral-200 px-6 py-6 text-sm text-neutral-600">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <span>{brand}</span>
        <span>{copyright}</span>
      </div>
    </footer>
  );
}
