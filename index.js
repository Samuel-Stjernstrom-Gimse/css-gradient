

const sectionContainer = document.getElementById("section-1")

for (let gradientCount = 1; gradientCount <= 15; gradientCount++) {
    const gradient = document.createElement("div")
    gradient.classList.add("gradient-box")
    gradient.id = `box-${gradientCount}`
    gradient.style.left = `${gradientCount*10}px`;
    gradient.style.top = `${gradientCount*20}px`;
    sectionContainer.appendChild(gradient)
}