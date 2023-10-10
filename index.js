var data= {
    chatinit:{
        title: ["Hi ! <span class='emoji'> &#128075;</span>","I am your assistant","How can I help you?"],
        options: ["Movies <span class='emoji'> &#128250;</span>","News","Shopping <span class='emoji'> &#128090;</span>","Music <span class='emoji'> &#127925;</span>"]
    },
    movies: {
        title:["Please select category"],
        options:['kdrama','diretube','Web Series','Others'],
        url : {
            more:"https://dramacool.city/",
            link:["https://dramacool.city/","https://diretube.com/go/category/movie","https://lookmovie.foundation/","https://asianwiki.com/Category:KBS_Drama_Series"]
        }
    },
    
    news: {
        title:["Today's Top 5 Headlines"],
        options:['cnn','bbc','aljazeera','fana'],
        url : {
            more:"https://www.bbc.com/news",
            link:["https://edition.cnn.com/","https://www.bbc.com/news","https://www.aljazeera.com/","https://www.fanabc.com/"]
        }
    },
    shopping: {
        title:["Thanks for your response","Welcome to shopping zone <span class='emoji'> &#128090;</span>","Please select one of the below options to proceed further"],
        options:['Electronics','Beauty products','Mobiles','Men Fashion','Women fashion'],
        url : {
            
        }
    },
    electronics: {
        title:["Thanks for your response","Here are some electronic items for you","Click on it to know more"],
        options:['Televisions','Cameras','Gaming Consoles','Headphones','Speakers'],
        url : {
            more:"https://www.amazon.com/online-shopping/s?k=online+shopping",
            link:["https://www.amazon.com/s?k=television&crid=I6D9ZEJB7DRY&sprefix=telev%2Caps%2C1397&ref=nb_sb_ss_ts-doa-p_2_5","https://www.amazon.com/s?k=camera&crid=1DWXGA1IMJ0JT&sprefix=camera%2Caps%2C524&ref=nb_sb_noss_1","https://www.amazon.com/s?k=gaming+consoles&crid=3BLJOE2RSAVWO&sprefix=gaming+co%2Caps%2C491&ref=nb_sb_ss_ts-doa-p_2_9","https://www.amazon.com/s?k=headphones&crid=1M8LJ2ZDDM1LW&sprefix=headphones%2Caps%2C522&ref=nb_sb_ss_ts-doa-p_1_10","https://www.amazon.com/s?k=speaker&crid=2BKABPIYD74NL&sprefix=speaker%2Caps%2C497&ref=nb_sb_noss_1"]
        }
    },
    beauty: {
        title:["Thanks for your response","Here are some beauty products for you","Click on it to know more"],
        options:['Make-up & Nails','Skin Care','Fragrance','Hair care'],
        url : {
            more:"https://www.alibaba.com/?src=sem_ggl&field=UG&from=sem_ggl&cmpgn=9922923274&adgrp=97780323582&fditm=&tgt=kwd-784652173659&locintrst=&locphyscl=1005570&mtchtyp=e&ntwrk=g&device=c&dvcmdl=&creative=598857653493&plcmnt=&plcmntcat=&aceid=&position=&gad=1&gclid=Cj0KCQjwpompBhDZARIsAFD_Fp8sr-hohz3XNOYL0sDh9xwXE8H_Xl3R6-H3c8Aa7sKl3OETZ1_7go8aAuh0EALw_wcB",
            link:["https://www.alibaba.com/trade/search?spm=a2700.product_home_newuser.home_new_user_first_screen_fy23_pc_search_bar.associationItem_pos_0&tab=all&searchText=makeup+and+nails","https://www.alibaba.com/trade/search?tab=all&searchText=skin+care","https://www.alibaba.com/trade/search?tab=all&searchText=fragnance","https://www.alibaba.com/trade/search?tab=all&searchText=hair+care"]
        }
    },
    mobiles: {
        title:["Thanks for your response","These are some results based on your input","Click on it to know more"],
        options:['Mobile Phones','Cases & Covers','Power Banks','Tablets'],
        url : {
            more:"https://www.alibaba.com/trade/search?spm=a2700.galleryofferlist.fy23_pc_search_bar_associationItem.0&tab=all&searchText=mobile+phones",
            link:["https://www.alibaba.com/trade/search?spm=a2700.galleryofferlist.fy23_pc_search_bar_associationItem.0&tab=all&searchText=mobile+phones","https://www.alibaba.com/trade/search?spm=a2700.galleryofferlist.fy23_pc_search_bar_associationItem.0&tab=all&searchText=mobile+phones+cases+and+covers","https://www.amazon.com/s?k=power+bank&crid=2X1AMG4JTI3OX&sprefix=power+bank%2Caps%2C903&ref=nb_sb_noss_1","https://www.amazon.com/s?k=tablet&crid=1UQKH2RBNLJ4U&sprefix=tablet%2Caps%2C524&ref=nb_sb_noss_1"]
        }
    },
    men: {
        title:["Thanks for your response","These are some results based on your input","Click on it to know more"],
        options:['Clothing','Shirts','T-shirts','Innerwear','Jeans'],
        url : {
            more:"https://www.amazon.com/s?k=men+outfit&crid=2FKR5KURFD9O4&sprefix=men+outfit%2Caps%2C668&ref=nb_sb_noss_1",
            link:["https://www.amazon.com/s?k=men+outfit&crid=2FKR5KURFD9O4&sprefix=men+outfit%2Caps%2C668&ref=nb_sb_noss_1","https://www.amazon.com/s?k=men+outfit&crid=2FKR5KURFD9O4&sprefix=men+outfit%2Caps%2C668&ref=nb_sb_noss_1","https://www.amazon.com/s?k=men+outfit&crid=2FKR5KURFD9O4&sprefix=men+outfit%2Caps%2C668&ref=nb_sb_noss_1","https://www.amazon.com/s?k=men+outfit&crid=2FKR5KURFD9O4&sprefix=men+outfit%2Caps%2C668&ref=nb_sb_noss_1","https://www.amazon.com/s?k=men+outfit&crid=2FKR5KURFD9O4&sprefix=men+outfit%2Caps%2C668&ref=nb_sb_noss_1"]
        }
    },
    women: {
        title:["Thanks for your response","These are some results based on your input","Click on it to know more"],
        options:['Clothing','Western Wear','Ethnic Wear','Top Brands'],
        url : {
            more:"https://www.amazon.com/s?k=women+outfits&crid=3IJ2SSUWAV8B2&sprefix=women+outfits%2Caps%2C484&ref=nb_sb_ss_ts-doa-p_1_13",
            link:["https://www.amazon.com/s?k=women+outfits&crid=3IJ2SSUWAV8B2&sprefix=women+outfits%2Caps%2C484&ref=nb_sb_ss_ts-doa-p_1_13","https://www.amazon.com/s?k=women+outfits&crid=3IJ2SSUWAV8B2&sprefix=women+outfits%2Caps%2C484&ref=nb_sb_ss_ts-doa-p_1_13","https://www.amazon.com/s?k=women+outfits&crid=3IJ2SSUWAV8B2&sprefix=women+outfits%2Caps%2C484&ref=nb_sb_ss_ts-doa-p_1_13","https://www.amazon.com/s?k=women+outfits&crid=3IJ2SSUWAV8B2&sprefix=women+outfits%2Caps%2C484&ref=nb_sb_ss_ts-doa-p_1_13"]
        }
    },
    music: {
        title:["These are some latest songs <span class='emoji'> &#127925;</span>"],
        options: ["gosplehotspot.net","boomplaymusic","song 3","song 4","song 5"],
        url : {
            more:"https://gospelhotspot.net/",
            link:["https://gospelhotspot.net/","https://www.boomplay.com/genres/42","https://gospelhotspot.net/","https://www.boomplay.com/genres/42"]
        }
    },
    hollywood: {
        title: ["Thanks for your response","Here are some genre based movies"],
        options: ["Comedy","Horror","Sci-Fi","Romance","Action"],
        url: {
            more:"https://tubitv.com/",
            link:["https://tubitv.com/","http://fmovies.to/","https://tubitv.com/","http://fmovies.to/","https://tubitv.com/"]
        }
    },
    bollywood: {
        title: ["Thanks for your response","Here are some genre based movies"],
        options: ["Comedy","Horror","Sci-Fi","Romance","Action"],
        url: {
            more:"https://www.yupptv.com/",
            link:["https://www.yupptv.com/","https://hindimoviestv.com/","https://hindimoviestv.com/","https://www.yupptv.com/","https://hindimoviestv.com/"]
        }
    },
    web: {
        title: ["Thanks for your response","Here are some genre based web series"],
        options: ["Comedy","Horror","Sci-Fi","Romance","Action"],
        url: {
            more:"https://lookmovie.foundation/",
            link:["https://www.yupptv.com/","https://tubitv.com/","https://tubitv.com/","https://lookmovie.foundation/","https://diretube.com/go/category/movie"]
        }
    },
    others: {
        title: ["Here are some more options for you"],
        options: ["YouTube","Netflix","Amazon Prime","zee5"],
        url: {
            more:"https://www.youtube.com/",
            link:["https://www.youtube.com/","https://www.netflix.com/et/","https://www.primevideo.com/region/eu/offers/nonprimehomepage/ref=dvm_pds_amz_et_dc_s_g_mkw_s4thmxRPP-dc_pcrid_658832086243?mrntrk=slid__pgrid_35699910934_pgeo_1005570_x__adext__ptid_kwd-45697133742","https://www.zee5.com/"]
        }
    },
}

document.getElementById("init").addEventListener("click",showChatBot);
var cbot= document.getElementById("chat-box");

var len1= data.chatinit.title.length;

function showChatBot(){
    console.log(this.innerText);
    if(this.innerText=='START CHAT'){
        document.getElementById('test').style.display='block';
        document.getElementById('init').innerText='CLOSE CHAT';
        initChat();
    }
    else{
        location.reload();
    }
}

function initChat(){
    j=0;
    cbot.innerHTML='';
    for(var i=0;i<len1;i++){
        setTimeout(handleChat,(i*500));
    }
    setTimeout(function(){
        showOptions(data.chatinit.options)
    },((len1+1)*500))
}

var j=0;
function handleChat(){
    console.log(j);
    var elm= document.createElement("p");
    elm.innerHTML= data.chatinit.title[j];
    elm.setAttribute("class","msg");
    cbot.appendChild(elm);
    j++;
    handleScroll();
}

function showOptions(options){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<div>'+options[i]+'</div>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        opt.addEventListener("click", handleOpt);
        cbot.appendChild(opt);
        handleScroll();
    }
}

function handleOpt(){
    console.log(this);
    var str= this.innerText;
    var textArr= str.split(" ");
    var findText= textArr[0];
    
    document.querySelectorAll(".opt").forEach(el=>{
        el.remove();
    })
    var elm= document.createElement("p");
    elm.setAttribute("class","test");
    var sp= '<span class="rep">'+this.innerText+'</span>';
    elm.innerHTML= sp;
    cbot.appendChild(elm);

    console.log(findText.toLowerCase());
    var tempObj= data[findText.toLowerCase()];
    handleResults(tempObj.title,tempObj.options,tempObj.url);
}

function handleDelay(title){
    var elm= document.createElement("p");
        elm.innerHTML= title;
        elm.setAttribute("class","msg");
        cbot.appendChild(elm);
}


function handleResults(title,options,url){
    for(let i=0;i<title.length;i++){
        setTimeout(function(){
            handleDelay(title[i]);
        },i*500)
        
    }

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    if(isObjectEmpty(url)==true){
        console.log("having more options");
        setTimeout(function(){
            showOptions(options);
        },title.length*500)
        
    }
    else{
        console.log("end result");
        setTimeout(function(){
            handleOptions(options,url);
        },title.length*500)
        
    }
}

function handleOptions(options,url){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<a class="m-link" href="'+url.link[i]+'">'+options[i]+'</a>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        cbot.appendChild(opt);
    }
    var opt= document.createElement("span");
    var inp= '<a class="m-link" href="'+url.more+'">'+'See more</a>';

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    console.log(isObjectEmpty(url));
    console.log(url);
    opt.innerHTML=inp;
    opt.setAttribute("class","opt link");
    cbot.appendChild(opt);
    handleScroll();
}

function handleScroll(){
    var elem= document.getElementById('chat-box');
    elem.scrollTop= elem.scrollHeight;
}