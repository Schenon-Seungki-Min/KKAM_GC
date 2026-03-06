import ChatInterface from "@/components/ChatInterface";
import CareerTimeline from "@/components/CareerTimeline";
import ProductCards from "@/components/ProductCards";
import SkillBadges from "@/components/SkillBadges";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/10 via-transparent to-transparent" />
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-12 relative">
          <div className="flex flex-col md:flex-row items-start gap-12">
            {/* Left: Profile */}
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-accent)] to-[#48c6ef] flex items-center justify-center text-white text-2xl font-bold pulse-glow">
                  C
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-white">민승기</h1>
                  <p className="text-[var(--color-accent-light)] font-medium">
                    Coree
                  </p>
                </div>
              </div>

              <p className="text-lg text-[var(--color-text)] leading-relaxed mb-4">
                디지털 헬스케어 PM &middot; 8년 경력
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                스타트업부터 대기업까지, 디지털 치료제 런칭부터 AI 프로덕트 개발까지.
                <br />
                전략을 세우고, 직접 만들고, 성과를 만들어내는 PM입니다.
              </p>

              <div className="flex flex-wrap gap-3 text-sm">
                <span className="px-3 py-1 rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent-light)]">
                  DHC 한독 &middot; 디지털헬스케어 PM
                </span>
                <span className="px-3 py-1 rounded-full bg-[var(--color-surface-light)] text-[var(--color-text-muted)]">
                  SleepQ Project Manager
                </span>
              </div>
            </div>

            {/* Right: Chat */}
            <div className="w-full md:w-[480px] shrink-0">
              <div className="mb-3 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] pulse-glow" />
                <span className="text-sm text-[var(--color-text-muted)]">
                  Doner에게 물어보세요
                </span>
              </div>
              <ChatInterface />
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white mb-2">Career</h2>
        <p className="text-[var(--color-text-muted)] mb-8">
          디지털 헬스케어 도메인에서의 여정
        </p>
        <CareerTimeline />
      </section>

      {/* Products */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white mb-2">Products</h2>
        <p className="text-[var(--color-text-muted)] mb-8">
          AI를 활용해 직접 만든 프로덕트들
        </p>
        <ProductCards />
      </section>

      {/* Core Skills */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white mb-2">Core Skills</h2>
        <p className="text-[var(--color-text-muted)] mb-8">핵심 역량</p>
        <SkillBadges />
      </section>

      {/* Education */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white mb-2">Education</h2>
        <p className="text-[var(--color-text-muted)] mb-8">학력</p>
        <div className="space-y-4">
          <div className="glass-card rounded-xl p-5">
            <h3 className="font-semibold text-white">
              Charles University — 2nd Faculty of Medicine
            </h3>
            <p className="text-sm text-[var(--color-text-muted)]">
              체코 카를대학교 의학과
            </p>
          </div>
          <div className="glass-card rounded-xl p-5">
            <h3 className="font-semibold text-white">가천의과학대학교</h3>
            <p className="text-sm text-[var(--color-text-muted)]">
              생명과학과 졸업 (의학전문대학원 진학 트랙)
            </p>
          </div>
          <div className="glass-card rounded-xl p-5">
            <h3 className="font-semibold text-white">인하사대부속고등학교</h3>
            <p className="text-sm text-[var(--color-text-muted)]">졸업</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-[var(--color-border)]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-[var(--color-text-muted)]">
              Powered by <span className="gradient-text font-semibold">Doner</span> &middot;
              Coree&apos;s AI Business Agent
            </p>
          </div>
          <p className="text-xs text-[var(--color-text-muted)]">
            Built with Next.js, Tailwind CSS & Claude API
          </p>
        </div>
      </footer>
    </main>
  );
}
