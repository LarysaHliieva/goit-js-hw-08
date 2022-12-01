import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';

const refs = {
  iframe: document.querySelector('iframe'),
};

const player = new Player(refs.iframe);

setPlayingTime();

player.on('timeupdate', throttle(onPlayingTime, 1000));

function onPlayingTime(e) {
  const playingTime = e.seconds;
  localStorage.setItem(STORAGE_KEY, playingTime);
}

function setPlayingTime() {
  const savedPlayingTime = localStorage.getItem(STORAGE_KEY);

  if (savedPlayingTime) {
    player.setCurrentTime(savedPlayingTime);
  }
}
