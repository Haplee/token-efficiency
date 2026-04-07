# Token Efficiency

> Configuraciones personalizadas para que las IA respondan como yo quiero. Directo, sin relleno.

<p align="center">
  <img src="https://img.shields.io/badge/Token_Savings-63%25-8b5cf6?style=for-the-badge" alt="Token Savings">
  <img src="https://img.shields.io/badge/IA_Soportadas-3-06b6d4?style=for-the-badge" alt="IA Soportadas">
  <img src="https://img.shields.io/badge/Perfiles-5-emerald?style=for-the-badge" alt="Perfiles">
  <img src="https://img.shields.io/badge/License-MIT-white?style=for-the-badge" alt="License">
</p>

---

## El problema

Por defecto, las IA:

- Empiezan con "¡Claro!", "Buena pregunta", "¡Por supuesto!"
- Cierran con "Espero que te ayude", "¿Necesitas algo más?"
- Repiten tu pregunta antes de responder
- Añaden sugerencias que no pediste
- Sobre-ingenierizan soluciones simples
- Usan caracteres Unicode que rompen parsers

**Todo esto gasta tokens. Nada de esto aporta valor.**

---

## La solución

Perfiles de instrucciones para **Claude**, **OpenCode** y **Gemini** que eliminan el ruido y dejan solo la señal.

```bash
# Un archivo. Cero configuración.
cp claude/CLAUDE.md ./tu-proyecto/
```

Claude Code lo lee automáticamente. El comportamiento cambia al instante.

---

## Resultados

| Test | Sin config | Con config | Reducción |
|------|------------|------------|-----------|
| Explicar async/await | 180 palabras | 65 palabras | **64%** |
| Code review | 120 palabras | 30 palabras | **75%** |
| Qué es REST API | 110 palabras | 55 palabras | **50%** |
| Corrección errores | 55 palabras | 20 palabras | **64%** |
| **Total** | **465 palabras** | **170 palabras** | **63%** |

Mismo contenido técnico. Misma información. Solo se eliminó el relleno.

---

## Perfiles

### Claude

| Perfil | Para qué | Cuándo usarlo |
|--------|----------|---------------|
| **Universal** | Optimización base de tokens | Cualquier proyecto |
| **Coding** | Desarrollo, code review, debug | Proyectos de código |
| **Benchmark** | Tests de eficiencia | Máxima reducción de tokens |
| **Analysis** | Análisis de datos, research | Reportes y datos |
| **Agents** | Pipelines, automatización, bots | Sistemas multi-agent |

### OpenCode & Gemini

| Perfil | Para qué |
|--------|----------|
| **Universal** | Tareas generales con las mismas reglas de eficiencia |

---

## Antes vs Después

**Sin configuración:**
```
¡Claro! Me encantaría ayudarte con eso. Veo que tienes un bucle
y hay un pequeño detalle que conviene revisar. La condición
i <= arr.length debería ser i < arr.length, ya que usar <=
causa un error off-by-one... También podrías considerar usar
métodos modernos como forEach o map... ¡Espero que esto te
haya sido útil! No dudes en compartir más código.
```
**120 palabras.**

**Con configuración:**
```
Bug: <= causa off-by-one. arr[arr.length] es undefined.

Fix:
for (let i = 0; i < arr.length; i++)
```
**30 palabras. Mismo fix. 75% menos tokens.**

---

## Mi estilo

### Nunca hacer
- Sin "¡Claro!" ni "Con gusto"
- Sin "Espero que te ayude"
- Sin código incompleto o `# TODO`
- Sin sobreingeniería
- Sin explicar conceptos básicos ASIR
- Sin tests si no se piden

### Siempre hacer
- Código completo y ejecutable
- Respuesta directa al problema
- Primero lo simple, luego lo óptimo
- Comandos de instalación si hacen falta
- Linux por defecto
- Open source siempre

---

## Stack

| Área | Preferencia |
|------|-------------|
| SO | Ubuntu / Debian |
| Backend | Python + Flask |
| Frontend | React + TypeScript |
| Scripting | Python · Bash |
| DB | MariaDB / SQLite |
| Web | Nginx / Apache |
| Contenedores | Docker |
| Versiones | Git |

---

## Instalación

### Opción 1: Copiar archivo

```bash
# Universal
cp claude/CLAUDE.md ./tu-proyecto/

# Coding
cp claude/profiles/CLAUDE.coding.md ./tu-proyecto/CLAUDE.md
```

### Opción 2: Clonar repo

```bash
git clone https://github.com/Haplee/token-efficiency.git
cp token-efficiency/claude/CLAUDE.md ./tu-proyecto/
```

### Opción 3: Descargar directo

```bash
curl -o CLAUDE.md https://raw.githubusercontent.com/Haplee/token-efficiency/main/claude/CLAUDE.md
```

---

## Estructura

```
token-efficiency/
├── claude/
│   ├── CLAUDE.md                    # Universal
│   ├── BENCHMARK.md                 # Resultados validación
│   ├── LICENSE
│   └── profiles/
│       ├── CLAUDE.coding.md         # Desarrollo
│       ├── CLAUDE.benchmark.md      # Tests eficiencia
│       ├── CLAUDE.analysis.md       # Análisis datos
│       └── CLAUDE.agents.md         # Automatización
├── opencode/
│   ├── instructions.opencode.md     # Config OpenCode
│   └── LICENSE
├── gemini/
│   ├── instructions.gemini.md       # Config Gemini
│   └── LICENSE
├── docs/                            # Web estática (GitHub Pages)
└── README.md
```

---

## Regla de override

Las instrucciones del usuario siempre priman. Si pides una explicación detallada o output verbose, la IA lo hará. El archivo nunca pelea contra ti.

---

## Cuándo ayuda vs cuándo no

**Ayuda cuando:**
- Pipelines con alto volumen de output
- Tareas repetitivas estructuradas
- Necesitas output consistente y parseable
- Sesiones persistentes largas

**No ayuda cuando:**
- Consultas cortas puntuales
- Uso casual de una sola vez
- Necesitas debate arquitectónico o alternativas

**El trade-off:** El archivo consume input tokens en cada mensaje. El ahorro viene de reducir output tokens. Solo compensa cuando el volumen de output es suficiente para compensar el coste persistente del input.

---

## Web

Documentación completa con animaciones en [GitHub Pages](https://haplee.github.io/token-efficiency).

---

## License

MIT — libre para usar, modificar y distribuir.

---

| Plataforma | URL |
|------------|-----|
| GitHub | https://github.com/Haplee |
| Instagram | https://www.instagram.com/franvidalmateo |
| X | https://x.com/FranVidalMateo |
