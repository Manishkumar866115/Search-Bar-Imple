var unmatch=function (s1,s1stem,arr2,s2) {

    var unmatches=0;
    var arr1=[]
    for(let i=0;i<26;i++)
        arr1.push(0);
    
    for(let i=0;i<s1stem.length;i++)
        arr1[s1.charCodeAt(i)-97]+=1;
    
    for(let i=0;i<26;i++)
        unmatches+= Math.abs(arr1[i]-arr2[i])

    list1= s1.split(' ')
    list2= s2.split(' ')
    
    let unique1 = []
    for(let i = 0;i < list1.length; i++){
        if(unique1.indexOf(list1[i]) == -1){
            unique1.push(list1[i])
        }
    }
    let unique2 = []
    for(let i = 0;i < list2.length; i++){
        if(unique2.indexOf(list2[i]) == -1){
            unique2.push(list2[i])
        }
    }

    for( let i=0;i<unique1.length;i++){
        for(let j=0;j<unique2.length;j++){
            if( unique1[i].toLowerCase()==unique2[j].toLowerCase())
                unmatches-=5;
        }
    }
    return unmatches;
    
}

module.exports= unmatch;