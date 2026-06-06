'use client';
import Link from 'next/link';

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Skills', href: '/skills' },
];

function BarNav() {
  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      padding: '0 2rem',
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxShadow: '0 2px 20px rgba(99,102,241,0.4)',
    }}>

      {/* Nom */}
      <Link href="/" style={{
        color: '#ffffff',
        fontWeight: '800',
        fontSize: '18px',
        textDecoration: 'none',
        letterSpacing: '0.03em',
      }}>
        Farah Allouche
      </Link>

      {/* Liens */}
      <div style={{ display: 'flex', gap: '4px' }}>
        {links.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            style={{
              color: 'rgba(255,255,255,0.85)',
              fontSize: '14px',
              fontWeight: '500',
              padding: '7px 16px',
              borderRadius: '8px',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'rgba(255,255,255,0.85)';
            }}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Contact */}
      <Link
        href="/contact"
        style={{
          backgroundColor: '#ffffff',
          color: '#6366f1',
          fontSize: '14px',
          fontWeight: '700',
          padding: '8px 22px',
          borderRadius: '8px',
          textDecoration: 'none',
          transition: 'all 0.2s ease',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-1px)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
        }}
      >
        Contact
      </Link>

    </nav>
  );
}

export default BarNav;