import Link from "next/link";
import { assets } from "@/config/assets";
import type { HeroContent } from "@/types";

const selectedHeroImage = assets.hero.workshop;
const heroBackgroundImage = `url("${selectedHeroImage}")`;

export function Hero({
  title,
  subtitle,
  primaryCta,
  primaryCtaHref,
  secondaryCta,
  secondaryCtaHref,
}: HeroContent) {
  return (
    <section
      className="relative isolate -mt-px min-h-[84svh] overflow-hidden bg-[#120d09] px-4 pb-16 pt-20 sm:min-h-[86vh] sm:px-6 sm:pb-20 sm:pt-24 lg:min-h-[88vh] lg:py-28"
      id="hero"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 scale-[1.02] bg-cover bg-center opacity-100 brightness-[0.83] saturate-[0.95] contrast-[1.07] lg:bg-[center_42%]"
        style={{ backgroundImage: heroBackgroundImage }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(9,6,4,0.88)_0%,rgba(17,11,7,0.74)_42%,rgba(7,5,4,0.42)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_18%_34%,rgba(240,173,97,0.16),transparent_28rem),radial-gradient(ellipse_at_72%_48%,rgba(93,52,25,0.22),transparent_34rem)]"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 -z-10 h-56 bg-gradient-to-t from-[#0f0a07] via-[#0f0a07]/62 to-transparent"
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(84svh-9rem)] max-w-[1200px] items-center sm:min-h-[calc(86vh-11rem)] lg:min-h-[calc(88vh-14rem)]">
        <div className="w-full max-w-[45rem] py-16 sm:py-20 lg:py-22">
          <div className="mb-8 flex items-center gap-4 sm:mb-10" aria-hidden="true">
            <span className="h-px w-16 bg-gradient-to-r from-[#f2b369] to-[#fff1d8]/24 sm:w-24" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#f0ad61]" />
          </div>
          <h1 className="max-w-[11ch] text-[clamp(3.45rem,13.5vw,5.75rem)] font-semibold leading-[0.92] tracking-[-0.035em] text-[#fff9f0] sm:text-[clamp(4.65rem,6.25vw,6.75rem)]">
            {title}
          </h1>
          <p className="mt-8 max-w-[39rem] text-base leading-8 text-[#f6e6d0]/82 sm:mt-10 sm:text-lg sm:leading-9">
            {subtitle}
          </p>
          <div className="mt-11 grid gap-3 sm:mt-14 sm:flex sm:flex-wrap sm:gap-4">
            <Link
              className="hero-primary-cta inline-flex min-h-14 w-full items-center justify-center rounded-full border border-[#ffd093] bg-[#f0aa61] px-7 text-sm font-semibold text-[#150904] sm:w-auto sm:px-10"
              href={primaryCtaHref}
            >
              {primaryCta}
            </Link>
            <Link
              className="hero-secondary-cta inline-flex min-h-14 w-full items-center justify-center rounded-full border border-white/24 bg-white/[0.04] px-7 text-sm font-semibold text-[#fff7ea]/90 sm:w-auto sm:px-10"
              href={secondaryCtaHref}
            >
              {secondaryCta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
