document.addEventListener('DOMContentLoaded', function() {
    var serviceButton = document.getElementById('serviceButton');
    var serviceDropdown = document.getElementById('serviceDropdown');
    var startDeploymentButton = document.getElementById('startDeployment');
    var endDeploymentButton = document.getElementById('endDeployment');

    serviceButton.onclick = function() {
        serviceDropdown.classList.toggle('show');
    };

    serviceDropdown.onclick = function(event) {
        if (event.target.tagName === 'A') {
            serviceButton.textContent = event.target.textContent;
            serviceButton.dataset.service = event.target.dataset.service;
            serviceDropdown.classList.remove('show');
        }
    };

    startDeploymentButton.addEventListener('click', function() {
        var service = serviceButton.dataset.service;
        var environment = document.getElementById('environments').value;
        startDeployment(service, environment);
    });

    endDeploymentButton.addEventListener('click', function() {
        endDeployment();
    });

    function startDeployment(service, environment) {
        // Replace 'YOUR_AZURE_FUNCTION_URL_START' with the actual URL of your Azure Function
        fetch('YOUR_AZURE_FUNCTION_URL_START', {
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

    function endDeployment() {
        // Replace 'YOUR_AZURE_FUNCTION_URL_END' with the actual URL of your Azure Function
        fetch('YOUR_AZURE_FUNCTION_URL_END', {
            method: 'POST',
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
});
