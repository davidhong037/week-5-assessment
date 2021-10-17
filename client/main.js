const getHoroscopeSubmit = document.getElementById('getHoroscope')

const horoscopeInput = document.getElementById('horoscope-input')

const responseSection = document.getElementsByClassName('response-area')[0]

const baseURL = `http://localhost:4000/api`

const listContainer = document.querySelector('#list-container')
const form = document.querySelector('form')

const createList = body => axios.post(`${baseURL}/list`, body).then

document.getElementById("complimentButton").onclick = function () {
    axios.get(`${baseURL}/compliment`)
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };
  document.getElementById('fortuneButton').onclick = function () {
    axios.get(`${baseURL}/fortune`)
    .then(function(res) {
      const data = res.data
      alert(data)
    })
  }
  document.getElementById('inspirationalBtn').onclick = function () {
    axios.get(`${baseURL}/inspirational`)
    .then(function(res) {
      const data = res.data
      alert(data)
    })
  }

getHoroscopeSubmit.addEventListener('click', () => {
    axios
        .get(`${baseURL}/horoscopes/${horoscopeInput.value}`)
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

function submitHandler(err){
  err.preventDefault()

  let list = document.querySelector('#list')
  let rating = document.querySelector('input[name="rating"]:checked')

  let bodyObj = {
    list: list.value,
    rating: rating.value
  }

  createList(bodyObj)

  list.value = ''
  rating.checked = false
}