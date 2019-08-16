new Vue({
    el: '#desafio',
    data: {
        valor: 0,
        resultado: ''
    },
    watch: {
        valor(){
            if (this.valor!=37) {
                this.resultado = 'Valor diferente';
            } else {
                this.resultado = 'Valor igual';
            }
        },
        resultado(){
            setTimeout(() => {
                this.valor = 0;
            }, 5000)
        }
        }
});