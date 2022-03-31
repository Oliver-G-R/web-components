/**
 * Para configurar un componente nuevo, se debe añadir su propio objeto
 * con sus propiedades nameComponent (el nombre debe ser el que se va 
 * usar en el html, para nombrarlo debe ir de un guión seguido de su 
 * terminación, si en todo caso el nombre es largo) y component 
 * (la importación de la clase)
 */
import { Welcome } from './components/Welcome'


export const configComponents = [
    {
        nameComponent: 'my-component',
        component: Welcome 
    },
]

