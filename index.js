class OSRestrictor {
  constructor() {
    this.currentOS = this.detectOS();
  }

  detectOS() {
    if (typeof window !== "undefined" && window.navigator) {
      const platform = window.navigator.platform.toLowerCase();
      const userAgent = window.navigator.userAgent.toLowerCase();

      if (platform.includes("win")) return "windows";
      if (platform.includes("mac")) return "macos";
      if (platform.includes("linux")) return "linux";
      if (/android/.test(userAgent)) return "android";
      if (/iphone|ipad|ipod/.test(userAgent)) return "apple";
    } else if (typeof process !== "undefined" && process.platform) {
      const platform = process.platform.toLowerCase();
      if (platform.includes("win")) return "windows";
      if (platform.includes("darwin")) return "macos";
      if (platform.includes("linux")) return "linux";
    }
    return "unknown";
  }

  run(allowedOS, callback) {
    if (!Array.isArray(allowedOS)) allowedOS = [allowedOS];

    allowedOS = allowedOS.map(os => os.toLowerCase());
    const currentOS = this.currentOS.toLowerCase();

    if (allowedOS.includes(currentOS) || allowedOS.includes("all")) {
      return callback();
    } else {
      console.warn(`This function is restricted on ${this.currentOS}. Allowed: ${allowedOS.join(", ")}`);
    }
  }

  applyClass(element, allowedOS, className) {
    if (!element || !(element instanceof HTMLElement)) {
      console.warn("Invalid element provided.");
      return;
    }

    allowedOS = allowedOS.map(os => os.toLowerCase());
    const currentOS = this.currentOS.toLowerCase();

    if (allowedOS.includes(currentOS)) {
      element.classList.add(className);
    }
  }

  isAllowed(allowedOS) {
    if (!Array.isArray(allowedOS)) allowedOS = [allowedOS];

    allowedOS = allowedOS.map(os => os.toLowerCase());
    const currentOS = this.currentOS.toLowerCase();

    return allowedOS.includes(currentOS);
  }
}

export default new OSRestrictor();
