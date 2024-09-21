// Sample wardrobe data (this could be loaded from a server or database)
let wardrobeData = [
    { id: 1, category: 'tops', type: 'Blouse', color: 'white', favorite: false },
    { id: 2, category: 'bottoms', type: 'Jeans', color: 'blue', favorite: false },
    { id: 3, category: 'outerwear', type: 'Jacket', color: 'black', favorite: false },
    { id: 4, category: 'dresses', type: 'Casual Dress', color: 'pink', favorite: false },
];

// Load wardrobe items from LocalStorage if available
if (localStorage.getItem('wardrobeData')) {
    wardrobeData = JSON.parse(localStorage.getItem('wardrobeData'));
}

// Display the wardrobe items
function displayWardrobe(items) {
    const wardrobeList = document.getElementById('wardrobeList');
    wardrobeList.innerHTML = ''; // Clear current wardrobe list

    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('clothes-item');
        itemDiv.setAttribute('data-category', item.category);
        itemDiv.setAttribute('data-color', item.color);

        itemDiv.innerHTML = `
            <div class="clothes-info">
                <p><strong>Category:</strong> ${item.category}</p>
                <p><strong>Type:</strong> ${item.type}</p>
                <p><strong>Color:</strong> ${item.color}</p>
            </div>
            <div class="clothes-actions">
                <button class="edit-btn" onclick="editItem(${item.id})">Edit</button>
                <button class="delete-btn" onclick="deleteItem(${item.id})">Delete</button>
                <button class="favorite-btn" onclick="markFavorite(${item.id})">${item.favorite ? '❤️ Favorited' : '❤️ Favorite'}</button>
            </div>
        `;

        wardrobeList.appendChild(itemDiv);
    });
}

// Filter wardrobe items based on selected category and color
function filterWardrobe() {
    const category = document.getElementById('categoryFilter').value;
    const color = document.getElementById('colorFilter').value;

    const filteredItems = wardrobeData.filter(item => {
        return (category === 'all' || item.category === category) &&
               (color === 'all' || item.color === color);
    });

    displayWardrobe(filteredItems);
}

// Edit an item (placeholder functionality)
function editItem(id) {
    alert(`Edit item with ID: ${id}`);
}

// Delete an item
function deleteItem(id) {
    wardrobeData = wardrobeData.filter(item => item.id !== id);
    localStorage.setItem('wardrobeData', JSON.stringify(wardrobeData));
    filterWardrobe(); // Refresh the list after deletion
}

// Mark an item as favorite
function markFavorite(id) {
    const item = wardrobeData.find(item => item.id === id);
    item.favorite = !item.favorite; // Toggle favorite status
    localStorage.setItem('wardrobeData', JSON.stringify(wardrobeData));
    filterWardrobe(); // Refresh the list
}

// Add a new item (placeholder functionality)
function addNewItem() {
    const newItem = {
        id: wardrobeData.length + 1,
        category: 'tops',
        type: 'New Item',
        color: 'black',
        favorite: false
    };
    wardrobeData.push(newItem);
    localStorage.setItem('wardrobeData', JSON.stringify(wardrobeData));
    filterWardrobe(); // Refresh the list
}

// Initialize the page
filterWardrobe();
