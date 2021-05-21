function test(){
    document.getElementById("clean").value="";    
    document.getElementById("clear_1").value="";
    document.getElementById("clear_2").value="";
}
document.getElementById('add').onclick = function(){
    window.location.href="/addpage";
};

Array.from(document.getElementsByClassName('de_button')).forEach(i => {
    i.onclick = function(){
        let index=(this.getAttribute("data-id"));
        window.location.href="/de/"+index;
    };
});
Array.from(document.getElementsByClassName('update_button')).forEach(i => {
    i.onclick = function(){
        let index=(this.getAttribute("data-id"));
        window.location.href="/update/"+index;
    };
});
