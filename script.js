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
