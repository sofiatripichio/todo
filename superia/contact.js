const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const data = {
        name: formData.get('name'),
        surname: formData.get('surname'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        query: formData.get('query')
    };

    fetch('save_contact.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(data => {
        alert('Consulta enviada correctamente.');
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
