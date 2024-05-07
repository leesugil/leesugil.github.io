// Configure MathJax
window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']]
  },
  svg: {
    fontCache: 'global'
  }
};

// Dynamically load the MathJax library
var mathJaxScript = document.createElement('script');
mathJaxScript.id = 'MathJax-script';
mathJaxScript.async = true;
mathJaxScript.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js";
document.head.appendChild(mathJaxScript);

mathJaxScript.onload = function() {
    console.log("MathJax has been loaded and is now available.");
};

