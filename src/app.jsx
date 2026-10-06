import { useEffect, useState } from "react";

import {
  ArrowRight,
  Check,
  ChevronRight,
  Flame,
  Gamepad2,
  HeartHandshake,
  Menu,
  Moon,
  Sun,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  Users,
  X,
  Zap,
} from "lucide-react";

import logo from "./assets/brand/logo03.png";
import mascotHero from "./assets/mascots/mainMascote.png";
import mascotCta from "./assets/mascots/checkListMascote.png";
import kitchenQuest from "./assets/mascots/choresMascote.png";
import mariaAvatar from "./assets/avatars/avatarMaria.png";
import lucasAvatar from "./assets/avatars/avatarLucas.png";
import joaoAvatar from "./assets/avatars/avatarJoao.png";

const rooms = [
  {
    id: "sala",
    name: "Sala",
    status: "Tudo certo",
    score: 100,
    color: "mint",
    icon: "🛋️",
  },
  {
    id: "cozinha",
    name: "Cozinha",
    status: "2 missões",
    score: 58,
    color: "orange",
    icon: "🍽️",
  },
  {
    id: "banheiro",
    name: "Banheiro",
    status: "Precisa de atenção",
    score: 26,
    color: "coral",
    icon: "🫧",
  },
  {
    id: "quarto",
    name: "Quarto",
    status: "1 missão",
    score: 74,
    color: "purple",
    icon: "🛏️",
  },
];

const steps = [
  {
    number: "01",
    title: "Monte sua casa",
    description:
      "Crie o grupo e convide as pessoas que dividem a rotina com você.",
    color: "mint",
    icon: Users,
  },
  {
    number: "02",
    title: "Escolha as missões",
    description:
      "Transforme cada responsabilidade em uma quest simples e clara.",
    color: "purple",
    icon: Gamepad2,
  },
  {
    number: "03",
    title: "Evoluam juntos",
    description:
      "Ganhem XP, mantenham a sequência e cuidem da casa sem cobrança.",
    color: "orange",
    icon: Trophy,
  },
];

function Logo({ footer = false }) {
  return (
    <a href="#inicio" className={`logo ${footer ? "logo--footer" : ""}`}>
      <span className="logo__image">
        <img src={logo} alt="" width="80" height="80" />
      </span>

      <span className="logo__text">
        <strong>HouseFlow</strong>
        <small>Sua casa, seu time.</small>
      </span>
    </a>
  );
}

function ThemeToggle() {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || "light",
  );

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: light)");
    function followSystem(event) {
      try {
        const saved = localStorage.getItem("houseflow-theme");
        if (saved === "light" || saved === "dark") return;
      } catch {
      }
      setTheme(event.matches ? "light" : "dark");
    }
    media.addEventListener("change", followSystem);
    return () => media.removeEventListener("change", followSystem);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "light" ? "#f3f3f3" : "#0d1916");
  }, [theme]);

  function toggleTheme() {
    const nextTheme = theme === "light" ? "dark" : "light";
    try {
      localStorage.setItem("houseflow-theme", nextTheme);
    } catch {
    }
    setTheme(nextTheme);
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Ativar modo escuro" : "Ativar modo claro"}
      title={theme === "light" ? "Ativar modo escuro" : "Ativar modo claro"}
    >
      {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="header">
      <div className="container header__content">
        <Logo />

        <nav
          id="navigation"
          aria-label="Navegação principal"
          className={`nav ${menuOpen ? "nav--open" : ""}`}
        >
          <a href="#como-funciona" onClick={closeMenu}>
            Como funciona
          </a>

          <a href="#recursos" onClick={closeMenu}>
            Recursos
          </a>

          <a href="#comunidade" onClick={closeMenu}>
            Comunidade
          </a>

          <a href="#sobre" onClick={closeMenu}>
            App
          </a>
        </nav>

        <div className="header__actions">
          <ThemeToggle />
          <button
            type="button"
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="navigation"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <main id="inicio" className="hero">
      <div className="hero__blur hero__blur--left" />
      <div className="hero__blur hero__blur--right" />

      <div className="container hero__content">
        <div className="hero__copy">
          <div className="pill">
            <Sparkles size={16} />

            <span>SUA CASA. SEU TIME. SUA EVOLUÇÃO.</span>
          </div>

          <h1>
            A rotina fica mais leve quando vira <span>aventura.</span>
          </h1>

          <p>
            Organize tarefas, complete missões e cuide da casa em equipe — sem
            planilhas, cobranças ou “de quem era a vez?”.
          </p>

          <div className="hero__buttons">
            <a className="button button--primary" href="#como-funciona">
              COMEÇAR A AVENTURA
              <ArrowRight size={19} />
            </a>

            <a className="button button--secondary" href="#recursos">
              VER COMO FUNCIONA
            </a>
          </div>

          <div className="hero__community">
            <div className="small-avatars">
              <span>
                <img src={mariaAvatar} alt="Maria" width="36" height="36" />
              </span>
              <span>
                <img src={lucasAvatar} alt="Lucas" width="36" height="36" />
              </span>
              <span>
                <img src={joaoAvatar} alt="João" width="36" height="36" />
              </span>
              <span>+</span>
            </div>

            <p>
              <strong>Feito para dividir a casa,</strong>
              <br />
              não a amizade.
            </p>
          </div>
        </div>

        <div className="hero-art">
          <div className="hero-art__background" />

          <div className="hero-mascot">
            <img
              src={mascotHero}
              alt="Mascote do HouseFlow comemorando uma conquista com uma estrela de XP"
              width="1024"
              height="1024"
              fetchPriority="high"
            />
          </div>

          <div className="floating-card floating-card--quest">
            <span className="floating-card__icon floating-card__icon--mint">
              <Check size={18} />
            </span>

            <span>
              <strong>Missão completa!</strong>
              <small>Louça lavada • +40 XP</small>
            </span>
          </div>

          <div className="floating-card floating-card--streak">
            <span className="floating-card__icon floating-card__icon--orange">
              <Flame size={20} />
            </span>

            <span>
              <strong>7 dias</strong>
              <small>de sequência</small>
            </span>
          </div>

          <span className="decoration decoration--one">✦</span>
          <span className="decoration decoration--two">✦</span>
          <span className="decoration decoration--three">●</span>
        </div>
      </div>
    </main>
  );
}

function HowItWorks() {
  return (
    <section id="como-funciona" className="section how-it-works">
      <div className="container">
        <div className="section-title">
          <span className="eyebrow">COMO FUNCIONA</span>

          <h2>
            Menos cobrança.
            <br />
            <span>Mais colaboração.</span>
          </h2>

          <p>
            Três passos para transformar o cuidado com a casa em um hábito que
            todo mundo quer manter.
          </p>
        </div>

        <div className="steps">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className={`step-card step-card--${step.color}`}
              >
                <span className="step-card__number">{step.number}</span>

                <div className="step-card__icon">
                  <Icon size={30} />
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>

                <span className="step-card__arrow">
                  <ChevronRight />
                </span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function HouseHealth() {
  const [activeRoom, setActiveRoom] = useState(rooms[2]);

  return (
    <section id="recursos" className="section health-section">
      <div className="container split-section">
        <div className="feature-copy">
          <span className="eyebrow">MAPA DE ATENÇÃO</span>

          <h2>
            Sua casa fala.
            <br />
            <span>Você entende.</span>
          </h2>

          <p>
            Veja em segundos o que está bem e o que precisa de cuidado. Quanto
            mais uma tarefa espera, mais destaque ela recebe.
          </p>

          <ul className="benefit-list">
            <li>
              <span className="benefit-list__icon">
                <Zap size={20} />
              </span>

              <div>
                <strong>Prioridades sem confusão</strong>

                <p>As missões mais importantes aparecem primeiro.</p>
              </div>
            </li>

            <li>
              <span className="benefit-list__icon">
                <ShieldCheck size={20} />
              </span>

              <div>
                <strong>Visão compartilhada</strong>

                <p>Todo mundo enxerga a mesma situação da casa.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="app-preview">
          <div className="app-preview__header">
            <div>
              <small>BOA TARDE 👋</small>
              <strong>Casa do pessoal</strong>
            </div>

            <div className="avatar-placeholder">
              <img
                src={mariaAvatar}
                alt="Avatar de Maria"
                width="44"
                height="44"
                loading="lazy"
              />
            </div>
          </div>

          <div className="health-score">
            <div className="health-score__title">
              <span>HOUSE HEALTH</span>
              <strong>72%</strong>
            </div>

            <div className="progress-bar">
              <span />
            </div>
          </div>

          <p className="preview-instruction">
            Toque em um ambiente para explorar
          </p>

          <div className="room-grid">
            {rooms.map((room) => (
              <button
                key={room.id}
                className={`
                  room-card
                  room-card--${room.color}
                  ${activeRoom.id === room.id ? "room-card--active" : ""}
                `}
                onClick={() => setActiveRoom(room)}
              >
                <span className="room-card__emoji">{room.icon}</span>

                <strong>{room.name}</strong>
                <small>{room.status}</small>

                <span className="room-card__progress">
                  <i style={{ width: `${room.score}%` }} />
                </span>
              </button>
            ))}
          </div>

          <div className="next-quest">
            <span className="next-quest__icon">
              <Sparkles size={20} />
            </span>

            <div>
              <small>PRÓXIMA MISSÃO • {activeRoom.name.toUpperCase()}</small>

              <strong>
                {activeRoom.score < 40
                  ? "Resolver tarefa urgente"
                  : "Manter o ambiente em dia"}
              </strong>
            </div>

            <span className="next-quest__xp">+{100 - activeRoom.score} XP</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuestSection() {
  const [completed, setCompleted] = useState(false);

  return (
    <section className="section quest-section">
      <div className="container split-section split-section--reverse">
        <div
          className={`quest-card ${completed ? "quest-card--completed" : ""}`}
        >
          <div className="quest-card__header">
            <span>MISSÃO DO DIA</span>

            <span className="xp-pill">
              <Star size={15} fill="currentColor" />
              +50 XP
            </span>
          </div>

          <div className="quest-art">
            <img
              src={kitchenQuest}
              alt="Mascote do HouseFlow varrendo o chão"
              width="1024"
              height="1024"
              loading="lazy"
            />
          </div>

          <div className="quest-card__content">
            <span className="category-tag">COZINHA</span>

            <h3>{completed ? "Missão concluída!" : "Herói da cozinha"}</h3>

            <p>
              {completed
                ? "Você deixou a cozinha pronta para a próxima aventura."
                : "Varra o chão e deixe a cozinha pronta para todos."}
            </p>
          </div>

          <button
            className="button button--purple"
            onClick={() => setCompleted(!completed)}
          >
            {completed ? (
              <>
                <Check size={19} />
                CONCLUÍDA • +50 XP
              </>
            ) : (
              <>
                CONCLUIR MISSÃO
                <Sparkles size={18} />
              </>
            )}
          </button>

          {completed && (
            <div className="confetti" aria-hidden="true">
              <i>●</i>
              <i>▲</i>
              <i>■</i>
              <i>●</i>
              <i>★</i>
            </div>
          )}
        </div>

        <div className="feature-copy feature-copy--purple">
          <span className="eyebrow">ROTINA COM CARA DE JOGO</span>

          <h2>
            Pequenas tarefas.
            <br />
            <span>Grandes conquistas.</span>
          </h2>

          <p>
            Cada contribuição faz a casa evoluir. Ganhe XP, desbloqueie
            conquistas e mantenha uma sequência com o grupo.
          </p>

          <div className="statistics">
            <article>
              <Flame />
              <strong>12</strong>
              <span>dias de streak</span>
            </article>

            <article>
              <Trophy />
              <strong>08</strong>
              <span>conquistas</span>
            </article>

            <article>
              <Star />
              <strong>2.4k</strong>
              <span>XP da casa</span>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

function Community() {
  return (
    <section id="comunidade" className="section community-section">
      <div className="container">
        <div className="section-title section-title--light">
          <span className="eyebrow">UMA CASA É UM TIME</span>

          <h2>
            Todo mundo faz parte
            <br />
            da conquista.
          </h2>

          <p>
            Progresso visível, reconhecimento leve e colaboração de verdade.
          </p>
        </div>

        <div className="podium">
          <article className="podium-card podium-card--second">
            <span className="podium-card__position">2</span>

            <div className="podium-card__avatar">
              <img
                src={lucasAvatar}
                alt="Avatar de Lucas"
                width="72"
                height="72"
                loading="lazy"
              />
            </div>

            <strong>Lucas</strong>
            <small>610 XP</small>

            <div className="podium-card__line" />
          </article>

          <article className="podium-card podium-card--first">
            <span className="podium-card__crown">♛</span>
            <span className="podium-card__position">1</span>

            <div className="podium-card__avatar">
              <img
                src={mariaAvatar}
                alt="Avatar de Maria"
                width="72"
                height="72"
                loading="lazy"
              />
            </div>

            <strong>Maria</strong>
            <small>740 XP</small>

            <div className="podium-card__line" />
          </article>

          <article className="podium-card podium-card--third">
            <span className="podium-card__position">3</span>

            <div className="podium-card__avatar">
              <img
                src={joaoAvatar}
                alt="Avatar de João"
                width="72"
                height="72"
                loading="lazy"
              />
            </div>

            <strong>João</strong>
            <small>480 XP</small>

            <div className="podium-card__line" />
          </article>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="cta" className="section final-cta">
      <span className="final-cta__decoration final-cta__decoration--left">
        ✦
      </span>

      <span className="final-cta__decoration final-cta__decoration--right">
        ●
      </span>

      <div className="container final-cta__content">
        <div className="cta-mascot">
          <img
            src={mascotCta}
            alt="Mascote do HouseFlow com uma lista de tarefas concluídas"
            width="1024"
            height="1024"
            loading="lazy"
          />
        </div>

        <div>
          <span className="eyebrow">PRONTOS PARA COMEÇAR?</span>

          <h2>
            Uma casa melhor começa
            <br />
            com todo mundo junto.
          </h2>

          <p>Crie sua casa, convide sua equipe e complete a primeira missão.</p>
        </div>

        <a
          className="button button--dark"
          href="https://github.com/hqlcc/tccLanding"
          target="_blank"
          rel="noreferrer"
        >
          QUERO PARTICIPAR
          <ArrowRight />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="sobre" className="footer">
      <div className="container footer__content">
        <div className="footer__brand">
          <Logo footer />

          <p>Rotinas mais leves. Casas mais unidas.</p>
        </div>

        <div className="footer__links">
          <strong>PRODUTO</strong>
          <a href="#como-funciona">Como funciona</a>
          <a href="#recursos">Recursos</a>
          <a href="#comunidade">Comunidade</a>
        </div>

        <div className="footer__links">
          <strong>PROJETO</strong>
          <a
            href="https://github.com/hqlcc/tccLanding"
            target="_blank"
            rel="noreferrer"
          >
            Conheça o projeto
          </a>

          <a
            href="https://github.com/hqlcc/tccLanding"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a href="#inicio">Voltar ao início</a>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© 2026 • House Flow</span>

        <span>
          Feito para cuidar juntos
          <HeartHandshake size={16} />
        </span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <HowItWorks />
      <HouseHealth />
      <QuestSection />
      <Community />
      <FinalCTA />
      <Footer />
    </>
  );
}
