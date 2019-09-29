angular.module('quiz', [])
    .component('quiz', {
    templateUrl: '/content/dist/js/quizApp/quiz/quiz.template.html',
    controller: ('quizController',  ['$scope', '$timeout', function ($scope, $timeout){
            let self = this;
            $scope.pontosTotalizados = 0;
            $scope.numAtivada = 1;
            this.carregarQuestoes = function(){
                $scope.questoes = [
                    {
                        id: 1,
                        label: '1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ad aut blanditiis',
                        resposta: 1,
                        opcoes: [
                            {
                                id: 1,
                                label: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ad aut blanditiis',
                            },
                            {
                                id: 2,
                                label: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ad aut blanditiis',
                            },
                            {
                                id: 3,
                                label: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ad aut blanditiis',
                            },
                            {
                                id: 4,
                                label: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ad aut blanditiis',
                            },
                        ]
                    },
                    {
                        id: 2,
                        label: '2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ad aut blanditiis',
                        resposta: 1,
                        opcoes: [
                            {
                                id: 1,
                                label: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ad aut blanditiis',
                            },
                            {
                                id: 2,
                                label: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ad aut blanditiis',
                            },
                            {
                                id: 3,
                                label: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ad aut blanditiis',
                            },
                            {
                                id: 4,
                                label: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ad aut blanditiis',
                            },
                        ]
                    },
                    {
                        id: 3,
                        label: '3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ad aut blanditiis',
                        resposta: 1,
                        opcoes: [
                            {
                                id: 1,
                                label: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ad aut blanditiis',
                            },
                            {
                                id: 2,
                                label: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ad aut blanditiis',
                            },
                            {
                                id: 3,
                                label: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ad aut blanditiis',
                            },
                            {
                                id: 4,
                                label: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ad aut blanditiis',
                            },
                        ]
                    },
                    {
                        id: 4,
                        label: '4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ad aut blanditiis',
                        resposta: 1,
                        opcoes: [
                            {
                                id: 1,
                                label: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ad aut blanditiis',
                            },
                            {
                                id: 2,
                                label: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ad aut blanditiis',
                            },
                            {
                                id: 3,
                                label: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ad aut blanditiis',
                            },
                            {
                                id: 4,
                                label: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ad aut blanditiis',
                            },
                        ]
                    },
                ];
                $scope.numQuestoes = this.numeroQuestoes();
                $scope.questaoAtiva(1);
            }

            this.numeroQuestoes = function(){
                let numQuestoes = [];
                $scope.questoes.forEach(function(e, i){
                    numQuestoes.push(i + 1);
                })
                return numQuestoes;
            }

            $scope.questaoAtiva = function(questao){

                $timeout(function(){
                    $scope.questaoAtivada = $scope.questoes[questao - 1 ]
                    $scope.numAtivada = questao;
                    return $scope.questaoAtivada;
                }, 3000);
            }
            $scope.pontos = function(resCerta, resposta){
                if(resCerta === resposta){
                    $scope.pontosTotalizados += 10;
                }
            }
            this.carregarQuestoes();
    }])
});