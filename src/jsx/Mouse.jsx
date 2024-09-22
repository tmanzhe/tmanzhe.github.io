// Mouse.jsx
import React, { useEffect } from 'react';
import '../css/Mouse.css'; // This will be the CSS for styling the circles

function Mouse() {
    useEffect(() => {
        const coords = { x: 0, y: 0 };
        const circles = document.querySelectorAll(".circle");

        const colors = [
            "#F1F1EF", // Your light theme color
            "#EBF0F7", // Very light grey
            "#E1E9F2", // Lighter grey
            "#D4DBED", // Grey
            "#CBD5E8", // Slightly darker grey
            "#B7C2E1", // Darker grey
            "#AAB7DB", // Light blue-grey
            "#9FB0D5", // Lighter blue-grey
            "#93A5CF", // Blue-grey
            "#89A6EC", // Light blue
            "#7C9DE3", // Lighter blue
            "#7193D7", // Blue
            "#6689CC", // Darker blue
            "#5C7FC0", // Deep blue
            "#5277B4", // Navy blue
            "#4A6FA9", // Darker navy blue
            "#42669D", // Navy blue
            "#3A5E91", // Dark navy
            "#345584", // Deep dark navy
            "#2F4E79", // Slightly lighter dark navy
            "#2A466E", // Dark navy
            "#223C62", // Darker dark navy
            "#1D3557"  // Darkest navy
          ];

        circles.forEach(function (circle, index) {
            circle.x = 0;
            circle.y = 0;
            circle.style.backgroundColor = colors[index % colors.length];
        });

        window.addEventListener("mousemove", function(e) {
            coords.x = e.clientX;
            coords.y = e.clientY;
        });

        function animateCircles() {
            let x = coords.x;
            let y = coords.y;

            circles.forEach(function (circle, index) {
                circle.style.left = x - 12 + "px";
                circle.style.top = y - 12 + "px";

                circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

                circle.x = x;
                circle.y = y;

                const nextCircle = circles[index + 1] || circles[0];
                x += (nextCircle.x - x) * 0.3;
                y += (nextCircle.y - y) * 0.3;
            });

            requestAnimationFrame(animateCircles);
        }

        animateCircles();
    }, []);

    return (
        <>
            {/* Render 22 circles */}
            {Array.from({ length: 22 }).map((_, index) => (
                <div key={index} className="circle"></div>
            ))}
        </>
    );
}

export default Mouse;
