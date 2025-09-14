// Add your JavaScript here
function sayHello() {
    const output = document.getElementById('output');
    const messages = [
        "Hello, fellow coder! 👨‍💻",
        "You're back in the game! 🎮",
        "Time to build something awesome! 🚀",
        "Code, debug, repeat! 🔄",
        "Welcome to the wonderful world of web dev! 🌐"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    output.innerHTML = `<h3>${randomMessage}</h3>`;
    output.style.background = '#e7f3ff';
    output.style.color = '#0066cc';
    
    // Add some animation
    output.style.transform = 'scale(0.9)';
    setTimeout(() => {
        output.style.transform = 'scale(1)';
    }, 100);
}

// Add more interactive features
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎉 Your coding environment is ready!');
    console.log('💡 Try editing the HTML, CSS, and JavaScript above');
    console.log('🔄 Click "Run Code" to see your changes');
    
    // Initialize Christmas countdown
    updateChristmasCountdown();
    
    // Update countdown every hour
    setInterval(updateChristmasCountdown, 3600000);
});

// Christmas Countdown Functions
function updateChristmasCountdown() {
    const today = new Date();
    const currentYear = today.getFullYear();
    
    // Christmas of current year
    let christmas = new Date(currentYear, 11, 25); // December 25th
    
    // If Christmas has passed this year, use next year's Christmas
    if (today > christmas) {
        christmas = new Date(currentYear + 1, 11, 25);
    }
    
    // Calculate difference in time
    const timeDiff = christmas.getTime() - today.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    
    // Update the display
    const daysElement = document.getElementById('daysToChristmas');
    const messageElement = document.getElementById('christmasMessage');
    
    if (daysElement && messageElement) {
        daysElement.textContent = daysDiff;
        
        // Different messages based on how close Christmas is
        let message;
        if (daysDiff === 0) {
            message = "🎅 Merry Christmas! It's here! 🎁";
        } else if (daysDiff === 1) {
            message = "🎁 Christmas Eve! Santa's on his way! 🛷";
        } else if (daysDiff <= 7) {
            message = "🔔 Christmas week! Time for final preparations! 🎀";
        } else if (daysDiff <= 30) {
            message = "❄️ Christmas is just around the corner! ⭐";
        } else if (daysDiff <= 100) {
            message = "🎄 Getting closer to the most wonderful time of year! 🌟";
        } else {
            message = "🗓️ Start planning for the holiday season! 🎊";
        }
        
        messageElement.textContent = message;
        
        // Add some festive animation
        daysElement.style.transition = 'transform 0.3s ease';
        daysElement.style.transform = 'scale(1.1)';
        setTimeout(() => {
            daysElement.style.transform = 'scale(1)';
        }, 300);
    }
}

