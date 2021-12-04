type ListenKey = (code: string, inputCb: (input: string) => void) => void;
export const listenKey: ListenKey = (code, inputCb) => {
    let hasInput = false;

    window.addEventListener('keydown', e => {
        if (e.code === code && !hasInput) {
            hasInput = true;
            let removed = false
            let curt = '';

            const div = document.createElement('div');
            const input = document.createElement('input');
            div.className = 'extension-add-task';
            input.className = 'extension-add-task-input';
            div.appendChild(input);

            const clear = () => {
                if (removed) { return }

                removed = true;
                hasInput = false;
                div.remove();
                input.remove();
            };

            input.addEventListener('keyup', (ev) => {
                if (ev.key === 'Enter') {
                    inputCb(curt);
                    clear();
                } else if (ev.key === 'Esc') {
                    clear();
                } else {
                    curt = (ev.target as HTMLInputElement).value;
                }
            });
            input.addEventListener('blur', clear);

            document.body.appendChild(div);
            setTimeout(() => { input.focus(); });
        }
    });
};
