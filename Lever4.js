const todos = [
    "Read MDN DOM guide",
    "Practise selectors",
    "Build the board"
];

const ol = document.createElement("ol");

todos.forEach(function(todo) {
    const li = document.createElement("li");

    li.textContent = todo;

    ol.appendChild(li);
});

document.body.appendChild(ol);