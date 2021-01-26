document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector("#item-container");
    const wrapperButtons = document.querySelector("#wrapperButtons");
    const wrapperSections = document.querySelector("#wrapperSections")
    const wrapper = document.getElementById("wrapper")
    
    // recorriendo header targets
    for (const iterator of container.children) {
        iterator.addEventListener('click', async () => {

            // Agregamos las animaciones a la botonera 1
            container.classList.add('animate')
            container.classList.add('animate__fadeOut')

            // Agregando clases al segundo wrapper
            wrapper.classList.remove('hidden')
            wrapper.classList.add('overlap-a')
            wrapper.classList.add('animate')
            wrapper.classList.add('animate__fadeIn')

            for (const other of wrapperSections.children) {
                if (other.dataset.id === iterator.dataset.id) {
                    actives(iterator)
                    other.classList.remove('hidden')
                } else {
                    other.classList.add('hidden')
                }
            }
        })
    }

    for (const iterator of wrapperButtons.children) {
        iterator.addEventListener('click', () => {
            // recorriendo opciones targets
            for (const other of wrapperSections.children) {
                if (other.dataset.id === iterator.dataset.id) {
                    actives(iterator)
                    other.classList.remove('hidden')
                } else {
                    other.classList.add('hidden')
                }
            }
        })
    }

    // comparacion con los botones para quitar activos y dejar solo uno
    function actives(iterator) {
        for (const val of wrapperButtons.children) {
            if (val.dataset.id != iterator.dataset.id) {
                val.classList.remove('active')
            } else {
                val.classList.add('active')
            }
        }
    }
})