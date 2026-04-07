import { useEffect, useState, useRef } from 'react'

const AnimatedSection = ({ children, className }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`animated-section ${isVisible ? 'visible' : ''} ${className || ''}`}>
      {children}
    </div>
  )
}

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="floating-icon">⚡</div>
        <h1>Token Efficiency</h1>
        <p>Configuraciones personalizadas para que las IA respondan como yo quiero. Directo, sin relleno.</p>
        
        <div className="stats-bar">
          <div className="stat-item">
            <span className="stat-value">63%</span>
            <span className="stat-label">Ahorro de Tokens</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">3</span>
            <span className="stat-label">IAs Soportadas</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">5</span>
            <span className="stat-label">Perfiles</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">MIT</span>
            <span className="stat-label">Licencia</span>
          </div>
        </div>
      </div>
    </section>
  )
}

const ProblemSection = () => {
  const problems = [
    "Empiezan con '¡Claro!', 'Buena pregunta', '¡Por supuesto!'",
    "Cierran con 'Espero que te ayude', '¿Necesitas algo más?'",
    "Repiten tu pregunta antes de responder",
    "Añaden sugerencias que no pediste",
    "Sobre-ingenierizan soluciones simples",
    "Usan caracteres Unicode que rompen parsers"
  ]

  return (
    <AnimatedSection>
      <section className="problem-section">
        <h2 className="section-title">El Problema</h2>
        <ul className="problem-list">
          {problems.map((problem, index) => (
            <li key={index} className="problem-item">
              {problem}
            </li>
          ))}
        </ul>
        <p style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--accent-pink)', fontWeight: 600 }}>
          Todo esto gasta tokens. Nada de esto aporta valor.
        </p>
      </section>
    </AnimatedSection>
  )
}

const SolutionSection = () => {
  return (
    <AnimatedSection>
      <section className="solution-section">
        <h2 className="section-title">La Solución</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          Perfiles de instrucciones para <strong style={{ color: 'var(--accent-purple)' }}>Claude</strong>, <strong style={{ color: 'var(--accent-cyan)' }}>OpenCode</strong> y <strong style={{ color: 'var(--accent-emerald)' }}>Gemini</strong> que eliminan el ruido y dejan solo la señal.
        </p>
        
        <div className="solution-card">
          <div className="code-block">
{`# Un archivo. Cero configuración.
cp claude/CLAUDE.md ./tu-proyecto/`}
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Claude Code lo lee automáticamente. El comportamiento cambia al instante.
          </p>
        </div>
      </section>
    </AnimatedSection>
  )
}

const ResultsSection = () => {
  const results = [
    { test: "Explicar async/await", without: "180 palabras", with: "65 palabras", reduction: "64%" },
    { test: "Code review", without: "120 palabras", with: "30 palabras", reduction: "75%" },
    { test: "Qué es REST API", without: "110 palabras", with: "55 palabras", reduction: "50%" },
    { test: "Corrección errores", without: "55 palabras", with: "20 palabras", reduction: "64%" },
    { test: "Total", without: "465 palabras", with: "170 palabras", reduction: "63%" }
  ]

  return (
    <AnimatedSection>
      <section className="results-section">
        <h2 className="section-title">Resultados</h2>
        <table className="results-table">
          <thead>
            <tr>
              <th>Test</th>
              <th>Sin config</th>
              <th>Con config</th>
              <th>Reducción</th>
            </tr>
          </thead>
          <tbody>
            {results.map((row, index) => (
              <tr key={index}>
                <td>{row.test}</td>
                <td>{row.without}</td>
                <td>{row.with}</td>
                <td>{row.reduction}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--text-secondary)' }}>
          <em>Mismo contenido técnico. Misma información. Solo se eliminó el relleno.</em>
        </p>
      </section>
    </AnimatedSection>
  )
}

const ProfilesSection = () => {
  const profiles = [
    {
      title: "Universal",
      desc: "Optimización base de tokens para cualquier proyecto",
      tag: "Claude",
      when: "Cualquier proyecto"
    },
    {
      title: "Coding",
      desc: "Desarrollo, code review, debug y refactorización",
      tag: "Claude",
      when: "Proyectos de código"
    },
    {
      title: "Benchmark",
      desc: "Tests de eficiencia para máxima reducción de tokens",
      tag: "Claude",
      when: "Máxima reducción"
    },
    {
      title: "Analysis",
      desc: "Análisis de datos, research y reportes",
      tag: "Claude",
      when: "Reportes y datos"
    },
    {
      title: "Agents",
      desc: "Pipelines, automatización y sistemas multi-agent",
      tag: "Claude",
      when: "Sistemas automatizados"
    },
    {
      title: "OpenCode & Gemini",
      desc: "Tareas generales con las mismas reglas de eficiencia",
      tag: "Universal",
      when: "Todas las tareas"
    }
  ]

  return (
    <AnimatedSection>
      <section className="profiles-section">
        <h2 className="section-title">Perfiles</h2>
        <div className="profiles-grid">
          {profiles.map((profile, index) => (
            <div key={index} className="profile-card">
              <h3>{profile.title}</h3>
              <p>{profile.desc}</p>
              <span className="tag">{profile.tag}</span>
              <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <strong>Cuándo:</strong> {profile.when}
              </p>
            </div>
          ))}
        </div>
      </section>
    </AnimatedSection>
  )
}

const ComparisonSection = () => {
  return (
    <AnimatedSection>
      <section className="comparison-section">
        <h2 className="section-title">Antes vs Después</h2>
        <div className="comparison-grid">
          <div className="comparison-card before">
            <div className="comparison-label">Sin configuración</div>
            <div className="comparison-content">
{`¡Claro! Me encantaría ayudarte con eso. Veo que 
tienes un bucle y hay un pequeño detalle que 
conviene revisar. La condición i <= arr.length 
debería ser i < arr.length, ya que usar <= 
causa un error off-by-one... También podrías 
considerar usar métodos modernos como forEach 
o map... ¡Espero que esto te haya sido útil! 
No dudes en compartir más código.`}
            </div>
            <div className="word-count">120 palabras</div>
          </div>

          <div className="comparison-card after">
            <div className="comparison-label">Con configuración</div>
            <div className="comparison-content">
{`Bug: <= causa off-by-one. arr[arr.length] 
es undefined.

Fix:
for (let i = 0; i < arr.length; i++)`}
            </div>
            <div className="word-count">30 palabras • 75% menos tokens</div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}

const StyleSection = () => {
  const neverItems = [
    "Sin '¡Claro!' ni 'Con gusto'",
    "Sin 'Espero que te ayude'",
    "Sin código incompleto o '# TODO'",
    "Sin sobreingeniería",
    "Sin explicar conceptos básicos ASIR",
    "Sin tests si no se piden"
  ]

  const alwaysItems = [
    "Código completo y ejecutable",
    "Respuesta directa al problema",
    "Primero lo simple, luego lo óptimo",
    "Comandos de instalación si hacen falta",
    "Linux por defecto",
    "Open source siempre"
  ]

  return (
    <AnimatedSection>
      <section className="style-section">
        <h2 className="section-title">Mi Estilo</h2>
        <div className="style-grid">
          <div className="style-card never">
            <h4>✕ Nunca hacer</h4>
            <ul>
              {neverItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="style-card always">
            <h4>✓ Siempre hacer</h4>
            <ul>
              {alwaysItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}

const StackSection = () => {
  const stack = [
    { tech: "Ubuntu / Debian", pref: "SO" },
    { tech: "Python + Flask", pref: "Backend" },
    { tech: "React + TypeScript", pref: "Frontend" },
    { tech: "Python · Bash", pref: "Scripting" },
    { tech: "MariaDB / SQLite", pref: "DB" },
    { tech: "Nginx / Apache", pref: "Web" },
    { tech: "Docker", pref: "Contenedores" },
    { tech: "Git", pref: "Versiones" }
  ]

  return (
    <AnimatedSection>
      <section className="stack-section">
        <h2 className="section-title">Stack</h2>
        <div className="stack-grid">
          {stack.map((item, index) => (
            <div key={index} className="stack-item">
              <div className="tech">{item.tech}</div>
              <div className="pref">{item.pref}</div>
            </div>
          ))}
        </div>
      </section>
    </AnimatedSection>
  )
}

const InstallSection = () => {
  const options = [
    {
      title: "Opción 1: Copiar archivo",
      steps: [
        "Universal: cp claude/CLAUDE.md ./tu-proyecto/",
        "Coding: cp claude/profiles/CLAUDE.coding.md ./tu-proyecto/CLAUDE.md"
      ]
    },
    {
      title: "Opción 2: Clonar repo",
      steps: [
        "git clone https://github.com/Haplee/token-efficiency.git",
        "cp token-efficiency/claude/CLAUDE.md ./tu-proyecto/"
      ]
    },
    {
      title: "Opción 3: Descargar directo",
      steps: [
        "curl -o CLAUDE.md https://raw.githubusercontent.com/Haplee/token-efficiency/main/claude/CLAUDE.md"
      ]
    }
  ]

  return (
    <AnimatedSection>
      <section className="install-section">
        <h2 className="section-title">Instalación</h2>
        <div className="install-options">
          {options.map((option, index) => (
            <div key={index} className="install-option">
              <h3>{option.title}</h3>
              <div className="code">
                {option.steps.map((step, i) => (
                  <div key={i}>{step}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </AnimatedSection>
  )
}

const OverrideSection = () => {
  return (
    <AnimatedSection>
      <section className="override-section">
        <h2>Regla de Override</h2>
        <p>Las instrucciones del usuario siempre priman. Si pides una explicación detallada o output verbose, la IA lo hará. El archivo nunca pelea contra ti.</p>
      </section>
    </AnimatedSection>
  )
}

const TradeoffSection = () => {
  const helpItems = [
    "Pipelines con alto volumen de output",
    "Tareas repetitivas estructuradas",
    "Necesitas output consistente y parseable",
    "Sesiones persistentes largas"
  ]

  const noHelpItems = [
    "Consultas cortas puntuales",
    "Uso casual de una sola vez",
    "Necesitas debate arquitectónico o alternativas"
  ]

  return (
    <AnimatedSection>
      <section className="tradeoff-section">
        <h2 className="section-title">Cuándo ayuda vs cuándo no</h2>
        <div className="tradeoff-grid">
          <div className="tradeoff-card help">
            <h3>✓ Ayuda cuando</h3>
            <ul>
              {helpItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="tradeoff-card no-help">
            <h3>✕ No ayuda cuando</h3>
            <ul>
              {noHelpItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <p style={{ marginTop: '2rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          <em>El trade-off: El archivo consume input tokens en cada mensaje. El ahorro viene de reducir output tokens. Solo compensa cuando el volumen de output es suficiente para compensar el coste persistente del input.</em>
        </p>
      </section>
    </AnimatedSection>
  )
}

const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <a href="https://github.com/Haplee" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://github.com/Haplee/token-efficiency" target="_blank" rel="noopener noreferrer">Repositorio</a>
        <a href="https://instagram.com/franvidalmateo" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://x.com/FranVidalMateo" target="_blank" rel="noopener noreferrer">X</a>
      </div>
      <p style={{ color: 'var(--text-muted)' }}>MIT License • Token Efficiency</p>
    </footer>
  )
}

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button 
      className={`scroll-indicator ${visible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Volver al inicio"
    >
      ↑
    </button>
  )
}

function App() {
  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      .animated-section {
        opacity: 0;
        transform: translateY(40px);
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .animated-section.visible {
        opacity: 1;
        transform: translateY(0);
      }
    `
    document.head.appendChild(style)
    return () => document.head.removeChild(style)
  }, [])

  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <ResultsSection />
      <ProfilesSection />
      <ComparisonSection />
      <StyleSection />
      <StackSection />
      <InstallSection />
      <OverrideSection />
      <TradeoffSection />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App