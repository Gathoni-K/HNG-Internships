function updateTime() {
            const timeElement = document.querySelector('[data-testid="test-user-time"]');
            const currentTime = Date.now();
            timeElement.textContent = `Current time: ${currentTime} ms`;
        }

        // Update time immediately and every second
        updateTime();
        setInterval(updateTime, 1000);