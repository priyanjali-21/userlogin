// Function to handle tab switching
function showTab(tabId) {
    // Hide all tab contents
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Show the selected tab content
    const activeTab = document.getElementById(tabId);
    if (activeTab) {
        activeTab.classList.add('active');
    }

    // Highlight active link in side panel
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => link.classList.remove('active'));

    const activeLink = Array.from(links).find(link => link.getAttribute('onclick').includes(tabId));
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Function to handle dark mode toggle
function toggleDarkMode() {
    const body = document.body;
    const darkModeToggle = document.getElementById('darkModeToggle');

    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        darkModeToggle.textContent = 'Light Mode';
    } else {
        localStorage.setItem('darkMode', 'disabled');
        darkModeToggle.textContent = 'Dark Mode';
    }
}

// Initialize the script when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Check if dark mode was previously enabled
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
    if (isDarkMode) {
        body.classList.add('dark-mode');
        darkModeToggle.textContent = 'Light Mode';
    }

    // Attach event listener to dark mode toggle button
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }
});
