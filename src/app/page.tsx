import ChatInterface from "@/components/ChatInterface";
import CareerTimeline from "@/components/CareerTimeline";
import ProductCards from "@/components/ProductCards";
import SkillBadges from "@/components/SkillBadges";
import { EDUCATION } from "@/lib/constants";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/10 via-transparent to-transparent" />
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-12 relative">
          {/* Doner 소개 헤더 */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 mb-6">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-[var(--color-accent-light)]">
                Doner is online
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="gradient-text">Doner</span>에게 물어보세요
            </h1>
            <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto leading-relaxed">
              2025년 11월부터 민승기(Coree)와 함께 일해 온 AI 비즈니스 에이전트입니다.
              <br />
              경력, 프로젝트, 역량 — 무엇이든 편하게 물어보세요.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-10">
            {/* Left: Profile */}
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-accent)] to-[#48c6ef] flex items-center justify-center text-white text-2xl font-bold pulse-glow">
                  C
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">민승기</h2>
                  <p className="text-[var(--color-accent-light)] font-medium">
                    Coree
                  </p>
                </div>
              </div>

              <p className="text-lg text-[var(--color-text)] leading-relaxed mb-4">
                디지털 헬스케어 PM &middot; 8년 경력
              </p>

              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                스타트업부터 중견기업까지, 디지털 치료제 런칭부터 AI 프로덕트 개발까지.
                <br />
                전략을 세우고, 직접 만들고, 성과를 만들어내는 PM입니다.
              </p>

              <div className="flex flex-wrap gap-3 text-sm mb-6">
                <span className="px-3 py-1 rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent-light)]">
                  DHC 한독 &middot; 디지털헬스케어 PM
                </span>
                <span className="px-3 py-1 rounded-full bg-[var(--color-surface-light)] text-[var(--color-text-muted)]">
                  SleepQ Project Manager
                </span>
              </div>

              {/* Doner란? 미니 설명 */}
              <div className="glass-card rounded-xl p-4 border-l-2 border-[var(--color-accent)]">
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  <span className="text-[var(--color-accent-light)] font-semibold">Doner</span>는
                  민승기의 경력, 프로젝트, 의사결정 이력을 학습한 개인 AI 에이전트예요.
                  단순 챗봇이 아니라, 수개월간 실제 업무에서 축적된 맥락을 기반으로 대화합니다.
                  이 에이전트 자체가 &ldquo;AI와 협업하여 프로덕트를 만든다&rdquo;는 걸 증명하죠.
                </p>
                <p className="text-xs text-[var(--color-text-muted)] mt-2 opacity-60">
                  * 현재 fine-tuning 전 상태로, 일부 정보가 부정확할 수 있습니다.
                  지속적으로 맥락을 보강하고 있어요.
                </p>
              </div>
            </div>

            {/* Right: Chat */}
            <div className="w-full md:w-[480px] shrink-0">
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
          AI와 함께 기획하고 직접 만든 프로덕트들
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
          {EDUCATION.map((edu, i) => (
            <div key={i} className="glass-card rounded-xl p-5">
              <h3 className="font-semibold text-white">{edu.school}</h3>
              <p className="text-sm text-[var(--color-text-muted)]">
                {edu.detail}
                {edu.location && ` — ${edu.location}`}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-[var(--color-border)]">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm text-[var(--color-text-muted)]">
              Powered by{" "}
              <span className="gradient-text font-semibold">Doner</span>{" "}
              &middot; Coree&apos;s AI Business Agent since 2025.11
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
