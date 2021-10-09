# MasterG7
Primer repositorio para experimentación del master

Hola chicos del grupo G7, bienvenidos.
Como introducción, la rama principal quena nombrada como "master" ahí es donde vamos a unificar todos los codigos y archivos que estamos desarrollando.
Esta rama es la entrega final, como si fuera ya producción. 
entonces lo que debemos hacer cada uno es crear una rama en la cual cada quien va a trabajar y las modificaciones irán a organizarse en otra rama llamada desarrollo,
en esta rama "desarrollo" es donde estaremos experimentando las mezclas de nuestros codigos y archivos.

A continuación, usen los siguietes comandos git paso a paso para configurar el acceso local con este acceso remoto.
-- Uso y configuración de mi repositorio local -----------------------------------------------------------------------

$ git version = comando para saber la version del github
$ ls = comando para entrar en la carpeta
$ pwd = comando para saber en que carpena nos encontramos
$ cd nombredecarpeta = comando para entrar a la carpeta o buscar el archivo
  ($ cd /c/Users/USUARIO/....carpeta)
ruta del master https://github.com/NicolasAlemam/MasterG7.git

$ mkdir = comando para crear una nueva carpeta 
$ git config --global user.name = comando para mostrar el usuario en el git a mi nombre propio
$ git config --global user.name "Nicolas Garnica Aleman" = comando para configurar el git a mi nombre propio Solo por primera vez...

$ git config --global user.email = comando para ver el email del git a mi nombre propio
$ git config --global user.emai "nicolasgarnicaaleman@gmail.com" = comando para configurar el git a mi nombre propio Solo por primera vez...

$ git init = Inicializa el repositorio
$ git add . = prepara los archivos para el repositorio local
$ git commit -m "Mensajes" = comando para enviar mensajes al repo

$ clear = comando para limpiar la consola

-----------------------------------------------------------------------------------------------------------------------
-- Uso y configuracion del repositorio remoto -------------------------------------------------------------------------

$ git remote add origin https://github.... = comando para conectarse repositorio remoto, es necesara la url del repo generada. 
ejemplo: 
$ git remote add origin https://github.com/NicolasAlemam/MasterG7.git
$ git push origin master

$ git clone https://github.com/NicolasAlemam/MasterG7.git = Descarga el repositorio de la rama master y abre una nueva carpeta
-----------------------------------------------------------------------------------------------------------------------
-- Desarrollo en ramas ------------------------------------------------------------------------------------------------

$ git branch = muestra las ramas
$ git branch-list = muestra las ramas no funciona en git bash

*master SE IMPRIME ASI.

$ git branch NOMBREDENUEVARAMA = crea otra rama
$ git checkout NOMBREDENUEVARAMA = es obligatorio para trabajar en la rama local ya que de lo contrario sigue en el master
				   sirve para cambiar de una rama a otra

*NOMBREDENUEVARAMA debe imprimir asi para poder trabajar en la rama indicada

$ git status on branch desarrollo

$ git add . = nuevamente 
$ git commit -m "Mensajes" = comando para enviar mensajes al repo

$ git push -u origin ramaNicolas = comando para crear una nueva rama en el repo remoto.
$ git pull https://github.com/NicolasAlemam/MasterG7.git = comando para traer el repo de remoto a local

