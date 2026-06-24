function display() {
    const nameEnter = document.querySelector('input');
    const output = document.querySelector('.name');

    output.innerText = `Your name is ${nameEnter.value}`;
}