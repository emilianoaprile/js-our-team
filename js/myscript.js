console.log('OUR TEAM')

// MILESTONE 0

const team = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        photo: "img/wayne-barnett-founder-ceo.jpg",
    },

    {
        name: "Angela Caroll",
        role: "Chief Editor",
        photo: "img/angela-caroll-chief-editor.jpg",
    },

    {
        name: "Walter Gordon",
        role: "Office Manager",
        photo: "img/walter-gordon-office-manager.jpg",
    },

    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        photo: "img/angela-lopez-social-media-manager.jpg",
    },

    {
        name: "Scott Estrada",
        role: "Developer",
        photo: "img/scott-estrada-developer.jpg",
    },

    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        photo: "img/barbara-ramos-graphic-designer.jpg",
    }
]

console.log(team);

// MILESTONE 1 

// for (let i = 0; i < team.length; i++) {

//     console.log(i);

//     const informazioniMembriTeam = team[i];
//     console.log(informazioniMembriTeam);

//     console.log('Name:', informazioniMembriTeam.name);

//     console.log('Role:', informazioniMembriTeam.role);

//     console.log('Photo:', informazioniMembriTeam.photo);
// }

// MILESTONE 2

// recupero container dove inseriro le cards
const containerCardDOMElement = document.querySelector('.container')
console.log(containerCardDOMElement);

// creo elemento row nel DOM
const rowDOMElement = document.createElement('div')
console.log(rowDOMElement);

rowDOMElement.classList.add('row')

for (let i = 0; i < team.length; i++) {

    console.log(i);
    // assegne ad ogni indice l'oggetto contenene i dati
    const informazioniMembriTeam = team[i];
    console.log(informazioniMembriTeam);

    // creo elemento div nel DOM
    const memberDatas = document.createElement('div');
    console.log(memberDatas);

    // aggiungo la classe all'elemento del appena creato
    memberDatas.classList.add('member-card');

    // appenado al container elemento con classe row
    containerCardDOMElement.appendChild(rowDOMElement);

    // appendo all'elemento row le member-card
    rowDOMElement.appendChild(memberDatas);
    console.log(rowDOMElement);

    // creo elemento figure mettere dentro le img
    const figure = document.createElement('figure');
    memberDatas.appendChild(figure);

    // creo elemento img e inserisco la foto nel tag figure
    const memberImg = document.createElement('img');

    memberImg.src = informazioniMembriTeam.photo;

    figure.appendChild(memberImg);

    console.log('Name:', informazioniMembriTeam.name);

    console.log('Role:', informazioniMembriTeam.role);

    console.log('Photo:', informazioniMembriTeam.photo);
}



