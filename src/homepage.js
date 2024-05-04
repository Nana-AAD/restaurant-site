export function loadHomePage() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const homePageDiv = document.createElement('div');
    homePageDiv.id = 'home-page';

    const hero = createHero();
    const featuredItems = createFeaturedItems();

    homePageDiv.appendChild(hero);
    homePageDiv.appendChild(featuredItems);

    content.appendChild(homePageDiv);
}

function createHero() {
    const heroDiv = document.createElement('div');
    heroDiv.classList.add('hero');
    
    const heroText = document.createElement('div');
    heroText.classList.add('hero-text');
    heroText.innerHTML = `
        <h1>Welcome to  Shogun</h1>
        <p>Start your day with our buds blazing options!</p>
    `;
    
    heroDiv.appendChild(heroText);
    
    return heroDiv;
}

function createFeaturedItems() {
    const featuredItemsDiv = document.createElement('div');
    featuredItemsDiv.classList.add('featured-items');
    
    const items = [
        { image: 'images/pancakes.jpg', name: 'Pancakes', description: 'Fluffy pancakes served with maple syrup and fresh berries.' },
        { image: 'images/avocado.jpg', name: 'Avocado Toast', description: 'Whole grain toast topped with smashed avocado, cherry tomatoes, and feta cheese.' }
        // Add more items as needed
    ];

    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h2>${item.name}</h2>
            <p>${item.description}</p>
        `;
        featuredItemsDiv.appendChild(itemDiv);
    });
    
    return featuredItemsDiv;
}
