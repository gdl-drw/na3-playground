import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

console.log("Hi from codespaces");

// register a new route. If the user navigates to this route, your callback method will be run
// The callback will be passed a DOM node in which the app must be rendered.
// This sample callback will render a Svelte app into the node.
neherapp3.registerRoute("/demo", "demo", (node) => {   
  node.innerHTML = `
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="${viteLogo}" class="logo" alt="Vite logo" />
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
      </a>
      <h1>Hello Vite!</h1>
      <div class="card">
        <button id="counter" type="button"></button>
      </div>
      <p class="read-the-docs">
        Click on the Vite logo to learn more
      </p>
      <idas-spinner title="Web Component" />
    </div>
  `;
  setupCounter(document.querySelector('#counter'));
 });

const baseUrl = new URL(import.meta.url).origin; 
const iconUrl = baseUrl + "/vite.svg";
// Add a new menu item to the main menu that navigates to the route you just registered
neherapp3.addMenuItem({
    id : "demo",
    icon: iconUrl,
    url: "/demo",
    text: "Demo App",
    parent: "settings" // this is one of "dev", "prod", "sb", "home"
});
