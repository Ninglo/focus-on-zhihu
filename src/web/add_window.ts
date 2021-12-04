interface IAddWindow {
    className: string;
}
type InsertElement = HTMLDivElement;
type ContainerElement = HTMLElement;
type AddWindow = (req: IAddWindow) => [InsertElement, ContainerElement] | undefined;
export const addWindow: AddWindow = ({ className }) => {
    try {
        const div = document.createElement('div');
        div.className = className;

        const container = document.querySelector('.Topstory-container') as HTMLElement | null;
        if (!container) {
            throw new Error(`Can't find class Topstory-container`);
        }
        container.prepend(div);

        return [div, container];
    } catch (e) {
        if (e instanceof Error) {
            console.error(e.message);
        }
    }
};
