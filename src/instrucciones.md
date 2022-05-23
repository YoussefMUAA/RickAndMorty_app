## instrucciones 
- vamos a crear los siguientes componentes ✅
             - sidebar ✅
             - home ✅
             - infoCharacter  ✅
                  - episodes ✅
                  - locations ✅
                  - card ✅
-  Crear un servicio para Characters, Locations, Episodes ✅
-  Crear los interfaces necesarios par manejar los datos.✅
-  Rutas ✅
          "" redirecciona a home
          "/home" carga el componente home
          "character/:idcharacter" carga el componente infoCharacter
             children   - "" carga el componente episodios 
                        - "/episodes"  carga el componente episodes
                        - "/locations" carga el componente Locations
          "**" redireccion a home

 - maquetar el sidebar con sass  ✅
- hacer una consulta a la api para traerme toda la info de los 20  primeros personajes
    'OJO' la api no te envia un array y el arry esta dentro.
- cargar la home con la imagen de riibky morty que os he pasado.  ✅
- cuando tengais los 20 botones con los nombres del personaje  ✅
- hacer un evento de click y cargar la ruta de la vista del persona pintado solo en nombre del dicho personaje.  ✅

  para pintar el listado tengo que hacer un metodo en el servicio character que sea getAllByPage(1)  ✅

  y para consulta los datos de un solo personaje getById(:id) el id lo tengo que capturar de la ruta activa (ActivatedRoute)  ✅

  - cargar la informacion del personaje cada vez que hagamos click en un boton  ✅

  - rutas hijas locations y episodes  ✅

  - Episodes 
        - capturar el id del personaje en el servicio de episodes llamar a api pidiendo los episodios de un personaje concreto y pintarlo
              - card que lo reutilizaremos en episodios y locations.


  

