// BUSCAR PESSOAS
const buttonPerson = document.getElementById("buttonPerson");
const divResultadoPerson = document.getElementById("resultadoPerson");

let currentPerson = null; 

buttonPerson.addEventListener("click", () => {
    fetch(`https://randomuser.me/api/`)
    .then(dados => dados.json())
    .then(dados => {
        
        currentPerson = dados.results[0];
        
        const pNameFirst = document.createElement("p");
        const pNameLast = document.createElement("p");
        const imgPicture = document.createElement("img");

        imgPicture.src = `${currentPerson.picture.large}`;
        pNameFirst.innerHTML = `<strong>Nome:</strong> ${currentPerson.name.first}`;
        pNameLast.innerHTML = `<strong>Sobrenome:</strong> ${currentPerson.name.last}`;

        
        divResultadoPerson.innerHTML = '';
        divResultadoPerson.appendChild(imgPicture);
        divResultadoPerson.appendChild(pNameFirst);
        divResultadoPerson.appendChild(pNameLast);
    })
    .catch(erro => {
        divResultadoPerson.innerHTML = "Não conseguimos gerar uma nova pessoa!";
    });
});




const inputCnpj = document.getElementById("cnpj");
const form = document.querySelector("form");
const divResultadoCnpj = document.getElementById("resultadoCNPJ");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let cnpj = inputCnpj.value;

    fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`)
    .then(dados => dados.json())
    .then(dados => {
        const pCnpj = document.createElement("p");
        const pRazaoSocial = document.createElement("p");
        const pNomeFantasia = document.createElement("p");

        pCnpj.innerHTML = `<strong>Cnpj:</strong> ${dados.cnpj}`;
        pRazaoSocial.innerHTML = `<strong>Razão Social:</strong> ${dados.razao_social}`;
        pNomeFantasia.innerHTML = `<strong>Nome Fantasia:</strong> ${dados.nome_fantasia}`; 

        divResultadoCnpj.innerHTML = '';
        divResultadoCnpj.appendChild(pCnpj);
        divResultadoCnpj.appendChild(pRazaoSocial);
        divResultadoCnpj.appendChild(pNomeFantasia);
    })
    .catch(erro => {
        divResultadoCnpj.innerHTML = "Não foi possível buscar este CNPJ!";
    });
});





const buttonSavePerson = document.getElementById("buttonSavePerson");
const divGroup = document.getElementById("group");

buttonSavePerson.addEventListener("click", () => {
    if (currentPerson) {
        const newPersonDiv = document.createElement("div");
        const imgPicture = document.createElement("img");
        const pNameFirst = document.createElement("p");
        const pNameLast = document.createElement("p");

        imgPicture.src = `${currentPerson.picture.large}`;
        pNameFirst.innerHTML = `<strong>Nome:</strong> ${currentPerson.name.first}`;
        pNameLast.innerHTML = `<strong>Sobrenome:</strong> ${currentPerson.name.last}`;

        newPersonDiv.appendChild(imgPicture);
        newPersonDiv.appendChild(pNameFirst);
        newPersonDiv.appendChild(pNameLast);

        divGroup.appendChild(newPersonDiv);
        
        
        currentPerson = null;
        divResultadoPerson.innerHTML = '';
    } else {
        alert("Nenhuma pessoa foi selecionada!");
    }
});
