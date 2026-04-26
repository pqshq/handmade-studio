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
    <section className="mx-auto flex min-h-[70vh] max-w-5xl flex-col justify-center px-6 py-16">
      <h1 className="text-4xl font-semibold text-neutral-950">{title}</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-neutral-700">
        {subtitle}
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          className="inline-flex min-h-11 items-center justify-center border border-neutral-950 bg-neutral-950 px-5 text-sm font-medium text-white"
          href={primaryCtaHref}
        >
          {primaryCta}
        </a>
        <a
          className="inline-flex min-h-11 items-center justify-center border border-neutral-300 px-5 text-sm font-medium text-neutral-950"
          href={secondaryCtaHref}
        >
          {secondaryCta}
        </a>
      </div>
    </section>
  );
}
