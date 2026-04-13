# Guía de Despliegue en Unilibre 🚀

## Opción 1: Desplegar en Vercel (Recomendado)

Vercel es el mejor servicio para desplegar aplicaciones React de forma gratuita.

### Pasos:

1. **Ve a Vercel**: https://vercel.com

2. **Importa tu repositorio**:
   - Click en "New Project"
   - Conecta tu cuenta de GitHub
   - Selecciona el repositorio `quiz2`

3. **Configura el proyecto**:
   - Framework: React
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: `build`

4. **Haz clic en Deploy** ✅

Tu aplicación estará en vivo en minutos.

---

## Opción 2: Desplegar en Netlify

1. **Ve a Netlify**: https://netlify.com

2. **Conecta GitHub**:
   - Click "New site from Git"
   - Autoriza Netlify con tu GitHub
   - Selecciona el repositorio

3. **Configura**:
   - Build command: `npm run build`
   - Publish directory: `build`

4. **Deploy** ✅

---

## Opción 3: Ejecutar Localmente

```bash
# Clonar
git clone https://github.com/alejandra070319/quiz2.git
cd quiz2

# Instalar dependencias
npm install

# Iniciar desarrollo
npm start

# Abrir en navegador
http://localhost:3000
```

---

## Opción 4: Construir y Servir

```bash
# Construir para producción
npm run build

# Instalar servidor
npm install -g serve

# Servir la aplicación
serve -s build
```

---

## Variables de Entorno

Si necesitas variables de entorno, crea un archivo `.env.local`:

```
REACT_APP_API_URL=https://api.example.com
REACT_APP_VERSION=1.0.0
```

---

## Solución de Problemas

### Puerto 3000 en uso
```bash
PORT=3001 npm start
```

### Limpiar caché
```bash
rm -rf node_modules package-lock.json
npm install
```

### Construir fallando
```bash
npm cache clean --force
npm run build
```

---

## Información de Contacto

Para más ayuda:
- Email: info@unilibre.com
- GitHub: https://github.com/alejandra070319/quiz2

¡Gracias por usar Unilibre! 🎉
