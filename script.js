window.onload = function() {
    console.log("dom content loaded");
    fetch("/status").then(function(res) {
        res.json().then(function(data) {
            console.log(data);
            document.getElementById('name').innerHTML = "name:" + " " + data['name'];
            document.getElementById('age').innerHTML = "age:" + " " +data['age'];
        })
    })
}