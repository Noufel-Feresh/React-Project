const itemData = {
    name: "React JS",
    description: "React.js is a popular JavaScript library for building user interfaces, primarily for web applications. Developed by Facebook, it enables developers to create reusable UI components and efficiently update the DOM using a virtual DOM. React follows a component-based architecture, making applications more modular and maintainable. It also supports hooks and state management, allowing for dynamic and interactive web experiences. With its declarative approach, React simplifies UI development and enhances performance in modern web applications.",
	image: "images/React.jpg", 
    likes: 0
};


document.getElementById("item-name").innerText = itemData.name;
document.getElementById("item-description").innerText = itemData.description;
document.getElementById("item-image").src = itemData.image;
document.getElementById("like-count").innerText = itemData.likes;


document.getElementById("like-button").addEventListener("click", function () {
    itemData.likes++; 
    document.getElementById("like-count").innerText = itemData.likes; 
});
