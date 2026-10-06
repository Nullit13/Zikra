const athkar = [
    { text: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ', category: 'morning' },
    { text: 'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ', category: 'morning' },
    { text: 'اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا', category: 'morning' },
    { text: 'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ', category: 'morning' },
    { text: 'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ', category: 'morning' },
    { text: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ', category: 'morning' },
    { text: 'رَضِيتُ بِاللَّهِ رَبًّا وَبِالْإِسْلَامِ دِينًا وَبِمُحَمَّدٍ نَبِيًّا', category: 'morning' },
    { text: 'يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ', category: 'morning' },
    { text: 'اللَّهُمَّ عَافِنِي فِي بَدَنِي', category: 'morning' },
    { text: 'أَعُوذُ بِاللَّهِ مِنَ الْكُفْرِ وَالْفَقْرِ', category: 'morning' },
    { text: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ', category: 'morning' },
    { text: 'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ', category: 'morning' },

    { text: 'أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ', category: 'evening' },
    { text: 'اللَّهُمَّ بِكَ أَمْسَيْنَا وَبِكَ أَصْبَحْنَا', category: 'evening' },
    { text: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ', category: 'evening' },
    { text: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ', category: 'evening' },
    { text: 'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ', category: 'evening' },
    { text: 'رَضِيتُ بِاللَّهِ رَبًّا وَبِالْإِسْلَامِ دِينًا وَبِمُحَمَّدٍ نَبِيًّا', category: 'evening' },
    { text: 'يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ', category: 'evening' },
    { text: 'اللَّهُمَّ عَافِنِي فِي بَدَنِي', category: 'evening' },
    { text: 'أَعُوذُ بِاللَّهِ مِنَ الْكُفْرِ وَالْفَقْرِ', category: 'evening' },
    { text: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ', category: 'evening' },
    { text: 'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ', category: 'evening' },
    { text: 'اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ', category: 'evening' },

    { text: 'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا', category: 'sleep' },
    { text: 'اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ', category: 'sleep' },
    { text: 'سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ', category: 'sleep' },
    { text: 'اللَّهُمَّ أَسْلَمْتُ نَفْسِي إِلَيْكَ', category: 'sleep' },
    { text: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ', category: 'sleep' },
    { text: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ', category: 'sleep' },
    { text: 'اللَّهُمَّ رَبَّ السَّمَاوَاتِ وَرَبَّ الْعَرْشِ الْعَظِيمِ', category: 'sleep' },
    { text: 'آيَةُ الْكُرْسِيِّ', category: 'sleep' },
    { text: 'اللَّهُمَّ إِنِّي أَسْلَمْتُ وَجْهِي إِلَيْكَ', category: 'sleep' },
    { text: 'الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا', category: 'sleep' },

    { text: 'لَا إِلَهَ إِلَّا اللَّهُ', category: 'general' },
    { text: 'اللَّهُ أَكْبَرُ', category: 'general' },
    { text: 'الْحَمْدُ لِلَّهِ', category: 'general' },
    { text: 'أَسْتَغْفِرُ اللَّهَ', category: 'general' },
    { text: 'أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ', category: 'general' },
    { text: 'لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ', category: 'general' },
    { text: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ', category: 'general' },
    { text: 'اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ', category: 'general' },
    { text: 'سُبْحَانَ اللَّهِ الْعَظِيمِ', category: 'general' },
    { text: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ سُبْحَانَ اللَّهِ الْعَظِيمِ', category: 'general' },
    { text: 'لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ', category: 'general' },
    { text: 'حَسْبِيَ اللَّهُ وَنِعْمَ الْوَكِيلُ', category: 'general' },
    { text: 'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ', category: 'general' },
    { text: 'اللَّهُمَّ اغْفِرْ لِي وَتُبْ عَلَيَّ', category: 'general' },
    { text: 'رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ', category: 'general' },
    { text: 'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي', category: 'general' },
    { text: 'سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ', category: 'general' },
    { text: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', category: 'general' },
    { text: 'اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ', category: 'general' },
    { text: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً', category: 'general' },
    { text: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَأَعُوذُ بِكَ مِنَ النَّارِ', category: 'general' },
    { text: 'لَا إِلَهَ إِلَّا اللَّهُ عَدَدَ خَلْقِهِ', category: 'general' },
    { text: 'اللَّهُمَّ ثَبِّتْ قَلْبِي عَلَى دِينِكَ', category: 'general' },
    { text: 'رَبِّ زِدْنِي عِلْمًا', category: 'general' },
    { text: 'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي', category: 'general' },
    { text: 'اللَّهُمَّ بَارِكْ لِي فِيمَا رَزَقْتَنِي', category: 'general' },
];

function getCurrentCategory() {
    const h = new Date().getHours();
    if (h >= 4 && h < 12) return 'morning';
    if (h >= 12 && h < 19) return 'evening';
    return 'sleep';
}

function pickThikr() {
    const category = getCurrentCategory();
    const pool = athkar.filter(a => a.category === category || a.category === 'general');
    return pool[Math.floor(Math.random() * pool.length)].text;
}

function showToast(message) {
    const existingToast = document.getElementById('my-extension-toast');
    if (existingToast) {
        existingToast.remove();
    }

    const toast = document.createElement('div');
    toast.id = 'my-extension-toast';
    toast.innerText = message;

    const xbutton = document.createElement('span');
    xbutton.innerText = '×';

    Object.assign(toast.style, {
        position: 'fixed',
        top: '24px',
        right: '80px',
        zIndex: '999999',
        minWidth: '300px',
        maxWidth: '460px',
        padding: '16px 24px',
        fontFamily: "'Amiri', serif",
        fontSize: '22px',
        fontWeight: '400',
        lineHeight: '1.7',
        color: '#e8d9a8',
        background: '#0d3427',
        border: '1px solid rgba(212, 175, 55, 0.25)',
        borderRadius: '12px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
        pointerEvents: 'none',
        opacity: '0',
        direction: 'rtl',
        textAlign: 'right',
        transition: 'opacity 0.6s ease-in-out',
    });

    Object.assign(xbutton.style, {
        position: 'absolute',
        top: '6px',
        left: '10px',
        width: '20px',
        height: '20px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Inter, Roboto, "Helvetica Neue", Arial, sans-serif',
        fontSize: '18px',
        fontWeight: '400',
        lineHeight: '1',
        color: 'rgba(232, 217, 168, 0.5)',
        background: 'transparent',
        border: 'none',
        borderRadius: '50%',
        cursor: 'pointer',
        userSelect: 'none',
        padding: '0',
        outline: 'none',
        pointerEvents: 'auto',
        transition: 'color 0.2s ease',
    });

    xbutton.addEventListener('mouseenter', () => {
        xbutton.style.color = 'rgba(232, 217, 168, 1)';
    });
    xbutton.addEventListener('mouseleave', () => {
        xbutton.style.color = 'rgba(232, 217, 168, 0.5)';
    });

    xbutton.addEventListener('click', () => {
        toast.remove();
    });

    toast.appendChild(xbutton);
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '1';
    }, 10);

    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => {
            toast.remove();
        }, 600);
    }, 10000);
}

let currentInterval = 5 * 60 * 1000;
let isEnabled = true;

chrome.storage.local.get(['interval', 'enabled'], (data) => {
    if (data.interval) currentInterval = data.interval;
    if (data.enabled === false) isEnabled = false;
});

chrome.storage.onChanged.addListener((changes) => {
    if (changes.interval) currentInterval = changes.interval.newValue;
    if (changes.enabled) isEnabled = changes.enabled.newValue;
});

function maybeShow() {
    if (!isEnabled) return;
    chrome.storage.local.get('lastShown', (data) => {
        const now = Date.now();
        const last = data.lastShown || 0;
        if (now - last >= currentInterval) {
            chrome.storage.local.set({ lastShown: now });
            showToast(pickThikr());
        }
    });
}

maybeShow();
window.addEventListener('focus', maybeShow);
setInterval(maybeShow, 1000);