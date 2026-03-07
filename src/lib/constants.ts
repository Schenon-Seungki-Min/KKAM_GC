export const CAREER_TIMELINE = [
  {
    company: "DHC 한독",
    role: "디지털헬스케어 PM",
    period: "2024.06 ~ 현재",
    highlight: "한국 최초 불면증 디지털치료제 SleepQ PM. 회장 직속 보고 라인, A&P 3천만원→10억(33배), 인력 1→13FTE, CoE 클리닉 1→4개 확장, 15개+ 협력사 네트워크 직접 구축",
    tags: ["DTx", "PM", "BD", "CD"],
  },
  {
    company: "올리브헬스케어 / 올리브스퀘어",
    role: "경영기획실 책임연구원 / 솔루션팀장",
    period: "2021.05 ~ 2024.06",
    highlight: "임상시험 비대면 전자동의서(SaaS) A-Z 런칭, FDA 21 CFR Part 11 규제 적용, Big5/Top10 의료기관 IRB 승인, Power BI 데이터레이크 기획, PMI 프로젝트 관리",
    tags: ["SaaS", "경영기획", "IT PM", "PMI", "규제"],
  },
  {
    company: "까미디지털헬스케어",
    role: "창업팀 CSO (공동창업자)",
    period: "2020.10 ~ 2021.04",
    highlight: "인지과학 멀티모달 기술 공동창업. 시각/촉각/청각 멀티모달리티 적용 심박수 하락 알고리즘 개념화, PSS 유효성 시험 50인 측정, 메디컬 해커톤 다수 수상",
    tags: ["스타트업", "CSO", "R&D", "기술사업화"],
  },
  {
    company: "무진어소시에이츠",
    role: "앱사업부 전략기획 팀장",
    period: "2018.07 ~ 2020.10",
    highlight: "명상 웰니스 앱 '하루명상' PO → 사업기획 PM 확장. 대기업 AI스피커/IPTV 써드파티 콘텐츠 납품, 분당서울대병원 협력 리드, EEG 3자 협력 구축",
    tags: ["PO", "전략기획", "헬스케어", "B2B"],
  },
];

export const PRODUCTS = [
  {
    name: "DHC_PMO",
    subtitle: "Thread-centric Project Management",
    description: "다수의 업무 흐름(Thread)을 타임라인 기반으로 시각화하고, 담당자 배정·마감일·진행 상태를 실시간 추적하는 경량 PMO 도구",
    tech: ["Vanilla JS (SPA)", "Tailwind CSS", "Supabase", "Vercel"],
    status: "실전 투입 중",
    period: "2026.02",
    keyFeature: "3주 MVP, 50커밋 83% AI 협업",
  },
  {
    name: "DHC_SLP",
    subtitle: "거래처 영업 관리 시스템",
    description: "복수 협력사가 공동 활용하는 B2B 거래처(병원/약국) 영업 관리 및 방문 동선 계획 웹 플랫폼",
    tech: ["React 19", "Supabase RLS", "Vercel Serverless"],
    status: "MVP 개발 중",
    period: "2025.12 ~",
    keyFeature: "10개 테이블 ERD, N:M 관계 설계",
  },
  {
    name: "Blankie",
    subtitle: "수면 웰니스 앱",
    description: "CBT-i 기반의 비강박적 수면 루틴 앱. 실시간 연결감과 AI 개인화 피드백으로 불면증 사용자의 수면 품질 개선",
    tech: ["Flutter", "TensorFlow Lite", "GPT-4o mini"],
    status: "Phase 1 개발 중",
    period: "2026.01 ~",
    keyFeature: "코골이 감지 94~96% 정확도, BEP 구독자 8명",
  },
  {
    name: "KKAM_SNS",
    subtitle: "트렌드 & 콘텐츠 자동화",
    description: "네이버/유튜브/구글/PubMed 멀티소스 트렌드 수집 및 커뮤니티 분석 자동화 시스템",
    tech: ["Next.js 16", "TypeScript", "5개 외부 API"],
    status: "MVP 1.0 완료",
    period: "2026.01 ~",
    keyFeature: "YouTube 3단 API 파이프라인, 워드클라우드",
  },
  {
    name: "KKAM_HOUSE",
    subtitle: "까망집 — 부동산 투자 관리",
    description: "성남·강남·송파권 아파트 매수 및 청약 의사결정 지원. 실거래가 대시보드, 가중치 스코어링, 청약 Gantt 타임라인",
    tech: ["React 19", "TypeScript", "Recharts", "Supabase"],
    status: "배포 진행 중",
    period: "2026.02 ~",
    keyFeature: "9개 지역 실거래가, 5가지 가중치 스코어링",
  },
  {
    name: "KKAM_GC",
    subtitle: "Doner — 지금 이 사이트",
    description: "민승기의 경력·프로젝트를 학습한 AI 에이전트가 채용 담당자와 자연어로 대화하는 인터랙티브 포트폴리오",
    tech: ["Next.js 15", "Claude API", "Vercel"],
    status: "운영 중 (v4)",
    period: "2025.11 ~",
    keyFeature: "AI가 나를 소개하는 포트폴리오",
  },
];

export const CORE_SKILLS = [
  { label: "디지털 헬스케어", detail: "8년 도메인 전문성", icon: "heart" },
  { label: "신사업 전략 / PM", detail: "A-Z 런칭 다수", icon: "rocket" },
  { label: "AI 실전 활용", detail: "라벨링→모델→프로덕트", icon: "cpu" },
  { label: "규제 대응", detail: "FDA, 식약처, GCP", icon: "shield" },
  { label: "데이터 기반 의사결정", detail: "Power BI, 재무 모델링", icon: "chart" },
  { label: "IT 프로젝트 관리", detail: "Notion, Redmine", icon: "layout" },
  { label: "글로벌 커뮤니케이션", detail: "영어, 체코어 기초", icon: "globe" },
  { label: "PMI / M&A", detail: "피인수 기업 기술 통합", icon: "merge" },
];

export const SUGGESTED_QUESTIONS = [
  "Doner, 너는 뭐야? 자기소개 해봐",
  "민승기는 어떤 사람이야?",
  "디지털 헬스케어 경험을 알려줘",
  "AI를 어떻게 활용하고 있어?",
  "한독에서 어떤 성과를 냈어?",
  "직접 만든 프로덕트가 있어?",
];

export const EDUCATION = [
  {
    school: "Charles University",
    detail: "2nd Faculty of Medicine 의학과",
    location: "체코 프라하",
  },
  {
    school: "가천의과학대학교",
    detail: "생명과학과 졸업",
    location: "의전원 진학 트랙",
  },
  {
    school: "인하사대부속고등학교",
    detail: "졸업",
    location: "",
  },
];
