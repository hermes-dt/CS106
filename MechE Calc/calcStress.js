function calculateStress() {

    // Retrieve the input values
    var force = document.getElementById("force").value;
    var area = document.getElementById("area").value;

    // Convert the input values to numbers
    force = parseFloat(force);
    area = parseFloat(area);

    // Validate the inputs
    if (isNaN(force) && isNaN(area)) {
        document.getElementById("errorStressMessage").innerText = "Please enter valid numbers for force and area.";
        document.getElementById("stressResult").value = "0";
        return;
    }
    else if (isNaN(force)) {
        document.getElementById("errorStressMessage").innerText = "Please enter valid numbers for force";
        document.getElementById("stressResult").value = "0";
        return;
    }
    else if (isNaN(area)) {
        document.getElementById("errorStressMessage").innerText = "Please enter valid numbers for area";
        document.getElementById("stressResult").value = "0";
        return;
    }
    
    if (area === 0) {
        document.getElementById("errorStressMessage").innerText = "Area cannot be zero.";
        document.getElementById("stressResult").value = "";
        return;

    }

    // Calculate stress
    var stress = force / area;

    // Display the result
    document.getElementById("errorStressMessage").innerText = "";
    document.getElementById("stressResult").value = stress.toFixed(2);
}

function calculateStrain() {

    // Retrieve the input values
    var deltaLength = document.getElementById("deltaLength").value;
    var initialLength = document.getElementById("inLength").value;

    // Convert the input values to numbers
    deltaLength = parseFloat(deltaLength);
    initialLength = parseFloat(initialLength);

    // Validate the inputs
    if (isNaN(initialLength) && isNaN(deltaLength)) {
        document.getElementById("errorStrainMessage").innerText = "Please enter valid numbers for initial and final length.";
        document.getElementById("strainResult").value = "0";
        return;
    }
    else if (isNaN(initialLength)) {
        document.getElementById("errorStrainMessage").innerText = "Please enter valid numbers for the initial length";
        document.getElementById("strainResult").value = "0";
        return;
    }
    else if (isNaN(deltaLength)) {
        document.getElementById("errorStrainMessage").innerText = "Please enter valid numbers for the change in length";
        document.getElementById("strainResult").value = "0";
        return;
    }
    if (initialLength === 0) {
        document.getElementById("errorStrainMessage").innerText = "Initial length cannot be zero.";
        document.getElementById("strainResult").value = "";
        return;

    }

    // Calculate strain
    var strain = deltaLength / initialLength;

    // Display the result
    document.getElementById("errorStrainMessage").innerText = "";
    document.getElementById("strainResult").value = strain.toFixed(2);

}

function updateLength(Field) {
    var deltaLength = parseFloat(document.getElementById("deltaLength").value);
    var initialLength = parseFloat(document.getElementById("inLength").value);
    var finalLength = parseFloat(document.getElementById("fLength").value);

    document.getElementById("errorStrainMessage").innerText = "";
    document.getElementById("strainResult").value = "";
   
    if (initialLength <= 0) {
        document.getElementById("errorStrainMessage").innerText = "Initial length must be greater than zero.";
        return;
    }
    if (Field === 'inLength') {
        if (!isNaN(finalLength)) {
            deltaLength = finalLength - initialLength;
            document.getElementById("deltaLength").value = deltaLength.toFixed(2);
        } else if (!isNaN(deltaLength)) {
            finalLength = initialLength + deltaLength;
            document.getElementById("fLength").value = finalLength.toFixed(2);
        }
    } else if (Field === 'fLength') {
        if (!isNaN(initialLength)) {
            deltaLength = finalLength - initialLength;
            document.getElementById("deltaLength").value = deltaLength.toFixed(2);
        }
    } else if (Field === 'deltaLength') {
        if (!isNaN(initialLength)) {
            finalLength = initialLength + deltaLength;
            document.getElementById("fLength").value = finalLength.toFixed(2);
        }
    }
}

