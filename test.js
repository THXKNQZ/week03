import {getContext, keys} from "./week03-module.js";

document.addEventListener("DOMContentLoaded", (ev) => {
    //เขียนโค๊ดตรงนี้ค้าบ    

    const ctx = getContext("#myCanvas");

    const player = {
        x : 400,
        y : 300,
        size : 50, //with and height;
        color : "red",
    }
    function draw() {
        // clearRect เพื่อเคลียร์แคนวาสก่อนวาดใหม่
        ctx.fillStyle = "rgb(197, 209, 223)";
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        if (keys["a"]) {
            player.x -= 0.1;
        }
        //transform render
        ctx.save();
        ctx.translate(player.x, player.y);
        
        // วาด player
        ctx.fillStyle = player.color;
        ctx.restore();
        ctx.fillRect(
            - player.size / 2, 
             - player.size / 2,
             player.size,
            player.size);
        

        requestAnimationFrame(draw);
    }
    draw();
});
