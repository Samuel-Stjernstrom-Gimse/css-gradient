function main() {
    const sectionContainer = document.getElementById("section-1-projects");

    for (let gradientCount = 1; gradientCount <= 4; gradientCount++) {
        const gradient = document.createElement("div");

        gradient.classList.add("gradient-box-p");
        gradient.id = `gradient-p-${gradientCount}`


        gradient.style.top = "50%";
        gradient.style.left = `${gradientCount * 10}%`;
        gradient.style.transformOrigin = "center";
        gradient.style.rotate = `${gradientCount * 4}deg`;


        sectionContainer.appendChild(gradient);

        gradient.addEventListener(`click`, () => {
            if (gradient.style.top === "50%") {
                gradient.style.top = "10%"
                gradient.style.scale = "1"
                gradient.style.zIndex = "1"
            } else {
                gradient.style.top = "50%"
                gradient.style.zIndex = "0"
            }
        })


    }

    let paragaph = document.getElementById("gradient-p-15")
    let textContent = document.createElement("p")

    textContent.id = "text-project-p-1"
    textContent.innerText = "hei jeg er en stor sopp som liker å spise små gutter"
    paragaph.appendChild(textContent)
}