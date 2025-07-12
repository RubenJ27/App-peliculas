# 🎬 App-películas

Una aplicación web moderna para descubrir y explorar información sobre películas, construida con React, TypeScript y Redux Toolkit.

[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR-BADGE-ID/deploy-status)](https://page-to-see-movie-information.netlify.app/)

## 📋 Características

- 🔍 Búsqueda de películas en tiempo real
- 📱 Diseño responsive con Tailwind CSS
- 🎯 Gestión de estado con Redux Toolkit
- 🚀 Construido con Vite para un rendimiento óptimo
- ✅ Testing con Jest y React Testing Library
- 🔄 CI/CD con GitHub Actions y Netlify

## 🛠️ Tecnologías

- React 18
- TypeScript
- Redux Toolkit
- React Router v6
- Tailwind CSS
- Jest
- Vite
- Axios

## 🚀 Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/RubenJ27/App-peliculas.git
   ```

2. Instala las dependencias:

   ```bash
   cd App-peliculas
   npm install
   ```

3. Crea un archivo `.env` en la raíz del proyecto con tus credenciales de API:

   ```env
   VITE_APP_API_KEY=tu_api_key_aquí
   VITE_APP_API_HOST=api.themoviedb.org
   ```

4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## 📚 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Crea la build de producción
- `npm test` - Ejecuta los tests con coverage
- `npm run lint` - Ejecuta el linter
- `npm run format` - Formatea el código

## 🧪 Testing

El proyecto incluye tests unitarios y de integración usando Jest y React Testing Library. Los tests se ejecutan automáticamente en cada PR y deben pasar antes del deploy.

Para ejecutar los tests localmente:

```bash
npm test
```

## 📦 Estructura del Proyecto

```
src/
├── api/          # Configuración de axios y endpoints
├── components/   # Componentes reutilizables
├── pages/        # Componentes de página
├── store/        # Configuración de Redux y slices
├── models/       # Interfaces y tipos
└── __tests__/    # Tests
```

## 🌟 Versiones

### Versión 2.0

- Nueva interfaz de usuario
- Integración con TMDb API
- Sistema de búsqueda mejorado
  [Ver detalles](https://github.com/RubenJ27/App-peliculas/commit/b079b5f7ad8a24ba1fc07c99bb1d12455565bad3)

### Versión 1.0

- Lanzamiento inicial
- Funcionalidad básica de búsqueda
  [Ver detalles](https://github.com/RubenJ27/App-peliculas/commit/55b21cdec1fcd286eae4199f922dd738aecace7b)

## 🔗 Enlaces

- [Demo en vivo](https://page-to-see-movie-information.netlify.app/)
- [Documentación de la API](https://developers.themoviedb.org/3)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE.md](LICENSE.md) para detalles

## ✨ Contribuir

Las contribuciones son bienvenidas. Por favor, lee [CONTRIBUTING.md](CONTRIBUTING.md) para detalles sobre nuestro código de conducta y el proceso para enviarnos pull requests.

---

⭐️ Si te gusta este proyecto, ¡no olvides darle una estrella en GitHub!
