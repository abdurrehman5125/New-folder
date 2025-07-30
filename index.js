// let banners=["infinixban.webp",
//     "banner2.jpeg"]
// let index=0;
// setInterval( () => {
//     let ban=document.getElementsByClassName("banner");
//     let img=document.getElementsByTagName("img")[0];
//     index=(index+1) % banners.length
//     ban.src=banners[index]


    
// },2000)

let banners = ["infinixban.webp","slide5.jpeg"];
let index = 0;

setInterval(() => {
    let ban = document.getElementsByClassName("banner")[0]; // Get the first element with class "banner"
    index = (index + 1) % banners.length;
    ban.src = banners[index]; // Update the image source
}, 1500);




 const button = document.getElementsByClassName('pop');
  const alertBox = document.getElementById('customAlert');

  button.addEventListener('click', () => {
    setTimeout(() => {
      // Show the notification
      alertBox.classList.add('show');

      // Auto-hide after 4 seconds
      setTimeout(() => {
        alertBox.classList.remove('show');
      }, 4000);
    }, 3000);
  });
