// Beneath is for changing profile pic

const picSelectorInput = Math.floor(Math.random() * 3);

const pic = document.getElementById("pic");

function picSelector() {
    switch (picSelectorInput) {
        case 0:
            pic.src = "media/lilycropped.png";
            break;  // Lily cropped pic
        case 1:
            pic.src = "media/coatcropped.png";
            break; // coat cropped pic
        case 2: 
            pic.src = "media/mecropped.png";
            break; // me cropped pic
    }
}

pic.onload = picSelector();
