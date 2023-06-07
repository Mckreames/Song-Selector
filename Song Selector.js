`use strict`;

let title1 = document.querySelector(`.title1`);
let title2 = document.querySelector(`.title2`);
let title3 = document.querySelector(`.title3`);
let title4 = document.querySelector(`.title4`);
let title5 = document.querySelector(`.title5`);

let artist1 = document.querySelector(`.artist1`);
let artist2 = document.querySelector(`.artist2`);
let artist3 = document.querySelector(`.artist3`);
let artist4 = document.querySelector(`.artist4`);
let artist5 = document.querySelector(`.artist5`);

let key1 = document.querySelector(`.key1`);
let key2 = document.querySelector(`.key2`);
let key3 = document.querySelector(`.key3`);
let key4 = document.querySelector(`.key4`);
let key5 = document.querySelector(`.key5`);

let bpm1 = document.querySelector(`.bpm1`);
let bpm2 = document.querySelector(`.bpm2`);
let bpm3 = document.querySelector(`.bpm3`);
let bpm4 = document.querySelector(`.bpm4`);
let bpm5 = document.querySelector(`.bpm5`);

let shuffle = document.querySelector(`.shuffle-btn`);
let songNumber = ``;

const song0 = {
  title: `It's So Amazing`,
  artist: `.`,
  key: `C - C#`,
  bpm: 109,
};

const song1 = {
  title: `How He Loves Us`,
  artist: `.`,
  key: `E`,
  bpm: 124,
};

const song2 = {
  title: `You Thought I Was Worth Saving`,
  artist: `.`,
  key: `D`,
  bpm: 114,
};

const song3 = {
  title: `Deserve It`,
  artist: `.`,
  key: `Gb`,
  bpm: 175,
};

const song4 = {
  title: `Good Good Father`,
  artist: `.`,
  key: `A`,
  bpm: 176,
};

const arr = [song0, song1, song2, song3, song4];

const pickSong = function (songNumber) {
  songChoice = arr[songNumber];
  return songChoice;
};

shuffle.addEventListener(`click`, function () {
  // if (((i = 0), i <= 4, i++)) {
    songNumber = Math.trunc(Math.random() * 4) + 1;
    pickSong(songNumber);

    title1.textContent = `Title: ${songChoice.title}`;
    artist1.textContent = `Artist: ${songChoice.artist}`;
    key1.textContent = `Key: ${songChoice.key}`;
    bpm1.textContent = `BPM: ${songChoice.bpm}`;
  // }
});
