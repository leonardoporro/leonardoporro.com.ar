---
title: "Tu código no te quiere de vuelta"
description: "Sobre la palabra 'overengineering' usada como excusa, los frenos de un auto, y lo que pasa cuando una base sólida empieza a devolver."
date: 2025-09-08
lang: es
canonical: https://www.linkedin.com/pulse/your-code-doesnt-love-you-back-leonardo-porro-hy4df/
---

Hace unos días leí un post de un desarrollador con mucho kilometraje: "Lo que aprendí en 20 años como dev". El último punto se me quedó pegado (y me horrorizó un poco): *"Tu código no te quiere de vuelta"*.

Y acá viene la vuelta de tuerca: hoy casi cualquier intento de escribir código limpio y bien estructurado se gana la etiqueta de "overengineering" o de "no mantenerlo simple".

Demasiado seguido, "overengineering" es la excusa para:

- código lento, enredado, repetido;
- promesas de "lo sacamos rápido y refactorizamos después" que nunca llegan;
- bases de código que asustan a los seniors… y hasta a las IA más capaces.

Otro mito, el del refactor: "si funciona, no lo toques". Imaginate que tu auto frena bien en el semáforo. Después el mecánico te dice que hay una pérdida de líquido de frenos. ¿Lo dejás así? Al fin y al cabo sigue frenando, ¿no?

Si tu arquitecto tiene el coraje de decir que una pieza de código es basura, dale los recursos para arreglarla. No hacerlo te va a costar mucho más después.

## Overengineering y underengineering

El rol del arquitecto es:

- construir librerías y servicios compartidos;
- administrar las dependencias de terceros;
- reducirle la complejidad técnica a los devs.

Cuanto más fuerte esa base, más mantenible el sistema. Pero esa inversión suele ser invisible para PMs y clientes. (Tuve más de una discusión acalorada por esto.)

Ponerle frenos de Ferrari a un auto familiar es overengineering. Ponerle frenos realmente buenos, no. El estéreo con pantalla táctil no sirve de nada si no llegaste a frenar a tiempo.

Los frenos están escondidos, poca gente sabe cómo funcionan, y son críticos.

Un buen sistema de frenos no es overengineering. Un framework sólido sobre el cual construir, tampoco.

Con el tiempo, los procesos bien diseñados se estabilizan:

- los componentes se estandarizan;
- los bugs se arreglan en minutos;
- las features salen en horas (bueno… a veces justo antes de la demo).

Y cuando eso pasa… ese es mi código queriéndome de vuelta.

Querelo a tu código si querés que te quiera de vuelta.
