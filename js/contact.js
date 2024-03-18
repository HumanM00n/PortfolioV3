/* ============== Send Contact Email ============== */

var form = document.getElementById("contactForm");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            status.innerHTML = "Votre message a été envoyé avec succès !";
            form.reset()
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                } else {
                    status.innerHTML = "Une erreur s'est produite lors de l'envoi du formulaire"
                }
            })
        }
    }).catch(error => {
        status.innerHTML = "Une erreur s'est produite lors de l'envoi du formulaire"
    });
}
form.addEventListener("submit", handleSubmit)