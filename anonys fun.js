1.)Do the below programs in anonymous function & IIFE
a.)Print odd numbers in an array
const odd = () => {
    let a = [1, 2, 3, 4];
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2) = 0) {
            console.log(a[i]);
        };
    };
};


b.)Convert all the strings to title caps in a string array
const names = ['Ali', 'Atta', 'Alex', 'John'];
const uppercased = names.map(name => name.toUpperCase());
console.log(uppercased);
// ['ALI', 'ATTA', 'ALEX', 'JOHN']


c.)Sum of all numbers in an array
numbers = [1, 10, 100, 1000];
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];

    function (number) {
        total += number;
    }
}
console.log(total);

d.)Return all the prime numbers in an array
function isPrime(num) {
    for (var i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
}


e.)programs in anonymous function & IIFE
function isPalinArray(arr, n)
    {
        // Traversing each element of the array
        // and check if it is palindrome or not
        for (let i = 0; i < n; i++)
        {
            let ans = isPalindrome(arr[i]);
            if (ans == false)
                return false;
        }
        return true;
    }
     
    let arr = [ 121, 131, 20 ];
    // length of array
    let n = arr.length;
   
    let res = isPalinArray(arr, n);
    if (res == true)
        console,log("Array is a PalinArray");
    else
        console.log("Array is not a PalinArray");
 
f.)Return median of two sorted arrays of same size
function getMedian(ar1, ar2, n)
        {
            var i = 0; /* Current index of i/p array ar1[] */
            var j = 0; /* Current index of i/p array ar2[] */
            var count;
            var m1 = -1, m2 = -1;
         
            /* Since there are 2n elements, median will be average
            of elements at index n-1 and n in the array obtained after
            merging ar1 and ar2 */
            for (count = 0; count <= n; count++)
            {
                /*Below is to handle case where all elements of ar1[] are
                smaller than smallest(or first) element of ar2[]*/
                if (i == n)
                {
                    m1 = m2;
                    m2 = ar2[0];
                    break;
                }
         
                /*Below is to handle case where all elements of ar2[] are
                smaller than smallest(or first) element of ar1[]*/
                else if (j == n)
                {
                    m1 = m2;
                    m2 = ar1[0];
                    break;
                }
                /* equals sign because if two
                    arrays have some common elements */
                if (ar1[i] <= ar2[j])
                {
                    m1 = m2; /* Store the prev median */
                    m2 = ar1[i];
                    i++;
                }
                else
                {
                    m1 = m2; /* Store the prev median */
                    m2 = ar2[j];
                    j++;
                }
            }
         
            return (m1 + m2)/2;
        }
         
        /* Driver program to test above function */
        var ar1 = [1, 12, 15, 26, 38];
        var ar2 = [2, 13, 17, 30, 45];
        var n1 = ar1.length;
        var n2 = ar2.length;
        if (n1 == n2)
            console.log("Median is "+ getMedian(ar1, ar2, n1));
        else
        console,log("Doesn't work for arrays of unequal size");


g.) Remove duplicates from an array
        chars = ['A', 'B', 'A', 'C', 'B'];
        let uniqueChars = [...new Set(chars)];
        
        console.log(uniqueChars);

h.) Rotate an array by k times

        let Array = [1, 2, 3, 4, 5];
        let N = Array.length;
        let K = k;
         
        Rotate(Array, N, K);
         


