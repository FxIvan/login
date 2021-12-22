## Funcionamiento
>Es un Login echo con React y además utilizamos json-server para levantar un servidor, package como universal-cookie, axios my md5, el como funciona es
>lo siguiente, ponemos una clave y usuario mencionadas más abajo, si esta clave y usuario funciona esta permite un inicio de sesión pero si se equivoca 
>este aparece un mensaje que dice "contraseña incorrecta"
**Dentro de Login**
>Una vez dentro del Login aparecerá el nombre de usuario que inicio sesión, sus criptomonedas y alguna información de sus país como la capital y el presidente.
>Solo se puede cerrar sesión haciendo clic en cerrar sesión, si estás dentro de la sesión no podrás volver atrás hasta que cierres sesión.

## Levantar Servidor dentro de la Consola 
ponemos  **json-server --watch dbUsuarios.json --port 3001**
>Tiene que ser desde una consola externa y no dentro del visual studio code, además ponemos un puerto
>diferente ya que el puerto 3000 que está por defecto lo está utilizando react

## Usuario y contraseña para probar
1. usuario: **osito** contraseña:**2542**
2. usuario:**ivan** contraseña:**2545**
3. >Esto dos usuario y contraseña sirven para entrar dentro del login ya que está guardado dentro del JSON

### Diseño de Login ###
>el diseño es basico ya que lo que busco que practicar es con react
##Login##
![imagen1]https://github.com/FxIvan/login/blob/main/imgReadme/login1.png?raw=true

##Dentro de la Sesion##
![imagen2](https://github.com/FxIvan/login/blob/main/imgReadme/dentrodeLogin.png?raw=true)



