export type PortfolioData = {
  profile: {
    name: string;
    role: string;
    email: string;
    github: string;
    portfolio: string;
    summary: string;
    focus: string;
  };
  quickProfile: Array<{ label: string; value: string }>;
  about: { title: string; paragraphs: string[]; strengths: string[] };
  career: Array<{
    company: string;
    role: string;
    period: string;
    team: string;
    description: string;
    tasks: string[];
    stack: string[];
    learning: string;
  }>;
  projects: Array<{
    title: string;
    type: string;
    period: string;
    role: string;
    description: string;
    stack: string[];
    features: string[];
    contributions: string[];
    problem: string;
    github?: string;
    deploy?: string;
  }>;
  skills: {
    main: string[];
    sub: string[];
    tools: string[];
    details: Array<{ title: string; items: string[] }>;
  };
  education: Array<{ name: string; course: string; period: string; details: string[] }>;
};

export const portfolioData: PortfolioData = {
  profile: {
    name: "박주원",
    role: "Backend & Web Developer",
    email: "ehdrbs8751@naver.com",
    github: "https://github.com/Zwonnyy",
    portfolio: "https://stupendous-market-b2f.notion.site/940a243405714ded91d28d495d54721e",
    summary:
      "웹 서비스 개발과 백엔드 구현을 중심으로 성장하고 있는 개발자입니다. 대학정보시스템 개발 및 사업관리 경험을 통해 실제 사용자의 요구사항을 기능으로 구현하는 과정을 경험했습니다.",
    focus:
      "Java, Spring, JSP, SQL 기반의 웹 개발 경험을 바탕으로 안정적인 서비스 구조와 사용자 흐름을 고민합니다.",
  },
  quickProfile: [
    { label: "지원 직무", value: "Backend Developer / Web Developer" },
    { label: "주요 기술", value: "Java, Spring, JSP, Servlet, MyBatis, SQL" },
    { label: "실무 경험", value: "대학정보시스템 개발 및 AI 헬스케어 과정 조교" },
    { label: "강점", value: "요구사항 이해, 기능 구현, 문제 해결, 커뮤니케이션" },
  ],
  about: {
    title: "사용자의 요구사항을 기능으로 구현하는 개발자",
    paragraphs: [
      "저는 사용자의 요구사항을 이해하고, 이를 실제 기능으로 구현하는 과정에 흥미를 느낍니다. 개발 업무를 수행하면서 단순히 화면을 만드는 것보다, 사용자가 어떤 흐름으로 서비스를 이용하는지, 어떤 부분에서 불편함을 느끼는지를 함께 고민하는 것이 중요하다고 느꼈습니다.",
      "현재는 Java와 Spring 기반 백엔드 개발 역량을 중심으로, 웹 서비스 구조와 데이터베이스 연동, API 설계 역량을 꾸준히 확장하고 있습니다.",
    ],
    strengths: [
      "요구사항 이해와 기능 단위 정리",
      "개발 및 사업관리 경험 기반 커뮤니케이션",
      "문제 원인 분석과 해결 중심의 태도",
    ],
  },
  career: [
    {
      company: "(주)위지언",
      role: "차세대 대학정보시스템 개발",
      period: "2023.07 ~ 2024.12",
      team: "개발팀 소속",
      description:
        "개발팀 소속으로 대학정보시스템 개발 및 사업관리 업무를 수행했습니다. 주로 프론트엔드 개발 업무를 담당했으며, 사용자 요구사항을 확인하고 기능 개선 방향을 정리하는 업무도 함께 진행했습니다.",
      tasks: [
        "대학정보시스템 개발 및 유지보수",
        "사용자 요구사항 확인 및 기능 개선 정리",
        "일정 관리 지원 및 문서 정리",
      ],
      stack: ["Java", "JSP", "Servlet", "Spring", "MyBatis", "Oracle", "Nexacro", "Git", "intellij", "Jenkins"],
      learning:
        "요구사항을 기능 단위로 정리하고 개발 방향으로 연결하는 경험을 쌓았으며, 개발 업무와 사업관리 업무를 함께 수행하며 커뮤니케이션의 중요성을 배웠습니다.",
    },
    {
      company: "Oz Coding School",
      role: "AI 헬스케어 과정 조교",
      period: "2025.12 ~ 2026.06",
      team: "교육 운영 및 실습 지원",
      description:
        "AI 헬스케어 과정에서 교육생의 실습과 프로젝트 진행을 지원했습니다. 백엔드, 프론트엔드, AI 활용 흐름을 함께 점검하며 학습자가 문제를 구체화하고 구현 방향을 잡을 수 있도록 도왔습니다.",
      tasks: [
        "교육생 실습 질의응답 및 오류 해결 지원",
        "AI 헬스케어 프로젝트 구현 방향 정리 보조",
        "FastAPI와 Docker, AWS를 통한 배포 기반 실습 흐름 점검",
        "프로젝트 진행 상황 확인 및 피드백 지원",
      ],
      stack: ["Python", "FastAPI", "React", "claude AI", "Git", "AWS", "Docker"],
      learning:
        "기술 내용을 다른 사람에게 설명하면서 문제를 구조화하는 역량을 키웠고, 교육생의 이해도에 맞춰 구현 방향을 제시하는 커뮤니케이션 경험을 쌓았습니다.",
    },
  ],
  projects: [
    {
      title: "Bisit Busan",
      type: "Team Project",
      period: "2022.12 ~ 2023.02",
      role: "Frontend / Backend",
      description:
        "부산 여행자를 위한 관광 정보 서비스입니다. 인기 명소와 축제 정보를 카드형 UI로 제공하고, 추천 코스와 지도, 여행자 게시판을 통해 여행 계획과 후기 공유 흐름을 구성했습니다.",
      stack: ["Java", "Spring Boot", "Thymeleaf", "JPA", "JavaScript", "Leaflet", "HTML", "CSS"],
      features: [
        "인기 여행지 TOP 6 및 명소 상세 이동",
        "부산 축제 정보 목록과 월별 축제 카드",
        "8개 코스 중 3개를 랜덤 추천하는 여행 코스 화면",
        "Leaflet 기반 추천 경로 지도와 코스별 마커 표시",
        "여행자 게시판과 최신 게시글 노출",
      ],
      contributions: [
        "메인 화면의 히어로, TOP6 명소, 축제, 빠른 이동 영역 구성",
        "명소와 축제를 구분한 목록 화면 및 카드형 UI 구현",
        "추천 코스 페이지에서 코스 목록과 지도 패널을 함께 확인하는 화면 구성",
        "여행 후기와 질문을 확인할 수 있는 게시판 진입 흐름 정리",
        "관광지명, 지역, 요약 설명이 한눈에 보이도록 정보 구조 정리",
      ],
      problem:
        "관광 정보가 명소, 축제, 코스, 게시글로 나뉘어 있어 사용자가 첫 화면에서 원하는 목적지를 찾기 어려울 수 있었습니다. 메인에서는 핵심 섹션을 우선순위대로 배치하고, 추천 코스 화면에서는 목록과 지도를 함께 제공해 여행 동선을 바로 이해할 수 있도록 구성했습니다.",
      deploy: "http://localhost:8081",
    },
    {
      title: "FootMap",
      type: "Team Project",
      period: "2022.09 ~ 2022.11",
      role: "Frontend / Backend",
      description:
        "풋살 팀, 선수, 게임 정보를 한 곳에서 확인하고 매칭을 시작할 수 있는 풋살 매칭 플랫폼입니다. 팀 검색과 가입, 선수 랭킹, 게임 매칭, 커뮤니티 흐름을 중심으로 구성했습니다.",
      stack: ["Java", "Spring", "JSP", "MyBatis", "JavaScript", "HTML", "CSS", "Bootstrap"],
      features: [
        "게임 매칭, 팀, 선수, 커뮤니티 메뉴 구성",
        "Top3 선수 랭킹과 Top3 팀 정보 메인 노출",
        "팀명, 홈 구장, 전적, 소개를 확인하는 팀 검색 화면",
        "팀 만들기, 내 팀 보기, 팀 가입 요청 흐름",
        "로그인, 회원가입, 자동 로그인 UI 구성",
      ],
      contributions: [
        "FootMap 메인 화면과 주요 메뉴 네비게이션 구성",
        "선수 랭킹과 팀 랭킹을 테이블로 노출하는 대시보드 영역 구현",
        "팀 검색 결과 테이블과 가입 버튼 UI 구성",
        "팀 상세, 팀 생성, 내 팀 보기로 이어지는 사용자 동선 정리",
        "로그인과 회원가입 화면을 서비스 스타일에 맞춰 구성",
      ],
      problem:
        "풋살 매칭 서비스는 팀, 선수, 게임, 커뮤니티 정보가 분산되기 쉬워 사용자가 어디서 시작해야 할지 모호할 수 있었습니다. 메인에서 선수와 팀 랭킹을 먼저 보여주고, 팀 검색 화면에서는 가입에 필요한 핵심 정보만 표로 정리해 탐색과 액션을 빠르게 이어가도록 했습니다.",
      github: "https://github.com/Zwonnyy/footmap",
      deploy: "http://localhost:8080",
    },
    {
      title: "MediGuide AI",
      type: "AI Healthcare Project",
      period: "2025",
      role: "Full-stack / Backend Developer",
      description:
        "의사와 환자를 위한 AI 기반 건강관리 플랫폼입니다. 진료기록과 처방전을 기반으로 AI 복약 가이드, 건강 인사이트, 진료 전 문진 요약, 의사용 환자 위험도 큐를 제공하도록 설계했습니다.",
      stack: ["FastAPI", "Next.js", "MySQL", "Redis", "Celery", "Qdrant", "Gemini API", "JWT", "Docker"],
      features: [
        "진료기록·처방전 기반 AI 복약 및 생활 가이드 생성",
        "RAG 기반 증상 체크와 약물 상호작용 분석",
        "바이탈 기록 AI 이상 감지와 건강 리스크 알림",
        "진료 전 AI 문진 요약 및 SOAP 메모 초안 생성",
        "의사용 환자 타임라인과 위험도 큐 제공",
      ],
      contributions: [
        "FastAPI 라우터, 서비스, 모델 계층을 분리한 백엔드 구조 설계",
        "Tortoise ORM 기반 사용자, 진료기록, 처방, 바이탈, 알림 도메인 모델링",
        "Celery와 Redis를 활용한 AI 가이드 생성 및 복약 알림 비동기 처리",
        "Gemini API와 Qdrant를 활용한 RAG 기반 건강 분석 흐름 구성",
        "JWT 인증과 의사/환자 역할 기반 권한 흐름 정리",
      ],
      problem:
        "진료 후 환자가 복약법과 생활관리 지침을 꾸준히 실천하지 못하고, 의사는 환자 상태 변화를 여러 화면에서 확인해야 하는 문제가 있었습니다. 진료기록, 복약, 바이탈, 건강일지, 문진 데이터를 하나의 흐름으로 연결하고 AI 분석 결과를 환자 가이드와 의사용 위험도 큐로 나눠 제공하도록 구성했습니다.",
      github: "https://github.com/Zwonnyy/HealthCare_1.git",
    },
    {
      title: "LifeCare Challenge",
      type: "Healthcare Routine Project",
      period: "2025",
      role: "Full-stack / Backend Developer",
      description:
        "만성질환 관리가 필요한 사용자가 혈압, 혈당, 체중, 식사, 걷기, 복약 루틴을 챌린지로 관리하는 웹 서비스입니다. 개인화 추천, 루틴 체크, 보호자 공유를 통해 일상 관리가 지속되도록 구성했습니다.",
      stack: ["FastAPI", "Next.js", "MySQL", "Redis", "Celery", "Qdrant", "Gemini API", "recharts", "Docker"],
      features: [
        "고혈압, 당뇨, 대사증후군 생활습관 챌린지 템플릿 제공",
        "최근 바이탈과 체크인 패턴 기반 개인화 챌린지 추천",
        "챌린지 스트릭, 출석률, 배지를 통한 실천 흐름 관리",
        "혈압, 혈당, 체중 추이 그래프와 오늘의 루틴 체크",
        "공유 코드를 활용한 가족·보호자 진행 현황 확인",
      ],
      contributions: [
        "챌린지, 바이탈, 건강 목표, 알림 기능을 하나의 생활 루틴으로 연결",
        "FastAPI 백엔드와 Next.js 프론트엔드 기반 화면 및 API 흐름 구성",
        "혈압·혈당·체중 기록을 차트와 목표 관리 화면으로 연동",
        "챌린지 리마인더와 알림 흐름을 통해 반복 실천을 지원",
        "보호자 공유 기능으로 사용자 관리 현황을 함께 확인하는 구조 설계",
      ],
      problem:
        "만성질환 관리는 한 번의 진료보다 매일 반복되는 생활습관 관리가 중요하지만, 사용자가 기록과 실천을 지속하기 어렵다는 문제가 있었습니다. 질환별 챌린지와 오늘의 루틴, 리마인더, 목표 관리를 연결해 사용자가 다음 행동을 바로 선택할 수 있도록 설계했습니다.",
      github: "https://github.com/Zwonnyy/HealthCare_2.git",
    },
  ],
  skills: {
    main: ["Java", "Spring / Spring Boot", "Python", "FastAPI", "Next.js", "MySQL", "Redis", "SQL"],
    sub: ["JSP / Servlet", "MyBatis", "Django", "Flask", "JavaScript", "HTML / CSS", "jQuery", "Go"],
    tools: ["Git / GitHub", "Docker", "GitHub Actions", "Vercel", "IntelliJ", "VS Code", "PyCharm", "Nexacro"],
    details: [
      {
        title: "Backend",
        items: [
          "Java/Spring 기반 웹 서비스와 Python/FastAPI 기반 API 서버 구현 경험이 있습니다.",
          "라우터, 서비스, 모델 계층을 나누고 데이터베이스 연동 흐름을 설계합니다.",
          "MySQL, Redis, JWT 인증, 비동기 작업 구조를 프로젝트에 적용했습니다.",
        ],
      },
      {
        title: "Frontend",
        items: [
          "Next.js, React, HTML, CSS, JavaScript를 활용하여 사용자 화면을 구현할 수 있습니다.",
          "사용자 화면 흐름과 정보 우선순위를 고려해 대시보드와 목록 화면을 구성합니다.",
          "Nexacro 기반 화면 개발 경험이 있으며, 실무 화면 유지보수 흐름을 경험했습니다.",
        ],
      },
      {
        title: "AI / Data",
        items: [
          "Gemini API와 Qdrant를 활용한 RAG 기반 분석 흐름을 프로젝트에 적용했습니다.",
          "건강 기록, 바이탈, 복약 데이터처럼 도메인 데이터의 관계를 모델링했습니다.",
          "차트와 인사이트 화면으로 사용자가 다음 행동을 판단할 수 있게 데이터를 정리합니다.",
        ],
      },
    ],
  },
  education: [
    {
      name: "Oz Coding School",
      course: "넥스트러러스 초격차 교육 - 백엔드 과정",
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
      name: "경성대학교",
      course: "생물학",
      period: "2013.03 ~ 2019.02",
      details: ["학사 과정 졸업"],
    },
  ],
};
