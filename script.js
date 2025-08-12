// HTML'deki zaman elementlerini seçiyoruz
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

// --- HEDEF TARİHİ BURADAN DEĞİŞTİRİN ---
// Geri sayımın yapılacağı hedef tarihi belirleyin.
// Format: 'Ay Gün, Yıl Saat:Dakika:Saniye' (Örn: '1 Jan 2025' veya 'December 25 2024 00:00:00')
const targetDate = '18 Aug 2025 20:00:00';

// Zamanı tek haneli ise başına '0' ekleyen fonksiyon
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Geri sayımı güncelleyen ana fonksiyon
function updateCountdown() {
    const target = new Date(targetDate);
    const now = new Date();

    // Hedef tarih ile şimdiki zaman arasındaki farkı saniye cinsinden alıyoruz
    const totalSeconds = (target - now) / 1000;

    // Eğer hedef tarihe ulaşıldıysa veya geçildiyse sayacı durdur
    if (totalSeconds <= 0) {
        clearInterval(countdownInterval);
        document.querySelector('.content h1').innerText = "Geri Sayım Tamamlandı!";
        daysEl.innerText = '00';
        hoursEl.innerText = '00';
        minutesEl.innerText = '00';
        secondsEl.innerText = '00';
        return;
    }

    // Kalan saniyeyi gün, saat, dakika ve saniyeye çeviriyoruz
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    // HTML elementlerinin içeriğini güncelliyoruz
    daysEl.innerText = formatTime(days);
    hoursEl.innerText = formatTime(hours);
    minutesEl.innerText = formatTime(minutes);
    secondsEl.innerText = formatTime(seconds);
}

// Sayfanın yüklenmesinde gecikme olmaması için fonksiyonu hemen bir kez çalıştırıyoruz
updateCountdown();

// Her saniye (1000 milisaniye) updateCountdown fonksiyonunu çalıştırıyoruz
const countdownInterval = setInterval(updateCountdown, 1000);