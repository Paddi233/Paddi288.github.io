// index.html 的 JavaScript 部分
const appIndex = Vue.createApp({
    data() {
        return {
            isLoggedIn: false
        };
    },
    mounted() {
        // 检查用户登录状态
        // 这里可以根据具体情况调整，比如使用 localStorage/sessionStorage 来存储状态
        register() {
    const existingUser = this.users.find(user => user.username === this.username);
    if (existingUser) {
        this.registrationMessage = '用户名已被注册，请选择其他用户名。';
        return;
    }
    this.users.push({ username: this.username, password: this.password });
    this.registrationMessage = '注册成功！请登录。';
    this.username = '';
    this.password = '';
},

login() {
    const user = this.users.find(user => user.username === this.username && user.password === this.password);
    if (user) {
        this.isLoggedIn = true;
        localStorage.setItem('isLoggedIn', true); // 设置用户登录状态
        this.loginMessage = '登录成功！';
        this.registrationMessage = ''; // 清空注册消息
        window.location.href = 'index.html';
    } else {
        this.loginMessage = '用户名或密码错误。';
    }
    this.username = '';
    this.password = '';
},

        this.isLoggedIn = !!localStorage.getItem('isLoggedIn');
    },
    methods: {
        logout() {
            this.isLoggedIn = false;
            localStorage.removeItem('isLoggedIn');
            window.location.href = 'login.html'; // 用于跳转到登录页面
        }
    }
});

appIndex.mount('#app');
