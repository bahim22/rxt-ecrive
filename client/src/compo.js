export default(text='component one') => {
    const element = document.createElement('div')
    element.innerHTML = text;
    return element;
}
