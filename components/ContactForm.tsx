"use client";

import Script from "next/script";
import { type FormEvent, useEffect, useId, useRef, useState } from "react";
import { siteConfig } from "@/lib/site";

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "";
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

const isConfigured =
  FORMSPREE_ENDPOINT.length > 0 && !FORMSPREE_ENDPOINT.includes("your-form-id");

const hasTurnstile =
  TURNSTILE_SITE_KEY.length > 0 &&
  !TURNSTILE_SITE_KEY.includes("your-turnstile");

const inputClass =
  "mt-1.5 w-full min-w-0 rounded-xl border border-border bg-background px-4 py-3 text-base text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15";

const cardClass =
  "flex h-full min-w-0 flex-col rounded-2xl border border-border bg-card p-5 card-elevated sm:p-6 lg:p-8";

type ContactFormProps = {
  className?: string;
};

export function ContactForm({ className = "" }: ContactFormProps) {
  const thankYouUrl = `${siteConfig.url}/thank-you/`;
  const turnstileContainerId = useId().replace(/:/g, "");
  const turnstileWidgetId = useRef<string | null>(null);
  const [turnstileScriptReady, setTurnstileScriptReady] = useState(false);
  const [turnstileVerified, setTurnstileVerified] = useState(!hasTurnstile);
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!hasTurnstile || !turnstileScriptReady || !window.turnstile) {
      return;
    }

    const container = document.getElementById(turnstileContainerId);
    if (!container || container.dataset.rendered === "true") {
      return;
    }

    container.dataset.rendered = "true";
    turnstileWidgetId.current = window.turnstile.render(
      `#${turnstileContainerId}`,
      {
        sitekey: TURNSTILE_SITE_KEY,
        action: "contact",
        theme: "light",
        callback: () => setTurnstileVerified(true),
        "expired-callback": () => setTurnstileVerified(false),
        "error-callback": () => setTurnstileVerified(false),
      },
    );

    return () => {
      if (turnstileWidgetId.current && window.turnstile) {
        window.turnstile.remove(turnstileWidgetId.current);
        turnstileWidgetId.current = null;
        container.dataset.rendered = "false";
      }
    };
  }, [turnstileContainerId, turnstileScriptReady]);

  function resetTurnstile() {
    if (turnstileWidgetId.current && window.turnstile) {
      window.turnstile.reset(turnstileWidgetId.current);
    }
    setTurnstileVerified(!hasTurnstile);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if ((data.get("_gotcha") as string)?.length > 0) {
      window.location.href = thankYouUrl;
      return;
    }

    if (hasTurnstile && !turnstileVerified) {
      setStatus("error");
      setErrorMessage("Please complete the security check below.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        window.location.href = thankYouUrl;
        return;
      }

      const payload = (await response.json().catch(() => null)) as {
        error?: string;
      } | null;

      setStatus("error");
      setErrorMessage(
        payload?.error ??
          "We could not send your message. Please call us and we will help you directly.",
      );
      resetTurnstile();
    } catch {
      setStatus("error");
      setErrorMessage(
        "A network error occurred. Please try again or call us directly.",
      );
      resetTurnstile();
    }
  }

  if (!isConfigured) {
    return (
      <div className={`${cardClass} ${className}`}>
        <h2 className="font-serif text-xl font-semibold text-primary">
          Get in touch
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Please do not include medical information when contacting us. For
          urgent concerns, call{" "}
          <a
            href={siteConfig.contact.phoneHref}
            className="font-semibold text-primary"
          >
            {siteConfig.contact.phone}
          </a>
          .
        </p>
        <p className="mt-5 rounded-xl bg-accent-muted px-5 py-4 text-sm text-foreground">
          Online form coming soon. Please call us in the meantime.
        </p>
        <p className="mt-5 text-sm font-medium">
          <a
            href={siteConfig.contact.phoneHref}
            className="text-primary hover:underline"
          >
            {siteConfig.contact.phone}
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className={`flex h-full flex-col ${className}`}>
      {hasTurnstile && (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
          strategy="lazyOnload"
          onReady={() => setTurnstileScriptReady(true)}
        />
      )}

      <form
        onSubmit={handleSubmit}
        noValidate={false}
        className={cardClass}
      >
        <h2 className="font-serif text-lg font-semibold text-primary sm:text-xl">
          Send a message
        </h2>
        <p className="mt-2.5 text-sm leading-relaxed text-muted sm:mt-3">
          Please do not include medical or health information. For urgent
          concerns, call{" "}
          <a
            href={siteConfig.contact.phoneHref}
            className="font-semibold text-primary"
          >
            {siteConfig.contact.phone}
          </a>
          .
        </p>

        <div className="mt-5 flex flex-col gap-4 sm:mt-6 sm:gap-5 lg:flex-1">
          <input
            type="hidden"
            name="_subject"
            value="Integrated Neuro — website inquiry"
          />

          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name{" "}
              <span className="text-accent" aria-hidden="true">
                *
              </span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              maxLength={100}
              autoComplete="name"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium">
              Phone{" "}
              <span className="text-accent" aria-hidden="true">
                *
              </span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              maxLength={30}
              autoComplete="tel"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email{" "}
              <span className="text-accent" aria-hidden="true">
                *
              </span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              maxLength={254}
              autoComplete="email"
              className={inputClass}
            />
          </div>

          <div className="flex flex-col lg:min-h-0 lg:flex-1">
            <label htmlFor="message" className="block text-sm font-medium">
              How can we help you?
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              maxLength={2000}
              className={`${inputClass} min-h-28 resize-y sm:min-h-32 lg:min-h-0 lg:flex-1`}
            />
          </div>

          <div
            className="absolute -left-[9999px] h-px w-px overflow-hidden"
            aria-hidden="true"
          >
            <label htmlFor="_gotcha">Leave blank</label>
            <input
              id="_gotcha"
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {hasTurnstile && (
            <div
              id={turnstileContainerId}
              className="min-h-[65px] w-full max-w-full overflow-hidden"
            />
          )}

          {status === "error" && errorMessage && (
            <p
              role="alert"
              className="rounded-xl border border-accent/30 bg-accent-light px-4 py-3 text-sm text-foreground"
            >
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={
              status === "submitting" || (hasTurnstile && !turnstileVerified)
            }
            className="w-full shrink-0 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60 lg:mt-auto"
          >
            {status === "submitting" ? "Sending…" : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
}
