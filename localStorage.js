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
