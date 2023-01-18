/*퀴즈1. 빅오 표현식 간단히 해보기 (3/5)*/
/*
O(n+10) -> O(n)

O(100*n) -> O(n) ※

O(25) -> O(1)  

O(n^2 + n^3) -> O(n^3) ※

O(n+n+n+n) -> O(n)
*/


/*퀴즈2. 함수에 대한 시간 복잡도 구하기*/
function logUpTo(n){
    for (var i=1; i<=n; i++){
        console.log(i);
    }
}
//-->O(n)

function logAtMost10(n){
    for (var i=1; i<=Math.min(n,10); i++){
        console.log(i);
    }
}
//-->O(1)

function logAtLeast10(n){
    for (var i=1; i<=Math.max(n,10); i++){
        console.log(i);
    }
}
//-->O(n)

function onlyElementsAtEvenIndex(array){
    var newArray = Array(Math.ceil(array.length /2));
    for (var i=0; i<array.length; i++){
        if(i%2 === 0){
            newArray[i/2] = array[i];
        }
    }
    return newArray;
}
//-->O(n)

function subtotals(array){
    var subtotalArray = Array(array.length);
    for (var i=0; i<array.length; i++){
        var subtotal = 0;
        for(var j=0; j<=i; j++){
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;
}
//-->O(n^2)