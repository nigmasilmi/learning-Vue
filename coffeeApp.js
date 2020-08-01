const plansObjs = [
    {
        name: 'The Hacker',
        label: 'For the late night hours of code',
        imgsrc: './assets/topCup1.jpg'
    },
    {
        name: 'The Early Bird',
        label: 'That kick you need to finally wake up',
        imgsrc: './assets/topCup3.jpg'
    },
    {
        name: 'The Runner',
        label: 'The ergogenic caffeine wisdom',
        imgsrc: './assets/topCup2.jpg'
    },
    {
        name: 'The Traveler',
        label: 'Don\'t miss another picture',
        imgsrc: './assets/topCup4.jpg'
    },

];

let CoffePlanComponent = {
    template: '#coffee-plan-template',
    props: {
        name: {
            type: String,
            required: true
        },
        selectedPlan: {
            type: String
        },
        imgsrc: {
            type: String,
        }
    },
    computed: {
        isSelected() {
            return this.name === this.selectedPlan;
        }
    },

    methods: {
        select() {
            this.$emit('select', this.name);
            this.selected = true;
        }

    }


};

let PlanPickerComponent = {
    template: '#plan-picker-template',
    components: {
        'coffee-plan': CoffePlanComponent,

    },
    data() {
        return {
            plansArr: plansObjs,
            selectedPlan: null,
        };
    },
    methods: {
        selectPlan(plan) {
            this.selectedPlan = plan;
        }
    }
};







new Vue({
    el: '#app',
    components: {
        'plan-picker': PlanPickerComponent
    }
});