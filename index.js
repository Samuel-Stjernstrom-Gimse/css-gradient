

const sectionContainer = document.getElementById("section-1")

for (let gradientCount = 0; gradientCount <= 60; gradientCount++) {
    const gradient = document.createElement("div")
    gradient.classList.add("gradient-box")
    gradient.id = `box-${gradientCount}`

    gradient.style.right = `${gradientCount * 2 - 10}%`;
    gradient.style.top = `${gradientCount * 2 - 10}%`;
    gradient.style.scale = `${gradientCount * 0.06 + 0.4}`

    gradient.addEventListener("mouseover", () => {
        gradient.style.top = `${gradientCount * 2 }%`
    })

    gradient.addEventListener("mouseout", () => {
        gradient.style.right = `${gradientCount * 2 - 10}%`;
        gradient.style.top = `${gradientCount * 2 - 10}%`;
        gradient.style.scale = `${gradientCount * 0.06 + 0.4}`
    })

    sectionContainer.appendChild(gradient)
}



