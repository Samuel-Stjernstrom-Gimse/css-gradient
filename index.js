

const sectionContainer = document.getElementById("section-1")

for (let gradientCount = 0; gradientCount <= 44; gradientCount++) {
    const gradient = document.createElement("div")
    gradient.classList.add("gradient-box")
    gradient.id = `box-${gradientCount}`

    gradient.style.left = `${gradientCount * 3 - 10}%`;
    gradient.style.bottom = `${25 + (Math.cos(gradientCount * 0.19) * gradientCount)}%`;
    gradient.style.scale = `${1.3}`
    gradient.style.rotate = `${gradientCount * 4 + 180 }deg`


    gradient.addEventListener("mouseover", () => {
        gradient.style.bottom = `${25 + (Math.cos(gradientCount * 0.2) * gradientCount) - 10}%`;
    })

    gradient.addEventListener("mouseout", () => {
        gradient.style.bottom = `${25 + (Math.cos(gradientCount * 0.2) * gradientCount)}%`;

    })


    sectionContainer.appendChild(gradient)
}





