const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Finish the course and learn vue.',
            array: [1, 2, 3, 4, 5]
        };
    }
});


app.mount('#user-goal');

