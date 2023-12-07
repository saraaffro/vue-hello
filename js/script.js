// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

const {createApp} = Vue;

createApp ({
    data(){
        return{
            message: "Benvenuti in Vue!",
            image: 'https://img.freepik.com/premium-photo/photo-landscape-with-small-round-house-middle-it_902639-6762.jpg'
        }
    }

}).mount("#app")