import { addWindow } from "./add_window.js"
import { listenKey } from "./listen_key"

const isZhihu = true

const run = () => {
    if (isZhihu) {
        const res = addWindow({
            className: 'Card extension-window'
        })
        if (!res) { return }
        const [div, container] = res

        container.style.width = 'auto'

        div.innerHTML = 'Hello!'
        listenKey('KeyN', (input) => {
            div.innerText += input
        })
    }

}

run()
