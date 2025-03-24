# React + Vite

Como aclaración general la idea principal de la web es poder registrarte, para tener tu propio equipo pokemon, y poder modificarlo a tu antojo dentro de las posibilidades que te de la propia web, en este caso la base de datos previamente hecha, además de obviamente tener control sobre los datos de tu perfil y actualizarlos si fuese necesario.

Al estar hecha con una base de datos local, obviamente también cuenta con endpoints de creación de pokemons, como mejora al futuro lo ideal sería tener una base dinámica o traer los porpios pokemons de una api externa.

Fallo a destacar, pocos commits dentro del proyecto por no saber establecer bien un orden dentro del proyecto a la hora quizás de establecer ciertos items o 
una hpja de ruta como tal, para seguir una guía.

Explicación front:

Proyecto hecho con React.js, se usan hooks como useNavitage para la navegación entre páginas, useState para establecer unos valores "vacíos" normalmente de base
para así poder modificarlos a lo largo de la funcionalidad del proyecto, useEffect para la carga de ciertos datos en momentos puntuales a la hora de realizar
diferentes funciones dentro de la página conectadas con el back, uso de redux para el manejo del estado global en ciertas partes del proyecto

Dentro del mismo se han usado tecnologías como vite, react, algo de javascript, css y un poco de html básico

Para la correcta visualización de este tendremos que ejecutar códigos por consola como los siguientes:

- Teniendo las dependencias: npm i / npm run dev

- En el caso de no tenerlas: npm install react react-dom react-redux redux react-router-dom / npm install vite --save-dev / npm run dev



Explicación back:

Proyecto con Node.js para la creación de unas bases de datos diferentes, nos encontramos con 2 modelos principales, uno de usuarios con sus endpoints necesarios para crear usuarios y poder logearlos a través de comprobaciones hechas entre front y back, además dentro del esquema de usuarios estos pueden editar sus datos, añadir pokemons (del otro esquema) a su equipo, eliminarlos del mismo, todo esto en relación entre front-back para que la BD se actualize conforme se hagan las acciones elegidas, básicamente confiurada la web para hacer un CRUD (Create, Read ,Update, Delete)completo, hay verificacion a través del token para poder hacer tanto el logueo como el registro, además de para la eliminación y adición de pokemons al team.

Dentro del archivo secret.js creamos las palabras secretas, para posteriormente poder usar la lógica del token en front-back, lo dejo visible para ver la forma de creación, sabiendo lo que esto conlleva, ese archivo debería borrarse una vez configurado, dentro del .env guardaremos tanto la URL como los tokens.

En el back comot al se han usado tecnologías como: Bcrypt, Cors, Dotenv, Express, Jsonwebtoken, Mongoose, Nodemon, para la instalación de las mismas sería necesario ejecutar estos comandos:

- En el caso de tenerlas: npm i, npm run dev

- En el caso de no tener dependencias: npm install bcrypt cors dotenv express jsonwebtoken mongoose / npm install --save-dev nodemon / npm run dev

*Dentro del proyecto podrás encontrar una imagen llamada RESUMEN.png donde habrá un pequeño esquema definiendo las rutas que sigue la propia web.


