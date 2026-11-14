const list = document.querySelector("#list");

const items = ["A", "B"];

function render() {
    list.innerHTML = "";

    items.forEach(item => {
        const li = document.createElement("li");

        li.textContent = item;

        list.appendChild(li);
    });
}

render();
render();