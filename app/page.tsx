'use client'

import { useState, useEffect, useRef } from 'react'

// ─── NAV ────────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#services', label: 'Services' },
    { href: '#outdoor', label: 'Outdoor' },
    { href: '#why-us', label: 'Why Us' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.4s ease',
        background: scrolled
          ? 'rgba(10,10,10,0.95)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,0.15)' : 'none',
        padding: '0 1.5rem',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
        {/* Logo */}
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '38px', height: '38px',
            border: '1.5px solid var(--gold)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transform: 'rotate(45deg)',
          }}>
            <span style={{ transform: 'rotate(-45deg)', fontFamily: 'var(--font-heading)', fontSize: '16px', fontWeight: 900, color: 'var(--gold)', letterSpacing: '-1px' }}>OZ</span>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '1px' }}>OZ DETAILING</div>
            <div style={{ fontSize: '10px', color: 'var(--gold)', letterSpacing: '3px', textTransform: 'uppercase', marginTop: '-2px' }}>London</div>
          </div>
        </a>

        {/* Desktop Links */}
        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          {links.map(l => (
            <a key={l.href} href={l.href}
              style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '13px', letterSpacing: '1.5px', textTransform: 'uppercase', transition: 'color 0.2s', fontWeight: 500 }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {l.label}
            </a>
          ))}
          <a href="tel:+447856436967"
            style={{
              background: 'var(--gold)', color: '#000', padding: '10px 22px',
              textDecoration: 'none', fontSize: '12px', fontWeight: 600,
              letterSpacing: '1.5px', textTransform: 'uppercase',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold-light)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--gold)' }}
          >
            Book Now
          </a>
        </div>
      </div>

      {/* Mobile */}
      <div className="mobile-nav" style={{ display: 'none' }}>
        <style>{`
          @media (max-width: 768px) {
            .desktop-nav { display: none !important; }
            .mobile-nav { display: block !important; }
          }
          @media (min-width: 769px) {
            .mobile-nav { display: none !important; }
          }
        `}</style>
      </div>
    </nav>
  )
}

// ─── HERO ────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '120px 1.5rem 80px',
        background: 'var(--charcoal)',
      }}
    >
      {/* Hero background photo */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
        pointerEvents: 'none',
      }} />
      {/* Dark overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(105deg, rgba(10,10,10,0.93) 0%, rgba(10,10,10,0.80) 50%, rgba(10,10,10,0.60) 100%)',
        pointerEvents: 'none',
      }} />

      {/* Background elements */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 80% 60% at 70% 50%, rgba(201,168,76,0.05) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        top: '15%', right: '5%',
        width: '500px', height: '500px',
        border: '1px solid rgba(201,168,76,0.06)',
        transform: 'rotate(45deg)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        top: '20%', right: '8%',
        width: '380px', height: '380px',
        border: '1px solid rgba(201,168,76,0.04)',
        transform: 'rotate(45deg)',
        pointerEvents: 'none',
      }} />

      {/* Vertical line */}
      <div style={{
        position: 'absolute', left: '1.5rem', top: '120px', bottom: '80px',
        width: '1px',
        background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.3), transparent)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '700px', paddingLeft: '2rem' }}>
          {/* Overline */}
          <div className="animate-fade-in" style={{
            display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '2rem', opacity: 0,
          }}>
            <div style={{ width: '30px', height: '1px', background: 'var(--gold)' }} />
            <span style={{ fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500 }}>
              Mobile Car Detailing · London
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in-up delay-100"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(42px, 7vw, 88px)',
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: '-2px',
              color: 'var(--text-primary)',
              marginBottom: '0.5rem',
              opacity: 0,
            }}
          >
            Your Car,
          </h1>
          <h1 className="animate-fade-in-up delay-200"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(42px, 7vw, 88px)',
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: '-2px',
              marginBottom: '1.5rem',
              opacity: 0,
            }}
          >
            <span className="gold-shimmer">Perfected.</span>
          </h1>

          {/* Subline */}
          <p className="animate-fade-in-up delay-300"
            style={{
              fontSize: 'clamp(15px, 2vw, 18px)',
              color: 'var(--text-muted)',
              lineHeight: 1.7,
              maxWidth: '480px',
              marginBottom: '2.5rem',
              opacity: 0,
              fontWeight: 300,
            }}
          >
            Premium mobile valeting service — we come to your door anywhere in London. Hand wash, deep interior clean, and outdoor pressure washing.
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up delay-400" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', opacity: 0 }}>
            <a href="tel:+447856436967"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                background: 'var(--gold)', color: '#000',
                padding: '16px 36px', textDecoration: 'none',
                fontSize: '13px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase',
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold-light)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              Call Us Now
            </a>
            <a href="#services"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                border: '1px solid rgba(201,168,76,0.4)', color: 'var(--gold)',
                padding: '16px 36px', textDecoration: 'none',
                fontSize: '13px', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase',
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.08)'; e.currentTarget.style.borderColor = 'var(--gold)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)' }}
            >
              View Services
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-up delay-500"
            style={{
              display: 'flex', gap: '3rem', marginTop: '4rem',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(201,168,76,0.1)',
              opacity: 0,
            }}
          >
            {[
              { value: '100%', label: 'Mobile Service' },
              { value: '2', label: 'Packages' },
              { value: '5★', label: 'Rated' },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', fontWeight: 700, color: 'var(--gold)' }}>{stat.value}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '2px' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="animate-fade-in delay-600"
        style={{
          position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
          opacity: 0,
        }}
      >
        <span style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Scroll</span>
        <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, var(--gold), transparent)' }} />
      </div>
    </section>
  )
}

// ─── SERVICES ────────────────────────────────────────────────────────────────
function Services() {
  const [active, setActive] = useState<'basic' | 'premium'>('premium')

  const packages = {
    basic: {
      name: 'Basic Package',
      emoji: '✦',
      tagline: 'The essentials, done right.',
      price: 'From £40',
      exterior: [
        'Pre-wash & snow foam',
        'Hand wash',
        'Safe contact wash',
        'Wheels & tyres cleaned',
        'Door shuts cleaned',
        'Streak-free glass & mirrors',
        'Dried using microfibre towels',
        'Tyres dressed',
      ],
      interior: [
        'Full interior vacuum (including boot)',
        'Wipe down of all surfaces',
        'Interior glass cleaned',
      ],
    },
    premium: {
      name: 'Premium Package',
      emoji: '✦✦',
      tagline: 'The full treatment, every detail.',
      price: 'From £80',
      exterior: [
        'Pre-wash, snow foam & wax',
        'Detailed hand wash using premium products',
        'Wheels, tyres & wheel arches cleaned',
        'Door shuts thoroughly cleaned',
        'Streak-free glass & mirrors',
        'Carefully hand dried with microfibre towels',
        'Tyres & trims dressed',
      ],
      interior: [
        'Full deep vacuum (interior & boot)',
        'All surfaces scrubbed & detailed',
        'Interior dressing applied (restores finish)',
        'Carpets & mats wet vacuumed',
        'Seats & upholstery deep cleaned',
        'Steam cleaning on key areas',
      ],
    },
  }

  const pkg = packages[active]

  return (
    <section id="services" style={{ padding: '120px 1.5rem', background: 'var(--charcoal-mid)', position: 'relative', overflow: 'hidden' }}>
      {/* Background accent */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '1.5rem' }}>
            <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
            <span style={{ fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--gold)' }}>Car Valeting</span>
            <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900, letterSpacing: '-1.5px', color: 'var(--text-primary)' }}>
            Our Packages
          </h2>
        </div>

        {/* Toggle */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '60px' }}>
          <div style={{ display: 'flex', border: '1px solid rgba(201,168,76,0.2)', padding: '4px' }}>
            {(['basic', 'premium'] as const).map(key => (
              <button key={key}
                onClick={() => setActive(key)}
                style={{
                  padding: '12px 40px',
                  background: active === key ? 'var(--gold)' : 'transparent',
                  color: active === key ? '#000' : 'var(--text-muted)',
                  border: 'none', cursor: 'pointer',
                  fontSize: '12px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase',
                  transition: 'all 0.3s',
                }}
              >
                {key === 'basic' ? 'Basic' : '✨ Premium'}
              </button>
            ))}
          </div>
        </div>

        {/* Package detail */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px',
          background: 'rgba(201,168,76,0.1)',
          border: '1px solid rgba(201,168,76,0.15)',
        }}>
          {/* Left: Info */}
          <div style={{ background: 'var(--charcoal)', padding: '60px 50px' }}>
            <div style={{ fontSize: '12px', color: 'var(--gold)', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '1rem' }}>{pkg.emoji}</div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '40px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem', letterSpacing: '-1px' }}>
              {pkg.name}
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '15px', marginBottom: '2rem', fontStyle: 'italic' }}>{pkg.tagline}</p>
            <div style={{
              display: 'inline-block',
              fontFamily: 'var(--font-heading)', fontSize: '32px', fontWeight: 700,
              color: 'var(--gold)', marginBottom: '2rem',
            }}>{pkg.price}</div>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '2.5rem' }}>Price varies by vehicle size. Contact for exact quote.</p>

            <a href="tel:+447856436967"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                background: 'var(--gold)', color: '#000',
                padding: '16px 32px', textDecoration: 'none',
                fontSize: '12px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold-light)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--gold)' }}
            >
              Book This Package
            </a>
          </div>

          {/* Right: Features */}
          <div style={{ background: 'var(--charcoal-light)', padding: '60px 50px' }}>
            <div style={{ marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--gold)">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 14l-4-4 1.4-1.4 2.6 2.6 5.6-5.6L17 9l-7 7z"/>
                </svg>
                <span style={{ fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--gold)' }}>Exterior</span>
              </div>
              {pkg.exterior.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px' }}>
                  <div style={{ width: '5px', height: '5px', background: 'var(--gold)', marginTop: '7px', flexShrink: 0 }} />
                  <span style={{ fontSize: '14px', color: 'var(--text-primary)', lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>

            <div style={{ height: '1px', background: 'rgba(201,168,76,0.15)', marginBottom: '2rem' }} />

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--gold)">
                  <path d="M7 17H1v-2l4-4-4-4V5h6v12zm10 0h-6V5h6v2l-4 4 4 4v2z"/>
                </svg>
                <span style={{ fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--gold)' }}>Interior</span>
              </div>
              {pkg.interior.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px' }}>
                  <div style={{ width: '5px', height: '5px', background: 'var(--gold)', marginTop: '7px', flexShrink: 0 }} />
                  <span style={{ fontSize: '14px', color: 'var(--text-primary)', lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── OUTDOOR ────────────────────────────────────────────────────────────────
function Outdoor() {
  const features = [
    { icon: '◈', title: 'Patio Pressure Washing', desc: 'Complete patio restoration using high-pressure equipment for a clean, refreshed finish.' },
    { icon: '◈', title: 'Driveway Pressure Washing', desc: 'Remove years of built-up grime, oil stains, and weathering from your driveway.' },
    { icon: '◈', title: 'Moss & Algae Treatment', desc: 'Specialist treatments that eliminate moss and algae at the root.' },
    { icon: '◈', title: 'Surface Protection', desc: 'Applied treatments help surfaces stay cleaner for longer after each service.' },
    { icon: '◈', title: 'Dirt & Grime Removal', desc: 'We tackle heavy contamination to restore your outdoor surfaces.' },
    { icon: '◈', title: 'General Tidy Finish', desc: 'Every job ends with a clean, neat result you\'ll be proud of.' },
  ]

  return (
    <section id="outdoor" style={{ padding: '120px 1.5rem', background: 'var(--charcoal)', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          {/* Left */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
              <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
              <span style={{ fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--gold)' }}>Outdoor Services</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(30px, 4vw, 50px)', fontWeight: 900, letterSpacing: '-1.5px', color: 'var(--text-primary)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
              🏡 Driveways &<br />Patios, Restored.
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: '400px' }}>
              We apply specialised treatments to remove moss, algae, and deep-set dirt — and help keep surfaces cleaner for longer with protective finishing.
            </p>
            <a href="tel:+447856436967"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                border: '1px solid var(--gold)', color: 'var(--gold)',
                padding: '14px 30px', textDecoration: 'none',
                fontSize: '12px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase',
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.1)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
            >
              Get a Quote
            </a>
          </div>

          {/* Right: Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {features.map((f, i) => (
              <div key={i} className="card-hover"
                style={{
                  background: 'var(--charcoal-light)',
                  border: '1px solid rgba(201,168,76,0.1)',
                  padding: '24px 20px',
                }}
              >
                <div style={{ fontSize: '20px', marginBottom: '10px', color: 'var(--gold)' }}>{f.icon}</div>
                <h4 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '6px' }}>{f.title}</h4>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── WHY US ──────────────────────────────────────────────────────────────────
function WhyUs() {
  const reasons = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      title: 'We Come to You',
      desc: 'No need to drive anywhere. We arrive at your home, office, or wherever you are in London.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: 'Premium Products Only',
      desc: 'We use professional-grade detailing products that protect your car\'s paint, trim, and interior.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      ),
      title: 'Attention to Detail',
      desc: 'Every inch of your vehicle is treated with care — we don\'t cut corners, ever.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
          <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
        </svg>
      ),
      title: 'London-Wide Coverage',
      desc: 'We cover all of London, from the city centre to the suburbs. Just ask.',
    },
  ]

  return (
    <section id="why-us" style={{ padding: '120px 1.5rem', background: 'var(--charcoal-mid)', position: 'relative' }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '1.5rem' }}>
            <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
            <span style={{ fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--gold)' }}>Why Choose Us</span>
            <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(30px, 5vw, 52px)', fontWeight: 900, letterSpacing: '-1.5px', color: 'var(--text-primary)' }}>
            The OZ Difference
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2px', background: 'rgba(201,168,76,0.08)' }}>
          {reasons.map((r, i) => (
            <div key={i} className="card-hover"
              style={{
                background: 'var(--charcoal-mid)',
                padding: '50px 30px',
                textAlign: 'center',
                borderTop: i === 0 ? '3px solid var(--gold)' : '3px solid transparent',
                transition: 'border-color 0.3s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderTopColor = 'var(--gold)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderTopColor = i === 0 ? 'var(--gold)' : 'transparent' }}
            >
              <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>{r.icon}</div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '12px' }}>{r.title}</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.7 }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
function Testimonials() {
  const reviews = [
    { name: 'James R.', location: 'Hackney, London', rating: 5, text: 'Absolutely immaculate finish. My BMW looked better than when I bought it. Will definitely be booking again.' },
    { name: 'Sarah M.', location: 'Islington, London', rating: 5, text: 'Booked the premium package and was blown away. The interior deep clean was incredible — even got the seats looking brand new.' },
    { name: 'Daniel K.', location: 'Canary Wharf, London', rating: 5, text: 'They did my driveway and patio on the same day. Completely transformed — looked like a different house. Highly recommend.' },
    { name: 'Priya S.', location: 'Stratford, London', rating: 5, text: 'Super professional, on time, and the results speak for themselves. My car looks showroom fresh every single time.' },
    { name: 'Tom H.', location: 'Bethnal Green, London', rating: 5, text: 'Got the basic package as a trial and was so impressed I booked premium next week. Incredible value for the quality.' },
    { name: 'Fatima A.', location: 'Walthamstow, London', rating: 5, text: 'They came to my office car park which was so convenient. Great communication and outstanding results.' },
  ]

  // Double for infinite loop
  const doubled = [...reviews, ...reviews]

  return (
    <section style={{ padding: '100px 0', background: 'var(--charcoal)', overflow: 'hidden', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }} />

      {/* Fade edges */}
      <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '120px', background: 'linear-gradient(to right, var(--charcoal), transparent)', zIndex: 2, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '120px', background: 'linear-gradient(to left, var(--charcoal), transparent)', zIndex: 2, pointerEvents: 'none' }} />

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '56px', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '1.5rem' }}>
          <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
          <span style={{ fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--gold)' }}>Happy Customers</span>
          <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
        </div>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 5vw, 50px)', fontWeight: 900, letterSpacing: '-1.5px', color: 'var(--text-primary)' }}>
          What Our Clients Say
        </h2>
      </div>

      {/* Marquee */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          gap: 20px;
          width: max-content;
          animation: marquee 32s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div style={{ overflow: 'hidden' }}>
        <div className="marquee-track">
          {doubled.map((review, i) => (
            <div key={i}
              style={{
                flexShrink: 0,
                width: '320px',
                background: 'var(--charcoal-light)',
                border: '1px solid rgba(201,168,76,0.12)',
                padding: '28px 24px',
                transition: 'border-color 0.3s',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.12)')}
            >
              {/* Stars */}
              <div style={{ display: 'flex', gap: '3px', marginBottom: '14px' }}>
                {Array(review.rating).fill(0).map((_, s) => (
                  <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#C9A84C">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <div style={{ fontSize: '28px', color: 'rgba(201,168,76,0.25)', fontFamily: 'Georgia, serif', lineHeight: 1, marginBottom: '8px' }}>"</div>
              <p style={{ fontSize: '14px', color: 'var(--text-primary)', lineHeight: 1.7, marginBottom: '20px', fontStyle: 'italic' }}>
                {review.text}
              </p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', borderTop: '1px solid rgba(201,168,76,0.08)', paddingTop: '16px' }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--gold-dark), var(--gold))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '14px', fontWeight: 700, color: '#000', flexShrink: 0,
                }}>
                  {review.name[0]}
                </div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)' }}>{review.name}</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '1px' }}>{review.location}</div>
                </div>
                <div style={{ marginLeft: 'auto' }}>
                  <div style={{ fontSize: '10px', color: 'var(--gold)', letterSpacing: '1px', background: 'rgba(201,168,76,0.08)', padding: '3px 8px' }}>
                    VERIFIED
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── CONTACT ─────────────────────────────────────────────────────────────────
function Contact() {
  return (
    <section id="contact" style={{ padding: '120px 1.5rem', background: 'var(--charcoal)', position: 'relative' }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
      }} />

      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '1.5rem' }}>
          <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
          <span style={{ fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--gold)' }}>Get in Touch</span>
          <div style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
        </div>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px, 6vw, 64px)', fontWeight: 900, letterSpacing: '-2px', color: 'var(--text-primary)', marginBottom: '1rem', lineHeight: 1.05 }}>
          Ready for a <span className="gold-shimmer">Spotless</span> Clean?
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: 1.7, marginBottom: '3.5rem', maxWidth: '500px', margin: '0 auto 3.5rem' }}>
          Call or message us to book your service. We'll confirm availability and come straight to you.
        </p>

        {/* Contact cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '60px' }}>
          {[
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--gold)">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
              ),
              label: 'Phone',
              value: '+44 7856 436967',
              href: 'tel:+447856436967',
            },
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--gold)">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              ),
              label: 'Email',
              value: 'ozdetailing7@gmail.com',
              href: 'mailto:ozdetailing7@gmail.com',
            },
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--gold)">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              ),
              label: 'Location',
              value: 'London, UK',
              href: '#',
            },
          ].map((item, i) => (
            <a key={i} href={item.href}
              className="card-hover"
              style={{
                display: 'block',
                background: 'var(--charcoal-light)',
                border: '1px solid rgba(201,168,76,0.15)',
                padding: '30px 20px',
                textDecoration: 'none',
                textAlign: 'center',
              }}
            >
              <div style={{ marginBottom: '12px', display: 'flex', justifyContent: 'center' }}>{item.icon}</div>
              <div style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '6px' }}>{item.label}</div>
              <div style={{ fontSize: '14px', color: 'var(--text-primary)', fontWeight: 500 }}>{item.value}</div>
            </a>
          ))}
        </div>

        {/* Social */}
        <div>
          <div style={{ fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '20px' }}>Find us on social</div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
            {[
              { name: 'Instagram', handle: '@ozdetailing7', href: 'https://instagram.com/ozdetailing7', icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              )},
              { name: 'Facebook', handle: 'Oz Detailing', href: 'https://facebook.com', icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              )},
              { name: 'TikTok', handle: 'OZ DETAILING', href: 'https://tiktok.com', icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              )},
            ].map(social => (
              <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  background: 'var(--charcoal-light)',
                  border: '1px solid rgba(201,168,76,0.12)',
                  color: 'var(--text-muted)',
                  padding: '12px 20px',
                  textDecoration: 'none',
                  fontSize: '13px',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold)'; e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'rgba(201,168,76,0.12)' }}
              >
                {social.icon}
                <span>{social.handle}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: 'var(--charcoal-mid)', borderTop: '1px solid rgba(201,168,76,0.12)', padding: '40px 1.5rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '28px', height: '28px',
            border: '1px solid rgba(201,168,76,0.5)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transform: 'rotate(45deg)',
          }}>
            <span style={{ transform: 'rotate(-45deg)', fontFamily: 'var(--font-heading)', fontSize: '11px', fontWeight: 900, color: 'var(--gold)' }}>OZ</span>
          </div>
          <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>© {new Date().getFullYear()} OZ Detailing. All rights reserved.</span>
        </div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          {[
            { href: '#services', label: 'Services' },
            { href: '#outdoor', label: 'Outdoor' },
            { href: '#contact', label: 'Contact' },
          ].map(l => (
            <a key={l.href} href={l.href}
              style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '12px', letterSpacing: '1px', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              {l.label}
            </a>
          ))}
        </div>
        <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
          <a href="tel:+447856436967" style={{ color: 'var(--gold)', textDecoration: 'none' }}>+44 7856 436967</a>
          {' · '}
          <a href="https://ozdetailing.co.uk" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>ozdetailing.co.uk</a>
        </div>
      </div>
    </footer>
  )
}

// ─── MOBILE NAV (responsive wrapper) ─────────────────────────────────────────
function MobileNav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#services', label: 'Services' },
    { href: '#outdoor', label: 'Outdoor' },
    { href: '#why-us', label: 'Why Us' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <>
      <style>{`
        .desktop-links { display: flex; }
        .mobile-toggle { display: none; }
        @media (max-width: 768px) {
          .desktop-links { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
      <nav
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          transition: 'all 0.4s ease',
          background: scrolled || open ? 'rgba(10,10,10,0.97)' : 'transparent',
          backdropFilter: scrolled || open ? 'blur(12px)' : 'none',
          borderBottom: scrolled || open ? '1px solid rgba(201,168,76,0.15)' : 'none',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
          {/* Logo */}
          <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '36px', height: '36px', border: '1.5px solid var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(45deg)', flexShrink: 0 }}>
              <span style={{ transform: 'rotate(-45deg)', fontFamily: 'var(--font-heading)', fontSize: '14px', fontWeight: 900, color: 'var(--gold)' }}>OZ</span>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '1px' }}>OZ DETAILING</div>
              <div style={{ fontSize: '9px', color: 'var(--gold)', letterSpacing: '3px', textTransform: 'uppercase' }}>London</div>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="desktop-links" style={{ gap: '2.5rem', alignItems: 'center' }}>
            {links.map(l => (
              <a key={l.href} href={l.href}
                style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '12px', letterSpacing: '1.5px', textTransform: 'uppercase', transition: 'color 0.2s', fontWeight: 500 }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                {l.label}
              </a>
            ))}
            <a href="tel:+447856436967"
              style={{ background: 'var(--gold)', color: '#000', padding: '10px 22px', textDecoration: 'none', fontSize: '12px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', transition: 'all 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--gold-light)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--gold)'}
            >
              Book Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button className="mobile-toggle"
            onClick={() => setOpen(!open)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', flexDirection: 'column', gap: '5px', alignItems: 'flex-end' }}
          >
            <div style={{ width: '24px', height: '1.5px', background: open ? 'var(--gold)' : 'var(--text-primary)', transition: 'all 0.3s', transform: open ? 'rotate(45deg) translateY(6.5px)' : 'none' }} />
            <div style={{ width: '16px', height: '1.5px', background: open ? 'transparent' : 'var(--text-primary)', transition: 'all 0.3s' }} />
            <div style={{ width: '24px', height: '1.5px', background: open ? 'var(--gold)' : 'var(--text-primary)', transition: 'all 0.3s', transform: open ? 'rotate(-45deg) translateY(-6.5px)' : 'none' }} />
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div style={{ borderTop: '1px solid rgba(201,168,76,0.1)', padding: '20px 1.5rem 30px' }}>
            {links.map(l => (
              <a key={l.href} href={l.href}
                onClick={() => setOpen(false)}
                style={{ display: 'block', color: 'var(--text-muted)', textDecoration: 'none', fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', padding: '14px 0', borderBottom: '1px solid rgba(201,168,76,0.06)' }}
              >
                {l.label}
              </a>
            ))}
            <a href="tel:+447856436967"
              style={{ display: 'block', background: 'var(--gold)', color: '#000', padding: '14px', textDecoration: 'none', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', textAlign: 'center', marginTop: '20px' }}
            >
              Call Now
            </a>
          </div>
        )}
      </nav>
    </>
  )
}

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function Page() {
  return (
    <>
      <MobileNav />
      <main>
        <Hero />
        <Services />
        <Outdoor />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

// ─── WHATSAPP BUTTON ─────────────────────────────────────────────────────────
function WhatsAppButton() {
  const [hovered, setHovered] = useState(false)
  const [visible, setVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setVisible(true), 2000)
    const t2 = setTimeout(() => setShowTooltip(true), 4000)
    const t3 = setTimeout(() => setShowTooltip(false), 7000)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  const waMessage = encodeURIComponent("Hi! I'd like to book a car detailing service. Could you give me a quote?")
  const waLink = `https://wa.me/447856436967?text=${waMessage}`

  return (
    <>
      <style>{`
        @keyframes wa-bounce {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-6px) scale(1.05); }
        }
        @keyframes wa-ping {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        @keyframes wa-fadein {
          from { opacity: 0; transform: translateY(20px) scale(0.8); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes tooltip-in {
          from { opacity: 0; transform: translateX(10px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .wa-btn { animation: wa-fadein 0.5s ease forwards; }
        .wa-btn:not(:hover) { animation: wa-bounce 3s ease-in-out 1s infinite; }
        .wa-ping { animation: wa-ping 2s ease-out infinite; }
      `}</style>

      {visible && (
        <div style={{ position: 'fixed', bottom: '28px', right: '24px', zIndex: 999, display: 'flex', alignItems: 'center', gap: '12px' }}>

          {(showTooltip || hovered) && (
            <div style={{
              animation: 'tooltip-in 0.25s ease forwards',
              background: '#1f2937', color: '#f9fafb',
              fontSize: '13px', fontWeight: 500,
              padding: '10px 16px', borderRadius: '8px',
              whiteSpace: 'nowrap', boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
              position: 'relative',
            }}>
              💬 Chat with us on WhatsApp
              <div style={{
                position: 'absolute', right: '-6px', top: '50%', transform: 'translateY(-50%)',
                width: 0, height: 0,
                borderTop: '6px solid transparent', borderBottom: '6px solid transparent',
                borderLeft: '6px solid #1f2937',
              }} />
            </div>
          )}

          <div style={{ position: 'relative' }}>
            <div className="wa-ping" style={{
              position: 'absolute', inset: 0, borderRadius: '50%',
              background: 'rgba(37,211,102,0.3)', pointerEvents: 'none',
            }} />
            <a href={waLink} target="_blank" rel="noopener noreferrer"
              className="wa-btn"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '60px', height: '60px', borderRadius: '50%',
                background: hovered ? '#20c968' : '#25D366',
                boxShadow: hovered ? '0 8px 30px rgba(37,211,102,0.6)' : '0 4px 20px rgba(37,211,102,0.4)',
                transition: 'background 0.2s, box-shadow 0.2s', textDecoration: 'none',
              }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>
        </div>
      )}
    </>
  )
}