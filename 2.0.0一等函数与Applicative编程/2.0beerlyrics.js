const _ =require("underscore");

function lyricSegment(n){

    return _.chain([])
        .push(`${n} bottles of beer on the wall`)
        .push(`${n} bottles of beer`)
        .push(`Take one down,pass it around`)
        .tap(function(lyrics){
            if(n>1)
                lyrics.push((n-1) + `bottles of beer on the wall`);
            else
                lyrics.push(`No more bottles of beer on the wall`);
        }).value()
}

function song(start,end,lyricGen){
    return _.reduce(_.range(start,end,-1),
    (arr,i)=>{
        return arr.concat(lyricGen(i));
    },
    []);
}



// console.log(lyricSegment(99));
