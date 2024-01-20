const URL = 'https://api.kanye.rest';

function import_quote() {
  fetch(URL)
    .then(response => response.json())
    .then(data => {
      document.getElementById('quote').textContent = data.quote;
  })
}
