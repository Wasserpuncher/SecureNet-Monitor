// src/frontend/script.js

// Holt die JSON-Daten von der API und zeigt sie auf der Webseite an
async function fetchData() {
    try {
        const response = await fetch('/api/data');
        const data = await response.json();
        document.getElementById('jsonData').textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error('Fehler beim Laden der Daten:', error);
    }
}

// Lädt die Daten beim Laden der Seite
window.onload = fetchData;
