
import { useState } from "react";
import "./App.css";

function App() {
  const [opened, setOpened] = useState(false);
  const [wishMade, setWishMade] = useState(false);
  const [step, setStep] = useState(0);
  const [showSecret, setShowSecret] = useState(false);
  const [musicOn, setMusicOn] = useState(false);

  const resetSurprise = () => {
    setOpened(false);
    setWishMade(false);
    setStep(0);
    setShowSecret(false);
  };

  const toggleMusic = () => {
    const audio = document.getElementById("birthday-music");

    if (musicOn) {
      audio.pause();
      setMusicOn(false);
    } else {
      audio.play()
        .then(() => setMusicOn(true))
        .catch(() => alert("Please add your birthday music file first!"));
    }
  };

  return (
    <div className="birthday-page">

      <div className="floating-hearts" aria-hidden="true">
        <span>💗</span>
        <span>💕</span>
        <span>💖</span>
        <span>🌸</span>
        <span>💗</span>
        <span>✨</span>
      </div>

      <audio
        id="birthday-music"
        src="/birthday-song.mp3"
        loop
      />

      <button className="music-button" onClick={toggleMusic}>
        {musicOn ? "⏸ Pause Music" : "🎵 Play Music"}
      </button>

      {!opened ? (
        <div className="welcome">
          <div className="decorations">🌸 ✨ 🎀 ✨ 🌸</div>

          <h1>A Little Surprise For You 💌</h1>

          <p>Someone special has a message for you...</p>

          <div
            className="gift"
            onClick={() => setOpened(true)}
          >
            🎁
          </div>

          <button onClick={() => setOpened(true)}>
            Open Your Surprise 💗
          </button>

          <p className="hint">Tap the gift box ✨</p>
        </div>
      ) : (
        <div className="surprise">

          {step === 0 && (
            <div className="candle-section">
              <h1>Happyyy Birthdayyy, Ashaaa! 🎂💗</h1>

              <div className="cake">
                {wishMade ? "🍰" : "🎂"}
              </div>

              {!wishMade ? (
                <button onClick={() => setWishMade(true)}>
                  Blow Your Candle 🕯️✨
                </button>
              ) : (
                <>
                  <h2>Wish Granted! 💫💗</h2>

                  <p>
                    May all your dreams come true, Asha!
                    Keep shining and smiling always. 🌸
                  </p>

                  <button onClick={() => setStep(1)}>
                    Open Your Birthday Letter 💌
                  </button>
                </>
              )}
            </div>
          )}

          {step === 1 && (
            <div className="letter-section">
              <h1>To My Dearest Sister 💕</h1>

              <p>
                You are not just my sister, you are one of
                the most precious gifts in my life.✨
              </p>

              <p>
                Life is so much more beautiful with you in it.
                Thank you for being my partner in crime,
                my personal entertainer, and my forever sister. 😂💕
              </p>

              <p>
                No matter how much we fight, tease each other,
                or annoy one another, you will always have
                a special place in my heart. 💗
              </p>

              <p>
                May all your dreams come true, may you always
                keep smiling, and may happiness follow you
                everywhere you go. 🌸✨
              </p>

              <p>
                And remember, you are stuck with me forever!
                No returns, no exchanges. 😂🎀
              </p>

              <h2>Luv You So Much, Asha! 💗🎀</h2>

              <button onClick={() => setStep(2)}>
                Next: Our Memories 📸
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="memories">
              <h1>Our Little World of Memories 📸💗</h1>

              <div className="memory-grid">
                <div className="memory-card">
                  <div className="memory-photo">👭</div>
                  <h3>Partners in Crime 😂</h3>
                  <p>Two sisters, unlimited madness!</p>
                </div>

                <div className="memory-card">
                  <div className="memory-photo">💕</div>
                  <h3>Forever Together ✨</h3>
                  <p>Every little moment becomes a memory.</p>
                </div>

                <div className="memory-card">
                  <div className="memory-photo">🌸</div>
                  <h3>My Favourite Person</h3>
                  <p>My sister, my happiness, my forever friend.</p>
                </div>
              </div>

              <button onClick={() => setStep(3)}>
                One Last Surprise 🎁
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="secret-section">
              <h1>One Last Surprise For You 🎁</h1>

              {!showSecret ? (
                <button onClick={() => setShowSecret(true)}>
                  Open Your Secret Message 💌
                </button>
              ) : (
                <div className="secret-message">
                  <div className="secret-heart">💗</div>

                  <h2>Dear Asha,</h2>

                  <p>
                    No matter where life takes us, you will
                    always have me by your side. ✨
                  </p>

                  <p>
                    Thank you for being my sister, my
                    happiness, and my forever partner in crime. 😂💕
                  </p>

                  <h2>
                    Forever Your Sister's Favourite Person! 💕✨
                  </h2>

                  <p>
                    With endless love, hugs, and birthday wishes! 🌸
                  </p>

                  <h2>Love You Forever!💗</h2>
                </div>
              )}

              <button onClick={resetSurprise}>
                Replay From Beginning ↻
              </button>
            </div>
          )}

        </div>
      )}
    </div>
  );
}

export default App;