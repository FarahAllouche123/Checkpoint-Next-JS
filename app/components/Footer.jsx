'use client';
import React from 'react';
import Link from 'next/link';

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#0a0a0a',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      padding: '2rem',
      textAlign: 'center',
    }}>

      <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', marginBottom: '1rem' }}>
        Farah Allouche — Développeuse Full Stack 
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1rem' }}>

        <Link
          href="https://github.com/FarahAllouche123"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.color = '#fff'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
        >
          GitHub
        </Link>

        <Link
          href="https://linkedin.com/in/farah-allouche2004"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.color = '#fff'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
        >
          LinkedIn
        </Link>

        <Link
          href="/contact"
          style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.color = '#fff'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
        >
          Contact
        </Link>

      </div>

      <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '12px' }}>
        © {new Date().getFullYear()} Farah Allouche. Tous droits réservés.
      </p>

    </footer>
  );
}

export default Footer;