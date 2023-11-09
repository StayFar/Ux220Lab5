class FarElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = "Farizah was here";
    }
}

customElements.define("x-far",FarElement);

class CenterElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `<div style="text-align:center">${this.innerHTML}</div>
        `; 
    }
}

customElements.define("x-center",CenterElement);

class YearElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();   
    }
}

customElements.define("x-fullyear",YearElement);

class PurpleElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `<div style="color:purple">${this.innerHTML}</div>
        `; 
    }
}

customElements.define("x-purple",PurpleElement);

