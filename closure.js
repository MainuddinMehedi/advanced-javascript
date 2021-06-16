function stopwatch(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}