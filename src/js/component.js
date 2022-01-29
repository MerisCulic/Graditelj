const component = () => {
    const div_el = document.createElement('div');
    const el = document.createElement('h2');
    el.innerHTML = "Santa is real!"
    div_el.appendChild(el)

    return div_el;
}

export default component;