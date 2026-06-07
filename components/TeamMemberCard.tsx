import Image from "next/image";
import type { TeamMember } from "@/content/team";
import { CTAButton } from "./CTAButton";

export function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-card card-elevated">
      <div className="grid lg:grid-cols-[300px_1fr]">
        <div className="relative aspect-[4/5] bg-gradient-to-br from-accent-light to-accent-muted lg:aspect-auto lg:min-h-[400px]">
          <Image
            src={member.image}
            alt={`Portrait of ${member.name}`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 300px"
          />
        </div>

        <div className="flex flex-col p-8 md:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-accent">
            {member.role}
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-primary">
            {member.name}
          </h2>
          <p className="mt-1 text-sm text-muted">
            {member.credentials} · {member.pronouns}
            {member.languages ? ` · ${member.languages}` : ""}
          </p>
          <p className="mt-5 text-base leading-relaxed text-foreground">
            {member.summary}
          </p>

          <details className="mt-6 group">
            <summary className="cursor-pointer list-none text-sm font-semibold text-primary hover:underline [&::-webkit-details-marker]:hidden">
              <span className="inline-flex items-center gap-2">
                Read full bio
                <span className="text-accent transition-transform group-open:rotate-90">
                  ›
                </span>
              </span>
            </summary>
            <div className="mt-4 space-y-3 border-t border-border pt-4 text-sm leading-relaxed text-muted">
              {member.bio.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </details>

          {member.bookingUrl && (
            <div className="mt-8">
              <CTAButton href={member.bookingUrl} external variant="outline" size="sm">
                Schedule with {member.id === "sonia" ? "Dr. Packwood" : "Jennifer"}
              </CTAButton>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}