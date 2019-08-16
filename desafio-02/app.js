new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta(){
            alert("Botão clicado");
        },
        exibirKeydown(event){
            this.valor = event.target.value;
        }
    }
})