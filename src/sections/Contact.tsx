import type { ContactContent } from "@/types";

export function Contact({
  id,
  title,
  description,
  channels,
  fields,
  submitLabel,
}: ContactContent) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16" id={id}>
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold text-neutral-950">{title}</h2>
          <p className="mt-4 text-base leading-8 text-neutral-700">
            {description}
          </p>

          <div className="mt-8 grid gap-3">
            {channels.map((channel) => (
              <a
                className="block border border-neutral-200 p-4 text-neutral-950"
                href={channel.href}
                key={channel.id}
              >
                <h3 className="text-base font-semibold">{channel.label}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-700">
                  {channel.description}
                </p>
              </a>
            ))}
          </div>
        </div>

        <div className="grid gap-4 border border-neutral-200 p-5">
          {fields.map((field) => (
            <label className="grid gap-2" htmlFor={field.id} key={field.id}>
              <span className="text-sm font-medium text-neutral-950">
                {field.label}
              </span>
              {field.type === "textarea" ? (
                <textarea
                  className="min-h-32 border border-neutral-300 px-3 py-2 text-sm"
                  id={field.id}
                  name={field.id}
                  placeholder={field.placeholder}
                />
              ) : (
                <input
                  className="min-h-11 border border-neutral-300 px-3 text-sm"
                  id={field.id}
                  name={field.id}
                  placeholder={field.placeholder}
                  type={field.type}
                />
              )}
            </label>
          ))}

          <button
            className="mt-2 inline-flex min-h-11 items-center justify-center border border-neutral-950 bg-neutral-950 px-5 text-sm font-medium text-white"
            type="button"
          >
            {submitLabel}
          </button>
        </div>
      </div>
    </section>
  );
}
