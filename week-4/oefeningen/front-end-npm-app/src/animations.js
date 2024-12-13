function fadeIn() {
    const $fadeElements = document.querySelectorAll(".faded");

    $fadeElements.forEach($fadeElement => {
        $fadeElement.classList.remove('faded');
    })
}

export default fadeIn;