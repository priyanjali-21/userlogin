// script.js
function showTab(tabId) {
    // Hide all tab content
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Show the selected tab
    document.getElementById(tabId).classList.add('active');
}
