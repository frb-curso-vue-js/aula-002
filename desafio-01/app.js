new Vue({
    el: '#desafio',
    data: {
        nome: 'Francisco',
        idade: 29,
        imgsrc: 'https://p2.trrsf.com/image/fget/cf/460/0/images.terra.com/2017/07/19/596fa3eb8e822.jpeg'
    },
    methods: {
        randomizar(){
            return Math.random();
        }
    },
})