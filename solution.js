function colorFence(length) {
    let painted = {};
    
    return (left,right)=>{
        if(right > length){
            right  = length
        }
        
        if(0 > left){
            left  = 0
        }
            for(let i = Math.min(left,right); i <= Math.max(left,right); i++){
           painted[i]=i
        }
        return length  - Object.keys(painted).length < 0?0:length  - Object.keys(painted).length;
    }
}


const colorTntervals = colorFence(20);
console.log(colorTntervals(18,18));  //the remaining is 19
console.log(colorTntervals(-10,30)); // the remaining is 15
console.log(colorTntervals(17,19));//  the remaining is 13
console.log(colorTntervals(0,19)); // the remaining is 0
