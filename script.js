// Archivo script.js

document.getElementById("transformButton").addEventListener("click", () => {
    const input = document.getElementById("wordInput").value;
    let transformedWord = "";

    // Remover acentos del texto de entrada
    const normalizedInput = input.normalize("NFD").replace(/\p{Diacritic}/gu, "");

    if (normalizedInput.length < 5) {
        // Si la palabra tiene menos de 5 letras, convertir a minúsculas y añadir "P@gin@"
        const lowercaseInput = normalizedInput.toLowerCase();
        transformedWord = `P@gin@${lowercaseInput.replace(/a/gi, "@").replace(/o/gi, "0")}00`;
    } else {
        const firstChar = normalizedInput[0];
        let restOfWord = normalizedInput.slice(1)
            .replace(/a/gi, "@")
            .replace(/o/gi, "0");
        transformedWord = firstChar.toUpperCase() + restOfWord + "00";
    }

    document.getElementById("result").textContent = transformedWord.replace(/\s+/g, "");
});

document.getElementById("copyButton").addEventListener("click", () => {
    const resultText = document.getElementById("result").textContent;
    if (resultText) {
        navigator.clipboard.writeText(resultText).then(() => {
            alert("Palabra copiada al portapapeles!");
        }).catch(err => {
            alert("Hubo un error al copiar la palabra.");
        });
    } else {
        alert("No hay palabra generada para copiar.");
    }
});
