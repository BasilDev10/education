// Function to find and print the largest number in an array
function findMaxValue(array) {
    if (array.length === 0) {
        console.log("Array is empty.");
        return;
    }
    
    let maxValue = array[0];
    
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maxValue) {
            maxValue = array[i];
        }
    }
    
    console.log("The largest value in the array is:", maxValue);
    document.getElementById("output").textContent = "The largest value is: " + maxValue;
}

// Example usage
document.getElementById("findMaxBtn").addEventListener("click", function() {
    const numbersArray = [5, 12, 8, 20, 3]; // Sample array
    findMaxValue(numbersArray);
});
