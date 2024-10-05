export function Header() {
    const header = document.getElementById('header');
    fetch('Components/Header.html')
        .then(response => response.text())
        .then(data => {
            header.innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));
}
