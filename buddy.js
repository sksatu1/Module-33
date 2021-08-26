const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddies(data))
}
loadBuddies();
const displayBuddies = data => {
    const buddies = data.results;
    const buddiesContainer = document.getElementById('buddies');
    for (const buddy of buddies) {
        // const name = buddy.name.first;
        const p = document.createElement('p');
        p.innerText = `name: ${buddy.name.title} ${buddy.name.first}  ${buddy.name.last} 
        email: ${buddy.email}
        `;
        buddiesContainer.appendChild(p);
    }
}