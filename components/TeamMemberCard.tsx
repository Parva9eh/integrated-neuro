import Image from "next/image";
import type { TeamMember } from "@/content/team";
import { CTAButton } from "./CTAButton";

export function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className="grid md:grid-cols-[280px_1fr]">
        <div className="relative aspect-[3/4] bg-accent-light md:aspect-auto md:min-h-[360px]">
          <Image
            src={member.image}
            alt={`Portrait of ${member.name}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 280px"
          />
        </div>

        <div className="p-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">
            {member.role}
          </p>
          <h2 className="mt-2 font-serif text-2xl font-semibold text-primary">
            {member.name}
          </h2>
          <p className="text-sm text-muted">
            {member.credentials} · {member.pronouns}
            {member.languages ? ` · ${member.languages}` : ""}
          </p>
          <p className="mt-4 leading-relaxed text-foreground">{member.summary}</p>

          <details className="mt-6 group">
            <summary className="cursor-pointer text-sm font-semibold text-primary hover:underline">
              Read full bio
            </summary>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
              {member.bio.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </details>

          {member.bookingUrl && (
            <div className="mt-6">
              <CTAButton href={member.bookingUrl} external variant="outline">
                Schedule with {member.name.split(" ")[0]}
              </CTAButton>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}