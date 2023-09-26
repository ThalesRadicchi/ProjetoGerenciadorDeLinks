function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
/* 
  if(html.classList.contains('light')){
    html.classList.remove('light')
  }else {
    html.classList.add('light')
  } */

  const img = document.querySelector("#profile img")

  //alterar amanhã o alt e colocar a foto

  if(html.classList.contains('light')){
    img.setAttribute('src', '????')
  }else {
    img.setAttribute('src', 'https://github.com/thalesradicchi.png')
  }
}