document.getElementById("calculate").addEventListener("click", function() {

    const numbers = [
        parseInt(document.getElementById("a").value),
        parseInt(document.getElementById("b").value),
        parseInt(document.getElementById("c").value),
        parseInt(document.getElementById("d").value),
        parseInt(document.getElementById("e").value)
    ];

    let sum = 0;
    let max = numbers[0];

    for(let i =0;i<numbers.length;i++) {
        sum += numbers[i];  // sum = sum + number[i]

        if(numbers[i] > max) {
            max = numbers[i];
        }
    }

    const average = sum / (numbers.length);

    document.getElementById('sum').value = sum;
    document.getElementById('avg').value = average.toFixed(2);
    document.getElementById('max').value = max;
});