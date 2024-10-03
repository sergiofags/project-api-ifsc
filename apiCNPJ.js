const inputCnpj = document.getElementById("cnpj");
const form = document.querySelector("form");
const divResultado = document.getElementById("resultado");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    let cnpj = inputCnpj.value;

    fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`)
    .then(dados => dados.json())
    .then(dados => {
        const pCnpj = document.createElement("p");
        const pRazaoSocial = document.createElement("p");
        const pNomeFantasia = document.createElement("p");
        const pUf = document.createElement("p");
        const pMunicipio = document.createElement("p");
        const pCep = document.createElement("p");
        const pTelefone = document.createElement("p");
        const pDesc = document.createElement("p");

        pCnpj.innerHTML = `<strong>Cnpj:</strong> ${dados.cnpj}`;
        pRazaoSocial.innerHTML = `<strong>Razão Social:</strong> ${dados.razao_social}`;
        pNomeFantasia.innerHTML = `<strong>Nome Fantasia:</strong> ${dados.nome_fantasia}`; 
        pUf.innerHTML = `<strong>UF:</strong> ${dados.uf}`; 
        pMunicipio.innerHTML = `<strong>Municipio:</strong> ${dados.municipio}`; 
        pCep.innerHTML = `<strong>Cep:</strong> ${dados.cep}`; 
        pTelefone.innerHTML = `<strong>Telefone:</strong> ${dados.ddd_telefone_1}`; 
        pDesc.innerHTML = `<strong>Descrição:</strong> ${dados.cnae_fiscal_descricao}`; 

        divResultado.innerHTML = '';
        divResultado.appendChild(pCnpj)
        divResultado.appendChild(pRazaoSocial)
        divResultado.appendChild(pNomeFantasia)
        divResultado.appendChild(pUf)
        divResultado.appendChild(pMunicipio)
        divResultado.appendChild(pCep)
        divResultado.appendChild(pTelefone)
        divResultado.appendChild(pDesc)
    })
    .catch(erro => {
        divResultado.innerHTML = "Não foi possivel buscar este cnpj!"
    })
})