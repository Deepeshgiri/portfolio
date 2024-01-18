// load-bars.js
document.addEventListener('DOMContentLoaded', function() {
    // Load the top bar
    fetch('top.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('top-bar-container').innerHTML = html;
        });

    // Load the bottom bar
    fetch('bottom-bar.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('bottom-bar-container').innerHTML = html;
        });
});


// Sample checkpoints data (latitude, longitude)
const checkpoints = [
    { lat: 37.7749, lon: -122.4194 },
    { lat: 34.0522, lon: -118.2437 },
    // Add more checkpoints as needed
];

const roadContainer = document.getElementById('road-container');

// Function to create checkpoints
function createCheckpoints() {
    checkpoints.forEach((checkpoint, index) => {
        const checkpointElement = document.createElement('div');
        checkpointElement.className = 'checkpoint';
        checkpointElement.style.left = `${(index / (checkpoints.length - 1)) * 100}%`;
        checkpointElement.addEventListener('click', () => handleCheckpointClick(index));
        roadContainer.appendChild(checkpointElement);
    });
}

// Function to handle checkpoint clicks (you can customize this function)
function handleCheckpointClick(index) {
    alert(`Checkpoint ${index + 1} clicked!`);
    // You can add more functionality here
}

// Initialize
createCheckpoints();
