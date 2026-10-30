import './landing.css'

const BASE = import.meta.env?.BASE_URL ?? '/'

// The public face of imperialspaceforce.com: one full-bleed vista — the
// procession before the World Engine — the name of the game, and the shortest
// possible pitch. The web demo lives on behind a single link.
export default function LandingScreen({ onEnter }) {
  return (
    <div id="landing-screen">
      <img className="landing-bg" src={`${BASE}landing.jpg`} alt="" />
      <header className="landing-top">
        <h1 className="landing-title">IMPERIAL SPACE FORCE</h1>
      </header>
      <div className="landing-plate">
        <p>
          Take command of the Imperial Navy. Currently in development for PC.
          Coming soon.
        </p>
        <p className="landing-demo">
          To play the old web demo,{' '}
          <button className="landing-link" onClick={onEnter}>click here</button>.{' '}
          <strong>
            (Please note this was just a pre-alpha prototype and no longer
            reflects the current project which has greatly increased in quality
            and scope.)
          </strong>
        </p>
      </div>
    </div>
  )
}
