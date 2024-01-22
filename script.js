// load-bars.js
document.addEventListener('DOMContentLoaded', function () {
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

    fetch('roadmap.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('roadmap-container').innerHTML = html;
        });
});


