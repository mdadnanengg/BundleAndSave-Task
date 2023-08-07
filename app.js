document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".box");
    const totalElement = document.getElementById("total");

    let activeBox = null;

    function updateTotal() {
        if (activeBox) {
            const priceElement = activeBox.querySelector(".radio-btn-text2");
            totalElement.textContent = priceElement.textContent;
        }
    }

    function setActiveBox(box) {
        if (activeBox) {
            activeBox.classList.remove("active-box-style");
            const activeRadioButton = activeBox.querySelector(".radio-button");
            activeRadioButton.classList.remove("active-outline");
            activeRadioButton.children[0].classList.remove("active-bg");
            const sizeBoxController = activeBox.querySelector(
                ".size-color-boxes-container"
            );
            sizeBoxController.style.display = "none";
        }

        activeBox = box;
        activeBox.classList.add("active-box-style");
        const activeRadioButton = activeBox.querySelector(".radio-button");
        activeRadioButton.classList.add("active-outline");
        activeRadioButton.children[0].classList.add("active-bg");
        const sizeBoxController = activeBox.querySelector(
            ".size-color-boxes-container"
        );
        sizeBoxController.style.display = "block";

        updateTotal();
    }

    function onBoxClick(event) {
        const clickedBox = event.currentTarget;
        setActiveBox(clickedBox);
    }

    boxes.forEach((box) => {
        box.addEventListener("click", onBoxClick);
    });

    updateTotal();
});
