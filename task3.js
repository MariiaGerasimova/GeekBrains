/* Task 3 */

console.log(calcTime(process.argv[2], process.argv[3]));

function calcTime(t1, t2)
{

    if(!validate(t1,t2))
        return "Данные не корректны!";

    t1= Number(t1);
    t2 = Number(t2);

    var totalTime = t1+t2;

    var hour = Math.floor(totalTime/3600);
    var tmp = totalTime%3600;
    var minutes  =  Math.floor(tmp/60)
    var seconds  = tmp%60;


    var resultStr ="";

    if(hour != 0)
        resultStr = ""+hour+getResultStringHour(hour);

    if(minutes != 0 || (minutes == 0 && hour != 0))
        resultStr = resultStr +" "+ minutes + getResultStringMinutes(minutes);

    resultStr = resultStr + " " + seconds + getResutlStringSeconds(seconds);

    return resultStr;


    function getResultStringHour(hour){

        if(hour == 11 || hour == 12 || hour == 13 || hour == 14)
            return " часов"

        var str = ""+hour;
        var number=parseInt(str.substr(str.length-1))


        if(number == 1)
            return " час"
        if(number == 2 || number == 3 || number == 4 )
            return " часа"

         if(number == 5 || number == 6 || number == 7 || number == 8 || number == 9 || number == 0 )
           return " часов"
    }


    function getResultStringMinutes(minutes){
        if(minutes == 11 || minutes == 12 || minutes == 13 || minutes == 14)
            return " минут"

        var str = ""+minutes;
        var number=parseInt(str.substr(str.length-1))


        if(number == 1)
            return " минута"

        if(number == 2 || number == 3 || number == 4 )
            return " минуты"

        if(number == 5 || number == 6 || number == 7 || number == 8 || number == 9 || number == 0 )
            return " минут"

    }

    function getResutlStringSeconds(seconds) {
        if(seconds == 11 || seconds == 12 || seconds == 13 || seconds == 14)
            return " секунд"

        var str = ""+seconds;
        var number=parseInt(str.substr(str.length-1))


        if(number == 1)
            return " секунда"

        if(number == 2 || number == 3 || number == 4 )
            return " секунды"

        if(number == 5 || number == 6 || number == 7 || number == 8 || number == 9 || number == 0 )
            return " секунд"
    }

    function validate(t1,t2)
    {
        if(!isNumeric(t1))
            return false;

        if(!isNumeric(t2))
            return false;

        if( t1 < 1 && t2 > 100000)
            return false;

        return true;
    }

    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
}