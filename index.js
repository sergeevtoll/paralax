const img1 = document.querySelectorAll('.img1');
const img2 = document.querySelectorAll('.img2');
const img3 = document.querySelector('.img3');

// window.addEventListener('mousemove', (e)=>{
//   const cX1 = e.clientX
//   const cY1 = e.clientY
  
//   const vectorX = e.movementX/100
//   const vectorY = e.movementY
//   console.log(vectorX)
//   img1.forEach(item=>{
//     if(vectorX>0){
//       console.log(item.style.left)
//       item.style.left = `${item.style.left - vectorX}px`
//     }
//   })
// })

window.addEventListener('mousemove', function(e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;  
  img1.forEach(item=>{
    item.style.transform = 'translate(-' + x * 100 + 'px, -' + y * 100 + 'px)';
  })
  img2.forEach(item=>{
    item.style.transform = 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)';
  })
  img3.style.transform = 'translate(-'+ x *300 + 'px, -' + y *300+'px)';
});