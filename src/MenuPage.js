export function loadMenuPage() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const menuPageDiv = document.createElement('div');
    menuPageDiv.id = 'menu-page';

    const menuItems = createMenuItems();

    menuPageDiv.appendChild(menuItems);

    content.appendChild(menuPageDiv);
}

function createMenuItems() {
    const menuItemsDiv = document.createElement('div');
    menuItemsDiv.classList.add('menu-items');
    
    const categories = [
        { name: 'Breakfast', items: [
            { image: 'breakfast.jpg', name: 'Classic Breakfast', description: 'Two eggs any style, choice of bacon or sausage, hash browns, and toast.' },
            // Add more breakfast items as needed
        ]},
        // Add more categories as needed
    ];

    categories.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('menu-category');
        categoryDiv.innerHTML = `
            <h3>${category.name}</h3>
        `;
        category.items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('menu-item');
            itemDiv.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h4>${item.name}</h4>
                <p>${item.description}</p>
            `;
            categoryDiv.appendChild(itemDiv);
        });
        menuItemsDiv.appendChild(categoryDiv);
    });
    
    return menuItemsDiv;
}