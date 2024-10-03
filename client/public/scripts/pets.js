function getPic(pet){
    console.log("Pet is" + pet.animal_type)
    let src
    switch(pet.animal_type){
        case 'Dog':
            src = '../pet_pics/dog.jpeg'
            break;
        case 'Cat':
            src = '../pet_pics/cat.jpg';
            break;
        case 'Rabbit':
            src = '../pet_pics/bunny.jpeg'
            break;
        case 'Hamster':
            src = '../pet_pics/hamster.jpg'
            break;
        case 'Turtle':
            src = '../pet_pics/Turtle.jpeg'
            break;
        case 'Guinea Pig':
            src = '../pet_pics/guineapig.jpg'
            break;
        case 'Fish':
            src = '../pet_pics/fish.jpg'
            break;
        case 'Parrot':
            src = '../pet_pics/parrot.jpg'
            break;
        default:
            break;
    }
    return src;
}
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

            const petPic = document.createElement('img')
            petPic.src = getPic(pet)

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

            container.appendChild(petPic)
            container.appendChild(petName)
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

