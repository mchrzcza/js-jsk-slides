const months = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];

export const actualMonth = () => {
    const object = document.querySelector('.presentation-date');

    const month = months[new Date().getMonth()];
    object.textContent = `${month} ${new Date().getFullYear()}`;
}