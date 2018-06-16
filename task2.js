/* Task 2 */

console.log(calcNewYear(process.argv[2], process.argv[3], process.argv[4]));

function calcNewYear(d, m, y)
{
    var month = ["января", "февраля",  "марта",  "апреля",  "мая", "июня",  "июля",  "августа",  "сентября", "октября", "ноября", "декабря"];

    var yearTmp = 1970;
    var leapYearTmp = 1972;

    if(!isNumeric(d) || !isNumeric(y))
        return "Введена некорректная дата!";

     d = Number(d);
     y = Number(y);


    if(!validate_date(d,m, y))
        return "Введена некорректная дата!";

    y = checkYear(y) ? yearTmp : leapYearTmp;

    today = new Date(y,month.indexOf(m.toLowerCase()),d);
    nextDate = new Date(y+1,0,1);
    msPerDay = 24*60*60*1000;
    daysLeft = Math.round((nextDate.getTime() - today.getTime())/msPerDay);

    return daysLeft -1;

    function validate_date(d,m,y)
    {

        var monthNumber =  month.indexOf(m.toLowerCase());
         if(monthNumber == -1)
             return false;

         if( d < 1 || d > 31)
             return false;

         if( y < 1 ||   y > 2999)
             return false;

          y = checkYear(y) ? yearTmp : leapYearTmp;


        var date = new Date(y, monthNumber, d);
        if ((date.getFullYear() == y) && (date.getMonth() == monthNumber) && (date.getDate() == d)) {
            return true;
        } else {
            return false;
        }
    }

    function checkYear(year) {
        return (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) ? true : false;
    }

    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
}