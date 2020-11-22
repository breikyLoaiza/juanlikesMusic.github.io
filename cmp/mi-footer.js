class MiFooter extends HTMLElement {
  connectedCallback(){
    this.innerHTML = /* html*/
      'Copyright &copy; Alvarez Hernández Juan Pablo';
  }
}
 customElements.define("mi-footer", MiFooter);    
