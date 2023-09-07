document.getElementById('form-add-student').addEventListener('submit', function(e) {
    e.preventDefault();

    let formData = new FormData(e.target);

    fetch('request.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Student registered successfully!');
        } else {
            console.error('Error:', data.error);
            alert('An error occurred. Please check the console for more details.');
        }
    })
    .catch((error) => {
        console.error('Fetch Error:', error);
        alert('An error occurred. Please check the console for more details.');
    });
});
