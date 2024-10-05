export function Team() {
    const header = document.getElementById('team-section');
    fetch('Components/Team.html')
        .then(response => response.text())
        .then(data => {
            header.innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));
}
