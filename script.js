// Toggle the dropdown for services
document.getElementById('serviceButton').addEventListener('click', function() {
    document.getElementById('serviceDropdown').classList.toggle('show');
});

// Function to start deployment
function startDeployment(service, environment) {
    // Replace with the actual URL of your Azure Function for starting deployment
    fetch('https://bancsfunction.azurewebsites.net/api/startDeployment', {
        method: 'POST',
        body: JSON.stringify({ service: service, environment: environment }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        alert('Deployment started!');
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
}

// Function to end deployment
function endDeployment(service, environment) {
    // Replace with the actual URL of your Azure Function for ending deployment
    fetch('https://bancsfunction.azurewebsites.net/api/endDeployment', {
        method: 'POST',
        body: JSON.stringify({ service: service, environment: environment }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        alert('Deployment ended!');
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
}

// Event listener for start deployment button
document.getElementById('startDeployment').addEventListener('click', function() {
    const selectedService = document.getElementById('serviceButton').dataset.service;
    const selectedEnvironment = document.getElementById('environments').value;
    startDeployment(selectedService, selectedEnvironment);
});

// Event listener for end deployment button
document.getElementById('endDeployment').addEventListener('click', function() {
    const selectedService = document.getElementById('serviceButton').dataset.service;
    const selectedEnvironment = document.getElementById('environments').value;
    endDeployment(selectedService, selectedEnvironment);
});

// Select service from dropdown
document.getElementById('serviceDropdown').addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
        document.getElementById('serviceButton').textContent = event.target.textContent;
        document.getElementById('serviceButton').dataset.service = event.target.dataset.service;
        document.getElementById('serviceDropdown').classList.remove('show');
    }
});
