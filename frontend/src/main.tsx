import React from "react";
import ReactDOM from "react-dom/client";
import {
  ArrowUpRight,
  BriefcaseBusiness,
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

function Portfolio() {
  const { profile, quickProfile, about, career, projects, skills, education } = portfolioData;

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
            <div className="profile-links">
              <a href={`mailto:${profile.email}`}>
                <Mail size={18} />
                {profile.email}
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer">
                <FaGithub />
                GitHub
              </a>
              <a href="tel:010-3223-1434">
                <Phone size={18} />
                010-3223-1434
              </a>
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
            <h3>Core Strength</h3>
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
        <SectionTitle icon={BriefcaseBusiness} eyebrow="Career" title="실무 경험" description="개발 실무와 교육 조교 경험을 통해 실제 서비스 구현과 학습 지원 흐름을 함께 경험했습니다." />
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
                  <p>{item.learning}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <SectionTitle icon={Code2} eyebrow="Projects" title="프로젝트" description="각 프로젝트는 구현 기능, 담당 역할, 문제 해결 경험을 기준으로 정리했습니다." />
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
                  <p>{project.problem}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section section-band">
        <SectionTitle icon={Wrench} eyebrow="Skills" title="기술 스택" description="기술명 나열보다 실제 사용 경험과 연결되도록 정리했습니다." />
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
          <p>함께 성장하며 실질적인 문제를 해결하는 개발자가 되고 싶습니다.</p>
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
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>,
);
