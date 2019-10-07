var array = [3, 1, 4, 0, 2];

var bubleSort = function (arr) {
    for(var i = 0; i < arr.length; i++) {
        for(var j = 0; j < arr.length - i; j++) {
            if(arr[j] > arr[j + 1]) {
                var between = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = between;
                console.log(arr)
            }
            
        }
        
    }
} 
bubleSort(array)