function login() {
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
    const users = JSON.parse(localStorage.getItem('users') || '{}');

    if (users[username] === password) {
        localStorage.setItem('currentUser', username);
        alert('Login successful');
    } else {
        alert('Invalid credentials');
    }
}

function addUser() {
    const username = document.getElementById('newUsername').value.trim();
    const password = document.getElementById('newPassword').value.trim();
    const users = JSON.parse(localStorage.getItem('users') || '{}');

    if (!username || !password) {
        alert('Username and password cannot be empty.');
        return;
    }
    if (users[username]) {
        alert('Username already exists.');
        return;
    }

    users[username] = password;
    localStorage.setItem('users', JSON.stringify(users));
    alert('User added!');
    document.getElementById('signupContainer').style.display = 'none';
}
