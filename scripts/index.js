const nome = document.getElementById("nome");
const enviar = document.getElementById("enviar");
const saida = document.getElementById("saida");
enviar.addEventListener("click", (e) => {
    if (!nome.value.match(/^\s*$/gm) && nome.value.match(/^[A-Z][a-z]+$/gm)) {
        saida.innerHTML = `Olá, ${nome.value}!`;
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
});
