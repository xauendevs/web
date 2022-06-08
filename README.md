# ¿Quieres colaborar en la web?

Si quieres puedes colaborar en nuestra web, bien creando una sección, subiendo un post o algo que veas que se puede mejorar.

Nuestra web está con [Next.js](https://nextjs.org), framework de **React**. Para agregar algo a nuestra web deberás clonarte el repositorio, **CREAR UNA RAMA** y trabajar en ella para luego hacer una PR.

Todo lo que suba será revisado por nuestros organizadores y serán los que aprueben o no tus cambios.

Si necesitas una integración con terceros mediante algún token, apikey o similar... **¡¡no lo subas y háznoslo saber por privado!!**

## Si lo que quieres es publicar un post...

Los post que hay publicados en nuestra web son en formato markdown y tienes que seguir ciertas normas a la hora de subir tu código, por lo que, a continuación te las indicamos:

### Crear rama
Esta rama deberá tener el prefijo **newpost_** y agregar el nombre de tu post, coincidiendo con el nombre del fichero. ej: *newpost_mi_nuevo_post*

### Nombre del fichero

El nombre del fichero será lo que usaremos como slug de tu post, así que aqui tienes el **formato que debes utilizar** para post

```bash
mi-nuevo-post.md
```

### Metadatos

La cabecera del post debe de llevar cierta información que se utilizará para pintarlos en nuestra web. Te ponemos un ejemplo de la cabecera.

```bash
---
title: 'Titulo'
metaTitle: 'Titulo'
author: 'Tu nombre o el que quieras q aparezca'
metaDesc: 'Descripción corta de tu post'
image: nombre_de_la_imagen.png
date: 'fecha con formato yyyy-mm-dd'
tags:
  - etiqueta 1
  - etiqueta 2
  - etiqueta n
---
```

A continuación ya podrás agregar tu contenido en formato Markdown, teniendo en cuenta que, por ejemplo, las imagenes deberán de ser una url externa o bien meter las imágenes dentro del directorio _public/img/posts_.

Una vez tengas todo, súbelo a tu nueva rama y alguno de los organizadores lo revisaremos, si fuese necesario se harán comentarios en la propia pullrequest con cambios sugeridos o el motivo del rechazo.

### Antes de todo esto... ¡GRACIAS POR LLEGAR AQUÍ Y SI HAS COLABORADO MIL GRACIAS MÁS!
