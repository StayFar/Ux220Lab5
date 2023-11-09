class FarElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = "Farizah was here";
    }
}

customElements.define("x-far",FarElement);