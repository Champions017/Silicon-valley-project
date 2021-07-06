function level5F(){
    background(bg5)
    PRB.x = camera.x + 430
    PRB.y = camera.y - 100

    litterB.x = PRB.x + 160
    litterB.y = PRB.y - 3
    
    plantB.x = PRB.x + 80
    plantB.y = PRB.y + 7
    plantB.scale = 0.5

    Bmedal.x = PRB.x - 80
    Bmedal.y = PRB.y + 7

    Gmedal.x = PRB.x - 160
    Gmedal.y = PRB.y + 7
    
        if(trash.x > trashcan.x - 50 && trash.x < trashcan.x + 50){
            trash.velocityY = trash.velocityY + 4
            if(trash.y >= trashcan.y - 50){
                trashScore++
                trash.destroy();
                trash = createSprite(Math.round(random(50,width-50)),Math.round(random(50,height-50)))
                //trash.addImage(trashImg)
                trash.scale = 0.3
                var rand = Math.round(random(1,3))
                console.log(rand)
                switch(rand){
                    case 1: 
                    trash.addImage(trashImg)
                    break;
        
                    case 2: 
                    trash.addImage(bagImg)
                    break;

                    default:
                    trash.addImage(trashImg)
                    break;
                }
            }
        }
        if(trash.y > height+50){
            trash.destroy();
            trash = createSprite(Math.round(random(50,width-50)),Math.round(random(50,height-50)))
            //trash.addImage(trashImg)
            trash.scale = 0.3
            switch(1,2,3){
                case 1: 
                trash.addImage(trashImg)
                break;
    
                case 2: 
                trash.addImage(bagImg)
                break;

                default:
                trash.addImage(trashImg)
                break;
            }
        }
    

    textSize(35)
    textFont("castellar")
    textAlign(CENTER)
    fill("gold")
    stroke("blue")
    text("Trash thrown: " + trashScore,width/2,50)
    textSize(25)
    textFont("algerian")
    fill("yellow")
    text("Drag the trash to the trash can! \n release when the trash is in line with the dustbin on the 'y' axis!",width/2,100)
}
function mouseDragged(){
    trash.x = mouseX
    trash.y = mouseY
}
