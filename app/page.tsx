'use client'

import { useState } from 'react'

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */

const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
]

const RESIDENTIAL_SERVICES = [
  'EV Charging Station Installation',
  'LED Lighting & Retrofit',
  'Panel Upgrades & Replacements',
  'Whole-Home Rewiring',
  'Ceiling Fan Installation',
  'GFCI & Safety Upgrades',
  'Emergency Electrical Repair',
]

const COMMERCIAL_SERVICES = [
  'Commercial Panel Upgrades',
  'Industrial Lighting Solutions',
  'Tenant Improvement Wiring',
  'Energy Management Systems',
  'Parking Lot & Security Lighting',
  'Code Compliance & Inspections',
  'Solar PV Design & Installation',
]

const TESTIMONIALS = [
  {
    name: 'Maria G.',
    location: 'Irvine, CA',
    text: "Berk's Electrical was fantastic from start to finish. They upgraded our panel and installed EV chargers in one day — on time and spotless.",
  },
  {
    name: 'James T.',
    location: 'Newport Beach, CA',
    text: "I've used Berk's for both my home and office. Their team is professional, fairly priced, and never leaves a mess. Highly recommended.",
  },
  {
    name: 'Casa Pacifica Senior Apartments',
    location: 'Anaheim, CA',
    text: 'Excellent commercial lighting retrofit across our entire property. The crew was efficient and the results have cut our energy costs significantly.',
  },
  {
    name: 'Sandra L.',
    location: 'Tustin, CA',
    text: "Fast response on an emergency repair. The electrician explained everything clearly before doing any work. Will definitely call Berk's again.",
  },
]

const GALLERY_ITEMS = [
  { label: 'Residential Lighting', emoji: '💡' },
  { label: 'Commercial Lighting', emoji: '🏢' },
  { label: 'Residential Service', emoji: '🏠' },
  { label: 'Commercial & Industrial', emoji: '⚡' },
  { label: 'Solar PV Systems', emoji: '☀️' },
]

const SERVICE_AREAS = [
  'Aliso Viejo', 'Anaheim', 'Brea', 'Buena Park', 'Costa Mesa',
  'Coto de Caza', 'Cypress', 'Dana Point', 'Fountain Valley', 'Fullerton',
  'Garden Grove', 'Huntington Beach', 'Irvine', 'La Habra', 'Laguna Beach',
  'Laguna Hills', 'Laguna Niguel', 'Lake Forest', 'Los Alamitos', 'Mission Viejo',
  'Newport Beach', 'Orange', 'Placentia', 'Rancho Santa Margarita', 'San Clemente',
  'Santa Ana', 'Seal Beach', 'Stanton', 'Tustin', 'Westminster', 'Yorba Linda',
]

/* ─────────────────────────────────────────────
   Sub-components
───────────────────────────────────────────── */

function PhoneLink({ number }: { number: string }) {
  const clean = number.replace(/\D/g, '')
  return (
    <a
      href={`tel:+1${clean}`}
      className="text-brand-red font-semibold hover:text-brand-red-dark underline-offset-2 hover:underline"
      aria-label={`Call ${number}`}
    >
      {number}
    </a>
  )
}

function QuoteForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-xl bg-green-50 border border-green-200 p-8 text-center"
      >
        <p className="text-green-800 font-semibold text-lg">Thank you! We'll be in touch shortly.</p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4"
      aria-label="Request a free quote"
      noValidate
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="quote-name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name <span aria-hidden="true" className="text-brand-red">*</span>
          </label>
          <input
            id="quote-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none"
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label htmlFor="quote-phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone <span aria-hidden="true" className="text-brand-red">*</span>
          </label>
          <input
            id="quote-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none"
            placeholder="(949) 555-0100"
          />
        </div>
      </div>
      <div>
        <label htmlFor="quote-email" className="block text-sm font-medium text-gray-700 mb-1">
          Email <span aria-hidden="true" className="text-brand-red">*</span>
        </label>
        <input
          id="quote-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none"
          placeholder="jane@example.com"
        />
      </div>
      <div>
        <label htmlFor="quote-message" className="block text-sm font-medium text-gray-700 mb-1">
          How can we help?
        </label>
        <textarea
          id="quote-message"
          name="message"
          rows={4}
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none resize-y"
          placeholder="Describe your project or question…"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-brand-red px-6 py-3 font-semibold text-white hover:bg-brand-red-dark focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 outline-none"
      >
        Request Free Quote
      </button>
      <p className="text-xs text-gray-500 text-center">
        Required fields marked <span aria-hidden="true">*</span>
        <span className="sr-only">with an asterisk</span>
      </p>
    </form>
  )
}

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Skip navigation for keyboard users */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* ── Header ── */}
      <header className="sticky top-0 z-50 bg-brand-blue shadow-md">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo / Brand */}
            <a
              href="/"
              className="flex items-center gap-2 text-white font-bold text-lg leading-tight focus-visible:ring-2 focus-visible:ring-white rounded"
              aria-label="Berk's Electrical & Lighting — home"
            >
              <span className="text-brand-red text-2xl" aria-hidden="true">⚡</span>
              <span>
                Berk&apos;s Electrical<br />
                <span className="text-xs font-normal text-blue-200">Since 1988 · Orange County</span>
              </span>
            </a>

            {/* Desktop nav */}
            <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 rounded text-blue-100 hover:text-white hover:bg-white/10 font-medium text-sm"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+19498578385"
                className="ml-4 rounded-lg bg-brand-red px-4 py-2 text-sm font-semibold text-white hover:bg-brand-red-dark"
                aria-label="Call us at (949) 857-8385"
              >
                (949) 857-8385
              </a>
            </nav>

            {/* Mobile menu toggle */}
            <button
              type="button"
              className="md:hidden text-white p-2 rounded hover:bg-white/10"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
              onClick={() => setMobileMenuOpen((v) => !v)}
            >
              <span aria-hidden="true" className="block text-xl">
                {mobileMenuOpen ? '✕' : '☰'}
              </span>
            </button>
          </div>

          {/* Mobile nav */}
          {mobileMenuOpen && (
            <nav id="mobile-menu" aria-label="Mobile navigation" className="md:hidden pb-4">
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 rounded text-blue-100 hover:text-white hover:bg-white/10 font-medium"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="tel:+19498578385"
                    className="block mt-2 rounded-lg bg-brand-red px-4 py-2.5 text-center font-semibold text-white hover:bg-brand-red-dark"
                  >
                    Call (949) 857-8385
                  </a>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </header>

      {/* ── Main ── */}
      <main id="main-content">

        {/* ── Hero ── */}
        <section
          aria-labelledby="hero-heading"
          className="bg-gradient-to-br from-brand-blue-dark via-brand-blue to-brand-blue-light text-white py-20 px-4 sm:px-6"
        >
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-brand-red font-semibold text-sm uppercase tracking-widest mb-4">
              Orange County&apos;s Top-Rated Electrician
            </p>
            <h1 id="hero-heading" className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
              Reliable Electrical Service<br />
              <span className="text-blue-200">Since 1988</span>
            </h1>
            <p className="text-blue-100 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
              Family-owned and operated. Residential, commercial, LED lighting, EV charging,
              panel upgrades, and solar PV across all of Orange County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="rounded-lg bg-brand-red px-8 py-3.5 font-semibold text-white hover:bg-brand-red-dark text-base"
              >
                Get a Free Quote
              </a>
              <a
                href="tel:+19498578385"
                className="rounded-lg border-2 border-white px-8 py-3.5 font-semibold text-white hover:bg-white/10 text-base"
                aria-label="Call (949) 857-8385"
              >
                (949) 857-8385
              </a>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-blue-200">
              <span>✔ Licensed &amp; Insured</span>
              <span>✔ Free Estimates</span>
              <span>✔ 35+ Years Experience</span>
              <span>✔ Family Owned</span>
            </div>
          </div>
        </section>

        {/* ── Services ── */}
        <section
          id="services"
          aria-labelledby="services-heading"
          className="py-20 px-4 sm:px-6 bg-white"
        >
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 id="services-heading" className="text-3xl font-bold text-brand-blue mb-3">
                Our Services
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Full-service electrical contractor for homes, apartments, and businesses
                across Orange County.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Residential */}
              <div className="rounded-2xl border border-gray-100 p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue text-white text-xl" aria-hidden="true">🏠</span>
                  <h3 className="text-xl font-bold text-brand-blue">Residential Division</h3>
                </div>
                <ul className="space-y-3" aria-label="Residential services">
                  {RESIDENTIAL_SERVICES.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-gray-700">
                      <span className="mt-1 h-2 w-2 rounded-full bg-brand-red flex-shrink-0" aria-hidden="true" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Commercial */}
              <div className="rounded-2xl border border-gray-100 p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue text-white text-xl" aria-hidden="true">🏢</span>
                  <h3 className="text-xl font-bold text-brand-blue">Commercial Division</h3>
                </div>
                <ul className="space-y-3" aria-label="Commercial services">
                  {COMMERCIAL_SERVICES.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-gray-700">
                      <span className="mt-1 h-2 w-2 rounded-full bg-brand-red flex-shrink-0" aria-hidden="true" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Why Us ── */}
        <section
          id="why-us"
          aria-labelledby="why-heading"
          className="py-20 px-4 sm:px-6 bg-gray-50"
        >
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 id="why-heading" className="text-3xl font-bold text-brand-blue mb-3">
                Why Choose Berk&apos;s?
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                We&apos;ve been the trusted electrician for Orange County families and businesses for over 35 years.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '🏅', title: 'Top-Rated', desc: 'Hundreds of 5-star reviews on Google, Yelp, and BBB.' },
                { icon: '👨‍👩‍👧', title: 'Family Owned', desc: 'Local, accountable, and proud to serve our community since 1988.' },
                { icon: '📋', title: 'Licensed & Insured', desc: 'Fully licensed electrical contractor. C-10 Lic. #492996.' },
                { icon: '💬', title: 'Free Estimates', desc: 'No hidden fees. Honest, upfront quotes before any work begins.' },
              ].map((card) => (
                <div key={card.title} className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm text-center">
                  <span className="text-4xl block mb-4" aria-hidden="true">{card.icon}</span>
                  <h3 className="font-bold text-brand-blue text-lg mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Gallery ── */}
        <section
          id="gallery"
          aria-labelledby="gallery-heading"
          className="py-20 px-4 sm:px-6 bg-white"
        >
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 id="gallery-heading" className="text-3xl font-bold text-brand-blue mb-3">
                Project Gallery
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                A sample of the work we&apos;re proud of across Orange County.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {GALLERY_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="group rounded-xl bg-gradient-to-br from-brand-blue to-brand-blue-light aspect-square flex flex-col items-center justify-center gap-2 cursor-pointer hover:from-brand-blue-dark hover:to-brand-blue transition-all"
                  role="img"
                  aria-label={item.label}
                >
                  <span className="text-4xl" aria-hidden="true">{item.emoji}</span>
                  <span className="text-white text-xs font-semibold text-center px-2">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section
          id="testimonials"
          aria-labelledby="testimonials-heading"
          className="py-20 px-4 sm:px-6 bg-gray-50"
        >
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 id="testimonials-heading" className="text-3xl font-bold text-brand-blue mb-3">
                What Customers Say
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                We&apos;re proud of the trust Orange County homeowners and businesses place in us.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {TESTIMONIALS.map((t) => (
                <blockquote
                  key={t.name}
                  className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm"
                >
                  <div className="flex gap-1 mb-4" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg" aria-hidden="true">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-5">&ldquo;{t.text}&rdquo;</p>
                  <footer className="text-sm">
                    <cite className="not-italic">
                      <span className="font-semibold text-brand-blue">{t.name}</span>
                      <span className="text-gray-500"> · {t.location}</span>
                    </cite>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact / Quote ── */}
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="py-20 px-4 sm:px-6 bg-white"
        >
          <div className="mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-start">

              {/* Contact info */}
              <div>
                <h2 id="contact-heading" className="text-3xl font-bold text-brand-blue mb-3">
                  Get in Touch
                </h2>
                <p className="text-gray-600 mb-8">
                  Ready to start your project? Reach us by phone, email, or fill out the form and
                  we&apos;ll respond within one business day.
                </p>
                <dl className="space-y-5">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl mt-0.5" aria-hidden="true">📞</span>
                    <div>
                      <dt className="font-semibold text-gray-800">Phone</dt>
                      <dd className="mt-1 space-y-1">
                        <div><PhoneLink number="(949) 857-8385" /> <span className="text-gray-500 text-sm">— South OC</span></div>
                        <div><PhoneLink number="(714) 744-4300" /> <span className="text-gray-500 text-sm">— North OC</span></div>
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl mt-0.5" aria-hidden="true">✉️</span>
                    <div>
                      <dt className="font-semibold text-gray-800">Email</dt>
                      <dd className="mt-1">
                        <a
                          href="mailto:service@berkselectrical.com"
                          className="text-brand-blue hover:underline underline-offset-2"
                        >
                          service@berkselectrical.com
                        </a>
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl mt-0.5" aria-hidden="true">🕐</span>
                    <div>
                      <dt className="font-semibold text-gray-800">Hours</dt>
                      <dd className="mt-1 text-gray-600">
                        Mon–Fri: 7:00 AM – 5:00 PM<br />
                        Sat: By appointment
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl mt-0.5" aria-hidden="true">📍</span>
                    <div>
                      <dt className="font-semibold text-gray-800">Service Area</dt>
                      <dd className="mt-1 text-gray-600">All of Orange County, CA</dd>
                    </div>
                  </div>
                </dl>

                <div className="mt-8 flex gap-4" aria-label="Social media links">
                  <a
                    href="https://yelp.com"
                    className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    aria-label="Berk's Electrical on Yelp"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Yelp
                  </a>
                  <a
                    href="https://google.com"
                    className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    aria-label="Berk's Electrical on Google"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Google
                  </a>
                  <a
                    href="https://bbb.org"
                    className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    aria-label="Berk's Electrical on BBB"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    BBB
                  </a>
                </div>
              </div>

              {/* Quote form */}
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8 shadow-sm">
                <h3 className="text-xl font-bold text-brand-blue mb-6">Request a Free Quote</h3>
                <QuoteForm />
              </div>
            </div>
          </div>
        </section>

        {/* ── Service Area ── */}
        <section
          aria-labelledby="area-heading"
          className="py-16 px-4 sm:px-6 bg-brand-blue text-white"
        >
          <div className="mx-auto max-w-6xl">
            <h2 id="area-heading" className="text-2xl font-bold mb-2 text-center">Service Area</h2>
            <p className="text-blue-200 text-center mb-8">Proudly serving all of Orange County, CA</p>
            <ul className="flex flex-wrap justify-center gap-2" aria-label="Cities served">
              {SERVICE_AREAS.map((city) => (
                <li
                  key={city}
                  className="rounded-full bg-white/10 px-4 py-1.5 text-sm text-blue-100"
                >
                  {city}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="bg-brand-blue-dark text-blue-200 py-10 px-4 sm:px-6">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="font-bold text-white">Berk&apos;s Electrical &amp; Lighting, Inc.</p>
            <p className="text-sm mt-1">C-10 License #492996 · Orange County, CA</p>
          </div>
          <p className="text-sm text-center">
            &copy; {new Date().getFullYear()} Berk&apos;s Electrical &amp; Lighting. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}
