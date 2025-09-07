import {getContext, keys} from "./week03-module.js";

document.addEventListener("DOMContentLoaded", (ev) => { 
    const ctx = getContext("#myCanvas");
    const player = {
        x : 400,
        y : 300,
        width : 50,
        height : 50,
        color : "red",
    }
    function draw (){
        //clear canvas3e
        ctx.fillStyle = "rgba(113, 232, 236, 1)";
        requestAnimationFrame(draw);
        ctx.fillRect(0,0,ctx.canvas.width, ctx.canvas.height);

        //update data/input

        if (keys['a']){
            player.x -= 0.2;
        }
        if (keys['d']){
            player.x += 0.2;
        }
        if (keys['w']){
            player.y -= 0.3;
        }
        if (keys['s']){
            player.y += 0.3;
        }

        //tranform$ render
        ctx.save();
        ctx.translate(player.x,player.y)
        ctx.fillStyle = player.color;
        ctx.fillRect(-player.width/2,-player.height/2,player.width,player.height);
        ctx.restore();
    }
    draw();
} );
