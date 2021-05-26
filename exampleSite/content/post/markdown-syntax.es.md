+++
author = "Autores Hugo"
title = "Guía de sintaxis de Markdown"
date = "2019-03-11"
description = "Artículo de muestra que muestra la sintaxis y el formato básicos de Markdown para elementos HTML."
tags = [
    "markdown",
    "css",
    "html",
]
categories = [
    "themes",
    "syntax",
]
series = ["Themes Guide"]
aliases = ["migrate-from-jekyl"]
+++

Este artículo ofrece una muestra de la sintaxis básica de Markdown que se puede utilizar en los archivos de contenido de Hugo, y también muestra si los elementos HTML básicos están decorados con CSS en un tema de Hugo.
<! - más ->

## Encabezados

Los siguientes elementos HTML `<h1>` —` <h6> `representan seis niveles de encabezados de sección. `<h1>` es el nivel de sección más alto mientras que `<h6>` es el más bajo.

# H1
## H2
### H3
#### H4
##### H5
###### H6

## Párrafo

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, templado molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia es sinveli squiatum, core et que aut hariosam ex eat.

## Blockquotes

El elemento blockquote representa contenido que se cita de otra fuente, opcionalmente con una cita que debe estar dentro de un elemento `footer` o` cite`, y opcionalmente con cambios en línea como anotaciones y abreviaturas.

#### Blockquote sin atribución

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
> ** Tenga en cuenta ** que puede usar * sintaxis de Markdown * dentro de una cita en bloque.

#### Blockquote con atribución

> No se comunique compartiendo la memoria, comparta la memoria comunicándose. <br>
> - <cite> Rob Pike [^ 1] </cite>

[^ 1]: La cita anterior es un extracto de la [charla] de Rob Pike (https://www.youtube.com/watch?v=PAAkCSZUG1c) durante el Gopherfest, el 18 de noviembre de 2015.

## Mesas

Las tablas no forman parte de la especificación principal de Markdown, pero Hugo las admite de forma inmediata.

   Nombre | Años
-------- | ------
    Bob | 27
  Alice | 23

#### Inline Markdown dentro de las tablas

| Cursiva | Negrita | Código |
| -------- | -------- | ------ |
| * cursiva * | ** negrita ** | `code` |

## Bloques de código

#### Bloque de código con comillas inversas

`` `html
<! doctype html>
<html lang = "en">
<cabeza>
  <meta charset = "utf-8">
  <title> Documento HTML5 de ejemplo </title>
</head>
<cuerpo>
  <p> Prueba </p>
</body>
</html>
''

#### Bloque de código sangrado con cuatro espacios

    <! doctype html>
    <html lang = "en">
    <cabeza>
      <meta charset = "utf-8">
      <title> Documento HTML5 de ejemplo </title>
    </head>
    <cuerpo>
      <p> Prueba </p>
    </body>
    </html>

#### Bloque de código con el shortcode resaltado interno de Hugo
{{<highlight html>}}
<! doctype html>
<html lang = "en">
<cabeza>
  <meta charset = "utf-8">
  <title> Documento HTML5 de ejemplo </title>
</head>
<cuerpo>
  <p> Prueba </p>
</body>
</html>
{{</ highlight>}}

## Tipos de lista

#### Lista ordenada

1. Primer elemento
2. Segundo elemento
3. Tercer artículo

#### Lista desordenada

* Elemento de lista
* Otro artículo
* Y otro artículo

#### Lista anidada

* Fruta
  * Manzana
  * Naranja
  * Plátano
* Lácteos
  * Leche
  * Queso

## Otros elementos: abbr, sub, sup, kbd, mark

<abbr title = "Graphics Interchange Format"> GIF </abbr> es un formato de imagen de mapa de bits.

H <sub> 2 </sub> O

X <sup> n </sup> + Y <sup> n </sup> = Z <sup> n </sup>

Presione <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd> </kbd> para finalizar la sesión.

La mayoría de las <mark> salamandras </mark> son nocturnas y cazan insectos, gusanos y otras criaturas pequeñas.
