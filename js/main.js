document.addEventListener('DOMContentLoaded', function () {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);

  const themeBtn = document.getElementById('toggle-theme');
  themeBtn?.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const newTheme = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });

  const section = document.querySelector('.main-music');
  const musicItems = section.querySelectorAll('.music-list li');
  const imgEl = section.querySelector('.img-wrap img');

  const footer = document.querySelector('footer.player');
  const footerImg = footer.querySelector('.img-wrap img');
  const footerMusic = footer.querySelector('.txt-wrap .music');
  const footerSinger = footer.querySelector('.txt-wrap .singer');

  const playBtn = document.querySelector('#play');
  const playIcon = playBtn?.querySelector('i');

  const imageMap = {
    "Armageddon": "/img/music/armageddon.webp",
    "Drowning": "/img/music/drowning.webp",
    "Episode": "/img/music/episode.webp",
    "HANDS UP": "/img/music/handsup.webp",
    "HOT": "/img/music/hot.webp"
  };

  musicItems.forEach(item => {
    item.addEventListener('click', () => {
      musicItems.forEach(el => {
        el.classList.remove('active');
        const icon = el.querySelector('.play i');
        if (icon) {
          icon.classList.remove('xi-pause');
          icon.classList.add('xi-play');
        }
      });

      item.classList.add('active');
      const icon = item.querySelector('.play i');
      if (icon) {
        icon.classList.remove('xi-play');
        icon.classList.add('xi-pause');
      }

      const musicName = item.querySelector('.music')?.textContent.trim();
      const singerName = item.querySelector('.singer')?.textContent.trim();

      if (imageMap[musicName]) {
        imgEl.src = imageMap[musicName];
        imgEl.alt = musicName;
        footerImg.src = imageMap[musicName];
        footerImg.alt = musicName;
      }

      footerMusic.textContent = musicName;
      footerSinger.textContent = singerName;

      if (playIcon) {
        playIcon.classList.remove('xi-play');
        playIcon.classList.add('xi-pause');
        playBtn.classList.add('active');
      }
    });
  });

  playBtn?.addEventListener('click', function () {
    const isPlaying = playIcon.classList.contains('xi-play');
    playIcon.classList.toggle('xi-play', !isPlaying);
    playIcon.classList.toggle('xi-pause', isPlaying);
    playBtn.classList.toggle('active', isPlaying);

    const activeLi = document.querySelector('.music-list li.active');
    const icon = activeLi?.querySelector('.play i');

    if (icon) {
      icon.classList.toggle('xi-play', !isPlaying);
      icon.classList.toggle('xi-pause', isPlaying);
    }
  });
});
