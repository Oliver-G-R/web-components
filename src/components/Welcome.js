export class Welcome extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })

        /* Iniciando el elemento style para aplicar estilos unicos en este componente */
        this._style = document.createElement('style')

        /* Props */
        this.name = ''
        this.surname = ''
    }


    /* Se añaden las props que va mapear */
    static get observedAttributes() {
        return [
            "name",
            "surname"
        ]
    }

    /* Se añaden los valores que vienen de las props */
    attributeChangedCallback(prop, oldVal, newVal) {
        switch (prop) {
            case "name":
                this.name = newVal
                break;

            case "surname":
                this.surname = newVal
                break;
        }
    }

    /* Donde empieza a cargar el componente*/
    connectedCallback() {
        this.render()
    }


    /* Carga los estilos del componente */
    styleComponent() {

        return this._style.innerHTML = /*css*/`
            <style>
                .welcome{
                    color: blue;
                }
            </style>
        `
    }

    render() {
        this.shadow.innerHTML = /*html*/`
            ${this.styleComponent()}
            <h1 class="welcome">
                Welcome ${this.name}  ${this.surname}
            </h1>
        `
    }
}
