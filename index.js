const URL = 'https://api.kanye.rest';

window.onload=function(){
  const buttonElement = document.getElementById('kanye-button');
  buttonElement.addEventListener('click', (event) => {
    import_quote();
    click_sound();
  })
}

function import_quote() {
  fetch(URL)
    .then(response => response.json())
    .then(data => {
      document.getElementById('quote').textContent = data.quote;
  })
}
