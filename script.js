// Daily Challenge: Stars

// 1. Écrivez un programme JavaScript qui recrée le modèle ci-dessous
// 2. Faites ce défi deux fois : d'abord en utilisant une boucle, puis en utilisant deux boucles for imbriquées (imbriquées signifie l'une dans l'autre - consultez ce didacticiel sur les boucles imbriquées ).
// 3. Faites ce défi quotidien par vous-même, sans regarder les réponses sur Internet.
// une boubles
for(let i = 1; i <= 6; i++)
    console.log(`* `.repeat(i));
    
// deux boucles imbriquées
for(let i = 1; i <= 6; i++) {
    let str = ''
    for(let j = 0; j < i; j++){
        str += `* `
    }
    console.log(str)
}