//En el entrypoint index.js, importa el módulo controller.js
import * as controller from "./controller"

//- El entrypoint index.js debe utilizar las funciones del módulo para devolver 
//la multiplicación de suma(1, 2) y suma(4, 5)

const suma_1 = suma(1, 2);
const suma_2 = suma(4, 5);

const multiplicación = multiplica(suma_1, suma_2);