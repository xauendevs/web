---
title: 'Configurando VS Code para C++'
metaTitle: 'Configurando VS Code para C++'
author: 'Alejandro Charte Luque'
metaDesc: 'Configurando VS Code para C++'
image: header_configurando_vscode_para_cpp.png
date: '2022-06-06'
tags:
  - vscode
  - c++
---

# Configurando el entorno

Para estos tutoriales usaré [Visual Studio Code](https://code.visualstudio.com/) junto con las extensiones [C++](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools) y [Easy C++ Projects](https://marketplace.visualstudio.com/items?itemName=ACharLuk.easy-cpp-projects).

## Descargando Visual Studio Code

Lo primero que necesitaremos es un editor de código o IDE, personalmente yo utilizo Visual Studio Code (o VSC para acortar) porque es ligero como Sublime, pero tiene características típicas de IDEs, en concreto Intellisense. Puedes descargar Visual Studio Code [aquí](https://code.visualstudio.com/), te aparecerá una página como ésta:
![](https://raw.githubusercontent.com/acharluk/UsefulStuff/master/programming/C%2B%2B/images/1/1_vscode_website.png)

Haz click en el botón de descarga y espera unos segundos a que comience.

---

## Configurando VSC para desarrollo en C++

La primera vez que abres VSC verás una página de bienvenida. VSC tiene un diseño muy simple: una barra a la izquierda con cinco botones (Explorador de archivos, Búsqueda, Git, Depuración, Extensiones), una barra de estado en la parte de abajo y una ventana con pestañas en la cual se irán abriendo los editores. Haz click en el último boton para abrir Extensiones:
![](https://raw.githubusercontent.com/acharluk/UsefulStuff/master/programming/C%2B%2B/images/1/2_searching_extensions.png)

Para desarrollar C++ instalaremos dos extensiones, la primera es C/C++, que aparece en la imagen anterior, para instalarla simplemente haz click en el boton verde que dice `Install`:
![](https://raw.githubusercontent.com/acharluk/UsefulStuff/master/programming/C%2B%2B/images/1/3_cpp_extension_install.png)

Después, buscaremos "easy c++" e instalaremos la extensión llamada "Easy C++ Projects"
![](https://raw.githubusercontent.com/acharluk/UsefulStuff/master/programming/C%2B%2B/images/1/4_easy_cpp_extension_install.png)

---

## Configuración terminada

Tras instalar las extensiones, aparecerá un botón azul que dice `Reload`, al pulsarlo la ventana se recargará y activará las extensioes que acabamos de instalar:
![](https://raw.githubusercontent.com/acharluk/UsefulStuff/master/programming/C%2B%2B/images/1/5_extensions_installed.png)

Buen trabajo! Ahora tenemos un entorno para desarrollar nuestro primer proyecto en C++!

---

# Comenzando nuestro primer proyecto

Después de haber configurado VSC para desarrollar C++, solo necesitamos crear un nuevo proyecto! Esto se hace en unos pocos pasos:

## Creando una carpeta para el proyecto

Para crear la carpeta del proyecto, ve a File > Open folder (o usa el atajo [Ctrl+K Ctrl+O]), una ventana aparecerá para seleccionar la carpeta deseada:
![](https://raw.githubusercontent.com/acharluk/UsefulStuff/master/programming/C%2B%2B/images/2/1_opening_working_folder.png)

Crea una nueva carpeta y pulsa "Select folder", la ventana de diálogo se cerrará y VSC se recargará para abrir la nueva carpeta que acabamos de crear.

---

## Creando un proyecto C++

Pulsa F1, una pequeña ventana aparecerá con distintos comandos, busca "c++" y haz click en "Create new C++ project":
![](https://raw.githubusercontent.com/acharluk/UsefulStuff/master/programming/C%2B%2B/images/2/2_creating_cpp_project.png)

Ahora nos preguntará qué compilador queremos usar, lee la página de la extensión Easy C++ para más información sobre como configurar un compilador para tu sistema operativo. Yo usaré Windows Subsystem for Linux
![](https://raw.githubusercontent.com/acharluk/UsefulStuff/master/programming/C%2B%2B/images/2/3_creating_cpp_project_2.png)

![](https://raw.githubusercontent.com/acharluk/UsefulStuff/master/programming/C%2B%2B/images/2/4_compiler_setup.png)

---

## Código!

Al finalizar la configuración del proyecto, VSC generará la estructura del proyecto por nosotros, y abrirá el archivo `main.cpp` con código de ejemplo:
![](https://raw.githubusercontent.com/acharluk/UsefulStuff/master/programming/C%2B%2B/images/2/5_main_cpp.png)

Para probar que el proyecto funciona, pulsa el botton `Build & Run` que hay en la barra de estado, una terminal se abrirá, compilará el proyecto y ejecutará nuestro programa por primera vez!
![](https://raw.githubusercontent.com/acharluk/UsefulStuff/master/programming/C%2B%2B/images/2/6_first_run.png)
