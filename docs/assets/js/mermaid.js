// Dynamically load the Mermaid library
var mermaidScript = document.createElement('script');
mermaidScript.src = "https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js";
mermaidScript.async = true;
document.head.appendChild(mermaidScript);

mermaidScript.onload = function() {
    // This function will run after Mermaid has been loaded
    document.addEventListener("DOMContentLoaded", function() {
        console.log("Document loaded.");
        
        var mermaidBlocks = document.querySelectorAll('code.language-mermaid');
        console.log("Found " + mermaidBlocks.length + " mermaid blocks");
        
        mermaidBlocks.forEach(function(block) {
            var pre = block.parentNode;
            var div = document.createElement('div');
            div.className = 'mermaid';
            div.textContent = block.textContent;
            pre.parentNode.replaceChild(div, pre);
            div.setAttribute('aria-label', "Mermaid diagram visualization");
        });

        // Initialize Mermaid
        try {
            mermaid.initialize({
                startOnLoad: true,
                theme: 'default',
                logLevel: 'info',
            });
            console.log("Mermaid has been initialized.");
        } catch (error) {
            console.error("Mermaid failed to initialize: ", error);
        }
    });
};

