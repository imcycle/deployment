window.onload = function () {
  fetch('/api/profile', {
    headers: {
      'Content-Type': 'application/json',
      'token': localStorage.WM_token,
    }
  })
    .then(res => {
      if (res.status === 200) return res.json();
    })
    .then(res => {
      if (res.code === 0) {
        localStorage.WM_profile = JSON.stringify(res.data);
      } else if (res.code === 401) {
        window.location.pathname = '/login';
      }
    })
}


const handlePublishClick = (id) => {
  fetch('/api/publish', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'token': localStorage.WM_token,
    },
    body: JSON.stringify({ id })
  })
    .then(res => {
      if (res.status === 200) return res.json();
    })
    .then(res => {
      if (res.code === 0) {

      } else if (res.code === 401) {
        window.location.pathname = '/login';
      } else {
        alert(res.message);
      }
    })
}
