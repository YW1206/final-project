document.getElementById("remark_back").onclick=function(){
    window.location.href="/admin";
    alert("返回成功");
}

document.getElementById('user').onclick=function(){
    window.location.href="/user/user"; //这里则是直接匹配loc
    
}

document.getElementById('mark').onclick=function(){
    window.location.href="/remark/remark";
}