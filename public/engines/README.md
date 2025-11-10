# Motores de Juego Compartidos

Colocá aquí los archivos comunes de los motores de juego que son referenciados por múltiples juegos HTML.

## Motores utilizados:

- **TIC-80**: Archivos JavaScript, WebAssembly o recursos compartidos del motor TIC-80
- **Bitsy**: Archivos JavaScript o recursos del motor Bitsy
- **Otros**: Cualquier biblioteca o motor compartido por varios juegos

## Ejemplo:
\`\`\`
/public/engines/
  ├── tic80/
  │   ├── tic80.js
  │   └── tic80.wasm
  └── bitsy/
      └── bitsy.js
\`\`\`

Si tus juegos HTML referencian archivos del motor (ej: `<script src="/engines/tic80/tic80.js"></script>`), colocá esos archivos aquí.
