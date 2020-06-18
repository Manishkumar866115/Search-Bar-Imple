var stem= function(s){
    w=""
    for(var i=0; i< s.length;i++){
        temp=s[i].toLowerCase();
        if( temp >= 'a' && temp<='z' && temp!=='a' && temp!=='e' && temp!=='i' && temp!=='o' && temp!=='u'){
                w+=temp;
        }
    }

    return w;
}

module.exports=stem;
