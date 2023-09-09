var bg,bging
var ss,ssing
var a,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11
var gameover,gameoverimg
var restart,restarting
var score=0
var gamestate="play"
var aliengroup,lasergroup
var laser

function preload(){
bging=loadImage("assets/bg3.jpg")
ssing=loadImage("assets/ss2.png")
a1=loadImage("assets/a1.png")
a2=loadImage("assets/a2.png")
a3=loadImage("assets/a3.png")
a4=loadImage("assets/a4.png")
a5=loadImage("assets/a5.png")
a6=loadImage("assets/a6.png")
a7=loadImage("assets/a7.png")
a8=loadImage("assets/a8.png")
a9=loadImage("assets/a9.png")
a10=loadImage("assets/a10.png")
a11=loadImage("assets/a11.png")
}

function setup(){
createCanvas(1400,700)
bg=createSprite(700,350,1400,700)
bg.addImage(bging)
bg.scale=1.5

ss=createSprite(100,350)
ss.addImage(ssing)
ss.scale=1

aliengroup=new Group()
lasergroup=new Group()
}

function draw(){
background(0)
drawSprites()

fill("white")
textSize(30)
text("S C O R E :"+score,50,50)
textSize(20)
fill("yellow")
text("Game Designed by dev",1100,690)
if (gamestate==="play"){
    if (keyDown("W")){
        ss.y-=8
    }

    if (keyDown("S")){
        ss.y+=8

    }

    if (keyDown("space")){
        releaselaser()

    }
    spawnaliens()
    lasergroup.isTouching(aliengroup,destroyalien)
    if (aliengroup.isTouching(ss)){
        gamestate="end"
    }
}

if (gamestate==="end"){
    gameover()
}
}

function spawnaliens(){

    if (frameCount%40==0){
        var ran=random(100,600)
        a=createSprite(1500,ran)
        
        var raning=Math.round(random(1,11))
        console.log(raning)

        switch(raning){
            case 1: 
            a.addImage(a1)
            a.scale=0.3
            a.velocityX=-6
            break

            case 2: 
            a.addImage(a2)
            a.scale=0.3
            a.velocityX=-8
            break

            case 3: 
            a.addImage(a3)
            a.scale=0.5
            a.velocityX=-10
            break

            case 4: 
            a.addImage(a4)
            a.scale=0.4
            a.velocityX=-12
            break

            case 5: 
            a.addImage(a5)
            a.scale=0.3
            a.velocityX=-14
            break

            case 6: 
            a.addImage(a6)
            a.scale=0.5
            a.velocityX=-16
            break

            case 7: 
            a.addImage(a7)
            a.scale=0.5
            a.velocityX=-18
            break

            case 8: 
            a.addImage(a8)
            a.scale=0.5
            a.velocityX=-16
            break

            case 9: 
            a.addImage(a9)
            a.scale=0.3
            a.velocityX=-14
            break

            case 10: 
            a.addImage(a10)
            a.scale=0.5
            a.velocityX=-12
            break

            case 11: 
            a.addImage(a11)
            a.scale=0.5
            a.velocityX=-10
            break
        }
            a.lifetime=1400/6
            aliengroup.add(a)
    }

}

    function releaselaser(){
        laser=createSprite(205,ss.y-2,60,5)
        laser.shapeColor="aqua"
        laser.velocityX=10
        laser.lifetime=1400/10
        lasergroup.add(laser)
    } 
    function destroyalien(laser,alien){
        alien.destroy()    
        lasergroup.destroyEach()
        score+=10
    }
    function gameover(){
        swal({
            title: "G a m e  O v e r !",
            text:"You lost the game...",
            imageUrl:"assets/gameover.png",
            imageSize:"150x150",
            comfirmButtonText:"Play Again",
        },
        function (isConfirm){
            if (isConfirm){
                location.reload()
            }
        }
            

        )
    }