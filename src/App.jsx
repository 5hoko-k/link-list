import { useState } from 'react'
import './App.css'
import anithril from './assets/anithril1.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <article className="card">
        <header>
          <img src={anithril} className="logo circle-svg" alt="Anithril logo" />
        </header>
        <p>
        Dear amazing supporters, your support keeps our shared content alive. Inspired by anime, I create gripping scene edits that once gave me chills, now shared worldwide through Anithril. Plus, as a self-taught web developer, I thrive on crafting impactful sites like this one. I'm in a tight spot and reaching out for help—just around <b>$20</b> would mean the world to me. 
        </p>
        <a href="https://www.buymeacoffee.com/anithril"><img src="https://img.buymeacoffee.com/button-api/?text=Help me out&emoji=🤝&slug=anithril&button_colour=c9184a&font_colour=ffffff&font_family=Inter&outline_colour=ffffff&coffee_colour=FFDD00" /></a>
      </article>
      <p className="read-the-docs">
        Thanks for sticking around!
      </p>
    </>
  )
}

export default App
