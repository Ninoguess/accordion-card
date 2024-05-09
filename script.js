const sectionArray = [...document.getElementsByClassName("section")];

let openSection = null;

sectionArray.forEach((section) => {
    section.addEventListener("click", () => {
        if (section == openSection) {
            section.nextElementSibling.computedStyleMap.display = "none";
            openSection = null;
        } else {
            if (openSection != null) {
                openSection.nextElementSibling.style.display = "none";
            }
            section.nextElementSibling.style.display = "block";
            openSection = section;
        }
    });
});