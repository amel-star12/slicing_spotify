document.addEventListener("DOMContentLoaded", () => {
    const playlists = [
        { title: "Everything U Are", 
            desc: "HINDIA", 
            image: "everything.png" },
        { title: "Sorai", 
            desc: "Nadin Amizah", 
            image: "Sorai.png" },
        { title: "Cincin", 
            desc: "HINDIA", 
            image: "Cincin.png" },
        { title: "Rumah Ke Rumah", 
            desc: "HINDIA", 
            image: "rumah ke rumah.png" },
        { title: "Bertaut", 
            desc: "Nadin Amizah", 
            image: "Bertaut.png" },
        { title: "Politrik", 
            desc: "FEAST", 
            image: "Politrik.png" }
    ];

    const container = document.getElementById("playlist-container");
    const currentTitle = document.getElementById("current-title");
    const currentArtist = document.getElementById("current-artist");
    const signupBtn = document.querySelector(".signup");
    const loginBtn = document.querySelector(".login");

    signupBtn.addEventListener("click", () => {
        alert("Fitur pendaftaran belum tersedia.");
    });

    loginBtn.addEventListener("click", () => {
        alert("Fitur masuk belum tersedia.");
    });
    
    // Membuat card melalui DOM
    playlists.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img class="card-img" src="assets/${item.image}" alt="Cover lagu ${item.title}">
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
        `;
        // Menambahkan event listener pada card 
        // untuk memperbarui judul dan artis saat diklik
        card.addEventListener("click", () => {
            currentTitle.textContent = item.title;
            currentArtist.textContent = item.desc;
            isPlaying = true;
            updatePlayButton();
        });
        container.appendChild(card);
    });

    // Menu mobile
    const sidebar = document.getElementById("sidebar");
    const openBtn = document.getElementById("open-menu");
    const closeBtn = document.getElementById("close-menu");

    openBtn.addEventListener("click", () => {
        sidebar.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
        sidebar.classList.remove("active");
    });

    // Tombol play/pause
    const playBtn = document.getElementById("play-pause-btn");
    let isPlaying = false;

    function updatePlayButton() {
        playBtn.textContent = isPlaying ? "⏸" : "▶";
    }

    playBtn.addEventListener("click", () => {
        isPlaying = !isPlaying;
        updatePlayButton();
    });
});
