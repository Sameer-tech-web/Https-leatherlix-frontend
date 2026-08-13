import { useState } from 'react';
import {
  CheckCircle2,
  Mail,
  MapPin,
  Send,
  Phone,
} from 'lucide-react';

import { brand } from '../data/siteData';

const initialForm = {
  name: '',
  company: '',
  email: '',
  category: 'Belts Leather',
  requirement: '',
};

const productCategories = [
  'American Lifestyles',
  'Fashion Articles',
  'Upholstery / Furniture',
  'Belts Leather',
  'Printed Leathers',
  'Lining Leathers',
  'Automotive & Aviation',
];

export default function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const brandData = brand || {
    email: 'info@leatherlix.com',
    phone: '+92 300 0000000',
    manufacturer: 'KTM Leather',
    manufacturerUrl: 'https://ktmleather.com',
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm(initialForm);
    setSubmitted(false);
  };

  return (
    <section
      id="contact"
      className="container-shell scroll-mt-24 py-16 sm:py-24"
    >
      <div className="overflow-hidden rounded-[30px] border border-stone-200 bg-white shadow-card">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
          {/* =====================================================
              LEFT — CONTACT / SALES INFORMATION
          ====================================================== */}
          <div className="bg-ink p-6 text-white sm:p-10 lg:p-12">
            {/* Section Label */}
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-coral">
              B2B Sales &amp; Swatch Requests
            </p>

            {/* Main Heading */}
            <h2 className="display-title mt-3 text-4xl font-extrabold leading-tight sm:text-5xl">
              Start your leather sourcing conversation.
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-lg text-sm leading-7 text-stone-300 sm:text-base">
              Share the leather application, expected quantity, thickness,
              finish, color or any special requirement. Use the form to start
              your enquiry with the relevant collection.
            </p>

            {/* =================================================
                CONTACT DETAILS
            ================================================== */}
            <div className="mt-9 space-y-4">
              {/* Email */}
              <a
                href={`mailto:${brandData.email}`}
                aria-label={`Send email to ${brandData.email}`}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-colors duration-200 hover:border-teal/40 hover:bg-white/[0.06]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal/15 text-teal">
                  <Mail
                    size={18}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-stone-400">
                    Email
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    {brandData.email}
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${brandData.phone.replace(/\s+/g, '')}`}
                aria-label={`Call ${brandData.phone}`}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-colors duration-200 hover:border-teal/40 hover:bg-white/[0.06]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal/15 text-teal">
                  <Phone
                    size={18}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-stone-400">
                    Phone / WhatsApp
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    {brandData.phone}
                  </p>
                </div>
              </a>

              {/* Manufacturer */}
              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal/15 text-teal">
                  <MapPin
                    size={18}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-stone-400">
                    Manufacturer Reference
                  </p>

                  <p className="mt-1 text-sm font-semibold leading-5 text-white">
                    {brandData.manufacturer}
                  </p>

                  <a
                    href={brandData.manufacturerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-[10px] font-bold uppercase tracking-[0.14em] text-teal transition-colors hover:text-white"
                  >
                    Visit KTM Leather
                  </a>
                </div>
              </div>
            </div>

            {/* Supplier Note */}
            <div className="mt-8 rounded-2xl border border-teal/20 bg-teal/10 p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-teal">
                Supplier Positioning
              </p>

              <p className="mt-2 text-xs leading-5 text-stone-300 sm:text-sm">
                Leatherlix is presented as an authorized supplier. Manufacturer
                certifications and published credentials remain attributed to
                KTM Leather.
              </p>
            </div>
          </div>

          {/* =====================================================
              RIGHT — CONTACT FORM
          ====================================================== */}
          <div className="p-6 sm:p-10 lg:p-12">
            {submitted ? (
              /* =================================================
                  SUCCESS STATE
              ================================================== */
              <div
                className="flex min-h-[500px] flex-col items-center justify-center rounded-[24px] border border-teal/15 bg-teal/5 p-8 text-center sm:p-10"
                role="status"
                aria-live="polite"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-teal/20 bg-teal/10 text-teal">
                  <CheckCircle2
                    size={32}
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-6 text-2xl font-extrabold text-ink sm:text-3xl">
                  Inquiry prepared successfully.
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-stone-600">
                  Your enquiry form has been processed on the frontend. No
                  email, database or backend request is being sent yet in this
                  frontend-only version.
                </p>

                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-7 rounded-xl border border-teal bg-white px-5 py-3 text-[10px] font-bold uppercase tracking-[0.15em] text-teal transition-colors duration-200 hover:bg-teal hover:text-white focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              /* =================================================
                  FORM
              ================================================== */
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Form Intro */}
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-coral">
                    Request Information
                  </p>

                  <h3 className="mt-2 text-2xl font-extrabold text-ink sm:text-3xl">
                    Tell us what you need.
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-stone-500 sm:text-sm">
                    Complete the fields below and prepare your sourcing request.
                  </p>
                </div>

                {/* =================================================
                    NAME + COMPANY
                ================================================== */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField
                    label="Your Name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    autoComplete="name"
                    required
                  />

                  <FormField
                    label="Company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Company name"
                    autoComplete="organization"
                    required
                  />
                </div>

                {/* =================================================
                    EMAIL + CATEGORY
                ================================================== */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField
                    label="Business Email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    autoComplete="email"
                    required
                  />

                  <div>
                    <label
                      htmlFor="category"
                      className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.14em] text-stone-500"
                    >
                      Product Category
                    </label>

                    <select
                      id="category"
                      name="category"
                      value={form.category}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-stone-300 bg-cream px-4 py-3 text-sm text-ink outline-none transition-colors duration-200 focus:border-teal focus:ring-2 focus:ring-teal/10"
                    >
                      {productCategories.map((category) => (
                        <option
                          key={category}
                          value={category}
                        >
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* =================================================
                    REQUIREMENT
                ================================================== */}
                <div>
                  <label
                    htmlFor="requirement"
                    className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.14em] text-stone-500"
                  >
                    Leather Requirement
                  </label>

                  <textarea
                    id="requirement"
                    name="requirement"
                    value={form.requirement}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Mention article, application, thickness, finish, color, quantity, destination market or any other requirement."
                    className="w-full resize-y rounded-xl border border-stone-300 bg-cream px-4 py-3 text-sm leading-6 text-ink outline-none transition-colors duration-200 placeholder:text-stone-400 focus:border-teal focus:ring-2 focus:ring-teal/10"
                  />
                </div>

                {/* =================================================
                    CHECKBOX / CONSENT
                ================================================== */}
                <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-stone-200 bg-cream p-4">
                  <input
                    type="checkbox"
                    required
                    className="mt-0.5 h-4 w-4 shrink-0 accent-teal"
                  />

                  <span className="text-[11px] leading-5 text-stone-500">
                    I confirm that the information provided is accurate and may
                    be used to respond to this sourcing enquiry.
                  </span>
                </label>

                {/* =================================================
                    SUBMIT BUTTON
                ================================================== */}
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-teal px-6 py-4 text-[10px] font-bold uppercase tracking-[0.16em] text-white shadow-soft transition-colors duration-200 hover:bg-tealDark focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2"
                >
                  <Send
                    size={15}
                    aria-hidden="true"
                  />
                  Prepare Inquiry
                </button>

                {/* Frontend Notice */}
                <p className="text-center text-[10px] leading-4 text-stone-400">
                  Frontend demo: connect your preferred email or backend service
                  later to receive submitted enquiries.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   REUSABLE FORM FIELD
========================================================= */

function FormField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  autoComplete,
  required = false,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.14em] text-stone-500"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        className="w-full rounded-xl border border-stone-300 bg-cream px-4 py-3 text-sm text-ink outline-none transition-colors duration-200 placeholder:text-stone-400 focus:border-teal focus:ring-2 focus:ring-teal/10"
      />
    </div>
  );
}
