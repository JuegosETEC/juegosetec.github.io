# Carpeta Public - Archivos Estáticos

Esta carpeta contiene todos los archivos estáticos del proyecto que se sirven directamente.

## Estructura del proyecto:

\`\`\`
/public/
├── 2022/          # Juegos del año 2022
│   ├── *.html     # Archivos HTML de los juegos
│   └── thumbs/    # Miniaturas de los juegos
├── 2023/          # Juegos del año 2023
│   ├── *.html
│   └── thumbs/
├── 2024/          # Juegos del año 2024
│   ├── *.html
│   └── thumbs/
├── 2025/          # Juegos del año 2025
│   ├── *.html
│   └── thumbs/
├── engines/       # Motores de juego compartidos (TIC-80, Bitsy, etc.)
└── assets/        # Recursos compartidos (fuentes, audio, imágenes)
\`\`\`

## Cómo agregar juegos:

1. Colocá el archivo HTML del juego en la carpeta del año correspondiente (ej: `/public/2024/mi-juego.html`)
2. Colocá la miniatura en la subcarpeta `thumbs` del mismo año (ej: `/public/2024/thumbs/mi-juego.gif`)
3. Si el juego usa archivos del motor compartidos, colocálos en `/public/engines/`
4. Actualizá el código en `components/game-gallery.tsx` para agregar el nuevo juego a la lista

## Rutas de acceso:

Los archivos en esta carpeta son accesibles directamente desde la raíz del sitio:
- `/2024/mi-juego.html` → sirve el archivo `public/2024/mi-juego.html`
- `/2024/thumbs/mi-juego.gif` → sirve el archivo `public/2024/thumbs/mi-juego.gif`
