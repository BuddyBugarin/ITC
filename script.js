document.querySelector('button').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('n1').value);
    const num2 = parseFloat(document.getElementById('n2').value);

    if (!isNaN(num1) && !isNaN(num2)) {
        const sum = num1 + num2;
        document.getElementById('sum').value = sum;
        
        // Update the displayed numbers
        document.getElementById('num1display').textContent = num1;
        document.getElementById('num2display').textContent = num2;
        
        document.getElementById('sumlabel').textContent = `The sum of ${num1} and ${num2} is:`; // Update the label text
    } else {
        document.getElementById('sumlabel').textContent = "Please enter valid numbers.";
        document.getElementById('sum').value = '';
    }
});
