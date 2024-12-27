const scriptURL = 'https://script.google.com/macros/s/AKfycbyABOt0_qwCtaY_77GcJLHwRCS35l4Q3PgaQDkv8umgVN_JajbnRof2GjVgNOBc0aq-/exec'
const form = document.forms['contactForm']
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(responce => alert("Thank you! your message is submitted successfully."))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
})