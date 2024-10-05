export function OurMission() {
    const header = document.getElementById('mission-section');
    fetch('Components/OurMission.html')
        .then(response => response.text())
        .then(data => {
            header.innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));
}
