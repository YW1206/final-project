document.getElementById('add_user').onclick = function(){
    window.location.href="/user/add_user";
};

Array.from(document.getElementsByClassName('de_user')).forEach(i => {
    i.onclick = function(){
        let index=(this.getAttribute("data-id"));
        window.location.href="/user/de_user/"+index;
    };
});

Array.from(document.getElementsByClassName('update_user')).forEach(i => {
    i.onclick = function(){
        let index=(this.getAttribute("data-id"));
        window.location.href="/user/up-user?id="+index;
    };
});


document.getElementById('user_user').onclick=function(){
    window.location.href="/user/user"; //这里则是直接匹配loc
    
}

document.getElementById('user_mark').onclick=function(){
    window.location.href="/remark/remark";
}