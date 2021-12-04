type MapChildren = (div: HTMLDivElement, tasks: string[]) => void
export const mapTasks: MapChildren = (div, tasks) => {
    div.innerHTML = ''

    const children = tasks.map(task => {
        const taskBox = document.createElement('div')
        const taskInput = document.createElement('input')
        const taskLabel = document.createElement('label')

        taskInput.type = 'checkbox'
        taskInput.innerText = task
        taskInput.addEventListener('change', () => {
            tasks.splice(tasks.findIndex((curtTask) => curtTask === task), 1)
            mapTasks(div, tasks)
        })
        taskLabel.innerText = task

        taskBox.append(taskInput, taskLabel)

        return taskBox
    })

    if (children.length === 0) {
        div.innerText = 'All done!'
    } else {
        div.append(...children)
    }
}
