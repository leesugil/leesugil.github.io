// Dynamically load the Mermaid library
var mermaidScript = document.createElement('script');
mermaidScript.src = "https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js";
mermaidScript.async = true;
document.head.appendChild(mermaidScript);

function initializeMermaid() {
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
}

mermaidScript.onload = function() {
    // Check if the document has already been fully loaded
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // Call directly if document is already loaded
        initializeMermaid();
    } else {
        // Otherwise, use the DOMContentLoaded event
        document.addEventListener("DOMContentLoaded", initializeMermaid);
    }
};

