    const btn = document.querySelector('#addCalendar')
    const overlay = document.querySelector('#overlay')

    btn.addEventListener('click', () => {
        overlay.classList.add('active')
    })








































        // const imagen = document.querySelector('#image')
        // const deposito = document.getElementById('soltar')
        
        // function init() {
            
        //     // Funciones
        //     function arrastar(e) {
        //         var codigo = `<img src=${imagen.src} />`
        //         e.dataTransfer.setData('text', codigo)
        //     }
            
        //     function soltar(e) {
        //         e.preventDefault()
        //         deposito.innerHTML = e.dataTransfer.getData('text')
        //     }
            
        //     imagen.addEventListener('dragstart', arrastar)
            
        //     deposito.addEventListener('dragenter', (e) => {
        //         e.preventDefault()
        //     })
            
        //     deposito.addEventListener('dragover', (e) => {
        //         e.preventDefault()
        //     })

        //     deposito.addEventListener('drop', soltar)
            
        // }
        
        // window.addEventListener('load', init)
        

        //Drag And Drop error, No interpretar código

        // const listOne = list[0]
        // const list = document.querySelectorAll('ul') 
        // const error = list[0]
        // const listTwo = list[1].children
        // for(i = 0; i <= 3; i++) {
            //     setTimeout(() => {
                
        //         listOne.children[i].style.color = 'red'
        //     },500)
        // }