# Benchmark - Validación

## Qué se probó

Mismos 5 prompts ejecutados dos veces:
- SIN CLAUDE.md (baseline)
- CON CLAUDE.md (optimizado)

## Resultados

| Test | Sin config | Con config | Reducción |
|------|------------|------------|-----------|
| Explicar async/await | 180 palabras | 65 palabras | 64% |
| Code review | 120 palabras | 30 palabras | 75% |
| Qué es REST API | 110 palabras | 55 palabras | 50% |
| Corrección errores | 55 palabras | 20 palabras | 64% |
| **Total** | **465 palabras** | **170 palabras** | **63%** |

---

## Disclaimer

- Muestra pequeña: 5 prompts - indicador direccional, no estudio controlado.
- Resultados varían según el tipo de tarea.
- Saving en output tokens solo. El archivo CLAUDE.md suma input tokens en cada mensaje.
- Mejor para tareas con alto volumen de output: pipelines, code generation loops, bots.
