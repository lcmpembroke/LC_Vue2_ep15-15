Vue.component('progress-view', {
    data() {
        return { 
            completionRate: 0,
            interval:  5,
        };
    },
    methods: {
        updateInterval: function(event) {
            if(isNaN(Number(event.data))) {
                console.log("error as number is expected")
            } else {
                this.interval = Number(event.data)
            }
        }
    },
});

new Vue({
    el: '#root',
    data: {},
    computed: {},
    methods: {}
});