const tablero =document.getElementById("tablero")
const divs =document.getElementsByClassName("divs")
const text =document.getElementById("text")
const puntaje1 =document.getElementById("puntaje1")
const puntaje2 =document.getElementById("puntaje2")
const reboot = document.getElementById("reboot")
const save = document.getElementById("save")




let datosol = localStorage.getItem("datosol")||[]
let datosombrilla = localStorage.getItem("datosombrilla")||[]

let sumpuntos = datosol
let sumpoints = datosombrilla

puntaje1.innerHTML = sumpuntos
puntaje2.innerHTML = sumpoints


for (let index = 0; index < divs.length; index++) {
    divs[index].addEventListener("click", function () {

       
        divs[index].innerHTML = "☀️";

        divs[index].style.pointerEvents = "none"
        divs[index].style.background = "khaki"
        
        let vacios = []


        for (let index = 0; index < divs.length; index++) {
      
          if (divs[index].textContent === "" ) {

            vacios.push(index)

           }

        }

        console.log(vacios);
        
        let numrandom = parseInt(Math.random() * vacios.length)

        console.log(numrandom);

        let valorDato = vacios[numrandom]
        
        console.log(valorDato);

        
          divs[valorDato].innerHTML = "⛱️";
          divs[valorDato].style.background = "skyblue"
        

        divs[valorDato].style.pointerEvents = "none"



        if (divs[0].textContent === "☀️" && divs[1].textContent === "☀️" && divs[2].textContent === "☀️") {
          text.innerText = "Felicidades jugador ☀️, haz ganado el juego"
          sumpuntos++
          
        }else{
          if (divs[3].textContent === "☀️" && divs[4].textContent === "☀️" && divs[5].textContent === "☀️") {
           text.innerText = "Felicidades jugador ☀️, haz ganado el juego"
           sumpuntos++

          }else{
            if (divs[6].textContent === "☀️" && divs[7].textContent === "☀️" && divs[8].textContent === "☀️") {
             text.innerText = "Felicidades jugador ☀️, haz ganado el juego"
             sumpuntos++

            }else{
              if (divs[0].textContent === "☀️" && divs[3].textContent === "☀️" && divs[6].textContent === "☀️") {
               text.innerText = "Felicidades jugador ☀️, haz ganado el juego"
               sumpuntos++

              }else{
                if (divs[1].textContent === "☀️" && divs[4].textContent === "☀️" && divs[7].textContent === "☀️") {
                 text.innerText = "Felicidades jugador ☀️, haz ganado el juego"
                 sumpuntos++

                }else{
                  if (divs[2].textContent === "☀️" && divs[5].textContent === "☀️" && divs[8].textContent === "☀️") {
                   text.innerText = "Felicidades jugador ☀️, haz ganado el juego"
                   sumpuntos++

                  }else{
                    if (divs[0].textContent === "☀️" && divs[4].textContent === "☀️" && divs[8].textContent === "☀️") {
                     text.innerText = "Felicidades jugador ☀️, haz ganado el juego"
                     sumpuntos++

                    }else{
                     if (divs[6].textContent === "☀️" && divs[4].textContent === "☀️" && divs[2].textContent === "☀️") {
                      text.innerText = "Felicidades jugador ☀️, haz ganado el juego"
                      sumpuntos++

                      }
                    }
                  }
                }
              }
            }
          }
        }

        localStorage.setItem("datosol",sumpuntos)



        if (divs[0].textContent === "⛱️" && divs[1].textContent === "⛱️" && divs[2].textContent === "") {
          text.innerText = "Felicidades jugador ⛱️, haz ganado el juego"
          sumpoints++

          }else{
           if (divs[3].textContent === "⛱️" && divs[4].textContent === "⛱️" && divs[5].textContent === "⛱️") {
            text.innerText = "Felicidades jugador ⛱️, haz ganado el juego"
            sumpoints++

          }else{
            if (divs[6].textContent === "⛱️" && divs[7].textContent === "⛱️" && divs[8].textContent === "⛱️") {
             text.innerText = "Felicidades jugador ⛱️, haz ganado el juego"
              sumpoints++

            }else{
              if (divs[0].textContent === "⛱️" && divs[3].textContent === "⛱️" && divs[6].textContent === "⛱️") {
                text.innerText = "Felicidades jugador ⛱️, haz ganado el juego"
                sumpoints++

              }else{
                if (divs[1].textContent === "⛱️" && divs[4].textContent === "⛱️" && divs[7].textContent === "⛱️") {
                 text.innerText = "Felicidades jugador ⛱️, haz ganado el juego"
                  sumpoints++

                }else{
                  if (divs[2].textContent === "⛱️" && divs[5].textContent === "⛱️" && divs[8].textContent === "⛱️") {
                   text.innerText = "Felicidades jugador ⛱️, haz ganado el juego"
                    sumpoints++

                  }else{
                    if (divs[0].textContent === "⛱️" && divs[4].textContent === "⛱️" && divs[8].textContent === "⛱️") {
                     text.innerText = "Felicidades jugador ⛱️, haz ganado el juego"
                      sumpoints++

                    }else{
                      if (divs[6].textContent === "⛱️" && divs[4].textContent === "⛱️" && divs[2].textContent === "⛱️") {
                       text.innerText = "Felicidades jugador ⛱️, haz ganado el juego"
                        sumpoints++

                      }
                    }
                  }
                }
              }
            }
          }
        }

        localStorage.setItem("datosombrilla",sumpoints)
        

        reboot.addEventListener("click", function () {
        
          setTimeout(() => {
           location.reload()
          }, 1000);


        })

    })

}

save.addEventListener("click", function () {
        
  setTimeout(() => {
    location.reload()
    localStorage.removeItem("datosol")
    localStorage.removeItem("datosombrilla")
  }, 1000);
  

})





