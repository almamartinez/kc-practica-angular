# Práctica AngularJS - Whatapop
He hecho las tres partes obligatorias y además todo lo opcional excepto el alta de productos.

He utilizado la opción con *node-sparrest*

Me siento MUY identificada con el gráfico que pusiste en Slack. Estuve trabajando en la práctica a tope desde el lunes pasado y hasta prácticamente el sábado no he conseguido ensamblar todo. Conseguí al principio el listado de productos sin filtrar y muy rápido también el detalle de un producto, pero el ir uniendo todo con varios componentes en una página o componente + directiva, etc., eso me ha costado bastante. 

Pero lo bueno es que una vez le pillas el tranquillo, es cierto que empiezas a hacer cosas a una velocidad bastante aceptable (como casi todo lo opcional en un día). 

Muchas gracias por la clase, es de las mejores hasta ahora, tanto en profundidad de lo estudiado como en ritmo. 

## Obligatorio
El filtrado de productos lo intenté simular como si fuese en servidor pero encontré problemas porque no me refrescaba el html. El filtrado está en la parte cliente.

He utilizado dos directivas:

* Para el buscador, que genera el json para filtrar los productos
* El formulario de alta de usuarios, igual que en los ejemplos con las recetas. 

He intentado utilizar un *Values* para todas esas configuraciones que si no "hardcodeaba"

Verás en el filtro de distancias muchas posibilidades, pero es que estoy en Bélgica y todo lo menor que 1300km no me daba resultados... XD

## Opcional
### LocalStorage
Lo he utilizado en el listado de productos y en el detalle del producto.

### Posición Geográfica
En la directiva que uso para la búsqueda he añadido varias posibilidades de filtrado (< 5km, <100km...). 

Después a la hora de filtrar me he creado dos filtros distintos y los he aplicado en el listado de productos.

**Filtros**

* Uno que busca los usuarios dentro de la distancia seleccionada. He usado lo que recomiendas, *ng-haversine*.
* Uno que filtra los productos de los usuarios que están en la distancia seleccionada.

### Registro de usuarios

Lo he hecho muy básico y sé que alguna cosa me he dejado.

No he puesto contraseña, pero sí *Nombre*, *Nick* y *Email*. Además he utilizado *ng-image-picker* para permitir al usuario elegir una imagen. 

También registro la geolocalización, si el usuario lo permite. 

Hace chequeo de que el nick y el email no estén ya registrados. 
