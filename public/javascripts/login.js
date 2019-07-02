
const login = () => {
  var username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  fetch('/api/login', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    })
  })
    .then(res => {
      if (res.status === 200) {
        return res.json();
      }
    })
    .then(res => {
      if (res.code === 0) {
        localStorage.WM_token = res.data;
        window.location.pathname = '/';
      } else {
        alert(res.message);
      }
    })
}
