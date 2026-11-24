# Retos de la sesión 4 · Tiempo de vida y aceleración

Tema 3 · Uso adecuado de los tiempos (3.2) y curvas de aceleración (3.3)

Dos retos para practicar las dos tablas del tema: cuánto dura cada animación y con qué curva.

Abre el archivo `-start.html` de cada reto en el navegador y en el editor. Todo funciona, pero cambia de golpe: tu trabajo es decidir cómo se mueve cada cosa. Los pasos están en un comentario al final del `<style>`. El JavaScript ya está hecho, no hace falta tocarlo.

## Reto 1 · Un panel de ajustes

Archivo: `reto1-start.html`.

Tres interruptores (modo oscuro, notificaciones y sonido) y un botón «Guardar cambios» que muestra un aviso.

1. Los tres interruptores se comportan igual: las duraciones van en variables.
2. El color de la pista cambia como un cambio de estado.
3. La bolita va y vuelve por el mismo camino. Piensa qué curva le toca.
4. Con el modo oscuro, el panel entero cambia de colores.
5. El aviso «Cambios guardados» tiene que verse: entra con una curva de entrada y sale más rápido, con una de salida. Se va solo a los 3 segundos, o antes si pulsas la ×.
6. Con la opción de reducir movimiento activada, el aviso aparece sin desplazarse.

## Reto 2 · Subir una foto

Archivo: `reto2-start.html`.

Al pulsar «Subir foto», tres animaciones encadenadas solo con `transition-delay`:

1. La barra de progreso se llena en 2 segundos a ritmo constante.
2. Cuando la barra termina, aparece el check. Queremos que se note: con un `cubic-bezier` que se pase un poco de tamaño y vuelva.
3. Justo después, aparece «Subida completa».
4. Al pulsar «Subir otra», todo vuelve a su sitio rápido y a la vez, sin esperas.
5. Con la opción de reducir movimiento activada, el check aparece sin crecer.

## Condiciones

- Solo CSS: `transition`, `transition-delay` y custom properties.
- Las duraciones van en variables, en `:root`, para poder cambiarlas en un solo sitio.
- Elige la duración con la Tabla 1 del Tema 3 y la curva con la Tabla 2. Entre los dos retos salen todas las filas de la Tabla 2.

## Pistas

- Cuando un elemento cambia de estado, se aplica la transición del estado al que llega. Por eso la transición de la entrada se escribe en el estado activo (`.aviso.visible`, `.subiendo …`) y la de la salida, en el estado de partida.
- En el reto 2, la duración de la barra puede servir también de retardo para lo que llega después.
- Para encontrar tu `cubic-bezier`, prueba en [cubic-bezier.com](https://cubic-bezier.com).

## Para subir al foro

Tu archivo, o una captura del CSS, y una frase por cada animación: cuánto dura, con qué curva y por qué.

Las soluciones son `reto1.html` y `reto2.html`, en la carpeta `tema03/sesion-04/reto` del GitHub de la asignatura. Inténtalo antes de mirarlas.

Para probar el movimiento reducido sin tocar los ajustes del sistema, en Chrome: F12, Ctrl+Shift+P, escribe «reduced» y elige «Emulate CSS prefers-reduced-motion: reduce». Después recarga la página.
