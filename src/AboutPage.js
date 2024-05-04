export function loadAboutPage() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const aboutPageDiv = document.createElement('div');
    aboutPageDiv.id = 'about-page';

    const aboutContent = createAboutContent();

    aboutPageDiv.appendChild(aboutContent);

    content.appendChild(aboutPageDiv);
}

function createAboutContent() {
    const aboutContentDiv = document.createElement('div');
    aboutContentDiv.classList.add('about-content');
    aboutContentDiv.innerHTML = `
        <h2>About Us</h2>
        <p>Welcome to Shogun, where we believe in serving delicious breakfast made with love.</p>
        <p>Our mission is to provide our customers with a cozy and welcoming atmosphere where they can enjoy a hearty breakfast to start their day.</p>
        <p>Whether you're craving pancakes, avocado toast, or a classic breakfast, we've got something for everyone.</p>
        <p>Visit us today and experience the wonderful flavors of Shogun!</p>
    `;
    return aboutContentDiv;
}