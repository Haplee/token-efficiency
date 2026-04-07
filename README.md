# AI Personalizados

> Configuraciones para que las IA respondan a mi manera.

---

## Qué es esto

Perfiles de instrucciones para differentes IA (Claude, OpenCode, Gemini) adaptados a mi estilo como desarrollador. El objetivo es que las respuestas sean directas, concisas y sin relleno.

---

## Cómo usarlos

```bash
# Copiar al proyecto
cp token-efficiency/claude/CLAUDE.md ./tu-proyecto/
```

---

## Perfiles disponibles

| IA | Perfil | Para qué |
|----|--------|----------|
| Claude | Universal | Optimización base de tokens |
| Claude | Coding | Desarrollo, code review, debug |
| Claude | Benchmark | Tests de eficiencia |
| Claude | Analysis | Análisis de datos |
| Claude | Agents | Pipelines y automatización |
| OpenCode | Universal | Tareas generales |
| Gemini | Universal | Tareas generales |

---

## Estructura

```
token-efficiency/
├── claude/
│   ├── CLAUDE.md
│   ├── LICENSE
│   ├── profiles/
│   │   ├── CLAUDE.coding.md
│   │   ├── CLAUDE.benchmark.md
│   │   ├── CLAUDE.analysis.md
│   │   └── CLAUDE.agents.md
│   └── BENCHMARK.md
├── opencode/
│   ├── instructions.opencode.md
│   └── LICENSE
├── gemini/
│   ├── instructions.gemini.md
│   └── LICENSE
└── README.md
```

---

## Resultados

| Test | Sin config | Con config | Reducción |
|------|------------|------------|-----------|
| Explicar async/await | 180 palabras | 65 palabras | 64% |
| Code review | 120 palabras | 30 palabras | 75% |
| Qué es REST API | 110 palabras | 55 palabras | 50% |
| Corrección errores | 55 palabras | 20 palabras | 64% |
| **Total** | **465 palabras** | **170 palabras** | **63%** |

---

## Mi estilo

- Sin introducciones типа "¡Claro!" o "Con gusto"
- Sin cerrar con "Espero que te ayude"
- Código completo, no fragmentos
- Primero lo simple, luego lo óptimo
- Linux por defecto, Windows solo si se pide

---

## License

MIT

---

| Plataforma | URL |
|------------|-----|
| GitHub | https://github.com/Haplee |
| Instagram | https://www.instagram.com/franvidalmateo |
| X | https://x.com/FranVidalMateo |
