# TrabajoPractico-VirtualDreams
# Ejercicio 2
1.¿Qué es un servidor HTTP? 
Un servidor HTTP es un programa informático que procesa una aplicación del lado del servidor, realizando conexiones bidireccionales o unidireccionales y síncronas o asíncronas con el cliente y generando o cediendo una respuesta en cualquier lenguaje o aplicación del lado del cliente. El código recibido por el cliente es renderizado por un navegador web. Para la transmisión de todos estos datos suele utilizarse algún protocolo. Generalmente se usa el protocolo HTTP para estas comunicaciones, perteneciente a la capa de aplicación del modelo OSI. El término también se emplea para referirse al ordenador.
2.¿Qué son los verbos HTTP? Mencionar los más conocidos
HTTP define un conjunto de métodos de petición para indicar la acción que se desea realizar para un recurso determinado. Aunque estos también pueden ser sustantivos, estos métodos de solicitud a veces son llamados HTTP verbs.
Los mas conocidos son : GET ,HEAD ,POST ,PUT ,DELETE ,CONNECT ,OPTIONS ,TRACE ,PATCH
3.¿Qué es un request y un response en una comunicación HTTP? ¿Qué son los headers? 
El comando HTTP Request permite enviar todo tipo de petición HTTP a un URL específico y procesar la respuesta del servidor HTTP.
La respuesta o HTTP response es el mensaje que envía el servidor al cliente tras haber recibido una petición o HTTP request.
Las cabeceras HTTP permiten al cliente y al servidor enviar información adicional junto a una petición o respuesta. Una cabecera de petición esta compuesta por su nombre seguido de dos puntos :, y a continuación su valor.
4.¿Qué es un queryString? (En el contexto de una url)
es un termino que se utiliza para hacer referencia a una interacción con una base de datos.Es la parte de la URL  que contiene los datos que deben pasar a aplicaciones web como los programas CGI.
5.¿Qué es el responseCode? ¿Qué significado tiene los posibles valores devueltos?
Los códigos de estado de respuesta HTTP indican si se ha completado satisfactoriamente una solicitud HTTP específica. Las respuestas se agrupan en cinco clases:

-Respuestas informativas (100–199),
-Respuestas satisfactorias (200–299),
-Redirecciones (300–399),
-Errores de los clientes (400–499),
-Errores de los servidores (500–599).
6.¿Cómo se envía data en un GET y cómo en un POST? 
En el GET lleva los datos de manera visible el cliente, los datos los puede ver cualquiera y el medio de envió es la URL.
Por otro lado el POST tiene los datos ocultos, ya que el cliente no los ve, y se envían a través ed DE
7.¿Qué verbo http utiliza el navegador cuando accedemos a una página?
Utiliza el método GET
8.Explicar brevemente qué son las estructuras de datos JSON y XML dando ejemplo de estructuras posibles.
son estructuras de datos estándar , que permiten intercambiar información entre las maquinas , independientemente del sistema operativo o del lenguaje de programación con el que estuviera hecho el software.
XML:
<pieza tipo="A">
    <nombre>Tornillo</nombre>
    <descripcion>Cilindro mecánico con una cabeza utilizado en la fijación temporal de unas piezas con otras 
    </descripcion>
    <caracateristica>
        <tipo>metal</tipo>
        <tamanyo>10</tamanyo>
    </caracateristica>
    <vacio></vacio>
</pieza>
JSON
{
    “pieza”: {
        “tipo”: “A”
        “nombre”: “Tornillo”,
        “descripcion”: “Cilindro mecánico con una cabeza utilizado en la fijación temporal de unas piezas con otras”,
        “caracteristica”: {
            “tipo”: “metal”
            “tamaño”: 10
        },
        “vacio”: “”
     }
}
9.Explicar brevemente el estándar SOAP

SOAP (Simple Object Acccess Protocol) es un protocolo estándar que define como dos objetos de diferentes procesos pueden comunicarse por medio de intercambio de datos XML.
SOAP tiene 3 características principales, Extensibilidad, Neutralidad  e independencia.
un mensaje SOAP que podría ser enviado a un web service para realizar la búsqueda de algún precio en una base de datos, indicando para el los parámetros necesitados en la consulta. El servicio podría retornar un documento en formato XML con el resultado, un ejemplo, precios, localización o características. Teniendo los datos de respuesta en un formato estandarizado procesable éste puede ser integrado directamente en un sitio Web o aplicación externa.


10.Explicar brevemente el estándar REST Full

La transferencia de estado representacional o REST es un estilo de arquitectura software para sistemas hipermedia. se usa en el sentido más amplio para describir cualquier interfaz entre sistemas que utilice directamente HTTP para obtener datos o indicar la ejecución de operaciones sobre los datos, en cualquier formato (XML, JSON, etc)

11.¿Qué son los headers en un request? ¿Para qué se utiliza el key Content-type en un header?
Los HTTP headers son la parte central de los HTTP requests, y transmiten información acerca del navegador del cliente, de la página solicitada, del servidor, etc.
Content-Type es la propiedad de cabecera (header) usada para indicar el  media type del recurso.


# Ejercicio 4
1- Abrimos una terminal
2- Nos posicionamos en la direccion de nuestro archivo
3- Instalamos las dependecias necesarias para ejecutar el mismo. En este caso debemos hacer :
  npm install --save request
  npm install --save request-promise
4- colocamos en la consola 
  node mosrtarPersonas.js
# Ejercicio 5y6
1- Abrimos una terminal
2- Nos posicionamos en la direccion de nuestro archivo
3- Instalamos las dependecias necesarias para ejecutar el mismo. En este caso debemos hacer :
  npm install --save request
  npm install express
  npm install body-parser
4- colocamos en la consola 
  node index.js














