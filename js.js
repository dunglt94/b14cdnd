function temperatureConverter(F) {
    let result = document.getElementById("result");
    if (F === '') {
        result.innerHTML = '';
        return;
    }
    let C = (F - 32) / 1.8;
    result.innerHTML = `${C}&deg;C`;
}