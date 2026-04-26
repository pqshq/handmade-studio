import type { ContactContent } from "@/types";

const channelCardClassName =
  "block rounded-lg border border-[#dacbb8] bg-[#fffaf2] p-6 text-[#211b16] shadow-[0_20px_64px_rgba(64,48,31,0.08)] transition-colors hover:border-[#b99b70] hover:bg-white";

export function Contact({
  id,
  title,
  description,
  channels,
  fields,
  submitLabel,
}: ContactContent) {
  return (
    <section
      className="bg-[#f3eadc] px-6 py-20 sm:py-24 [&>*]:mx-auto [&>*]:max-w-[1200px]"
      id={id}
    >
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="max-w-2xl text-4xl font-semibold leading-tight text-[#211b16] sm:text-5xl">
            {title}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-9 text-[#5f5347]">
            {description}
          </p>

          <div className="mt-10 grid gap-4">
            {channels.map((channel) => {
              const channelContent = (
                <>
                  <h3 className="text-lg font-semibold leading-snug">
                    {channel.label}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#6f6254]">
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

        <div className="grid gap-5 rounded-lg border border-[#dacbb8] bg-[#fffaf2] p-7 shadow-[0_26px_80px_rgba(64,48,31,0.12)] sm:p-8">
          {fields.map((field) => (
            <label className="grid gap-2" htmlFor={field.id} key={field.id}>
              <span className="text-sm font-semibold text-[#211b16]">
                {field.label}
              </span>
              {field.type === "textarea" ? (
                <textarea
                  className="min-h-36 rounded-md border border-[#cdbb9f] bg-[#fdf8ef] px-4 py-3 text-sm leading-7 text-[#211b16] outline-none transition-colors placeholder:text-[#9d8b78] focus:border-[#8f7049]"
                  id={field.id}
                  name={field.id}
                  placeholder={field.placeholder}
                />
              ) : (
                <input
                  className="min-h-12 rounded-md border border-[#cdbb9f] bg-[#fdf8ef] px-4 text-sm text-[#211b16] outline-none transition-colors placeholder:text-[#9d8b78] focus:border-[#8f7049]"
                  id={field.id}
                  name={field.id}
                  placeholder={field.placeholder}
                  type={field.type}
                />
              )}
            </label>
          ))}

          <button
            className="mt-3 inline-flex min-h-13 items-center justify-center rounded-full border border-[#211b16] bg-[#211b16] px-8 text-sm font-semibold text-white shadow-[0_18px_44px_rgba(33,27,22,0.22)] transition-colors hover:bg-[#3a2f26]"
            type="button"
          >
            {submitLabel}
          </button>
        </div>
      </div>
    </section>
  );
}
