class BackgroundController {
    static DEFAULT_COLOR = "#f8f9fa"; // Default background color from styles.css

    constructor(element) {
        this.element = element;
        this.makeColorInput();
        this.startListeners();
        this.displaySavedColor();
    }

    makeColorInput() {
        this.colorInput = document.createElement('input');
        this.colorInput.type = "color";
        this.colorInput.value = this.getSavedColor();
        this.colorInput.style.visibility = "hidden";
        this.element.parentElement.appendChild(this.colorInput);
    }

    startListeners() {
        this.element.addEventListener('click', this.onClicked.bind(this));
        this.colorInput.addEventListener('input', this.onInput.bind(this));
    }

    onClicked() {
        this.colorInput.click();
    }

    onInput() {
        let value = this.colorInput.value;
        this.setSavedColor(value);
        this.displayColor(value);
    }

    getSavedColor() {
        return localStorage.savedColor ?? BackgroundController.DEFAULT_COLOR;
    }

    setSavedColor(value) {
        localStorage.savedColor = value;
    }

    hasSavedColor() {
        return Boolean(localStorage.savedColor);
    }

    displayColor(color) {
        document.body.style.backgroundColor = color; // Set the background color of the body
    }

    displaySavedColor() {
        if (this.hasSavedColor()) {
            this.displayColor(this.getSavedColor());
        }
    }
}

export { BackgroundController };
