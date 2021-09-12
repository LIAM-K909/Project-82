canvas = 
document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "black";
width_of_line = "1";
canvas.addEventListner("mousedown", my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;
    MouseEvent = "mousedown";
}

function my_mousemove(e)
{
    current_position_of_mouse_X = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_Y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown")
    {
        console.log("Current positions of X and Y cordinates = ");
        console.log("X = ", current_position_of_mouse_X, "Y = ", current_position_of_mouse_Y)

        ctx.beginPath();
        ctx.strokestyle = color;
        ctx.lineWidht = width_of_line;
        ctx.arc(current_position_of_mouse_X, current_position_of_mouse_Y, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
}
