document.getElementById('deployButton').addEventListener('click', function() {
    const environment = document.getElementById('environmentDropdown').value;

    // Replace 'YOUR_AZURE_FUNCTION_URL' with the actual URL of your Azure Function
    fetch('https://bancsfunction.azurewebsites.net', {
        method: 'POST', // Use POST because we are sending data
        body: JSON.stringify({ environment: environment }), // Send the selected environment in the request body
        headers: {
            'Content-Type': 'application/json' // Specify that we're sending JSON data
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        return response.json(); // Convert the response data to JSON
    })
    .then(data => {
        alert('Deployment started!'); // This is a placeholder action
        console.log(data); // Log the response data for debugging
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
});
