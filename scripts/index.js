const nome = document.getElementById("nome");
const enviar = document.getElementById("enviar");
const saida = document.getElementById("saida");
const EGGS = { "Bolsonaro": "MITO" };
function click() {
    if (!nome.value.match(/^\s*$/gm) && nome.value.match(/^[A-Z][a-z\u00C0-\u017F]+$/gm)) {
        let _nome = EGGS[nome?.value] ?? nome.value;
        saida.innerHTML = `Olá, ${_nome}!`;
        nome.value = "Sucesso!";
        nome.disabled = true;
        nome.classList.add("success");
        setTimeout(() => {
            nome.classList.remove("success");
            nome.value = "";
            nome.disabled = false;
        }, 1000);
    }
    else {
        nome.classList.add("wrong");
        nome.value = "Nome inválido";
        nome.disabled = true;
        setTimeout(() => {
            nome.classList.remove("wrong");
            nome.value = '';
            nome.disabled = false;
        }, 1000);
    }
}
nome.addEventListener("keypress", (e) => {
    if (e.key === "Enter")
        click();
});
enviar.addEventListener("click", (e) => { click(); });
