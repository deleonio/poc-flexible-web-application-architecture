class AppComponent extends HTMLElement {
  constructor() {
    super();

    const button: HTMLButtonElement = document.createElement('button');
    button.type = 'button';
    button.className = 'btn btn-primary btn-block';
    button.addEventListener('click', (event: MouseEvent) => {
      console.log(event);
      event.preventDefault();
      event.stopPropagation();
    });
    button.innerHTML = 'Test';

    this.attachShadow({ mode: 'open' }).appendChild(button);
  }
}
customElements.define('wc-app', AppComponent);
