const form = document.forms["formsAlunos"];
const btnEnviar = document.getElementById("enviarBTN");
const classDom = document.getElementById('addDom');

function checkForm() {
    const nomeUsuario = form.elements["nome"].value.trim();
    const n1 = form.elements["nota1"].value;
    const n2 = form.elements["nota2"].value;

    const nomeInvalido = nomeUsuario === '';
    const nota1Invalida = n1 === '' || n1 < 0 || n1 > 10;
    const nota2Invalida = n2 === '' || n2 < 0 || n2 > 10;

    btnEnviar.disabled = (nomeInvalido || nota1Invalida || nota2Invalida);
}

form.addEventListener('input', checkForm);
checkForm(); 

btnEnviar.addEventListener('click', (e) => {
    e.preventDefault();
    
    const nome = form.elements["nome"].value;
    const n1 = Number(form.elements["nota1"].value);
    const n2 = Number(form.elements["nota2"].value);

    const media = (n1 + n2) / 2;
    const status = media >= 7 ? "APROVADO" : "REPROVADO";
    const statusClass = media >= 7 ? "aprovado" : "reprovado";

    const html = `
        <section class="cards">
            <div class="linha topo">
                <span>NOME</span><span>NOTA 1</span><span>NOTA 2</span><span>MÉDIA</span><span>STATUS</span>
            </div>
            <div class="linha dados">
                <span class="nome">${nome}</span>
                <span>${n1}</span>
                <span>${n2}</span>
                <span class="media">${media.toFixed(1)}</span>
                <span class="${statusClass}">${status}</span>
            </div>
            <button type="button" class="btn-excluir" onclick="this.parentElement.remove()">X</button>
        </section>`;

    classDom.insertAdjacentHTML('beforeend', html);
    form.reset();
    checkForm(); 
});