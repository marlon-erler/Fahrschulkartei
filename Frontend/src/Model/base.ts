import {State} from "@pwa-fundament/reactivity";

export type PromiseState<T> = State<T|undefined>;
export type ViewBuilder<VM extends GenericViewModel> = (viewModel: VM) => HTMLElement;

export class Base {
    ws: WebSocket;
    baseElement: HTMLElement;

    constructor(baseElement: HTMLElement) {
	// websocket
	this.ws = new WebSocket(`ws://${location.host}`);
	this.ws.addEventListener("open", () => {
	    console.log("socket opened");
	})
	this.ws.addEventListener("message", (event: MessageEvent<any>) => {
	    const message: string = event.data;
	})

	// view
	this.baseElement = baseElement;
	this.resetView();
    }

    setView<VM extends GenericViewModel>(viewModel: VM, viewBuilder: ViewBuilder<VM>) {
	this.resetView();
	const newView = viewBuilder(viewModel);
	this.baseElement.append(newView);
    }

    resetView() {
	this.baseElement.innerHTML = "";
    }
}

export class GenericViewModel {
    base: Base;

    constructor(base: Base) {
	this.base = base;
    }
}
