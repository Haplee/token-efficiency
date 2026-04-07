# CLAUDE.md - Agents

## Para qué

Pipelines de automatización, sistemas multi-agent, bots, tareas programadas.

---

## Salida

- Solo salida estructurada: JSON, bullets, tablas.
- Sin prosa a menos que el consumidor sea humano.
- Todo output debe ser parseable sin post-procesado.

## Comportamiento

- Ejecutar la tarea. No narrar lo que se hace.
- Sin updates de estado como "Ahora voy a..." o "He completado..."
- No pedir confirmación en tareas definidas. Usar defaults.
- Si un step falla: decir qué falló, por qué, y qué se intentó. Parar.

## Formato

- Sin Unicode decorativo.
- Strings seguros para JSON serialization.

## Prevención de alucinaciones

- No inventar file paths, API endpoints, function names, o field names.
- Si un valor es unknown: retornar null o "UNKNOWN". No guess.
- Si un archivo no se leyó: no referenciar su contenido.
- Sistemas downstream rompen con valores alucinados. Precisión sobre completitud.

## Eficiencia de tokens

- Llamadas en pipeline se multiplican.
- Sin texto explicativo en output de agent a menos que un humano lo lea.
- Retornar el mínimo output viable que satisfaga la task.
