import { addWindow } from "./add_window.js"
import { listenKey } from "./listen_key.js"
import { mapChildren } from "./map_children.js"

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

        const tasks: string[] = []
        listenKey('KeyN', (input) => {
            tasks.push(input)
            mapChildren(div, tasks)
        })
    }
}

run()
