new Vue({
	el: '#desafio',
	data: {
		comecar_efeito: false,
		ini_encolher: true,
		informada: '',
		check: false,
		informada2: '',
		informada3: '',
		progresso: 0,
		loading: ''
	},
	computed: {
		meuEstilo() {
			return {
				border: 5+"px",
				color: this.informada3
			}
		}
	},
	methods: {
		iniciarEfeito() {
			this.comecar_efeito = true;
			setInterval(()=>{
				this.ini_encolher = !this.ini_encolher;
			}, 300);
		},
		iniciarProgresso() {
			if (this.progresso >= 100) {
				this.progresso = 0;
			} else if (this.progresso == 0) {
				const temporizador = setInterval(()=>{
					if (this.progresso < 100) {
					this.progresso += Math.random();
					} else {
						this.progresso = 100;
						clearInterval(temporizador);
					}

				}, 10);
			} else {
				alert("Espere o carregamento atual.");
			}
		}
	},
	watch: {
		progresso() {
			this.loading = this.progresso + '%';
		}
	},
})
