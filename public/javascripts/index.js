
const handlePublishClick = () => {
    fetch('/api/publish')
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(res => {
            if (res.code === 0) {
                alert('ok');
            } else {
                alert('error');
            }
        })
}