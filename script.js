
function changeColor(box, color){

    // Reset all boxes
    let boxes = document.querySelectorAll(".color-box");

    boxes.forEach(function(item){
        item.style.backgroundColor = "white";
        item.style.color = "black";
    });

    // Change clicked box color
    box.style.backgroundColor = color;

    if(color === "yellow"){
        box.style.color = "black";
    }else{
        box.style.color = "white";
    }
}
function changeName() {

    let name = document.getElementById("nameInput").value;

    if(name.trim() !== ""){

        document.getElementById("heading").innerHTML = "Hello " + name;

    }
}
