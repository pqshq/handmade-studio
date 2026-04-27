"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ProcessContent } from "@/types";

export function Process({ title, description, steps }: ProcessContent) {
  const [activeStep, setActiveStep] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const wasVisibleRef = useRef(false);
  const displayedActiveStep = Math.min(activeStep, Math.max(steps.length - 1, 0));
  const progress =
    steps.length > 1 ? (displayedActiveStep / (steps.length - 1)) * 100 : 100;
  const progressSegment = steps.length > 1 ? 100 / (steps.length - 1) : 0;

  const stopAnimation = useCallback(() => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startInterval = useCallback(() => {
    stopAnimation();

    if (steps.length <= 1) {
      return;
    }

    // Process animation is timer-based, not scroll or viewport based.
    intervalRef.current = window.setInterval(() => {
      setActiveStep((currentStep) => (currentStep + 1) % steps.length);
    }, 2000);
  }, [steps.length, stopAnimation]);

  const restartAnimation = useCallback(
    () => {
      stopAnimation();
      setActiveStep(0);

      startInterval();
    },
    [startInterval, stopAnimation],
  );

  useEffect(() => {
    startInterval();

    return stopAnimation;
  }, [startInterval, stopAnimation]);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = Boolean(entry?.isIntersecting);

        if (isVisible && !wasVisibleRef.current) {
          restartAnimation();
        }

        wasVisibleRef.current = isVisible;
      },
      { threshold: 0.5 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [restartAnimation]);

  useEffect(() => {
    function restartWhenNavigatingToProcess() {
      if (window.location.hash === "#process") {
        restartAnimation();
      }
    }

    const timeoutId = window.setTimeout(restartWhenNavigatingToProcess, 0);
    window.addEventListener("hashchange", restartWhenNavigatingToProcess);

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener("hashchange", restartWhenNavigatingToProcess);
    };
  }, [restartAnimation]);

  return (
    <section
      className="section-shell section-light"
      id="process"
      ref={sectionRef}
    >
      <div aria-hidden="true" className="section-bg" />
      <div className="section-container process-layout">
        <div className="process-intro">
          <div className="section-rule mb-8" aria-hidden="true" />
          <h2 className="section-title">{title}</h2>
          <p className="section-copy mt-6">{description}</p>
        </div>

        <div className="process-timeline">
          <div aria-hidden="true" className="process-timeline-line" />
          <div
            aria-hidden="true"
            className="process-timeline-progress"
            style={{ height: `${progress}%` }}
          />
          {displayedActiveStep < steps.length - 1 ? (
            <div
              aria-hidden="true"
              className="process-timeline-flow"
              key={displayedActiveStep}
              style={{
                height: `${progressSegment}%`,
                top: `${progress}%`,
              }}
            />
          ) : null}
          <div className="process-step-list">
            {steps.map((step, index) => (
              <article
                className="process-step"
                data-state={
                  index === displayedActiveStep
                    ? "active"
                    : index < displayedActiveStep
                      ? "completed"
                      : "upcoming"
                }
                key={step.id}
              >
                <div className="process-step-marker" aria-hidden="true">
                  <span />
                </div>
                <h3 className="process-step-title">
                  <span className="process-step-number">{step.number}</span>
                  {step.title}
                </h3>
                <p className="process-step-copy">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
