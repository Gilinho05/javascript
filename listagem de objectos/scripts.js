const listaUsers = document.getElementById('usersList');

const pessoas = [
	{
		"id": "0",
		"primeiroNome": "Paulo",
		"ultimoNome": "Silvino",
		"idade": 31,
		"email": "paulo.silvino@gmail.com",
		"telefone": 932049408,
		"cargo": "UI UX Design",
		"foto": "/imgs/paulo.jpg"
	},
	{
		"id": "1",
		"primeiroNome": "Carolina",
		"ultimoNome": "Santos",
		"idade": 35,
		"email": "carol.santos@gmail.com",
		"telefone": 91326548,
		"cargo": "Art Director",
		"foto": "/imgs/carolina.jpg"
	},
	{
		"id": "2",
		"primeiroNome": "Gaspar",
		"ultimoNome": "Silva",
		"idade": 28,
		"email": "gaspar88@gmail.com",
		"telefone": 932049408,
		"cargo": "CEO Director",
		"foto": "/imgs/gaspar.jpg"
	},
	{
		"id": "3",
		"primeiroNome": "Lin Lin",
		"ultimoNome": "Wang",
		"idade": 19,
		"email": "Lin.wang94@gmail.com",
		"telefone": 932049408,
		"cargo": "Secretária",
		"foto": "/imgs/linlin.jpg"
	},
	{
		"id": "4",
		"primeiroNome": "Stacy",
		"ultimoNome": "Tavares",
		"idade": 31,
		"email": "stacy.tavares@gmail.com",
		"telefone": 932049408,
		"cargo": "Administradora",
		"foto": "/imgs/stacy.jpg"
	},
	{
		"id": "5",
		"primeiroNome": "Silvio",
		"ultimoNome": "Castro",
		"idade": 31,
		"email": "s.castro3548@gmail.com",
		"telefone": 932049408,
		"cargo": "FullStack Developer",
		"foto": "/imgs/paulo.jpg"
	}
];

console.log('pessoas', pessoas);


function fListagemPessoas() {
	const cards = document.createElement('div');
	cards.classList.add('cards-list')
	for (c = 0; c < pessoas.length; c++) {
		const card = document.createElement('div');
		card.classList.add('card');
		let text = "";
		text += "<div class='card-image'>";
		text += "<img src='" + pessoas[c].foto + "' />";
		text += "</div>";
		text += "<div class='card-info'>";
		text += "<div>" + pessoas[c].primeiroNome + " " + pessoas[c].ultimoNome + "</div>";
		text += "<div>" + pessoas[c].idade + "</div>";
		text += "<div>" + pessoas[c].email + "</div>";
		text += "<div>" + pessoas[c].telefone + "</div>";
		text += "<div>" + pessoas[c].cargo + "</div>";
		text += "</div>";
		card.innerHTML = text;
		cards.appendChild(card);
		console.log('fTesteCards >', cards);
	}
	return cards;
}

document.getElementById('usersList').appendChild(fListagemPessoas());