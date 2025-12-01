document.addEventListener('DOMContentLoaded', function() {
    updateMaiRating();
    // Refresh every 12 hours
    setInterval(updateMaiRating, 12 * 60 * 60 * 1000);
});

async function updateMaiRating() {
    const ratingElement = document.getElementById('DXRating');
    if (!ratingElement) return;
    
    // Array of CORS proxy options to try
    const proxyOptions = [
        'https://api.allorigins.win/get?url=',
        'https://corsproxy.io/?',
        'https://api.codetabs.com/v1/proxy?quest='
    ];
    
    const targetUrl = 'https://safe.reku.me/get/DXRating.txt';
    
    for (let i = 0; i < proxyOptions.length; i++) {
        try {
            const proxyUrl = proxyOptions[i];
            const encodedUrl = encodeURIComponent(targetUrl);
            const response = await fetch(proxyUrl + encodedUrl);
            
            if (!response.ok) continue;
            
            let rating;
            if (proxyUrl.includes('allorigins.win')) {
                const data = await response.json();
                rating = data.contents;
            } else {
                rating = await response.text();
            }
            
            ratingElement.textContent = rating.trim();
            return; // Success, exit function
            
        } catch (error) {
            console.log(`Proxy ${i} failed, trying next...`);
        }
    }
    
    // All proxies failed
    ratingElement.textContent = "14267"; // Fallback to original value
    console.error('All CORS proxies failed');
}