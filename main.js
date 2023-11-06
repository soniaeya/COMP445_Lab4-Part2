fetch('http://reference.dashif.org/dash.js/v4.7.0/samples/dash-if-reference-player/index.html')
    .then(response => {
        if (response.ok) {
            return response.text();
        } else {
            throw new Error('Failed to retrieve the HTML source code.');
        }
    })
    .then(html => {
        console.log(html); // This will log the HTML source code to the console
    })
    .catch(error => {
        console.error(error);
    });