# CEPRETEC IEST Pasco

Sitio web estático del Instituto Superior Tecnológico Público Pasco, listo para publicarse en **GitHub Pages**.

## Cómo publicarlo

1. Crea un repositorio en tu cuenta de GitHub (por ejemplo `cepretec-iest-pasco`).
2. Sube todos los archivos de esta carpeta (incluido `.nojekyll`).
3. En el repositorio: **Settings → Pages**.
4. En **Source** elige **Deploy from a branch**.
5. Branch: `main` (o `master`) y carpeta `/ (root)`.
6. Guarda. En uno o dos minutos la web estará en:

`https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`

Si el repositorio se llama `TU-USUARIO.github.io`, la web quedará en la raíz:

`https://TU-USUARIO.github.io/`

## Vista local

Abre `index.html` en el navegador o, en esta carpeta:

```bash
npx --yes serve .
```

## Contenido

- Inicio con el diseño de referencia
- Nosotros, Programas, CEPRETEC, Información, Contacto, Login y Noticias
- HTML, CSS y JavaScript (sin servidor), compatible con GitHub Pages
