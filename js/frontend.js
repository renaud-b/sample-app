function callSmartContract() {
    const name = document.getElementById("name").value;
    const count = document.getElementById("count").value;
    const url = `/p-script/12574571-fad9-41c5-9038-fe25adc8ef20/SayHello?name=${encodeURIComponent(name)}&count=${count}`;
    fetch(url).then((response) => response.json()).then((data) => {
        document.getElementById("output").innerText = JSON.stringify(data, null, 2);
    }).catch((error) => {
        document.getElementById("output").innerText = ("Error: " + error);
    });
}