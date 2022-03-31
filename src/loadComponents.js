/**
 * Este fichero sirve para cargar todos los componentes que se quieran reutilizar.
 * Se importa configComponents, para recorrerlo y extraer nameComponent y component, 
 * de esta manera en la función customElements.define(...) recibe todos los componentes
 * que se quieran mostrar.
 */
import { configComponents } from './configComponents'

export const loadComponents = () => 
    configComponents.forEach(({nameComponent, component}) => {
        customElements.define(nameComponent, component)
    })
