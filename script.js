// const container = document.querySelector('.needle-container');

// // Function to calculate and apply smooth movement
// function moveNeedleContainer() {
//     const maxWidth = window.innerWidth - 360; // Adjust based on container size
//     const maxHeight = window.innerHeight - 360; // Adjust based on container size

//     // Get current position
//     const currentX = parseFloat(container.style.left) || 0; // Default to 0 if not set
//     const currentY = parseFloat(container.style.top) || 0; // Default to 0 if not set

//     // Calculate random angle in radians
//     const angle = Math.random() * 2 * Math.PI; // Random angle between 0 and 2π

//     // Calculate new positions based on angle and 300px distance
//     const offsetX = Math.cos(angle) * 300; // 300px in the X direction
//     const offsetY = Math.sin(angle) * 300; // 300px in the Y direction

//     // Calculate new positions
//     let newX = currentX + offsetX;
//     let newY = currentY + offsetY;

//     // Ensure new position is within bounds
//     if (newX < 0) newX = 0;
//     if (newY < 0) newY = 0;
//     if (newX > maxWidth) newX = maxWidth;
//     if (newY > maxHeight) newY = maxHeight;

//     // Use requestAnimationFrame for smoother movement
//     const steps = 60; // Number of steps for the smooth transition
//     const stepX = (newX - currentX) / steps; // Calculate the step for X
//     const stepY = (newY - currentY) / steps; // Calculate the step for Y
//     let currentStep = 0;

//     function animate() {
//         if (currentStep < steps) {
//             currentStep++;
//             container.style.left = `${currentX + stepX * currentStep}px`;
//             container.style.top = `${currentY + stepY * currentStep}px`;
//             requestAnimationFrame(animate); // Continue the animation
//         } else {
//             // Finally, set the rotation to the new angle
//             container.style.transform = `rotate(${angle}rad)`;
//         }
//     }

//     animate(); // Start the animation
// }

// // Move the needle container only on hover
// container.addEventListener('mouseover', moveNeedleContainer);

// // Initial position set to random within the window bounds
// container.style.position = 'absolute'; // Ensure the position is absolute for movement
// container.style.left = `${Math.random() * (window.innerWidth - 360)}px`; // Random initial position
// container.style.top = `${Math.random() * (window.innerHeight - 360)}px`; // Random initial position

const container = document.querySelector('.needle-container');

// Array of previous colors and aurora colors
const colors = [
    '#ffd194', // Previous color 1
    '#70e1f5', // Previous color 2
    '#1c2c5b', // Deep blue (aurora)
    '#3e6f9f', // Light blue (aurora)
    '#51b6a6', // Teal (aurora)
    '#a5d594', // Light green (aurora)
    '#f1c2a3', // Soft peach (aurora)
    '#f67e7d', // Coral (aurora)
    '#d74c8b', // Pink (aurora)
    '#F9E08C', // Purple (aurora)
    '#5d338f', // Deep purple (aurora)
    '#4f75d6', // Sky blue (aurora)
];

function moveNeedleContainer() {
    // Calculate the maximum width and height for the container
    const maxWidth = window.innerWidth - container.offsetWidth; // Ensure the container fits within the window
    const maxHeight = window.innerHeight - container.offsetHeight; // Ensure the container fits within the window

    // Get current position
    const currentX = parseFloat(container.style.left) || 0; // Default to 0 if not set
    const currentY = parseFloat(container.style.top) || 0; // Default to 0 if not set

    // Calculate random angle in radians
    const angle = Math.random() * 2 * Math.PI; // Random angle between 0 and 2π

    // Calculate new positions based on angle and a distance that scales with the viewport size
    const offsetDistance = Math.min(window.innerWidth, window.innerHeight) * 0.2; // 20% of the smaller dimension
    const offsetX = Math.cos(angle) * offsetDistance; // X direction
    const offsetY = Math.sin(angle) * offsetDistance; // Y direction

    // Calculate new positions
    let newX = currentX + offsetX;
    let newY = currentY + offsetY;

    if (newX < 0) newX = 0;
    if (newY < 0) newY = 0;
    if (newX > maxWidth) newX = maxWidth;
    if (newY > maxHeight) newY = maxHeight;

    // Set new position
    container.style.left = `${newX}px`;
    container.style.top = `${newY}px`;

    // Change colors of the needles based on their index
    const needles = container.querySelectorAll('.needle');
    needles.forEach((needle, index) => {
        // Alternate between aurora colors and previous colors
        const color1 = colors[index % colors.length];
        const color2 = colors[(index + 1) % colors.length];
        needle.style.background = `linear-gradient(135deg, ${color1}, ${color2})`;
    });
}

// Move the needle container only on hover
container.addEventListener('mouseover', moveNeedleContainer);

// Initial position set to random within the window bounds
container.style.position = 'absolute'; // Ensure the position is absolute for movement
moveNeedleContainer(); // Set initial position

// Adjust the container position on window resize
window.addEventListener('resize', moveNeedleContainer);
