const menuTitle = document.getElementById("menu-title");
const menuItems = document.getElementById("menu-items");

const menus = {
    cut: [
        "Chicken Burger - 350 kcal",
        "Turkey Burger - 320 kcal",
        "Veggie Protein Burger - 300 kcal"
    ],
    bulk: [
        "Beef Burger - 700 kcal",
        "Double Chicken Burger - 650 kcal",
        "Cheese Muscle Burger - 750 kcal"
    ]
};

function selectGoal(goal) {
    menuTitle.textContent =
        goal === "cut" ? "Cutting Menu" : "Bulking Menu";

    menuItems.innerHTML = "";

    menus[goal].forEach(item => {
        const div = document.createElement("div");
        div.className = "menu-item";
        div.textContent = item;
        menuItems.appendChild(div);
    });

    document.getElementById("menu")
        .scrollIntoView({ behavior: "smooth" });
}
