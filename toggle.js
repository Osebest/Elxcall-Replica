function openSideMenu(){
  document.getElementById('hamburgerBtn').classList.toggle("open")
  document.getElementById('primaryNav').classList.toggle("open1")
}

let icon = document.getElementById("icon");

icon.onclick = function(){
  document.body.classList.toggle('dark-theme');
  if(document.body.classList.contains("dark-theme")){
    icon.src = "./logos/sun.png";
  }else{
    icon.src = "./logos/moon.png"
  }
}

let icon1 = document.getElementById("icon1");

icon1.onclick = function(){
  document.body.classList.toggle('dark-theme');
  if(document.body.classList.contains("dark-theme")){
    icon1.src = "./logos/sun.png";
  }else{
    icon1.src = "./logos/moon.png"
  }
}