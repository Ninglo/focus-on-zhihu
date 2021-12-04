import { addWindow } from "./add_window.js"
import { listenKey } from "./listen_key.js"
import { mapTasks } from "./map_tasks.js"

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
            mapTasks(div, tasks)
        })
    }
}

run()
