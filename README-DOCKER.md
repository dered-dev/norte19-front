# City Express - Frontend Docker Setup (DESARROLLO)

## ⚠️ AMBIENTE DE DESARROLLO

Este frontend está configurado completamente para **DESARROLLO LOCAL**:
- ✅ Vite dev server (hot reload habilitado)
- ✅ NODE_ENV=development
- ✅ Sin optimizaciones de producción
- ✅ Source maps habilitados
- ✅ Cambios en código se reflejan automáticamente

**NO usar esta configuración en producción.**

---

## 📋 Requisitos Previos

- Docker o Podman instalado
- Backend (Strapi) ejecutándose en `http://localhost:1337`

## 🚀 Inicio Rápido

### 1. Verificar Variables de Entorno

El archivo `.env` ya está configurado con:

```bash
# URL del backend Strapi (sin /api al final)
VITE_APP_BASE_URL=http://localhost:1337

# Token de API de Strapi (ya pre-configurado)
VITE_APP_TOKEN=d13dba34233c4dfc6301abb3d10312e369fd6ad7968ca44b6fde447fc11845fb...
```

**✅ NO necesitas cambiar nada**, el token ya está sincronizado con el backend.

### 2. Construir y Ejecutar

```bash
# Con Docker
docker compose up -d --build

# Con Podman
podman compose up -d --build
```

### 3. Acceder a la Aplicación

Abre tu navegador en: **http://localhost:3000**

## 🔧 Comandos Útiles

### Ver logs del contenedor
```bash
docker logs cityexpress_frontend
# o
podman logs cityexpress_frontend
```

### Detener el contenedor
```bash
docker compose down
# o
podman compose down
```

### Reconstruir imagen
```bash
docker compose up -d --build
# o
podman compose up -d --build
```

## 🏗️ Arquitectura de Desarrollo

El frontend usa **Vite Dev Server** con:

### Características del Modo Desarrollo

- ✅ **Hot Module Replacement (HMR)**: Los cambios se reflejan instantáneamente
- ✅ **NODE_ENV=development**: Variables de desarrollo activas
- ✅ **Source Maps**: Debugging fácil en el navegador
- ✅ **Volúmenes montados**: Edita código y se recarga automáticamente
- ✅ **Sin build**: Archivos servidos directamente desde src/
- ✅ **Fast Refresh**: React se recarga sin perder estado

### Dockerfile

Usa `Dockerfile.dev` que:
1. Instala dependencias con npm ci
2. Ejecuta `npm run dev -- --host 0.0.0.0`
3. Expone puerto 3000
4. Monta volúmenes de src/ y public/ para hot reload

## 📝 Configuración Actual

- ✅ **Modo:** Desarrollo (NODE_ENV=development)
- ✅ **Server:** Vite dev server
- ✅ **Puerto contenedor:** 3000 → **Puerto host:** 3000
- ✅ **Hot reload:** Habilitado (volúmenes montados)
- ✅ **Variables:** Inyectadas via docker-compose.yml
- ✅ **Token API:** Pre-configurado y sincronizado con backend

## 🐛 Troubleshooting

### Error de conexión con el backend
Verifica que:
- El backend Strapi esté ejecutándose en `http://localhost:1337`
- El token de API sea válido (ya está pre-configurado)
- La variable `VITE_APP_BASE_URL` sea `http://localhost:1337` (sin `/api`)

### Los cambios NO se reflejan automáticamente
En modo desarrollo deberían reflejarse automáticamente. Si no:
1. Verifica que los volúmenes estén montados en `docker-compose.yml`
2. Revisa los logs: `docker logs -f cityexpress_frontend`
3. Haz hard refresh en el navegador: `Ctrl+Shift+R`

### Frontend muestra loader infinito
1. Verifica que el backend esté corriendo: `docker ps | grep strapi`
2. Verifica las variables de entorno dentro del contenedor:
   ```bash
   docker exec cityexpress_frontend sh -c 'echo $VITE_APP_BASE_URL'
   ```
3. Abre la consola del navegador (F12) y busca errores HTTP

### Error: "npm install" tarda mucho
Es normal la primera vez (instalando ~1387 paquetes). Las siguientes veces será más rápido gracias al cache de Docker.

### Problemas después de cambiar .env
Si cambias variables en `.env`, debes **recrear** el contenedor:
```bash
docker compose down
docker compose up -d
```

**⚠️ Importante:** Un simple `restart` NO recarga las variables de entorno.

---

## 🚀 Para Producción (Futuro)

Cuando necesites desplegar en producción:
1. Crea un `Dockerfile` (sin .dev) con multi-stage build
2. Stage 1: Build con `npm run build`
3. Stage 2: Sirve con Nginx
4. Cambia `NODE_ENV=production`
5. Habilita compresión GZIP
6. Configura cache headers
7. Usa el archivo `nginx.conf` incluido en el proyecto
