const nome = document.getElementById("nome") as HTMLInputElement;
const enviar = document.getElementById("enviar") as HTMLButtonElement;
const saida = document.getElementById("saida") as HTMLParagraphElement;

function click()
{
    if (!nome.value.match(/^\s*$/gm) && nome.value.match(/^[A-Z][a-z\u00C0-\u017F]+$/gm))
    {
        saida.innerHTML = `Olá, ${nome.value}!`;
        nome.value="Sucesso!";
        nome.disabled=true;
        nome.classList.add("success");
        setTimeout(() => {
            nome.classList.remove("success");
            nome.value="";
            nome.disabled=false;
        }, 1000);
    }
    else
    {
        nome.classList.add("wrong");
        nome.value = "Nome inválido";
        nome.disabled = true;
        setTimeout(() => {
            nome.classList.remove("wrong");
            nome.value='';
            nome.disabled=false;
        }, 1000)
    }
}


enviar.addEventListener(
    "click", 
    (e) => { click() }
)