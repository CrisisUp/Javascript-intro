document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const postagem = document.getElementById("postagem");
    const posts = document.getElementById("posts");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        if (postagem.value.trim() === "") {
            alert("Escreva algo antes de publicar.");
            return;
        }

        criarPost(postagem.value);
        postagem.value = "";
    });

    function criarPost(texto) {
        const div = document.createElement("div");
        div.className = "post";

        div.innerHTML = `
            <p>${texto}</p>
            <div class="botoes">
                <button class="editar"><i class="fas fa-edit"></i></button>
                <button class="deletar"><i class="fas fa-trash"></i></button>
            </div>
        `;

        div.querySelector(".editar").addEventListener("click", () => {
            postagem.value = texto;
            div.remove(); 
        });

        div.querySelector(".deletar").addEventListener("click", () => {
            div.remove();
        });

        posts.prepend(div); 
    }
});
