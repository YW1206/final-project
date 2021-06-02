document.getElementById("honor").onclick=function(){
    window.location.href="/send_blog/showblog_honor";
};

document.getElementById("club").onclick=function(){
    window.location.href="/send_blog/showblog_club";
};

document.getElementById("campus").onclick=function(){
    window.location.href="/send_blog/showblog";
};

document.getElementById("event").onclick=function(){
    window.location.href="/send_blog/showblog_event";
};

Array.from(document.getElementsByClassName('form-control')).forEach(i => {
    i.onclick = function(){
        let index=(this.getAttribute("honor-id"));
        window.location.href="/send_blog/honorlike/"+index;
    };
});

Array.from(document.getElementsByClassName('like_campu')).forEach(i => {
    i.onclick = function(){
        let index=(this.getAttribute("campu-id"));
        window.location.href="/send_blog/like/"+index;
    };
});
 

Array.from(document.getElementsByClassName('like_club')).forEach(i => {
    i.onclick = function(){
        let index=(this.getAttribute("club-id"));
        window.location.href="/send_blog/clublike/"+index;
    };
});

Array.from(document.getElementsByClassName('like_event')).forEach(i => {
    i.onclick = function(){
        let index=(this.getAttribute("event-id"));
        window.location.href="/send_blog/eventlike/"+index;
    };
});

 