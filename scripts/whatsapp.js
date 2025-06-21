import {token} from "./config.js";

async function sendWhatsappMessage(message) {
    // Option 1: Direct WhatsApp URL (opens in new tab)
    var whatsappUrl = 'https://api.whatsapp.com/send?phone=+256750366195&text=' + encodeURIComponent(message);
    window.open(whatsappUrl, '_blank');
    
    // Option 2: Using API (choose one approach)
    try {
        const URL = "https://api.apiwap.com/api/v1/whatsapp/send-message";
        const apiKey = token;
        
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                phone: "256750366195",
                message: message,
                type: "text"
            })
        });
        
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error sending message:", error);
        throw error;
    }
}

