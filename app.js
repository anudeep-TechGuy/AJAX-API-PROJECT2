console.log("It is residing in the appJs");
var req = new XMLHttpRequest();
req.open('GET', "https://randomuser.me/api/?results=3");
req.send();
//Get an element by id
var el = document.getElementById("details");

req.onreadystatechange = function () {
    console.log(req.readyState);
    if (req.readyState === 4) {
        str = req.responseText;
        var obj = JSON.parse(str);
        var res = [];
        res = obj.results;
        console.log(res);

        for (var i = 0; i < res.length; i++) {



            el.innerHTML = "  <h1>Details:</h1><p><Strong> Email: </strong>" + res[i].email + " </p><p><strong>Gender:</strong>"
                + res[i].gender + "</p>";
        }



    }
}
function func() {

    document.body.style.backgroundColor = "yellow";
    location.reload();

}
