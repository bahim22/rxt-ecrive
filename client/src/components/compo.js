export default(text='component one') => {
    const element = document.createElement('div')
    element.innerHTML = text;
    return element;
}

// index.js App


import compo from "./compo"

document.body.appendChild(compo())

console.log("Hello World!");
