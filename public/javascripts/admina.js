function test(){
    document.getElementById("clear").value="";    
}
document.getElementById('add').onclick = function(){
    window.location.href="/admin/add";
};

document.getElementById('nextPage').onclick = function(){
    window.location.href="/admin/nextPage";//在这里对应的路径是 /path1/path2 
    //:路径1是对应了路由的js的文件路径,路径2则是对应了请求方式里面写的路径
};
document.getElementById('lastPage').onclick = function(){
    window.location.href="/admin/lastPage"; 
};

Array.from(document.getElementsByClassName('de_button')).forEach(i => {
    i.onclick = function(){
        let index=(this.getAttribute("data-id"));
        window.location.href="/admin/de/"+index;
    };
});
 
Array.from(document.getElementsByClassName('update_button')).forEach(i => {
    i.onclick = function(){
        let index=(this.getAttribute("data-id"));
        window.location.href="/admin/update?id="+index;
    };
});


document.getElementById('user').onclick=function(){
    window.location.href="/user/user"; //这里则是直接匹配localhost：3000的路径  比如说localhost:3000/user/first  那么这里就是匹配/user ：path1  然后就是/first :path2  网址匹配上了就可以了
    
}

document.getElementById('mark').onclick=function(){
    window.location.href="/remark/remark";
}


 
 
 
                                                                                                                                                                                       
