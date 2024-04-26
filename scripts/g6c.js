document.addEventListener("DOMContentLoaded", function() {
    // Get all GIF elements
    const gifs = document.querySelectorAll(".gif");
    
    // Add click event listener to each GIF
    gifs.forEach(gif => {
        gif.addEventListener("click", function() {
            // Navigate to a different HTML page based on which GIF is clicked
            switch (this.alt) {
                case "gif1":
                    window.location.href = "g6d.html";
                    break;
                case "gif2":
                    window.location.href = "g6d.html";
                    break;
                case "gif3":
                    window.location.href = "g6d.html";
                    break;
                case "gif4":
                    window.location.href = "g6d.html";
                    break;
                default:
                    break;
            }
        });
    });
});