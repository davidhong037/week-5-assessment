const getHoroscopeSubmit = document.getElementById('getHoroscope')

const horoscopeInput = document.getElementById('horoscope-input')

const responseSection = document.getElementsByClassName('response-area')[0]



getHoroscopeSubmit.addEventListener('click', () => {
    axios
        .get(`http://localhost:4000/api/horoscopes/${horoscopeInput.value}`)
        .then(res => addToView([res.data]))
})

function addToView(arr) {
    responseSection.innerHTML = null;

    if (arr.length === 0) {
        const p = document.createElement('p');
        const text = document.createTextNode("No results!");
        p.appendChild(text);

        responseSection.appendChild(p)
    } else {
        arr.forEach(quote => {
            const p = document.createElement('p')
            const text = document.createTextNode(quote)
            p.appendChild(text)

            responseSection.appendChild(p)
        })
    }
}
