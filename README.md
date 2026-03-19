# pagina_web

## Curación de contenido de Instagram

Se agregó un pipeline para leer una exportación JSON de Instagram, aprovechar imágenes sueltas dentro de `data/instagram`, filtrar contenido útil para una web comercial y generar una galería lista para usar.

### Qué hace

- Incluye imágenes con señales comerciales de:
  - productos (`tortas`, `facturas`, `café`, `viandas`, etc.)
  - servicios (`catering`, `eventos`, `mesas dulces`, `coffee breaks`)
  - local (`terraza`, `mostrador`, `salón`, `ambiente`)
- Excluye:
  - videos
  - stories sin contexto comercial
  - promociones con precios o texto vencible
  - contenido sin señales claras de uso comercial

### Comando

```bash
npm run instagram:build
```

### Ruta esperada del export

Por defecto el script busca los JSON en:

```bash
data/instagram
```

También se puede sobrescribir con una variable de entorno:

```bash
INSTAGRAM_EXPORT_DIR=/ruta/al/export npm run instagram:build
```

### Archivos generados

- `data/instagram-gallery.generated.json`: manifiesto curado y clasificado.
- `app/instagram-media/[...path]/route.ts`: ruta que sirve las imágenes directamente desde `data/instagram` sin versionar binarios en la PR.

Si el export JSON no trae todos los archivos referenciados, el script también puede usar imágenes sueltas organizadas en carpetas como `terraza`, `mostrador`, `catering` o `decoracion`.

### Uso en la web

La home consume automáticamente el manifiesto generado para:

- elegir imágenes candidatas para `Inicio`
- poblar bloques de `Productos`
- poblar bloques de `Servicios`
- renderizar la `Galería`
