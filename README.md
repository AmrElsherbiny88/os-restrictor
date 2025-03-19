# OS Restrictor - A Utility to Restrict Execution to Specific Operating Systems

OS Restrictor is a versatile utility that allows you to control function execution, UI component rendering, and CSS class application based on the user's operating system. It works in both browser and Node.js environments and supports JavaScript, React, Svelte, and HTML.

## Features
- Detects the user's OS (Windows, macOS, Linux, Android, iOS)
- Restricts function execution to specific OS platforms
- Dynamically applies CSS classes based on the OS
- Controls visibility of React and Svelte components
- Supports class-based restriction in React and Svelte
- Works seamlessly in JavaScript, React, Svelte, and pure HTML environments

## Installation

Install the package using npm:
```sh
npm install os-restrictor
```

## Usage

### 1. Import OS Restrictor in Your Project
```js
import osRestrictor from "os-restrictor";
```

### 2. Restrict Function Execution Based on OS
```js
osRestrictor.run(["Windows", "macOS"], () => {
  console.log("This runs only on Windows or macOS");
});
```

### 3. Apply CSS Classes Dynamically Based on OS (JavaScript & HTML)
```js
const myDiv = document.getElementById("myDiv");
osRestrictor.applyClass(myDiv, ["Windows"], "bg-blue-500 text-white");
```

### 4. Use in React (Component Restriction)
```jsx
import React from "react";
import osRestrictor from "os-restrictor";

const OSComponent = () => {
  if (!osRestrictor.isAllowed(["Windows"])) return null;
  return <div className="p-4 bg-blue-500 text-white">Hello, Windows User!</div>;
};
export default OSComponent;
```

### 5. Use in Svelte (Component Restriction)
```svelte
<script>
  import osRestrictor from "os-restrictor";
  let show = osRestrictor.isAllowed(["macOS"]);
</script>

{#if show}
  <div class="p-4 bg-green-500 text-white">Hello, macOS User!</div>
{/if}
```

### 6. Use in JavaScript (Class-Based Restriction)
```js
class OSRestrictedComponent {
  constructor(element, allowedOS, className) {
    this.element = document.querySelector(element);
    this.allowedOS = allowedOS;
    this.className = className;
    this.applyRestriction();
  }
  applyRestriction() {
    if (this.element) {
      osRestrictor.applyClass(this.element, this.allowedOS, this.className);
    }
  }
}

new OSRestrictedComponent("#myDiv", ["Linux"], "bg-red-500 text-white");
```

### 7. Restrict Function Execution in React
```jsx
import React from "react";
import osRestrictor from "os-restrictor";

const restrictedFunction = () => {
  osRestrictor.run(["Linux"], () => {
    alert("This function only runs on Linux!");
  });
};

const OSFunctionButton = () => (
  <button onClick={restrictedFunction}>Run Function</button>
);

export default OSFunctionButton;
```

### 8. Restrict Function Execution in Svelte
```svelte
<script>
  import osRestrictor from "os-restrictor";

  function restrictedFunction() {
    osRestrictor.run(["macOS"], () => {
      alert("This function only runs on macOS!");
    });
  }
</script>

<button on:click={restrictedFunction}>Run Function</button>
```

### 9. Class-Based Restriction in React
```jsx
import React from "react";
import osRestrictor from "os-restrictor";

class OSRestrictedComponent extends React.Component {
  render() {
    if (!osRestrictor.isAllowed(["Windows", "macOS"])) {
      return null; // Component won't render on other OS
    }
    return <div className="p-4 bg-blue-500 text-white">Hello, Windows & macOS User!</div>;
  }
}

export default OSRestrictedComponent;
```

### 10. Class-Based Restriction in Svelte
```svelte
<script>
  import osRestrictor from "os-restrictor";
  
  export let allowedOS = ["Linux", "Android"];
  let show = osRestrictor.isAllowed(allowedOS);
</script>

{#if show}
  <div class="p-4 bg-green-500 text-white">Hello, Linux & Android User!</div>
{/if}
```

---

With OS Restrictor, you can easily control what parts of your application are available based on the user's operating system. This makes it a power