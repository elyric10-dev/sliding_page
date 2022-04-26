const pages = document.querySelectorAll('.page');
const slide_value = 100;
let result = 0;

slide = (direction) => {
    (direction === 'next') ? result -= slide_value: result += slide_value;
    (direction === 'homepage') ? result = 0: result = result;
    pages.forEach(
        (item) => item.style.transform = `translateX(${result}%)`
    );
}