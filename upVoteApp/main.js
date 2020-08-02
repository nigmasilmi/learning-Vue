const submissionsData = [{
    id: 1,
    title: 'Lorem Laudatium',
    description: 'Laudantium enim quasi es…am sapiente accusantium',
    url: '#',
    votes: 16,
    avatar: './images/freepik-avatar-02.jpg',
    submissionImage: './images/7.png',
},
{
    id: 2,
    title: 'Reprehend Lorem',
    description: 'Quia molestiae reprehend…epturi deleniti ratione',
    url: '#',
    votes: 12,
    avatar: './images/freepik-avatar-03.jpg',
    submissionImage: './images/softwareD.png',
},
{
    id: 3,
    title: 'Lorem Voluptates',
    description: 'Nihil ut voluptates blan…estias tempora quo quia',
    url: '#',
    votes: 14,
    avatar: './images/freepik-avatar-04.jpg',
    submissionImage: './images/taskman.png',
}
];

const submissionComponent = {
    template: `<div style="display: flex; width: 100%" >,

       <figure class="media-left image is-64x64">
                        <img :src="submi.submissionImage" alt="">
                    </figure>
                    <div class="media-content">
                        <div class="content">
                            <p>
                                <strong>
                                    <a href="#" class="has-text-info">{{submi.title}}</a>
                                    <span class="tag is-small">#4</span>
                                </strong>
                                <br>
                               {{submi.description}}
                                <br>
                                <small>
                                    Submitted by:
                                    <img class="image is-24x24" :src="submi.avatar" alt="">
                                </small>
                            </p>
                        </div>
                    </div>
                    <div class="media-right mediaRightCorr">
                        <span class="icon is-small" @click="upVote(submi.id)">
                            <i class="fa fa-chevron-up"></i>
                            <strong class="has-text-info">{{submi.votes}}</strong>
                        </span>
                        </div>
                    </div>`,
    props: ['submi', 'submissions'],

    methods: {
        upVote(postid) {
            const submissionFound = this.submissions.find(element => {
                return element.id === postid;
            });

            submissionFound.votes++;
        }
    }

};

new Vue({
    el: '#app',
    data: {
        submissions: submissionsData,
    },
    computed: {
        sortedSubmissions() {
            return this.submissions.sort((a, b) => {
                return b.votes - a.votes;
            });
        }
    },
    components: {
        'submission-component': submissionComponent
    },


});