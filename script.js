let cards = document.querySelectorAll(".card")

for(let card of cards){
   
    card.addEventListener("click", ()=>{
        let card1 = card.querySelector("h3")
        let card2 = card1.innerText
        
        let price = card.querySelector(".spon1")
        let price1 = price.innerText
        let price2 = parseInt(price1)
        
        let total = document.querySelector("#totalPrice")
        let total1 = parseInt(total.innerText)
        
        let sumTotal = total1 + price2
        total.innerText = sumTotal

        let final = document.getElementById("total")
        final.innerText = sumTotal

        


    })
}
let bu = document.getElementById("apply-btn").addEventListener("click", ()=>{
    let mainTotal = document.getElementById("total")
    let mai = parseInt(mainTotal.innerText)
   
    let total = document.querySelector("#totalPrice")
    let total1 = parseInt(total.innerText)
    let dis = document.getElementById("input-field")
    let discount = dis.value.toLowerCase()
    console.log(discount)
    
    if(discount === "sell200"){
        let discountPrice = document.getElementById("discountPrice")
        let dp = parseInt(discountPrice.innerText)

        

        const sumDiscount = total1 - 20

        discountPrice.innerText = sumDiscount


        let final = document.getElementById("total")
        let final1 = parseInt(final.innerText)
        let final2 = final1 - 20

        final.innerText = final2

    }
})


