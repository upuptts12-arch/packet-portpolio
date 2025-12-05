'use client';
import React from 'react';

const GridCard = ({ title, description, icon }: { title: string; description: string; icon: string }) => (
  <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="font-bold text-xl mb-2 text-gray-900">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

const SplitSection = ({ img, title, children }: { img: string; title: string; children: React.ReactNode }) => (
  <div className="flex flex-col md:flex-row items-center bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-6 mb-8 gap-6">
    <img src={img} alt={title} className="w-32 h-32 rounded-full object-cover" />
    <div>
      <h2 className="font-extrabold text-2xl mb-2 text-gray-900">{title}</h2>
      <div className="text-gray-700 leading-relaxed">{children}</div>
    </div>
  </div>
);

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-200 via-gray-100 to-gray-200 font-sans p-8 flex justify-center">
      <div className="w-full max-w-5xl">
        {/* 헤더 */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-3 text-gray-900">jeongseo's 포트폴리오</h1>
          <p className="text-gray-600 text-lg">
          </p>
            정보보호학과 24학번 | 리눅스 활용 웹서비스 프로젝트
        </header>

        {/* 소개 섹션 (좌우 분할) */}
        <SplitSection img="/profile.png" title="소개">
          <p>
           안녕하세요! 정보보호학과 24학번 김정서입니다.
            다양한 웹서비스 구축과 보안 프로젝트를 경험하며 문제 해결 능력과 개발 역량을 쌓아가고 있습니다.
           앞으로도 실무 경험과 학습을 통해 전문성을 강화해 나가고자 합니다.
          </p>
        </SplitSection>

        {/* 기술 스택 섹션 (그리드) */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">기술 스택</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <GridCard title="Next.js / React" description="프론트엔드 SPA 구축 경험" icon="⚛️" />
            <GridCard title="Node.js / Express" description="백엔드 API 서버 경험" icon="🟢" />
            <GridCard title="MySQL / MariaDB" description="데이터베이스 설계 및 연동 경험" icon="💾" />
            <GridCard title="Linux / Apache / Nginx" description="서버 구축 및 운영 경험" icon="🐧" />
          </div>
        </section>

        {/* 프로젝트 섹션 (그리드) */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">프로젝트</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <GridCard
              title="워드프레스 블로그 서비스"
              description="LAMP 스택 기반 블로그 웹서비스 구축 및 운영"
              icon="📝"
            />
            <GridCard
              title="Next.js 포트폴리오 웹사이트"
              description="개인 포트폴리오 웹사이트 제작"
              icon="💻"
            />
            <GridCard
              title="Next.js + MongoDB CRUD 앱"
              description="CRUD 기능을 갖춘 풀스택 웹 애플리케이션 제작"
              icon="🗄️"
            />
            <GridCard
              title="웹 서버 보안 강화 프로젝트"
              description="Apache, 방화벽, SSL 적용으로 웹 서버 보안 강화"
              icon="🔒"
            />
          </div>
        </section>

        {/* 연락처 섹션 (좌우 분할) */}
        <SplitSection img="/contact.png" title="연락처">
          <p className="mb-2">
            <strong>Email:</strong> upuptts12@naver.com
          </p>
          <p>
            <strong>GitHub:</strong>{' '}
            <a href="https://github.com/upuptts12-arch" className="text-blue-600 hover:underline">
              github.com/kimjungseo
            </a>
          </p>
        </SplitSection>
      </div>
    </main>
  );
}
