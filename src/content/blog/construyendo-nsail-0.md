---
title: "Construyendo NSail, 0: qué es y por qué lo hago con agentes"
description: "El punto de partida de la serie: un stack .NET para hacer aplicaciones de negocio, y un equipo donde la mayoría no son personas."
date: 2026-10-10
lang: es
series: "Construyendo NSail"
---

Esta es la entrada cero de una serie. Voy a contar cómo se construye NSail, con los aciertos y con las cagadas, a medida que pasan.

## Qué es

NSail es un stack para construir aplicaciones de negocio en .NET. Tiene tres capas, y la separación es estricta:

- el **Stack**: el framework. Datos, mensajería, telemetría, UI. No sabe nada del negocio;
- los **Kits**: dominio reutilizable. Contabilidad, agenda, tickets, identidad, productos, historia clínica. Cualquier app los combina;
- las **Apps**: lo que ve un cliente. Hoy, un sistema para ópticas y otro para consultorios de terapia.

El Stack se publica como paquetes NuGet versionados, con licencia MIT. La idea es que a fin de año sea un proyecto abierto de verdad, con su repo y su historia, no un dump de código.

Técnicamente: .NET 10, Blazor, EF Core, un mediator para los mensajes, y generadores de Roslyn que a partir de una clase de mensaje producen el endpoint, el mapper y el registro en DI. Escribir menos código no es una frase: es la métrica.

## Por qué con agentes

Porque somos pocos. NSail lo hago yo, y el trabajo de rutina lo hace una tripulación de agentes con nombre y rol: uno analiza las historias, otro las construye, otro las revisa en frío, otro las recorre en un navegador real cuando salen a test. Cada uno firma lo que escribe.

Lo que aprendí hasta ahora, y que va a aparecer en la serie:

- **La cola es un tablero de issues**, no un chat. Una historia tiene un estado, un dueño por etiqueta y un solo camino: Backlog, Analyze, Ready, In‑Progress, Merged, Released, QA, Closed. Los agentes leen etiquetas, no personas.
- **Nada se rompe dos veces.** Un parche vale una vez. La segunda vez que algo falla igual, se arregla la causa, no el síntoma.
- **La doctrina está escrita.** Cada parte del código tiene su documento, y un agente lee el suyo antes de tocar algo. No es burocracia: es la única forma de que diez sesiones distintas escriban como una.
- **Todo happy path tiene su test E2E.** Si no se puede recorrer en un navegador, no está terminado.

## Qué viene

Historias concretas: cómo se arma una historia para que un agente la pueda construir sin preguntar; qué pasó cuando un runner compartía el árbol de trabajo con otro; por qué los agentes tienen un modelo distinto según el rol; y cuánto cuesta, en plata, mover una historia de punta a punta.

Si algo de esto te sirve o te parece un disparate, escribime. Lo segundo me interesa más.
