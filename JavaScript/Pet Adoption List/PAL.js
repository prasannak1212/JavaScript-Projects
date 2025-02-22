const petData = await fetch("https://learnwebcode.github.io/pet-adoption-data/pets.json");
const petList = await petData.json()

const template = document.querySelector("#animal-card")
const wrapper = document.createElement("div")

function decideAge(age){
    if(!age){
        return "Less than a month old"
    }

    return (age > 1) ? `${age} years old` : "1 year old"
}

petList.forEach(pet => {
    const clone = template.content.cloneNode(true)
    clone.querySelector("h3").textContent = pet.name
    clone.querySelector("img").src = pet.photo
    clone.querySelector("img").alt = `a ${pet.species} named ${pet.name}`
    clone.querySelector(".description").textContent = pet.description
    clone.querySelector(".species").textContent = pet.species
    clone.querySelector(".name").textContent = pet.name
    clone.querySelector(".primary-btn").href = `https://learnwebcode.github.io/pet-adoption-data/pets/${pet.id}`

    const age = new Date().getFullYear() - pet.birthYear
    clone.querySelector(".age").textContent = decideAge(age)

    wrapper.appendChild(clone);
})

document.querySelector(".animals").appendChild(wrapper)

const filterButtons = document.querySelectorAll(".filterNav a")

filterButtons.forEach(el =>{
    el.addEventListener("click", e => handleEvent(e))
})

function handleEvent(e){
    let target = e.target

    if(e.target.classList.contains("large")){
        target = e.target.closest("a")
    }

    e.preventDefault()

    filterButtons.forEach(el =>{
        el.classList.remove("active")
    })
    target.classList.add("active")

    petFilter(target.dataset.filter) // dataset.filter is equivalent to getAttribute("data-filter")
}

function petFilter(species){
    const allPets = document.querySelectorAll(".animal-card")
    if(species == "All"){
        allPets.forEach(el => {
            el.style.display = ""
        })
    } else{
        allPets.forEach(el => {
            if(el.querySelector(".species").textContent == species){
                el.style.display = ""
            } else{
                el.style.display = "none"
            }
        })
    }
}