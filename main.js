const check_age = () => {
    if (document.getElementById('age').checked) {
    
        window.open("main.html","_self");
    } else {
        alert("Нисте потврдили да имате преко 18 година !");
    }
};
