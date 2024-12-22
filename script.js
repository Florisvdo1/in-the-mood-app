document.getElementById('moodForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const mood = document.getElementById('moodInput').value.trim().toLowerCase();
    if (mood === "") return;

    const soundboardsMap = {
        "happy": [
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
        ],
        "sad": [
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
        ],
        "energized": [
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
        ],
        "relaxed": [
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"
        ],
        // Add more mood mappings as needed
    };

    let selectedSoundboards = [];

    for (let key in soundboardsMap) {
        if (mood.includes(key)) {
            selectedSoundboards = soundboardsMap[key];
            break;
        }
    }

    // If no exact match, use all available soundboards
    if (selectedSoundboards.length === 0) {
        selectedSoundboards = [
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"
        ];
    }

    const buttonsContainer = document.getElementById('buttonsContainer');
    buttonsContainer.innerHTML = ''; // Clear previous buttons

    selectedSoundboards.forEach((file, index) => {
        const buttonDiv = document.createElement('div');
        buttonDiv.classList.add('sound-button');
        const button = document.createElement('button');
        button.innerText = `Sound ${index + 1}`;
        button.addEventListener('click', () => {
            const audioPlayer = document.getElementById('audioPlayer');
            audioPlayer.src = file;
            audioPlayer.classList.remove('hidden');
            audioPlayer.play();
        });
        buttonDiv.appendChild(button);
        buttonsContainer.appendChild(buttonDiv);
    });

    if (selectedSoundboards.length > 0) {
        document.getElementById('soundboards').classList.remove('hidden');
    } else {
        document.getElementById('soundboards').classList.add('hidden');
        alert('No soundboards found for the entered mood.');
    }
});
