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

        const title = document.createElement('h3')
        title.innerText = 'Focus on Zhihu'
        title.className = 'extension-window-title'

        const tasksContainer = document.createElement('div')
        tasksContainer.innerText = "Press 'n' to create new task..."

        div.append(title, tasksContainer)

        const tasks: string[] = []
        listenKey('KeyN', (input) => {
            tasks.push(input)
            mapTasks(tasksContainer, tasks)
        })
    }
}

run()
