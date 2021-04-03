new Vue({
    el: "#app",
    data: {
        title: 'Это тайтл',
        styleCss: ''
    },
    methods: {
        changeText() {
            this.title = 'New texrwev';
        }
    }
});