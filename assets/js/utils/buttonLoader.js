
export default class buttonLoader {
    constructor(btnElement) {
        this.btn = btnElement;
    }

    startLoader() {
        this.btn.setAttribute("aria-busy", "true")
    }
    stopLoader() {
        this.btn.setAttribute("aria-busy", "false")
    }
}