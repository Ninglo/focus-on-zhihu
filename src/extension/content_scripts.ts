type AddFile = (path: string) => void

const addStyle: AddFile = path => {
    const link = document.createElement('link')
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = chrome.runtime.getURL(path);

    document.head.appendChild(link)
}

const addScript: AddFile = path => {
    const script = document.createElement('script');
    script.src = chrome.runtime.getURL(path);
    script.type = 'module'
    script.onload = () => {
        script.remove();
    };

    document.head.appendChild(script);
}

const main = () => {
    addStyle('/public/style/task_input.css')
    addStyle('/public/style/window.css')
    addScript('/dist/web/run.js')
}

main();
