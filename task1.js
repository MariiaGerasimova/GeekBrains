/* Task 1 */

console.log(isPolindrom(process.argv[2]));

function isPolindrom(inputStr)
{
   var str = inputStr.toLowerCase();

    str=str.replace(/\s/g, '','');
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");

    var reversStr ="";

    for (var i = str.length -1; i >= 0 ; i--) {
        reversStr = reversStr + str[i];
    }

    if(str == reversStr)
        return "YES";
    else
        return "NO";
}