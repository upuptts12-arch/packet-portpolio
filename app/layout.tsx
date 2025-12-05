import './globals.css';
import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: '김정서 포트폴리오',
  description: '정보보호학과 24학번 김정서 포트폴리오 웹사이트',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body
        style={{
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          backgroundColor: '#f0f2f5',
          margin: 0,
          padding: 0,
        }}
      >
        {/* 헤더 */}
        <header
          style={{
            padding: '20px 0',
            backgroundColor: '#fff',
            boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
          }}
        >
          <nav
            style={{
              maxWidth: '900px',
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <h1 style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>portpolio</h1>
            <div>
              <Link href="/" style={{ marginRight: '15px', color: '#1a1a1a', textDecoration: 'none' }}>
                Home
              </Link>
              <Link href="/about" style={{ marginRight: '15px', color: '#1a1a1a', textDecoration: 'none' }}>
                About
              </Link>
              <Link href="/projects" style={{ marginRight: '15px', color: '#1a1a1a', textDecoration: 'none' }}>
                Projects
              </Link>
              <Link href="/contact" style={{ color: '#1a1a1a', textDecoration: 'none' }}>
                Contact
              </Link>
            </div>
          </nav>
        </header>

        {/* 페이지 내용 */}
        <main style={{ maxWidth: '900px', margin: '40px auto', padding: '0 20px' }}>
          {children}
        </main>

        {/* 푸터 */}
        <footer
          style={{
            textAlign: 'center',
            padding: '20px 0',
            backgroundColor: '#fff',
            boxShadow: '0 -2px 6px rgba(0,0,0,0.05)',
            marginTop: '50px',
          }}
        >
          &copy; 2025 
        </footer>
      </body>
    </html>
  );
}
