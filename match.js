var match=function (s1,arr2) {
    var matches=0;
    var arr1=[]
    for(let i=0;i<26;i++)
        arr1.push(0);
    
    for(let i=0;i<s1.length;i++)
        arr1[s1.charCodeAt(i)-97]+=1;
    
    for(let i=0;i<26;i++){
        if( arr1[i]>0 && arr2[i]>0)
            matches+= Math.min(arr1[i],arr2[i])
    }
    return matches;
    
}

module.exports= match;