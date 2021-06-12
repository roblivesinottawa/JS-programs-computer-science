binaryToDecimal = (n) => {
    let num = n
    let decimal_value = 0

    let base = 1
    let temp = num
    while(temp){
        let last_digit = temp % 10
        temp = Math.floor(temp / 10)
        decimal_value += last_digit * base
        base *= 2
    }
    return decimal_value
}
let num = 1010010111
console.log(binaryToDecimal(num))