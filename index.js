class OSRestrictor {
    constructor() {
      this.currentOS = this.detectOS();
    }
  
    detectOS() {
      if (typeof window !== "undefined" && window.navigator) {
        const platform = window.navigator.platform.toLowerCase();
        if (platform.includes("win")) return "Windows";
        if (platform.includes("mac")) return "MacOS";
        if (platform.includes("linux")) return "Linux";
        if (/android/.test(window.navigator.userAgent.toLowerCase())) return "Android";
        if (/iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase())) return "Apple";
      } else if (typeof process !== "undefined" && process.platform) {
        const platform = process.platform;
        if (platform.includes("win")) return "Windows";
        if (platform.includes("darwin")) return "MacOS";
        if (platform.includes("linux")) return "Linux";
      }
      return "Unknown";
    }
  
    run(allowedOS, callback) {
      if (!Array.isArray(allowedOS)) allowedOS = [allowedOS];
      if (allowedOS.includes(this.currentOS) || allowedOS.includes("All")) {
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
      if (allowedOS.includes(this.currentOS)) {
        element.classList.add(className);
      }
    }
  
    isAllowed(allowedOS) {
      if (!Array.isArray(allowedOS)) allowedOS = [allowedOS];
      return allowedOS.includes(this.currentOS);
    }
  }
  
  const osRestrictor = new OSRestrictor();
  module.exports = osRestrictor;
  