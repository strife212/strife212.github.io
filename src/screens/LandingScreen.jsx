import './landing.css'

const BASE = import.meta.env?.BASE_URL ?? '/'

// The public face of imperialspaceforce.com: one full-bleed vista — the
// procession before the World Engine — the name of the game, and the shortest
// possible pitch. The old web prototype lives on, unadvertised, at /prototype.
export default function LandingScreen() {
  return (
    <div id="landing-screen">
      <img className="landing-bg" src={`${BASE}landing.jpg`} alt="" />
      <header className="landing-top">
        <h1 className="landing-title">IMPERIAL SPACE FORCE</h1>
      </header>
      <div className="landing-plate">
        Take command of the Imperial Navy. Currently in development for PC.
        Coming soon.
      </div>
    </div>
  )
}
