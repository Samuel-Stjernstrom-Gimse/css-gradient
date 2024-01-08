function main() {
    const sectionContainer = document.getElementById("section-1");

    for (let gradientCount = 0; gradientCount <= 44; gradientCount++) {
        const gradient = document.createElement("div");

        gradient.classList.add("gradient-box");
        gradient.id = `box-${gradientCount}`;

        gradient.style.left = `${gradientCount * 3 - 10}%`;
        gradient.style.bottom = `${25 + (Math.cos(gradientCount * 0.19) * gradientCount)}%`;
        gradient.style.transform = `scale(1.3)`;
        gradient.style.transformOrigin = "center";
        gradient.style.rotate = `${gradientCount * 3 + 80}deg`;

        gradient.addEventListener("mouseover", () => {
            gradient.style.bottom = `${25 + (Math.cos(gradientCount * 0.2) * gradientCount) - 10}%`;
        });

        gradient.addEventListener("mouseout", () => {
            gradient.style.bottom = `${25 + (Math.cos(gradientCount * 0.2) * gradientCount)}%`;
        });
        

        sectionContainer.appendChild(gradient);
    }

    function pulse() {
        const gradientBoxes = document.getElementsByClassName("gradient-box");

        let currentIndex = 0;
        let shouldGrow = false;

        function scaleElement() {
            if (currentIndex < gradientBoxes.length) {
                gradientBoxes[currentIndex].style.transform = `scale(1.1)`;
                setTimeout(() => {
                    gradientBoxes[currentIndex].style.transform = shouldGrow ? `scale(1.1)` : `scale(1)`;
                    if (currentIndex === gradientBoxes.length - 1) {
                        currentIndex = 0; // Reset the index to 0 to start over again
                        shouldGrow = !shouldGrow; // Toggle the shouldGrow variable every time the last element is reached
                    } else {
                        currentIndex++; // Increment the index to go to the next element
                    }
                    scaleElement(); // Call itself recursively for the next element
                }, 80); // Speed: Change the interval time 50ms
            }
        }

        scaleElement(); // Start the pulse effect
    }

    pulse();
}