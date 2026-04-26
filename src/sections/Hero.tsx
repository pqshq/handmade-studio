type HeroProps = {
  title: string;
  subtitle: string;
  primaryCta: string;
  primaryCtaHref: string;
  secondaryCta: string;
  secondaryCtaHref: string;
};

export function Hero({
  title,
  subtitle,
  primaryCta,
  primaryCtaHref,
  secondaryCta,
  secondaryCtaHref,
}: HeroProps) {
  return (
    <section className="mx-auto flex min-h-[82vh] max-w-[1200px] flex-col justify-center px-6 py-24 sm:py-32 lg:py-36">
      <div className="max-w-4xl">
        <h1 className="max-w-3xl text-6xl font-semibold leading-[0.98] text-[#211b16] sm:text-7xl lg:text-8xl">
          {title}
        </h1>
      </div>
      <p className="mt-8 max-w-2xl text-xl leading-9 text-[#5f5347] sm:text-2xl sm:leading-10">
        {subtitle}
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <a
          className="inline-flex min-h-13 items-center justify-center rounded-full border border-[#211b16] bg-[#211b16] px-8 text-sm font-semibold text-white shadow-[0_18px_44px_rgba(33,27,22,0.24)] transition-colors hover:bg-[#3a2f26]"
          href={primaryCtaHref}
        >
          {primaryCta}
        </a>
        <a
          className="inline-flex min-h-13 items-center justify-center rounded-full border border-[#b79a70] bg-[#fffaf2] px-8 text-sm font-semibold text-[#211b16] shadow-[0_14px_36px_rgba(64,48,31,0.10)] transition-colors hover:border-[#7d5f38] hover:bg-white"
          href={secondaryCtaHref}
        >
          {secondaryCta}
        </a>
      </div>
    </section>
  );
}
