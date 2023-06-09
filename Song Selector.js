`use strict`;

// for (let i = 1; i <= 6; i++) {
//   let title = document.querySelector(`.title${i}`)
// };
let cover1 = document.getElementById(`#img1`);
let cover2 = document.getElementById(`#img2`);
let cover3 = document.getElementById(`#img3`);
let cover4 = document.getElementById(`#img4`);
let cover5 = document.getElementById(`#img5`);

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

let pre1 = document.querySelector(`.pre1`);
let pre2 = document.querySelector(`.pre2`);
let pre3 = document.querySelector(`.pre3`);
let pre4 = document.querySelector(`.pre4`);
let pre5 = document.querySelector(`.pre5`);

let shuffle = document.querySelector(`.shuffle-btn`);
let songNumber = ``;
let w = 0;
let x = [];
let y = [];

const song0 = {
  title: `It's So Amazing`,
  artist: `Hezekiah Walker`,
  key: `C - C#`,
  bpm: 109,
  //cover:
};

const song1 = {
  title: `How He Loves Us`,
  artist: `Anthony Evans`,
  key: `E`,
  bpm: 124,
};

const song2 = {
  title: `You Thought I Was Worth Saving`,
  artist: `Anthony Brown`,
  key: `D`,
  bpm: 114,
};

const song3 = {
  title: `Deserve It`,
  artist: `JJ Hairston`,
  key: `Gb`,
  bpm: 175,
};

const song4 = {
  title: `Good Good Father`,
  artist: `Chris Tomlin`,
  key: `A`,
  bpm: 145,
};

const song5 = {
  title: `Lord You're Mighty`,
  artist: `JJ Hairston`,
  key: `G`,
  bpm: 176,
};

const song6 = {
  title: `How Great is Our God`,
  artist: `Chris Tomlin`,
  key: `Db`,
  bpm: 156,
};

const song7 = {
  title: `Let it Rise`,
  artist: `William Murphy`,
  key: `G`,
  bpm: 92,
};

const song8 = {
  title: `My God is Awesome`,
  artist: `Pastor Charles Jenkins`,
  key: `E`,
  bpm: 128,
};

const song9 = {
  title: `Way Maker`,
  artist: `Sinach`,
  key: `E`,
  bpm: 132,
};

const song10 = {
  title: `Reckless Love`,
  artist: `Cory Asbury`,
  key: `Gb`,
  bpm: 111,
};

const song11 = {
  title: `Oceans`,
  artist: `Hillsong United`,
  key: `D`,
  bpm: 127,
};

const song12 = {
  title: `Holy Spirit You Are Welcome Here`,
  artist: `Kim Walker-Smith`,
  key: `D`,
  bpm: 144,
};

const song13 = {
  title: `The Anthem`, //Hallelujah You Have Won The Victory
  artist: "Todd Dulaney",
  key: `F`,
  bpm: 147,
};

const song14 = {
  title: `Pressed Down Shaken Together`,
  artist: `Joe Pace`,
  key: `Bb`,
  bpm: 99,
};

const song15 = {
  title: `Psalm 23`,
  artist: `People & Songs`,
  key: `E`,
  bpm: 63,
};

const song16 = {
  title: `He's Able`,
  artist: `Deitrick Hadden`,
  key: `B`,
  bpm: 115,
};

const arr = [
  song0,
  song1,
  song2,
  song3,
  song4,
  song5,
  song6,
  song7,
  song8,
  song9,
  song10,
  song11,
  song12,
  song13,
  song14,
  song15,
  song16,
];
let n;

const pickSong = function (songNumber) {
  songChoice = arr[songNumber]; // Use number given to search arr and return the song object chosen
  // console.log(songNumber);
  // console.log(songChoice);
  return songChoice;
};

shuffle.addEventListener(`click`, function () {
  ++w;
  if (w > 3) {
    w = 1;
    y.length = 0;
  }
  for (i = 1; i <= 5; i++) {
    // check if the number has already been chosen in this click or the past three clicks
    const numCheck = function (songNumber) {
      if (y.includes(songNumber)) {
        songNumber = Math.trunc(Math.random() * arr.length);
        numCheck(songNumber);
        return songNumber;
      } else if (x.includes(songNumber)) {
        songNumber = Math.trunc(Math.random() * arr.length);
        numCheck(songNumber);
        return songNumber;
      } else {
      }
    };
    // Pick random number up to arr length, truncate it, and check if result has already been chosen
    songNumber = Math.trunc(Math.random() * arr.length);
    numCheck(songNumber);
    x.unshift(songNumber);
    y.unshift(songNumber);
    console.log(y);
    // numCheck(songNumber);
    pickSong(songNumber);

    if (i === 1) {
      pre1.textContent = title1.textContent;
      title1.textContent = `Title: ${songChoice.title}`;
      artist1.textContent = `Artist: ${songChoice.artist}`;
      key1.textContent = `Key: ${songChoice.key}`;
      bpm1.textContent = `BPM: ${songChoice.bpm}`;
      cover1.src=""
      // n--;
    } else if (i === 2) {
      pre2.textContent = title2.textContent;
      title2.textContent = `Title: ${songChoice.title}`;
      artist2.textContent = `Artist: ${songChoice.artist}`;
      key2.textContent = `Key: ${songChoice.key}`;
      bpm2.textContent = `BPM: ${songChoice.bpm}`;
      // n--;
    } else if (i === 3) {
      pre3.textContent = title3.textContent;
      title3.textContent = `Title: ${songChoice.title}`;
      artist3.textContent = `Artist: ${songChoice.artist}`;
      key3.textContent = `Key: ${songChoice.key}`;
      bpm3.textContent = `BPM: ${songChoice.bpm}`;
      // n--;
    } else if (i === 4) {
      pre4.textContent = title4.textContent;
      title4.textContent = `Title: ${songChoice.title}`;
      artist4.textContent = `Artist: ${songChoice.artist}`;
      key4.textContent = `Key: ${songChoice.key}`;
      bpm4.textContent = `BPM: ${songChoice.bpm}`;
      // n--;
    } else {
      pre5.textContent = title5.textContent;
      title5.textContent = `Title: ${songChoice.title}`;
      artist5.textContent = `Artist: ${songChoice.artist}`;
      key5.textContent = `Key: ${songChoice.key}`;
      bpm5.textContent = `BPM: ${songChoice.bpm}`;
      // n--;
    }
  }
  x.length = 0;
  console.log(w);
  console.log(x);
  console.log(y);
});

///////////////////////////////////////////////////
// Broken Loop
// if ((songChoice = undefined)) {
//   songNumber = Math.trunc(Math.random() * n) + 1;
//   pickSong(songNumber);
// } else {
// parent if statement content
// x = arr.delete(songChoice, songChoice);
// }
