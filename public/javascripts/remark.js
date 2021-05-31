document.getElementById('remark_user').onclick=function(){
    window.location.href="/user/user"; //这里则是直接匹配loc
    
}

document.getElementById('remark_remark').onclick=function(){
    window.location.href="/remark/remark";
}

document.getElementById('add_remark').onclick = function(){
    window.location.href="/remark/add_remark";
};

Array.from(document.getElementsByClassName('de_remark')).forEach(i => {
    i.onclick = function(){
        let index=(this.getAttribute("data-id"));
        window.location.href="/remark/de_remark/"+index;
    };
});

Array.from(document.getElementsByClassName('up_remark')).forEach(i => {
    i.onclick = function(){
        let index=(this.getAttribute("data-id"));
        window.location.href="/remark/up-remark?id="+index;
    };
});