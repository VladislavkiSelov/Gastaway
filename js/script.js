import '../scss/style.scss';
const imgArray = Array.from(document.querySelectorAll('img'));
imgArray.forEach((element) => {
    element.setAttribute('src', `https://vladislavkiselov.github.io/Gastaway/${element.getAttribute('src')}`)
    // element.getAttribute('src')
})
const burger = document.querySelector('.burger_header')
burger.addEventListener('click', () => {
    const navigation = document.querySelector('.navigation')
    if (navigation.style.display === "block") {
        navigation.style.display = "none";
        burger.classList.remove('close_burger')
        return
    }
    navigation.style.display = "block"
    burger.classList.add('close_burger')
})
