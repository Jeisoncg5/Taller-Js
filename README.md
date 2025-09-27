Jeison Leonardo Cristancho Garcia J3

# 📝 Taller de JavaScript – Ejercicios Prácticos

Este taller contiene retos cortos para practicar **lógica** y **estructuras de datos** en JavaScript,
con una versión *interactiva en navegador* (usa `prompt`/`alert`) y una versión *funcional* (solo funciones puras)
para facilitar pruebas y reutilización.

---

## 📁 Estructura del proyecto

```
taller-js/
├─ docs/
│  └─ Ejercicios.pdf
├─ ejercicios/
│  ├─ 01-codice-arkanus/
│  │  ├─ solution.js            # decodeSpell(simbolos)
│  │  └─ interactive.html       
│  ├─ 02-archivos-comprometidos/
│  │  ├─ solution.js            # getCompromisedFiles(lastSafeDownload, droneLogs)
│  │  └─ interactive.html
│  ├─ 03-frases-plagiadas/
│  │  ├─ solution.js            # detectarPlagio(base, frasesEstudiante)
│  │  └─ interactive.html
│  ├─ 04-frutas-envasadas/
│  │  ├─ solution.js            # frutaEmpacadaCorrectamente(entrada, salida)
│  │  └─ interactive.html
│  ├─ 05-habilidades-compatibles/
│  │  ├─ solution.js            # candidatosCompatibles(oferta, candidatos)
│  │  └─ interactive.html
│  ├─ 06-portales-fuera-de-fase/
│  │  ├─ solution.js            # portalFueraDeFase(codigos)
│  │  └─ interactive.html
│  └─ 07-anagramas/
│     ├─ solution.js            # esAnagrama(a, b)
│     └─ interactive.html                                              
└─ README.md
```

---

## 🛠️ Tecnologías utilizadas

- **JavaScript (ES6+)** – funciones puras y lógica de datos.
- **HTML5** – páginas mínimas para pruebas con `prompt`/`alert`.
- **Navegador moderno** (Chrome/Edge/Firefox) – ejecución de los ejemplos interactivos.
- **VS Code (recomendado)** + extensiones opcionales:
  - *ESLint* / *Prettier* (estilo de código)
  - *Live Server* (recarga rápida de `interactive.html`)

---

## 🚀 Cómo ejecutar

### Consola 
1. Abre terminal en la carpeta del ejercicio.

2. Ejecuta clonando el repositorio.

---

## 📚 Lista de ejercicios

- **01 – El códice de Arkanus:** `decodeSpell(simbolos)`  
  Reglas de suma/resta de símbolos; símbolo desconocido → `NaN`.

- **02 – Archivos comprometidos:** `getCompromisedFiles(lastSafeDownload, droneLogs)`  
  IDs únicos modificados después del timestamp; orden ascendente.

- **03 – Frases plagiadas:** `detectarPlagio(base, frasesEstudiante)`  
  Normaliza por espacios extremos, signos finales (`. ! ?`) y mayúsculas.

- **04 – Frutas envasadas:** `frutaEmpacadaCorrectamente(entrada, salida)`  
  Verificación LIFO con una **pila** (stack).

- **05 – Habilidades compatibles:** `candidatosCompatibles(oferta, candidatos)`  
  70% de match (redondeo hacia abajo), sin distinción de mayúsculas; IDs ordenados.

- **06 – Portales fuera de fase:** `portalFueraDeFase(codigos)`  
  Índice del primer carácter con frecuencia 1; `-1` si todos se repiten.

- **07 – Anagramas:** `esAnagrama(a, b)`  
  Comparación por conteo de letras; insensible a mayúsculas.

---

## ✅ Objetivos de aprendizaje

- Manipulación de **strings** y **arrays** .
- Diseño de **funciones puras** y pruebas en distintos entornos .
- Mejores prácticas de legibilidad y estructura de proyecto.

---

