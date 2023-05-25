export const gerarPerfil = (getPerfil) => {
    // Obtenha as chaves do objeto getPerfil
    const keys = Object.keys(getPerfil);

    // Verifique qual é o maior valor
    if (getPerfil[keys[0]] > getPerfil[keys[1]] && getPerfil[keys[0]] > getPerfil[keys[2]]) {
        return keys[0];
    } else if (getPerfil[keys[1]] > getPerfil[keys[0]] && getPerfil[keys[1]] > getPerfil[keys[2]]) {
        return keys[1];
    } else if (getPerfil[keys[2]] > getPerfil[keys[0]] && getPerfil[keys[2]] > getPerfil[keys[1]]) {
        return keys[2];
    } else {
        // Em caso de empate, selecione aleatoriamente
        const empate = [keys[0], keys[1], keys[2]];
        const indiceAleatorio = Math.floor(Math.random() * empate.length);
        return empate[indiceAleatorio];
    }
};
