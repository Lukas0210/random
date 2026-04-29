function generateNumber() {
    const min = Math.ceil(document.querySelector('.min').value);
    const max = Math.floor(document.querySelector('.max').value);
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    if (min >= max) {
        alert('O valor mínimo deve ser menor que o valor máximo.');
    } else {
        alert(`O número sorteado é: ${randomNumber}`);
    }
}