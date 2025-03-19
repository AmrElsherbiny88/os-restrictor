/**
 * OS Restrictor - A utility to restrict execution to specific operating systems.
 * Works in both browser and Node.js environments.
 * 
 * ## Summary
 * OSRestrictor helps control function execution, UI component rendering, and CSS class application based on the user's operating system.
 * It detects the OS and allows conditional execution or styling for different platforms.
 * 
 * ## Features
 * - Detects the user's OS (Windows, MacOS, Linux, Android, Apple)
 * - Restricts function execution to specific OS platforms
 * - Applies CSS classes dynamically based on the OS
 * - Controls visibility of React and Svelte components based on OS
 * - Supports Class-based restriction in React and Svelte
 * - Works in JavaScript, React, Svelte, and pure HTML environments
 * 
 * ## How to Use
 * 
 * ### 1. Install the package
 *    ```sh
 *    npm install os-restrictor
 *    ```
 * 
 * ### 2. Import it in your project
 *    ```js
 *    import osRestrictor from "os-restrictor";
 *    ```
 * 
 * ### 3. Restrict function execution based on OS
 *    ```js
 *    osRestrictor.run(["Windows", "MacOS"], () => {
 *      console.log("This runs only on Windows or MacOS");
 *    });
 *    ```
 * 
 * ### 4. Apply classes dynamically to elements based on OS (JavaScript & HTML)
 *    ```js
 *    const myDiv = document.getElementById("myDiv");
 *    osRestrictor.applyClass(myDiv, ["Windows"], "bg-blue-500 text-white");
 *    ```
 * 
 * ### 5. Use in React (Component restriction)
 *    ```jsx
 *    import React from "react";
 *    import osRestrictor from "os-restrictor";
 *    
 *    const OSComponent = () => {
 *      if (!osRestrictor.isAllowed(["Windows"])) return null;
 *      return <div className="p-4 bg-blue-500 text-white">Hello, Windows User!</div>;
 *    };
 *    export default OSComponent;
 *    ```
 * 
 * ### 6. Use in Svelte (Component restriction)
 *    ```svelte
 *    <script>
 *      import osRestrictor from "os-restrictor";
 *      let show = osRestrictor.isAllowed(["MacOS"]);
 *    </script>
 *    {#if show}
 *      <div class="p-4 bg-green-500 text-white">Hello, MacOS User!</div>
 *    {/if}
 *    ```
 * 
 * ### 7. Use in JavaScript (Class-based restriction)
 *    ```js
 *    class OSRestrictedComponent {
 *      constructor(element, allowedOS, className) {
 *        this.element = document.querySelector(element);
 *        this.allowedOS = allowedOS;
 *        this.className = className;
 *        this.applyRestriction();
 *      }
 *      applyRestriction() {
 *        if (this.element) {
 *          osRestrictor.applyClass(this.element, this.allowedOS, this.className);
 *        }
 *      }
 *    }
 *    
 *    new OSRestrictedComponent("#myDiv", ["Linux"], "bg-red-500 text-white");
 *    ```
 * 
 * ### 8. Restrict function execution in React
 *    ```jsx
 *    import React from "react";
 *    import osRestrictor from "os-restrictor";
 *
 *    const restrictedFunction = () => {
 *      osRestrictor.run(["Linux"], () => {
 *        alert("This function only runs on Linux!");
 *      });
 *    };
 *
 *    const OSFunctionButton = () => (
 *      <button onClick={restrictedFunction}>Run Function</button>
 *    );
 *
 *    export default OSFunctionButton;
 *    ```
 *
 * ### 9. Restrict function execution in Svelte
 *    ```svelte
 *    <script>
 *      import osRestrictor from "os-restrictor";
 *
 *      function restrictedFunction() {
 *        osRestrictor.run(["MacOS"], () => {
 *          alert("This function only runs on MacOS!");
 *        });
 *      }
 *    </script>
 *
 *    <button on:click={restrictedFunction}>Run Function</button>
 *    ```
 *
 * ### 10. Class-based restriction in React
 *    ```jsx
 *    import React from "react";
 *    import osRestrictor from "os-restrictor";
 *
 *    class OSRestrictedComponent extends React.Component {
 *      render() {
 *        if (!osRestrictor.isAllowed(["Windows", "MacOS"])) {
 *          return null; // Component won't render on other OS
 *        }
 *        return <div className="p-4 bg-blue-500 text-white">Hello, Windows & MacOS User!</div>;
 *      }
 *    }
 *
 *    export default OSRestrictedComponent;
 *    ```
 *
 * ### 11. Class-based restriction in Svelte
 *    ```svelte
 *    <script>
 *      import osRestrictor from "os-restrictor";
 *      
 *      export let allowedOS = ["Linux", "Android"];
 *      let show = osRestrictor.isAllowed(allowedOS);
 *    </script>
 *
 *    {#if show}
 *      <div class="p-4 bg-green-500 text-white">Hello, Linux & Android User!</div>
 *    {/if}
 *    ```
 */
