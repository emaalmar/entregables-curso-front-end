# 📋 Documentación del Proyecto IA - Clon ChatGPT

## 🎯 Información General del Proyecto

**Nombre:** proyecto-ia  
**Versión:** 0.0.0  
**Tipo:** Módulo ES6  
**Framework Principal:** React 19.1.0 + Vite 7.0.4  

---

## 🛠️ Stack Tecnológico Principal

### Frontend
- **React 19.1.0** - Biblioteca principal para la interfaz de usuario
- **React DOM 19.1.0** - Renderizado del DOM
- **Vite 7.0.4** - Herramienta de construcción y desarrollo
- **Tailwind CSS 4.1.11** - Framework de CSS para estilos

### Herramientas de Desarrollo
- **ESLint 9.30.1** - Linter para calidad de código
- **@vitejs/plugin-react 4.6.0** - Plugin de React para Vite

### Backend/Servidor
- **Express 5.1.0** - Framework para servidor Node.js

### Formularios
- **React Hook Form 7.61.1** - Librería para manejo de formularios

---

## 📦 Dependencias Detalladas

### 🎨 Estilos y UI
```json
{
  "tailwindcss": "^4.1.11",
  "@tailwindcss/vite": "^4.1.11"
}
```
**Propósito:** Framework CSS utility-first para diseño rápido y responsivo
**Configuración:** Integrado directamente con Vite en `vite.config.js`

### 📝 Manejo de Formularios
```json
{
  "react-hook-form": "^7.61.1"
}
```
**Propósito:** Manejo eficiente de formularios con validación
**Características:**
- Validación en tiempo real
- Rendimiento optimizado
- Fácil integración con componentes React

### 🖥️ Backend
```json
{
  "express": "^5.1.0"
}
```
**Propósito:** Servidor web para APIs REST y endpoints
**Uso esperado:** 
- Endpoints para comunicación con IA
- Manejo de solicitudes POST/GET
- Middleware para procesamiento de datos

### ⚛️ React Ecosystem
```json
{
  "react": "^19.1.0",
  "react-dom": "^19.1.0"
}
```
**Versión:** React 19 (última versión estable)
**Características nuevas:**
- Concurrent Features mejoradas
- Automatic Batching
- Mejoras en Server Components

---

## ⚙️ Configuraciones Importantes

### 🔧 Vite Configuration (`vite.config.js`)
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

export default defineConfig({
  plugins: [
    react(),           // Plugin de React
    tailwindcss(),     // Plugin de Tailwind CSS
  ],
})
```

### 📋 ESLint Configuration (`eslint.config.js`)
```javascript
// Configuración moderna de ESLint
- Soporte para JSX
- Reglas de React Hooks
- Plugin de React Refresh para desarrollo
- Ignorar variables no usadas con patrón [A-Z_]
```

**Reglas específicas:**
- `no-unused-vars`: Error con excepción para variables en mayúsculas
- Extensiones: JS recomendado, React Hooks, React Refresh

---

## 📜 Scripts Disponibles

### 🚀 Desarrollo
```bash
npm run dev
```
**Propósito:** Inicia servidor de desarrollo con Hot Module Replacement (HMR)

### 🏗️ Construcción
```bash
npm run build
```
**Propósito:** Construye la aplicación para producción

### 🔍 Linting
```bash
npm run lint
```
**Propósito:** Ejecuta ESLint para revisar calidad del código

### 👀 Preview
```bash
npm run preview
```
**Propósito:** Vista previa de la build de producción

---

## 🏗️ Estructura del Proyecto

```
proyecto-ia/
├── public/                 # Archivos estáticos
├── src/
│   ├── assets/            # Recursos (imágenes, iconos)
│   ├── App.jsx            # Componente principal
│   ├── App.css            # Estilos del App
│   ├── main.jsx           # Punto de entrada
│   └── index.css          # Estilos globales
├── vite.config.js         # Configuración de Vite
├── eslint.config.js       # Configuración de ESLint
├── package.json           # Dependencias y scripts
└── index.html             # Archivo HTML principal
```

---

## 🎨 Configuración de Estilos

### Tailwind CSS 4.x
- **Versión:** 4.1.11 (versión más reciente)
- **Integración:** Directa con Vite
- **Configuración:** Sin archivo `tailwind.config.js` (configuración por defecto)

### CSS Variables Personalizadas
```css
:root {
  color-scheme: light dark;          /* Soporte para modo oscuro */
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
}
```

---

## 🔮 Funcionalidades Planeadas (Según Guía)

### Parte 1 - Base del Proyecto ✅
- [x] Configuración inicial con Vite
- [x] Integración de Tailwind CSS
- [x] Configuración de ESLint
- [x] Input básico y visualización de mensajes

### Parte 2 - Formularios
- [ ] Implementación completa de React Hook Form
- [ ] Validación de datos de entrada
- [ ] Manejo de estado de formularios

### Parte 3 - Integración IA
- [ ] Custom Hook para API de IA
- [ ] useReducer para historial
- [ ] useContext para estado global

### Parte 4-8 - Backend y Database
- [ ] Servidor Express completo
- [ ] Endpoints REST
- [ ] Integración con MongoDB
- [ ] CRUD completo

---

## 🚨 Consideraciones Importantes

### Versiones y Compatibilidad
- **React 19:** Versión más reciente, puede tener cambios importantes
- **Vite 7:** Mayor velocidad de desarrollo y build
- **Tailwind 4:** Nueva arquitectura, posibles breaking changes
- **ESLint 9:** Configuración flat config (nueva sintaxis)

### Buenas Prácticas Implementadas
- ✅ Configuración de linting estricta
- ✅ Soporte para Hot Module Replacement
- ✅ Estructura modular del proyecto
- ✅ Separación de estilos y lógica
- ✅ TypeScript ready (dev dependencies incluidas)

### Próximos Pasos Recomendados
1. **Configurar Tailwind** completamente
2. **Implementar componentes base** para chat
3. **Configurar React Hook Form** para inputs
4. **Crear estructura de carpetas** más detallada
5. **Implementar Custom Hooks** para lógica de IA

---

## 📚 Recursos y Referencias

- [Vite Documentation](https://vite.dev/)
- [React 19 Documentation](https://react.dev/)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/)
- [React Hook Form Documentation](https://react-hook-form.com/)
- [Express.js Documentation](https://expressjs.com/)

---

**Fecha de documentación:** Julio 29, 2025  
**Estado del proyecto:** Inicialización completa ✅
