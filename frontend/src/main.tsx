import React from "react";
import ReactDOM from "react-dom/client";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Code2,
  Database,
  ExternalLink,
  GraduationCap,
  Mail,
  Monitor,
  Phone,
  Server,
  UserRound,
  Wrench,
  X,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { portfolioData } from "./data";
import "./styles.css";

function SectionTitle({
  icon: Icon,
  eyebrow,
  title,
  description,
}: {
  icon: React.ElementType;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-title">
      <div className="eyebrow">
        <Icon size={18} />
        {eyebrow}
      </div>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return <span className="pill">{children}</span>;
}

function IconForSkill({ title }: { title: string }) {
  if (title.includes("Spring")) return <Server size={28} />;
  if (title.includes("Frontend")) return <Monitor size={28} />;
  return <Database size={28} />;
}

type Screenshot = {
  src: string;
  alt: string;
};

type LightboxState = {
  images: Screenshot[];
  index: number;
};

function Portfolio() {
  const { profile, quickProfile, about, career, projects, skills, education } = portfolioData;
  const [lightbox, setLightbox] = React.useState<LightboxState | null>(null);
  const activeImage = lightbox ? lightbox.images[lightbox.index] : null;

  const openLightbox = (images: Screenshot[], index: number) => {
    setLightbox({ images, index });
  };

  const closeLightbox = () => {
    setLightbox(null);
  };

  const showPreviousImage = () => {
    setLightbox((current) =>
      current ? { ...current, index: (current.index - 1 + current.images.length) % current.images.length } : current,
    );
  };

  const showNextImage = () => {
    setLightbox((current) => (current ? { ...current, index: (current.index + 1) % current.images.length } : current));
  };

  React.useEffect(() => {
    if (!lightbox) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPreviousImage();
      if (event.key === "ArrowRight") showNextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightbox]);

  return (
    <main className="app">
      <nav className="nav">
        <a href="#top" className="brand">
          {profile.name}
        </a>
        <div className="nav-links">
          <a href="#career">Career</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
        </div>
        <a href={`mailto:${profile.email}`} className="button button-dark">
          <Mail size={16} />
          Contact
        </a>
      </nav>

      <section id="top" className="hero">
        <div className="hero-inner">
          <div className="hero-photo-frame">
            <img className="hero-photo" src="/profile.jpg" alt={`${profile.name} 프로필 사진`} />
          </div>

          <aside className="quick-panel profile-panel">
            <h1>
              {profile.name}
              <span>{profile.role}</span>
            </h1>
            <p className="lead">{profile.summary}</p>
            <p className="support">{profile.focus}</p>
            <div className="profile-note">
              <p>불명확한 요구사항을 화면, API, 서비스 흐름으로 구체화하는 과정에 강점이 있습니다.</p>
              <p>백엔드 구조 설계와 데이터 흐름 정리, 실무형 기능 구현이 필요한 작업에서 가장 강합니다.</p>
            </div>
            <div className="actions">
              <a href={`mailto:${profile.email}`} className="button button-primary">
                <Mail size={18} />
                Email
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="button button-outline">
                <FaGithub />
                GitHub
              </a>
              <a href="tel:010-3223-1434" className="button button-outline">
                <Phone size={18} />
                Phone
              </a>
            </div>
          </aside>

          <div className="quick-profile-grid">
            {quickProfile.map((item) => (
              <div className="quick-profile-item" key={item.label}>
                <strong>{item.label}</strong>
                <span>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <SectionTitle icon={UserRound} eyebrow="About" title={about.title} />
        <div className="about-grid">
          <article className="panel panel-wide">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
          <article className="panel panel-accent">
            <h3>핵심 강점</h3>
            <ul className="check-list">
              {about.strengths.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section id="career" className="section section-band">
        <SectionTitle
          icon={BriefcaseBusiness}
          eyebrow="Career"
          title="실무 경험"
          description="개발, 유지보수, 사용자 요구사항 검토, 프로젝트 지원까지 실제 업무 흐름 안에서 경험했습니다."
        />
        <div className="career-list">
          {career.map((item) => (
            <article className="career-card" key={`${item.company}-${item.role}`}>
              <div className="card-heading">
                <div>
                  <h3>{item.company}</h3>
                  <p>{item.role}</p>
                  <span>{item.period}</span>
                </div>
                <strong>{item.team}</strong>
              </div>
              <p className="career-description">{item.description}</p>
              <div className="three-grid">
                <div>
                  <h4>주요 업무</h4>
                  <ul>
                    {item.tasks.map((task) => (
                      <li key={task}>{task}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>기술 환경</h4>
                  <div className="pill-row">
                    {item.stack.map((stackItem) => (
                      <Pill key={stackItem}>{stackItem}</Pill>
                    ))}
                  </div>
                </div>
                <div>
                  <h4>배운 점</h4>
                  <div className="text-stack">
                    {item.learning.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <SectionTitle
          icon={Code2}
          eyebrow="Projects"
          title="주요 프로젝트"
          description="각 프로젝트를 목적, 담당 역할, 구현 내용, 문제 해결 관점에서 빠르게 파악할 수 있도록 정리했습니다."
        />
        <div className="project-list">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className="project-head">
                <div>
                  <div className="meta-row">
                    <span>0{index + 1}</span>
                    <span>{project.type}</span>
                    <span>{project.period}</span>
                    <span>{project.role}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                {(project.github || project.deploy) && (
                  <div className="icon-actions">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub`}>
                        <FaGithub />
                      </a>
                    )}
                    {project.deploy && (
                      <a href={project.deploy} target="_blank" rel="noreferrer" aria-label={`${project.title} local preview`}>
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                )}
              </div>
              <div className="pill-row">
                {project.stack.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </div>
              <div className="project-summary-grid">
                <div className="project-summary-card">
                  <strong>프로젝트 목적</strong>
                  <p>{project.description}</p>
                </div>
                <div className="project-summary-card">
                  <strong>담당 역할</strong>
                  <p>{project.role}</p>
                </div>
                <div className="project-summary-card">
                  <strong>핵심 기술</strong>
                  <p>{project.stack.slice(0, 4).join(", ")}</p>
                </div>
              </div>
              {project.screenshots && (
                <div className="project-screenshots" aria-label={`${project.title} 화면 이미지`}>
                  {project.screenshots.map((image, screenshotIndex) => (
                    <figure key={image.src}>
                      <button
                        className="screenshot-button"
                        type="button"
                        onClick={() => openLightbox(project.screenshots ?? [], screenshotIndex)}
                        aria-label={`${image.alt} 확대`}
                      >
                        <img src={image.src} alt={image.alt} loading="lazy" />
                      </button>
                      <figcaption>{image.alt.replace(`${project.title} `, "")}</figcaption>
                    </figure>
                  ))}
                </div>
              )}
              <div className="three-grid project-detail">
                <div>
                  <h4>주요 기능</h4>
                  <ul>
                    {project.features.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>내가 구현한 부분</h4>
                  <ul>
                    {project.contributions.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="soft-accent">
                  <h4>문제 해결 경험</h4>
                  <div className="text-stack">
                    {project.problem.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section section-band">
        <SectionTitle
          icon={Wrench}
          eyebrow="Skills"
          title="기술 스택"
          description="단순 키워드 나열이 아니라 실제 프로젝트에서 사용한 경험 중심으로 정리했습니다."
        />
        <div className="three-grid skill-summary">
          <article className="panel">
            <h3>Main</h3>
            <div className="pill-row">{skills.main.map((item) => <Pill key={item}>{item}</Pill>)}</div>
          </article>
          <article className="panel">
            <h3>Sub</h3>
            <div className="pill-row">{skills.sub.map((item) => <Pill key={item}>{item}</Pill>)}</div>
          </article>
          <article className="panel">
            <h3>Tools</h3>
            <div className="pill-row">{skills.tools.map((item) => <Pill key={item}>{item}</Pill>)}</div>
          </article>
        </div>
        <div className="three-grid skill-detail">
          {skills.details.map((detail) => (
            <article className="panel" key={detail.title}>
              <IconForSkill title={detail.title} />
              <h3>{detail.title}</h3>
              <ul>
                {detail.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="education" className="section">
        <SectionTitle icon={GraduationCap} eyebrow="Education" title="교육 및 학습" />
        <div className="education-list">
          {education.map((item) => (
            <article className="education-card" key={item.name}>
              <div>
                <h3>{item.name}</h3>
                <p>{item.course}</p>
              </div>
              <span>{item.period}</span>
              <div className="pill-row">
                {item.details.map((detail) => (
                  <Pill key={detail}>{detail}</Pill>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div>
          <p>서비스 구조를 이해하고, 실제로 동작하는 기능을 꾸준히 구현해내는 백엔드 개발자가 되고자 합니다.</p>
          <div className="actions">
            <a href={`mailto:${profile.email}`} className="button button-light">
              <Mail size={18} />
              {profile.email}
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="button button-footer-outline">
              <FaGithub />
              GitHub
              <ArrowUpRight size={18} />
            </a>
            <a href="tel:010-3223-1434" className="button button-footer-outline">
              <Phone size={18} />
              010-3223-1434
            </a>
          </div>
        </div>
      </footer>

      {activeImage && lightbox && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={activeImage.alt}>
          <button className="lightbox-backdrop" type="button" onClick={closeLightbox} aria-label="이미지 닫기" />
          <div className="lightbox-content">
            <button className="lightbox-close" type="button" onClick={closeLightbox} aria-label="이미지 닫기">
              <X size={22} />
            </button>
            {lightbox.images.length > 1 && (
              <button className="lightbox-nav lightbox-nav-prev" type="button" onClick={showPreviousImage} aria-label="이전 이미지">
                <ChevronLeft size={26} />
              </button>
            )}
            <img src={activeImage.src} alt={activeImage.alt} />
            {lightbox.images.length > 1 && (
              <button className="lightbox-nav lightbox-nav-next" type="button" onClick={showNextImage} aria-label="다음 이미지">
                <ChevronRight size={26} />
              </button>
            )}
            <p>{activeImage.alt}</p>
          </div>
        </div>
      )}
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>,
);
