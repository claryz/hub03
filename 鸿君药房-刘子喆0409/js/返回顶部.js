
    window.onload=function(){
        var topbox=document.getElementById("topbox");
        var timer=null;
        topbox.onclick=function(){
            timer=setInterval(function(){
                var scrt=document.body.scrollTop||document.documentElement.scrollTop;
                document.body.scrollTop-=100;
                document.documentElement.scrollTop-=100;
                console.log(scrt);
                if(scrt==0){
                    clearInterval(timer);
                }
            },2)
        }
    }
    window.onscroll=function(){
        var scrt=document.body.scrollTop||document.documentElement.scrollTop;
        if(scrt>document.documentElement.clientHeight){
            topbox.style.display="block";
        }else {
            topbox.style.display="none"
        }
    }