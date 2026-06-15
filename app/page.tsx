import React from "react";
import {
  Mail,
  ExternalLink,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  UserRound,
  ArrowUpRight,
  Database,
  Server,
  Monitor,
  Wrench,
  CheckCircle2,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

// =============================================================================
// 데이터 정의
// =============================================================================

// 프로필 정보
const profile = {
  name: "박주원",
  role: "Backend & Web Developer",
  email: "ehdrbs8751@naver.com",
  github: "https://github.com/Kyunsss",
  portfolio: "https://stupendous-market-b2f.notion.site/940a243405714ded91d28d495d54721e",
};

// 빠른 프로필 요약
const quickProfile = [
  { label: "지원 직무", value: "Backend Developer / Web Developer" },
  { label: "주요 기술", value: "Java, Spring, JSP, Servlet, MyBatis, SQL" },
  { label: "실무 경험", value: "대학정보시스템 개발 및 사업관리" },
  { label: "강점", value: "요구사항 이해, 기능 구현, 문제 해결, 커뮤니케이션" },
];

// 프로젝트 데이터
const projects = [
  {
    title: "FootMap",
    type: "Team Project",
    period: "YYYY.MM ~ YYYY.MM",
    role: "Frontend / Backend 담당 역할 입력",
    description:
      "지역 기반 풋살 매칭을 도와주는 웹 서비스입니다. 사용자가 풋살팀 정보를 확인하고, 조건에 맞는 팀 또는 매칭 정보를 쉽게 탐색할 수 있도록 구성했습니다.",
    stack: ["Java", "Spring", "JSP", "Oracle", "MyBatis", "JavaScript", "HTML", "CSS"],
    features: [
      "풋살팀 정보 조회",
      "지역 및 조건 기반 매칭 탐색",
      "매칭 정보 확인",
      "사용자 중심 화면 구성",
      "팀 프로젝트 발표 자료 구성",
    ],
    contributions: [
      "메인 화면 및 주요 UI 구성",
      "풋살팀 목록 화면 구현",
      "사용자 조건에 따른 데이터 출력 구조 정리",
      "화면 흐름과 사용자 동선 설계",
      "프로젝트 기능 설명 및 발표 자료 정리",
    ],
    problem:
      "풋살 매칭 정보가 한눈에 보이지 않으면 사용자가 원하는 팀이나 매칭 조건을 찾기 어렵다고 판단했습니다. 주요 정보를 카드 형태로 정리하고, 목록과 상세 영역을 구분해 사용자가 빠르게 정보를 탐색할 수 있도록 구성했습니다.",
    github: "#",
    deploy: "#",
  },
  {
    title: "Visit Busan",
    type: "Team Project",
    period: "YYYY.MM ~ YYYY.MM",
    role: "Frontend / Backend 담당 역할 입력",
    description:
      "부산 여행자를 위한 관광 정보 제공 웹 서비스입니다. 사용자가 부산의 관광지와 여행 정보를 쉽게 확인할 수 있도록 메인 화면, 관광 정보 화면, 사용자 흐름을 구성했습니다.",
    stack: ["Java", "Spring", "JSP", "Oracle", "MyBatis", "JavaScript", "HTML", "CSS"],
    features: [
      "메인 페이지 구성",
      "관광 정보 조회",
      "로그인 및 회원가입 화면",
      "여행 정보 제공 화면",
      "사용자 화면 UI 구성",
    ],
    contributions: [
      "메인 페이지 UI 구현",
      "로그인 및 회원가입 화면 구성",
      "관광 정보 화면 구조 설계",
      "사용자 흐름에 맞춘 페이지 이동 구성",
      "프로젝트 발표용 화면 자료 정리",
    ],
    problem:
      "관광 정보가 많아질수록 사용자가 필요한 정보를 찾기 어려울 수 있어, 첫 화면에서 핵심 기능을 명확히 보여주고 관광 정보 접근 흐름을 단순화했습니다. 사용자가 주요 정보를 빠르게 확인할 수 있도록 화면 구성을 정리했습니다.",
    github: "#",
    deploy: "#",
  },
  {
    title: "이슈 관리 REST API",
    type: "Backend Project",
    period: "2025.07",
    role: "Backend Developer",
    description:
      "Go와 Gin 프레임워크를 활용해 이슈 생성, 조회, 수정, 상태 변경 기능을 구현한 RESTful API 프로젝트입니다. 담당자 지정 여부에 따른 상태 처리와 에러 응답 구조를 설계했습니다.",
    stack: ["Go", "Gin", "REST API", "JSON", "Memory Store"],
    features: [
      "이슈 생성 API",
      "이슈 목록 및 상세 조회 API",
      "상태값 기반 이슈 필터링",
      "이슈 수정 및 담당자 변경",
      "JSON 기반 에러 응답 처리",
    ],
    contributions: [
      "Go 구조체 기반 User, Issue 모델 설계",
      "Gin Router를 활용한 REST API 엔드포인트 구성",
      "PENDING, IN_PROGRESS, COMPLETED, CANCELLED 상태 흐름 설계",
      "잘못된 요청에 대한 공통 에러 응답 형식 정리",
      "컨트롤러, 라우터, 모델, 데이터 계층을 분리하여 프로젝트 구조화",
    ],
    problem:
      "단순 CRUD에 그치지 않고 담당자 지정 여부와 이슈 상태에 따라 처리 흐름이 달라지도록 구현했습니다. 완료 또는 취소된 이슈는 수정이 불가능하도록 제한해 실제 업무 관리 API에 가까운 비즈니스 규칙을 반영했습니다.",
    github: "https://github.com/Zwonnyy/Issue_api",
    deploy: "#",
  },
  {
    title: "Django Review 서비스",
    type: "Web Backend Project",
    period: "2025.08",
    role: "Backend / Full-stack Developer",
    description:
      "Django 기반으로 사용자, 음식점, 리뷰 도메인을 분리해 구성한 리뷰 서비스 프로젝트입니다. Django의 앱 구조를 활용해 기능별 책임을 나누고, 리뷰 데이터를 관리하는 웹 서비스 구조를 학습했습니다.",
    stack: ["Python", "Django", "SQLite", "HTML", "CSS"],
    features: [
      "사용자 앱 구조 구성",
      "음식점 정보 관리 구조 구성",
      "리뷰 작성 및 관리 구조 구성",
      "Django 프로젝트 설정 및 앱 분리",
    ],
    contributions: [
      "config, users, restaurants, reviews 앱 구조 분리",
      "Django 프로젝트 기본 설정 및 실행 구조 구성",
      "리뷰 서비스에 필요한 도메인 단위 폴더 구조 설계",
      "Django MTV 패턴을 기반으로 서비스 구조 정리",
    ],
    problem:
      "초기에는 기능을 한곳에 모아 관리하기 쉬웠지만, 기능이 늘어날수록 유지보수가 어려워질 수 있다고 판단했습니다. 사용자, 음식점, 리뷰 기능을 앱 단위로 분리해 각 기능의 책임을 명확히 나누는 방향으로 구조를 잡았습니다.",
    github: "https://github.com/Zwonnyy/Django-Review",
    deploy: "#",
  },
  {
    title: "React 미니 게임 모음 TodoApp",
    type: "Frontend Project",
    period: "2025.09",
    role: "Frontend Developer",
    description:
      "Create React App 기반으로 다양한 React 실습 예제를 구현한 프론트엔드 프로젝트입니다. 구구단, 끝말잇기, 숫자야구, 반응속도 체크, 가위바위보, 로또, 틱택토, 지뢰찾기 등 컴포넌트 단위 화면 구현을 연습했습니다.",
    stack: ["React", "JavaScript", "HTML", "CSS", "CRA"],
    features: [
      "React 기반 화면 구성",
      "미니 게임별 컴포넌트 분리",
      "사용자 입력값 처리",
      "상태 변화에 따른 화면 렌더링",
      "CRA 기반 개발 및 빌드 환경 구성",
    ],
    contributions: [
      "React 프로젝트 구조 구성",
      "미니 게임별 폴더 및 컴포넌트 관리",
      "이벤트 처리와 상태 변경 로직 구현",
      "반복 렌더링과 조건부 렌더링 패턴 학습",
      "프론트엔드 개발 환경 실행 및 빌드 흐름 정리",
    ],
    problem:
      "여러 실습 예제를 하나의 프로젝트에서 관리하면서 각 기능의 상태와 화면 흐름이 섞이지 않도록 폴더를 나누고, 게임별로 독립적인 컴포넌트 구조를 유지하는 방식으로 정리했습니다.",
    github: "https://github.com/Zwonnyy/TodoApp",
    deploy: "#",
  },
];

// 기술 스택
const mainSkills = ["Java", "Spring / Spring Boot", "JSP / Servlet", "MyBatis", "Oracle / MySQL", "SQL"];
const subSkills = ["Python", "Django", "Flask", "FastAPI", "JavaScript", "HTML / CSS", "jQuery"];
const tools = ["Git / GitHub", "IntelliJ", "Eclipse", "VS Code", "PyCharm", "Toad", "Nexacro"];

// 기술 상세 설명
const skillDetails = [
  {
    title: "Java / Spring",
    icon: Server,
    items: [
      "Spring MVC 기반 웹 서비스 구조를 이해하고 있습니다.",
      "JSP, Servlet, MyBatis를 활용한 화면 및 데이터 연동 경험이 있습니다.",
      "실제 업무에서 대학정보시스템 개발 및 유지보수 흐름을 경험했습니다.",
    ],
  },
  {
    title: "Frontend",
    icon: Monitor,
    items: [
      "HTML, CSS, JavaScript, jQuery를 활용하여 웹 화면을 구현할 수 있습니다.",
      "사용자 화면 흐름과 기본적인 UI 구성을 고려하여 개발합니다.",
      "Nexacro 기반 화면 개발 경험이 있습니다.",
    ],
  },
  {
    title: "Database",
    icon: Database,
    items: [
      "Oracle, MySQL 기반 데이터 조회 및 기본적인 SQL 작성 경험이 있습니다.",
      "화면에서 필요한 데이터를 조회하고 출력하는 흐름을 이해하고 있습니다.",
      "MyBatis를 활용한 데이터 연동 경험이 있습니다.",
    ],
  },
];

// 교육 정보
const education = [
  {
    name: "Oz Coding School",
    course: "덱스터러스 초격차 교육 - 백엔드 과정",
    period: "2025.05 ~ 2025.11",
    details: [
      "K-Digital Training 과정 수료",
      "Java / Spring 기반 백엔드 개발 학습",
      "데이터베이스 및 SQL 활용",
      "REST API 및 서버 구조 학습",
    ],
  },
  {
    name: "국비지원교육",
    course: "머신러닝 SW 개발자 과정",
    period: "2022.07 ~ 2023.02",
    details: ["Python 프로그래밍 학습", "데이터 분석 및 시각화", "머신러닝 기초 학습", "팀 프로젝트 수행"],
  },
  {
    name: "대학교명 입력",
    course: "전공명 입력",
    period: "2013.03 ~ 2019.02",
    details: ["전공 및 학위 정보 입력"],
  },
];

// =============================================================================
// 컴포넌트 정의
// =============================================================================

// 섹션 타이틀 컴포넌트
function SectionTitle({ icon: Icon, eyebrow, title, description }) {
  return (
    <div className="mb-8">
      <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-blue-500">
        <Icon className="h-4 w-4" />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{title}</h2>
      {description && <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">{description}</p>}
    </div>
  );
}

// 기술 태그 컴포넌트
function Pill({ children }) {
  return (
    <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700 shadow-sm">
      {children}
    </span>
  );
}

// =============================================================================
// 메인 컴포넌트
// =============================================================================

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* 네비게이션 바 */}
      <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="text-sm font-bold tracking-tight text-slate-950">
            {profile.name}
          </a>
          <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#career" className="hover:text-blue-600">Career</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#skills" className="hover:text-blue-600">Skills</a>
            <a href="#education" className="hover:text-blue-600">Education</a>
          </div>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-600"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* 히어로 섹션 */}
      <section id="top" className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.12),transparent_34%),radial-gradient(circle_at_top_left,rgba(14,165,233,0.10),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[1.2fr_0.8fr] md:py-28">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              Backend & Web Developer Portfolio
            </p>
            <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight text-slate-950 md:text-7xl">
              {profile.name}
              <span className="block text-blue-600">{profile.role}</span>
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-700 md:text-xl">
              웹 서비스 개발과 백엔드 구현을 중심으로 성장하고 있는 개발자입니다. 대학정보시스템 개발 및 사업관리 경험을 통해 실제 사용자의 요구사항을 기능으로 구현하는 과정을 경험했습니다.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
              Java, Spring, JSP, SQL 기반의 웹 개발 경험을 바탕으로 안정적인 서비스 구조와 사용자 흐름을 고민합니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-blue-200 hover:text-blue-700"
              >
                <FaGithub className="h-4 w-4" /> GitHub
              </a>
            </div>
          </div>

          {/* 빠른 프로필 카드 */}
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-950 text-3xl">👨🏻‍💻</div>
              <div>
                <p className="text-lg font-bold text-slate-950">Quick Profile</p>
                <p className="text-sm text-slate-500">채용 담당자가 빠르게 볼 수 있는 요약</p>
              </div>
            </div>
            <div className="space-y-4">
              {quickProfile.map((item) => (
                <div key={item.label} className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-blue-600">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 자기소개 섹션 */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <SectionTitle icon={UserRound} eyebrow="About" title="사용자의 요구사항을 기능으로 구현하는 개발자" />
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:col-span-2">
            <p className="text-base leading-8 text-slate-700">
              저는 사용자의 요구사항을 이해하고, 이를 실제 기능으로 구현하는 과정에 흥미를 느낍니다. 개발 업무를 수행하면서 단순히 화면을 만드는 것보다, 사용자가 어떤 흐름으로 서비스를 이용하는지, 어떤 부분에서 불편함을 느끼는지를 함께 고민하는 것이 중요하다고 느꼈습니다.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-700">
              현재는 Java와 Spring 기반 백엔드 개발 역량을 중심으로, 웹 서비스 구조와 데이터베이스 연동, API 설계 역량을 꾸준히 확장하고 있습니다.
            </p>
          </div>
          <div className="rounded-[2rem] border border-blue-100 bg-blue-50 p-6">
            <p className="text-lg font-bold text-slate-950">Core Strength</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
              <li className="flex gap-2"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-blue-600" /> 요구사항 이해와 기능 단위 정리</li>
              <li className="flex gap-2"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-blue-600" /> 개발 및 사업관리 경험 기반 커뮤니케이션</li>
              <li className="flex gap-2"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-blue-600" /> 문제 원인 분석과 해결 중심의 태도</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 경력 섹션 */}
      <section id="career" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <SectionTitle icon={BriefcaseBusiness} eyebrow="Career" title="실무 경험" description="대학정보시스템 개발 및 사업관리 업무를 통해 실제 운영 시스템의 개발 흐름을 경험했습니다." />
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 shadow-sm">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
              <div>
                <h3 className="text-2xl font-bold text-slate-950">(주)위지언</h3>
                <p className="mt-2 text-lg font-semibold text-blue-600">차세대 대학정보시스템 개발</p>
                <p className="mt-1 text-sm text-slate-500">2023.07 ~ 2024.12</p>
              </div>
              <div className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">개발팀 소속</div>
            </div>
            <p className="mt-6 max-w-4xl text-base leading-8 text-slate-700">
              개발팀 소속으로 대학정보시스템 개발 및 사업관리 업무를 수행했습니다. 주로 프론트엔드 개발 업무를 담당했으며, 사용자 요구사항을 확인하고 기능 개선 방향을 정리하는 업무도 함께 진행했습니다.
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl bg-white p-5">
                <p className="font-bold text-slate-950">주요 업무</p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                  <li>대학정보시스템 화면 개발 및 유지보수</li>
                  <li>사용자 요구사항 확인 및 기능 개선 정리</li>
                  <li>일정 관리 지원 및 문서 정리</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5">
                <p className="font-bold text-slate-950">기술 환경</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Java", "JSP", "Servlet", "Spring", "MyBatis", "Oracle", "Nexacro", "Git"].map((skill) => (
                    <Pill key={skill}>{skill}</Pill>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl bg-white p-5">
                <p className="font-bold text-slate-950">배운 점</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  요구사항을 기능 단위로 정리하고 개발 방향으로 연결하는 경험을 쌓았으며, 개발 업무와 사업관리 업무를 함께 수행하며 커뮤니케이션의 중요성을 배웠습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 프로젝트 섹션 */}
      <section id="projects" className="mx-auto max-w-6xl px-5 py-16">
        <SectionTitle icon={Code2} eyebrow="Projects" title="프로젝트" description="각 프로젝트는 구현 기능, 담당 역할, 문제 해결 경험을 기준으로 정리했습니다." />
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <article key={project.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/80">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                <div>
                  <div className="mb-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">0{index + 1}</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{project.type}</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{project.period}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-950">{project.title}</h3>
                  <p className="mt-3 max-w-4xl text-base leading-7 text-slate-600">{project.description}</p>
                </div>
                <div className="flex gap-2">
                  <a href={project.github} className="rounded-full border border-slate-200 p-3 text-slate-600 transition hover:border-blue-200 hover:text-blue-600" aria-label="GitHub">
                    <FaGithub className="h-4 w-4" />
                  </a>
                  <a href={project.deploy} className="rounded-full border border-slate-200 p-3 text-slate-600 transition hover:border-blue-200 hover:text-blue-600" aria-label="Deploy">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((skill) => (
                  <Pill key={skill}>{skill}</Pill>
                ))}
              </div>

              <div className="mt-7 grid gap-5 md:grid-cols-3">
                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="font-bold text-slate-950">주요 기능</p>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                    {project.features.map((item) => <li key={item}>• {item}</li>)}
                  </ul>
                </div>
                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="font-bold text-slate-950">내가 구현한 부분</p>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                    {project.contributions.map((item) => <li key={item}>• {item}</li>)}
                  </ul>
                </div>
                <div className="rounded-2xl bg-blue-50 p-5">
                  <p className="font-bold text-slate-950">문제 해결 경험</p>
                  <p className="mt-3 text-sm leading-6 text-slate-700">{project.problem}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 기술 스택 섹션 */}
      <section id="skills" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <SectionTitle icon={Wrench} eyebrow="Skills" title="기술 스택" description="기술명 나열보다 실제 사용 경험과 연결되도록 정리했습니다." />
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-bold text-slate-950">Main</h3>
              <div className="mt-4 flex flex-wrap gap-2">{mainSkills.map((skill) => <Pill key={skill}>{skill}</Pill>)}</div>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-bold text-slate-950">Sub</h3>
              <div className="mt-4 flex flex-wrap gap-2">{subSkills.map((skill) => <Pill key={skill}>{skill}</Pill>)}</div>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-bold text-slate-950">Tools</h3>
              <div className="mt-4 flex flex-wrap gap-2">{tools.map((skill) => <Pill key={skill}>{skill}</Pill>)}</div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {skillDetails.map((detail) => {
              const Icon = detail.icon;
              return (
                <div key={detail.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <Icon className="h-7 w-7 text-blue-600" />
                  <h3 className="mt-4 text-xl font-bold text-slate-950">{detail.title}</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                    {detail.items.map((item) => <li key={item}>• {item}</li>)}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 교육 섹션 */}
      <section id="education" className="mx-auto max-w-6xl px-5 py-16">
        <SectionTitle icon={GraduationCap} eyebrow="Education" title="교육 및 학습" />
        <div className="grid gap-5">
          {education.map((item) => (
            <div key={item.name} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start">
                <div>
                  <h3 className="text-xl font-bold text-slate-950">{item.name}</h3>
                  <p className="mt-2 font-semibold text-blue-600">{item.course}</p>
                </div>
                <p className="text-sm font-medium text-slate-500">{item.period}</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.details.map((detail) => <Pill key={detail}>{detail}</Pill>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-slate-950 px-5 py-14 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="text-3xl font-bold">함께 성장하며 실질적인 문제를 해결하는 개발자가 되고 싶습니다.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950">
              <Mail className="h-4 w-4" /> {profile.email}
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              <FaGithub className="h-4 w-4" /> GitHub <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
