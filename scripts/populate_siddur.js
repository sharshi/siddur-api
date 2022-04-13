[].forEach(item => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(item);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://localhost:5000/api/siddur/", requestOptions)
        .then(response => response.text())
        .then(result => console.log('success'))
        .catch(error => {
            item.error = error.message;
            hi.push(item)
            console.log('error', error)
        });
});
