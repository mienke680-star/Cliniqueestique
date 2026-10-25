"use client";

import { useState } from "react";
import { whatsappLink } from "@/data/business";
import { bookingMessage } from "@/lib/whatsapp";
import { ceTreatmentCategories } from "@/data/ce-treatments";
import { IconChat } from "./icons";

const initialState = {
  name: "",
  phone: "",
  email: "",
  treatment: "",
  date: "",
  time: "",
  therapist: "",
  message: "",
};

export function BookingForm() {
  const [fields, setFields] = useState(initialState);
  const [consent, setConsent] = useState(false);
  const [attempted, setAttempted] = useState(false);

  function update<K extends keyof typeof initialState>(key: K, value: string) {
    setFields((f) => ({ ...f, [key]: value }));
  }

  const isValid = fields.name && fields.phone && fields.treatment && consent;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setAttempted(true);
    if (!isValid) return;
    const link = whatsappLink(bookingMessage(fields));
    window.open(link, "_blank", "noopener,noreferrer");
  }

  const inputClasses =
    "w-full rounded-lg border border-grey bg-white px-4 py-3 font-body text-sm text-charcoal placeholder:text-charcoal/40 focus:border-sage-deep focus:outline-none";
  const labelClasses = "font-label text-xs uppercase tracking-wide text-charcoal/80";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <p className="font-body text-xs text-charcoal/60">
        This form doesn't book you in automatically — submitting opens a pre-filled WhatsApp
        message to our team so we can confirm availability with you personally.
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClasses} htmlFor="name">
            Name *
          </label>
          <input
            id="name"
            required
            value={fields.name}
            onChange={(e) => update("name", e.target.value)}
            className={`mt-2 ${inputClasses}`}
            placeholder="Your full name"
          />
          {attempted && !fields.name && (
            <p className="mt-1 text-xs text-red-600">Please enter your name.</p>
          )}
        </div>
        <div>
          <label className={labelClasses} htmlFor="phone">
            Phone number *
          </label>
          <input
            id="phone"
            required
            value={fields.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={`mt-2 ${inputClasses}`}
            placeholder="082 000 0000"
          />
          {attempted && !fields.phone && (
            <p className="mt-1 text-xs text-red-600">Please enter your phone number.</p>
          )}
        </div>
      </div>

      <div>
        <label className={labelClasses} htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={fields.email}
          onChange={(e) => update("email", e.target.value)}
          className={`mt-2 ${inputClasses}`}
          placeholder="you@email.com"
        />
      </div>

      <div>
        <label className={labelClasses} htmlFor="treatment">
          Treatment of interest *
        </label>
        <select
          id="treatment"
          required
          value={fields.treatment}
          onChange={(e) => update("treatment", e.target.value)}
          className={`mt-2 ${inputClasses}`}
        >
          <option value="">Select a treatment category</option>
          {ceTreatmentCategories.map((c) => (
            <option key={c.slug} value={c.name}>
              {c.name}
            </option>
          ))}
          <option value="Me Si Bon products">Me Si Bon products</option>
          <option value="Not sure yet">Not sure yet</option>
        </select>
        {attempted && !fields.treatment && (
          <p className="mt-1 text-xs text-red-600">Please select a treatment.</p>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <div>
          <label className={labelClasses} htmlFor="date">
            Preferred date
          </label>
          <input
            id="date"
            type="date"
            value={fields.date}
            onChange={(e) => update("date", e.target.value)}
            className={`mt-2 ${inputClasses}`}
          />
        </div>
        <div>
          <label className={labelClasses} htmlFor="time">
            Preferred time
          </label>
          <input
            id="time"
            type="time"
            value={fields.time}
            onChange={(e) => update("time", e.target.value)}
            className={`mt-2 ${inputClasses}`}
          />
        </div>
        <div>
          <label className={labelClasses} htmlFor="therapist">
            Preferred therapist
          </label>
          <input
            id="therapist"
            value={fields.therapist}
            onChange={(e) => update("therapist", e.target.value)}
            className={`mt-2 ${inputClasses}`}
            placeholder="Optional"
          />
        </div>
      </div>

      <div>
        <label className={labelClasses} htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={fields.message}
          onChange={(e) => update("message", e.target.value)}
          className={`mt-2 ${inputClasses}`}
          placeholder="Tell us anything else that would help"
        />
      </div>

      <label className="flex items-start gap-3 font-body text-xs text-charcoal/70">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-1 h-4 w-4 rounded border-grey text-charcoal focus:ring-sage-deep"
        />
        I consent to Clinique Estique contacting me via WhatsApp, phone, or email about my
        enquiry. *
      </label>
      {attempted && !consent && (
        <p className="text-xs text-red-600">Please provide consent to continue.</p>
      )}

      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full bg-sage-deep px-7 py-3.5 font-label text-xs uppercase tracking-widest2 text-white transition hover:bg-charcoal"
      >
        <IconChat className="h-4 w-4" />
        Send Enquiry via WhatsApp
      </button>
    </form>
  );
}
