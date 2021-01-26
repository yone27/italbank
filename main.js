document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector("#item-container");
    const container2 = document.querySelector("#container2");
    const container3 = document.querySelector("#container3")

    const test = document.getElementById("test")
    // recorriendo header targets
    for (const iterator of container.children) {
        iterator.addEventListener('click', async () => {

            container.classList.add('animation-slideOutUp')
            test.classList.add('left')
            test.classList.remove('hidden')
            await setTimeout(function () {
                container.classList.add('hidden')
            }, 500)
            await setTimeout(() => {
                test.classList.add('animation-slideInRight')
            }, 600)

            for (const other of container3.children) {
                if (other.dataset.id === iterator.dataset.id) {
                    actives(iterator)
                    other.classList.remove('hidden')
                } else {
                    other.classList.add('hidden')
                }
            }
        })
    }

    for (const iterator of container2.children) {
        iterator.addEventListener('click', () => {
            // recorriendo opciones targets
            for (const other of container3.children) {
                if (other.dataset.id === iterator.dataset.id) {
                    actives(iterator)
                    other.classList.remove('hidden')
                } else {
                    // iterator.classList.remove('active')
                    other.classList.add('hidden')
                }
            }
        })
    }

    // comparacion con los botones para quitar activos y dejar solo uno
    function actives(iterator) {
        for (const val of container2.children) {
            if (val.dataset.id != iterator.dataset.id) {
                val.classList.remove('active')
            } else {
                val.classList.add('active')
            }
        }
    }
})