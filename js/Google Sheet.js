const scriptURL = 'https://script.google.com/macros/s/AKfycbx4t_7ItV0q0QVYnoA0xcNV7jddetjVP4sHpjOhdGo2pYdbUPepE2vgDaRuGIdjkylx/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      // alert("Thank you! Your form has been submitted successfully.")
      setTimeout(() => {
        window.location.href = 'thank.html' // Redirect after 3 seconds
      }, 1000); // 3000 milliseconds = 3 seconds
    })
    .catch(error => console.error('Error!', error.message))
})
