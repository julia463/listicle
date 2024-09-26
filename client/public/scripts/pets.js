const renderPets = async () => {
    const response = await fetch('/pets')
    const data = await response.json()
    const mainContent = document.getElementById('main-content')
    if(data){

        data.map(pet => {
            const card = document.createElement('div')
            card.classList.add('card')

            const container = document.createElement('div')
            container.classList.add('container')

            const petName = document.createElement('h3')
            petName.textContent = pet.name
            const petType = document.createElement('h4')
            petType.textContent = pet.animal_type
            const petBreed = document.createElement('h5')
            petBreed.textContent = pet.breed
            const petAge = document.createElement('p')
            petAge.textContent = pet.age
            const petPersonality = document.createElement('p')
            petPersonality.textContent = pet.personality.join(' ')

            const readMore = document.createElement('a')
            readMore.textContent = "Read more!"
            readMore.setAttribute('role', 'button')
            readMore.href = `/pets/${pet.id}`

            container.appendChild(petName,petType,petBreed,petAge,petPersonality, readMore)
            container.appendChild(petType)
            container.appendChild(petBreed)
            container.appendChild(readMore)
            
        
            card.appendChild(container)
            mainContent.appendChild(card)
        })
    } else {
        const errorMsg = document.createElement('h2')
        errorMsg.textContent = "Sorry, there aren't any pets available for adoption right now- try again later"
    }

}

const requestedUrl = window.location.href.split('/').pop()

if(requestedUrl){
    window.location.href = '../404.html'
} else {
    renderPets()
}

