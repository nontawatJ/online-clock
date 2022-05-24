const current = new Date();
var hour = current.getHours();
var mins = current.getMinutes();
var sec = current.getSeconds();

document.getElementById("year").innerHTML = current.getFullYear();
document.getElementById("month").innerHTML = current.toLocaleString('default', { month: 'short' })
document.getElementById("day").innerHTML =  ("0" + current.getDate()).slice(-2);


setInterval(function(){
    if (sec === 59){
        sec = 0;
        if (mins === 59){
            mins = 0;
            if (hour === 23){
                hour = 0;
                document.getElementById("year").innerHTML = current.getFullYear();
                document.getElementById("month").innerHTML = current.toLocaleString('default', { month: 'short' })
                document.getElementById("day").innerHTML =  ("0" + current.getDate()).slice(-2);
            }
            else {
                hour++;
            }
        }
        else {
            mins++;
        }
    }
    else {
        sec++;
    }
    document.getElementById("hour").innerHTML = ("0" + hour).slice(-2);
    document.getElementById("min").innerHTML = ("0" + mins).slice(-2);
    document.getElementById("sec").innerHTML = ("0" + sec).slice(-2);

},1000)