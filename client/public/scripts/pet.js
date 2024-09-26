const renderPet = async() => {
    const requestedID = parseInt(window.location.href.split('/').pop())

    const response = await fetch('/pets')
    const data = await response.json()

    const petContent = document.getElementById('pet-content')
    let pet

    pet = data.find(pet => pet.id === requestedID)

   console.log(data)
    if (pet) {
        document.getElementById('name').textContent = pet.name
        document.getElementById('animal').textContent = pet.animal_type
        document.getElementById('breed').textContent = pet.breed
        document.getElementById('age').textContent = pet.age
        document.getElementById('personality').textContent = pet.personality.join(' ')
        document.title = `Petsicle - ${pet.name}`
    } else {
        const errorMsg = document.createElement("h2")
        errorMsg.textContent = "Pet not found :O"
        petContent.appendChild(errorMsg)
    }
}
renderPet()