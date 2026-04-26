import type { ContactContent } from "@/types";

const channelCardClassName =
  "studio-card studio-link-card block p-7";

export function Contact({
  id,
  title,
  description,
  channels,
  fields,
  submitLabel,
}: ContactContent) {
  return (
    <section className="section-shell section-contact" id={id}>
      <div aria-hidden="true" className="section-bg" />
      <div className="section-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="section-rule mb-8" aria-hidden="true" />
          <h2 className="section-title">{title}</h2>
          <p className="section-copy mt-6 max-w-2xl">{description}</p>

          <div className="mt-10 grid gap-4">
            {channels.map((channel) => {
              const channelContent = (
                <>
                  <h3 className="studio-card-title relative">
                    {channel.label}
                  </h3>
                  <p className="studio-card-copy relative mt-3">
                    {channel.description}
                  </p>
                </>
              );

              if (channel.href === "#") {
                return (
                  <div className={channelCardClassName} key={channel.id}>
                    {channelContent}
                  </div>
                );
              }

              return (
                <a
                  className={channelCardClassName}
                  href={channel.href}
                  key={channel.id}
                >
                  {channelContent}
                </a>
              );
            })}
          </div>
        </div>

        <div className="conversion-card grid gap-5 p-7 sm:p-9">
          {fields.map((field) => (
            <label className="grid gap-2" htmlFor={field.id} key={field.id}>
              <span className="text-sm font-semibold text-[#211b16]">
                {field.label}
              </span>
              {field.type === "textarea" ? (
                <textarea
                  className="form-field min-h-36 px-4 py-3 text-sm leading-7"
                  id={field.id}
                  name={field.id}
                  placeholder={field.placeholder}
                />
              ) : (
                <input
                  className="form-field min-h-12 px-4 text-sm"
                  id={field.id}
                  name={field.id}
                  placeholder={field.placeholder}
                  type={field.type}
                />
              )}
            </label>
          ))}

          <button
            className="studio-button-dark mt-3 inline-flex min-h-13 items-center justify-center px-8 text-sm font-semibold"
            type="button"
          >
            {submitLabel}
          </button>
        </div>
      </div>
    </section>
  );
}
