let blocks = document.querySelector(".blocks")
let blocksArray = document.querySelector(".blocks").children

let left = 0

for (let i = 0; i < blocksArray.length ; i++)
{
    blocksArray[i].addEventListener('click', function () {
        
         blocks.prepend(blocksArray[i]) 
       
        })
        
        blocksArray[i].addEventListener('dblclick', function () {
            blocks.style.position = "absolute"
            left > 24 ? left = 1 : ++left
            blocksArray[i].style.marginLeft = `${left}rem`
            
               })  
                 
}

