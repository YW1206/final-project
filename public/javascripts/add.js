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

// $(".update_button").cilck(
    // function(){
        // let index=(this.getAttribute("data-id"));
        // window.location.href="/update/"+index;
    // }
// )