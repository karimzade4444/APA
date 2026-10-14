import { Mail, Phone } from "lucide-react";
import { ProfilePortrait } from "@/components/leadership/ProfilePortrait";

type DepartmentHeadCardProps = {
  name: string;
  role: string;
  photo?: string;
  eyebrow?: string;
  description?: string;
  note?: string;
  phone?: string;
  email?: string;
  phoneHref?: string;
  phones?: readonly { label: string; href: string }[];
  portraitClassName?: string;
  priority?: boolean;
};

export function DepartmentHeadCard({
  name,
  role,
  photo,
  eyebrow,
  description,
  note,
  phone,
  email,
  phoneHref,
  phones = [],
  portraitClassName = "h-48 sm:h-56",
  priority = false,
}: DepartmentHeadCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#d8c28a]/70 bg-white shadow-[0_14px_40px_rgba(6,29,53,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(6,29,53,0.12)]">
      <div className="relative">
        <ProfilePortrait
          name={name}
          photo={photo}
          priority={priority}
          className={portraitClassName}
          imageClassName="object-cover object-[center_35%] group-hover:scale-[1.03]"
        />
        <div className="absolute bottom-4 left-5 right-5 flex items-center gap-3">
          <span className="h-px w-8 bg-[#d4af62]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f1d994]">
            {eyebrow ?? "Руководство"}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-xl font-semibold leading-snug tracking-tight text-[#061d35] sm:text-2xl">
          {name}
        </h3>
        <p className="mt-2 text-sm font-medium leading-6 text-[#9b7939]">
          {role}
        </p>

        {description && (
          <p className="mt-4 text-sm leading-7 text-[#061d35]/65">
            {description}
          </p>
        )}

        {note && (
          <p className="mt-3 text-xs leading-6 text-[#061d35]/50">{note}</p>
        )}

        {(phone || email || phones.length > 0) && (
          <div className="mt-auto space-y-3 border-t border-[#e8dcc0] pt-4 text-sm text-[#061d35]/70">
            {phones.map((item) => (
              <div key={item.href} className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-[#9b7939]" />
                <a
                  href={item.href}
                  className="transition-colors hover:text-[#9b7939]"
                >
                  {item.label}
                </a>
              </div>
            ))}
            {phone && (
              <div className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-[#9b7939]" />
                {phoneHref ? (
                  <a
                    href={phoneHref}
                    className="transition-colors hover:text-[#9b7939]"
                  >
                    {phone}
                  </a>
                ) : (
                  <span>{phone}</span>
                )}
              </div>
            )}
            {email && (
              <div className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-[#9b7939]" />
                {email.startsWith("@") ? (
                  <span>{email}</span>
                ) : (
                  <a
                    href={`mailto:${email}`}
                    className="break-all transition-colors hover:text-[#9b7939]"
                  >
                    {email}
                  </a>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
