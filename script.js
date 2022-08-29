const starsEl = document.querySelectorAll(".fa-star")
const emojiEl = document.querySelectorAll(".fa-regular")
const colors = ["red", "orange", "blue", "lightblue", "green"]
const text = document.getElementById("thank-you")
const ratings = ["very bad", "bad", "medium", "good", "very good"]

starsEl.forEach((star, index) => {
    star.addEventListener("click", (e)=>{

      updateRating(index)

    })
})

function updateRating(index){
    starsEl.forEach((star, idx)=> {
if(idx < index + 1){
    star.classList.add("active")
}
else {
    star.classList.remove("active")
}
    })
emojiEl.forEach((emoji) => {
   emoji.style.transform = `translateX(-${index * 50}px)`
   emoji.style.color = colors [index]
})



ratings.forEach(rating => {
    text.innerHTML = ratings [index]
})
    }

