// B.1. DEFINIÇÃO DOS DADOS (JSON)

const catalogo = [
    {
        id: 1,
        titulo: " Batman: O Cavaleiro das Trevas",
        tipo: "filme",
        ano: 2008,
        generos: ["ação", "suspense"],
        nota: 9.8,
        assistido: true
    },

    {
        id: 2,
        titulo: "Breaking Bad",
        tipo: "serie",
        ano: 2008,
        generos: ["drama", "crime"],
        nota: 9.7,
        assistido: true
    },

    {
        id: 3,
        titulo: "Vikings",
        tipo: "serie",
        ano: 2013,
        generos: ["drama histórico", "ação-aventura"],
        nota: 8.9,
        assistido: false
    },

    {
        id: 4,
        titulo: "Vingadores: Ultimato",
        tipo: "filme",
        ano: 2019,
        generos: ["ação", "aventura"],
        nota: 9.3,
        assistido: true
    },

    {
        id: 5,
        titulo: "The Last of Us",
        tipo: "serie",
        ano: 2023,
        generos: ["drama"],
        nota: 9.0,
        assistido: false
    },

    {
        id: 6,
        titulo: "Clube da Luta",
        tipo: "filme",
        ano: 1999,
        generos: ["drama", "suspense"],
        nota: 8.9,
        assistido: true
    }
];

// B.2. ACESSO E LEITURA DOS DADOS

console.log("Catálogo completo:");
console.log(catalogo);

console.log("Primeiro título:", catalogo[0].titulo);

console.log(
    "Ano do último item:",
    catalogo[catalogo.length - 1].ano
);

if (catalogo[2].generos[1]) {
    console.log(
        "Segundo gênero do terceiro item:",
        catalogo[2].generos[1]
    );
} else {
    console.log("O terceiro item possui apenas 1 gênero.");
}

// B.3.A LISTAGEM COM forEach

console.log("Lista de títulos:");

catalogo.forEach(item => {
    console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);
});

// B.3.B TRANSFORMAÇÃO COM map

const titulosEmCaixaAlta = catalogo.map(item => {
    return item.titulo.toUpperCase();
});

console.log("Títulos em caixa alta:");
console.log(titulosEmCaixaAlta);

// B.3.C SELEÇÃO COM filter

const naoAssistidos = catalogo.filter(item => {
    return item.assistido === false;
});

console.log(
    "Quantidade de não assistidos:",
    naoAssistidos.length
);

// B.3.D BUSCA COM find

const notaAlta = catalogo.find(item => {
    return item.nota >= 9;
});

if (notaAlta) {
    console.log(
        `Primeiro item com nota >= 9: ${notaAlta.titulo} - Nota ${notaAlta.nota}`
    );
} else {
    console.log("Nenhum item com nota maior ou igual a 9.");
}

// B.3.E AGREGAÇÃO COM reduce

const somaNotas = catalogo.reduce((acumulador, item) => {
    return acumulador + item.nota;
}, 0);

const mediaGeral = somaNotas / catalogo.length;

const assistidos = catalogo.filter(item => {
    return item.assistido === true;
});

const somaAssistidos = assistidos.reduce((acumulador, item) => {
    return acumulador + item.nota;
}, 0);

const mediaAssistidos = somaAssistidos / assistidos.length;

console.log(
    "Média geral:",
    mediaGeral.toFixed(2)
);

console.log(
    "Média dos assistidos:",
    mediaAssistidos.toFixed(2)
);

// B.3.F CHECAGENS COM some e every

const existeAntigo = catalogo.some(item => {
    return item.ano < 2000;
});

const todosTemGenero = catalogo.every(item => {
    return item.generos.length > 0;
});

console.log(
    "Existe item anterior a 2000?",
    existeAntigo
);

console.log(
    "Todos possuem pelo menos 1 gênero?",
    todosTemGenero
);

// B.4. SAÍDA NA TELA (DOM)

document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById("output");

    const quantidadeFilmes = catalogo.filter(item => {
        return item.tipo === "filme";
    }).length;

    const quantidadeSeries = catalogo.filter(item => {
        return item.tipo === "serie";
    }).length;

    const ranking = [...catalogo]
        .sort((a, b) => b.nota - a.nota)
        .slice(0, 3);

    if (!output) {
        console.error('Elemento #output não encontrado no DOM.');
        return;
    }

    output.innerHTML = `
        <h1>Resumo do Catálogo</h1>
        <h2><strong>Total de itens:</strong> ${catalogo.length}</h2>
        <h2><strong>Filmes:</strong> ${quantidadeFilmes}</h2>
        <h2><strong>Séries:</strong> ${quantidadeSeries}</h2>
        <h2><strong>Não assistidos:</strong> ${naoAssistidos.length}</h2>
        <h2><strong>Média geral:</strong> ${mediaGeral.toFixed(2)}</h2>
        <h2>Top 3 Notas</h2 >

        <ol>
            ${ranking.map(item =>
                `<li>${item.titulo} - Nota ${item.nota}</li>`
            ).join("")}
        </ol>
    `;
});