export default class Timer {
  constructor(root) {
    root.innerHTML = Timer.getHTML();

    this.element = {
      minutes: root.querySelector(".timer__part--minutes"),
      seconds: root.querySelector(".timer__part--seconds"),
      control: root.querySelector(".timer__btn--control"),
      reset: root.querySelector(".timer__btn--reset"),
    };

    this.interval = null;
    this.remainingSeconds = 0;

    // Event Listeners
    this.element.control.addEventListener("click", () => {
      if (this.interval === null) {
        this.start();
      } else {
        this.stop();
      }
    });
    this.element.reset.addEventListener("click", () => {
      const inputMinutes = prompt(
        "Ingresa el tiempo para completa el memorama en minutos"
      );
      if (inputMinutes < 60) {
        this.stop();
        this.remainingSeconds = inputMinutes * 60;
        this.updateInterfaceTime();
      }
    });
  }

  // Methods
  updateInterfaceTime() {
    const minutes = Math.floor(this.remainingSeconds / 60);
    const seconds = this.remainingSeconds % 60;

    this.element.minutes.textContent = minutes.toString().padStart(2, "0");
    this.element.seconds.textContent = seconds.toString().padStart(2, "0");
  }

  updateInterfaceControsl() {
    if (this.interval === null) {
      this.element.control.innerHTML = `<span class="material-icons">play_arrow</span>`;
      this.element.control.classList.add("timer__btn--start");
      this.element.control.classList.remove("timer__btn--stop");
    } else {
      this.element.control.innerHTML = `<span class="material-icons">pause</span>`;
      this.element.control.classList.add("timer__btn--stop");
      this.element.control.classList.remove("timer__btn--start");
    }
  }

  start() {
    if (this.remainingSeconds === 0) return;

    this.interval = setInterval(() => {
      this.remainingSeconds--;
      this.updateInterfaceTime();

      if (this.remainingSeconds === 0) {
        alert("Se te acabó el tiempo, perdiste");
        this.stop();
        window.location.reload();
      }
    }, 1000);

    this.updateInterfaceControsl();
  }

  stop() {
    clearInterval(this.interval);
    this.interval = null;
    this.updateInterfaceControsl();
  }

  // Static methods

  static getHTML() {
    return `
        <span class="timer__part timer__part--minutes">00</span>
        <span class="timer__part">:</span>
        <span class="timer__part timer__part--seconds">00</span>
        <button
            type="button"
            class="timer__btn timer__btn--control timer__btn--start"
        >
            <span class="material-icons">play_arrow</span>
        </button>
        <button type="button" class="timer__btn timer__btn--reset">
            <span class="material-icons">timer</span>
        </button>
    `;
  }
}
