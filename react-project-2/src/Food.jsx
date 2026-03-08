function Food() {
    
    let fruits = 
    [
        "Apple", 
        "Grainy Bread", "Dried Fruits", "Strawberry", 
        "Blueberries", "Fishes", "Seeds", "Nuts", "Eggs", 
        "Orange", "Broccoli", "Brussels Sprouts", "Potato"
    ];

    return (
        <ul>
            fruits.map((fruit, index) => {
                <li key={index}>fruit</li>
            });
        </ul>
    );
}

export default Food;