$(function(){
    var questoes = [
        {
            id: 1,
            label: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ad aut blanditiis',
            resposta: 1,
            opcoes: [
                {
                    id: 1,
                    label: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ad aut blanditiis',
                },
            ]
        },
        {
            id: 2,
            label: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ad aut blanditiis',
            resposta: 1,
            opcoes: [
                {
                    id: 1,
                    label: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ad aut blanditiis',
                },
            ]
        },
        {
            id: 3,
            label: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ad aut blanditiis',
            resposta: 1,
            opcoes: [
                {
                    id: 1,
                    label: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ad aut blanditiis',
                },
            ]
        },
        {
            id: 4,
            label: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ad aut blanditiis',
            resposta: 1,
            opcoes: [
                {
                    id: 1,
                    label: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ad aut blanditiis',
                },
            ]
        },
    ];

    /* id: 1,
        label: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ad aut blanditiis',
        resposta: 1,
        opcoes: [
        {
            id: 1,
            label: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ad aut blanditiis',
        },
    ] */

    htmlQuestoes = '';



});

function numeroQuestoes(questoes){
    let numeroQuestoes = [];
    questoes.forEach(function(e, i){
        numeroQuestoes.push(i+1);
    });
    console.log(numeroQuestoes);
    return numeroQuestoes;
}






