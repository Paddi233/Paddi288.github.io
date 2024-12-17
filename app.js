const app = Vue.createApp({
    data() {
        return {
            currentIndex: 0,
            showInfo: false,
            skills: [
                { name: '永劫无间', link: 'https://www.yjwujian.cn/' },
                { name: '无畏契约', link: 'https://val.qq.com/act/a20230801download/index.html?adtag=1139' },
                { name: '王者荣耀', link: 'https://pvp.qq.com/' },
                { name: '崩坏-星穹铁道', link: 'https://sr.mihoyo.com/' },
                { name: '鸣潮', link: 'https://mc.kurogames.com/main' }
            ],
            name: '',
            message: '',
            submitted: false,
            thankYouMessage: '感谢你的留言！',
            people: [
                {
                    name: '杨亚杰',
                    description: '我是一名20岁的在校大学生',
                    info: '我来自江西吉安，高中就读于深圳，我是一位乐于助人，热心善良,有团体凝聚力的人，平时喜欢打游戏，听音乐，唱歌。',
                },
                {
                    name: '梁伟聪',
                    description: '是一个充满活力和热情的广科干在校生',
                    info: '衷于不断学习和成长，面对新的挑战和项目总是充满热情。我相信我的技能和经验能够为团队带来价值',
                    
                },
                {
                    name: '黄凯峰',
                    description: '我是一名正在学习javascript和vue前端知识的大学生。',
                    info: '将会不断学习前后端基础知识和提高自己的编程能力',
                    
                }
            ]
        };
    },
    methods: {
        toggleInfo() {
            this.showInfo = !this.showInfo;
        },
        submitForm() {
            this.submitted = true;
            this.name = '';
            this.message = '';
        },
        prevPerson() {
            if (this.currentIndex > 0) {
                this.currentIndex--;
            }
        },
        nextPerson() {
            if (this.currentIndex < this.people.length - 1) {
                this.currentIndex++;
            }
        }
    }
});

app.mount('#app');