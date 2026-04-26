type HeroProps = {
  title: string;
  subtitle: string;
  primaryCta: string;
  primaryCtaHref: string;
  secondaryCta: string;
  secondaryCtaHref: string;
};

const heroBackgroundImage =
  "url('https://images.unsplash.com/photo-1759523146335-0069847ceb16?auto=format&fit=crop&fm=jpg&q=82&w=3000')";

export function Hero({
  title,
  subtitle,
  primaryCta,
  primaryCtaHref,
  secondaryCta,
  secondaryCtaHref,
}: HeroProps) {
  return (
    <section
      className="relative isolate -mt-px min-h-[78vh] overflow-hidden bg-[#211b16] px-4 py-20 sm:min-h-[82vh] sm:px-6 sm:py-28 lg:py-32"
      id="hero"
      style={{ backgroundImage: heroBackgroundImage }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-cover bg-center lg:bg-[center_42%]"
        style={{ backgroundImage: heroBackgroundImage }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(32,18,9,0.76)_0%,rgba(54,30,13,0.62)_34%,rgba(107,66,31,0.36)_58%,rgba(42,25,14,0.34)_78%,rgba(15,10,7,0.50)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_17%_18%,rgba(255,213,152,0.46),transparent_13rem),radial-gradient(ellipse_at_27%_38%,rgba(239,151,69,0.34),transparent_21rem),linear-gradient(128deg,rgba(255,224,172,0.26)_0%,rgba(220,129,52,0.16)_24%,transparent_50%),radial-gradient(circle_at_36%_50%,rgba(16,9,5,0.28),transparent_19rem),radial-gradient(circle_at_84%_72%,rgba(12,9,7,0.38),transparent_24rem),radial-gradient(ellipse_at_center,transparent_46%,rgba(0,0,0,0.46)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -left-10 -top-8 -z-10 h-[28rem] w-[32rem] rounded-full bg-[#ffd59a]/24 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute left-10 top-18 -z-10 h-[22rem] w-[34rem] rotate-[-18deg] rounded-full bg-[#e58f43]/18 blur-2xl [animation:hero-glow-drift_13s_ease-in-out_infinite]"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 -z-10 h-40 bg-gradient-to-t from-[#0c0907] to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-black/55 to-transparent"
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(78vh-10rem)] max-w-[1200px] items-center sm:min-h-[calc(82vh-12rem)]">
        <div className="w-full max-w-3xl py-14 sm:py-20">
          <div className="mb-7 flex items-center gap-4 sm:mb-9" aria-hidden="true">
            <span className="h-px w-16 bg-[#d08a44] sm:w-24" />
            <span className="h-2 w-2 rounded-full bg-[#d08a44] shadow-[0_0_24px_rgba(208,138,68,0.85)]" />
          </div>
          <h1 className="max-w-[10.5ch] text-[clamp(2.6rem,11vw,4.5rem)] font-bold leading-[1.02] tracking-[-0.025em] text-[#fff8ee] drop-shadow-[0_24px_58px_rgba(0,0,0,0.76)] sm:text-[clamp(3.6rem,5.35vw,4.875rem)] sm:leading-[1.04] sm:tracking-[-0.03em]">
            {title}
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-[#ead8c2]/88 drop-shadow-[0_14px_34px_rgba(0,0,0,0.64)] sm:mt-10 sm:text-lg sm:leading-10">
            {subtitle}
          </p>
          <div className="mt-10 grid gap-3 sm:mt-12 sm:flex sm:flex-wrap sm:gap-5">
            <a
              className="hero-primary-cta inline-flex min-h-12 w-full items-center justify-center rounded-full border border-[#e39a4b] bg-[#e09645] px-7 text-sm font-semibold text-[#1b0d05] sm:min-h-13 sm:w-auto sm:px-10"
              href={primaryCtaHref}
            >
              {primaryCta}
            </a>
            <a
              className="hero-secondary-cta inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/24 bg-white/[0.03] px-7 text-sm font-semibold text-[#fff7ea]/92 backdrop-blur-sm sm:min-h-13 sm:w-auto sm:px-10"
              href={secondaryCtaHref}
            >
              {secondaryCta}
            </a>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-8 left-1/2 z-10 h-10 w-px -translate-x-1/2 rounded-full bg-white/30 shadow-[0_0_28px_rgba(255,255,255,0.34)]"
      >
        <span className="absolute left-1/2 top-1 h-2 w-2 -translate-x-1/2 rounded-full bg-[#d58a3e]" />
      </div>
    </section>
  );
}
