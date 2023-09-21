function volume_sphere() {
    // Get the value of the Radius field from the form
    const radius = parseFloat(document.getElementById("radius").value);

    // Check if the input is a valid number
    if (!isNaN(radius)) {
        // Calculate the volume of the sphere
        const volume = (4/3) * Math.PI * Math.pow(radius, 3);

        // Display the calculated volume in the volume field
        document.getElementById("volume").value = volume.toFixed(2);
    } else {
        // If the input is not a valid number, display an error message
        document.getElementById("volume").value = "Invalid input";
    }
}
 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
