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
          Hey there, incredible supporters! Your encouragement fuels our vibrant community. Drawing inspiration from anime, I craft mesmerizing scene edits that used to give me chills—now they're thrilling audiences worldwide via Anithril. Additionally, as a self-taught web developer, I specialize in creating impactful sites, like the one you're experiencing.</p>

        <p>  I'm at a pivotal point and extending a hand for support would make an immense difference. Your backing helps sustain this creative journey, allowing us to elevate our content and expand our reach together. Thank you for being part of this incredible adventure!
        </p>
        <blockquote className='quote'>
          When you have to save someone, they're usually in a scary situation. And they're usually really alone. So you make them think, 'I am here.'
          <footer><cite>-- All MIght, My Hero Academia</cite></footer>
        </blockquote>
        <a href="https://www.buymeacoffee.com/anithril"><img src="https://img.buymeacoffee.com/button-api/?text=Help me out&emoji=🤝&slug=anithril&button_colour=c9184a&font_colour=ffffff&font_family=Inter&outline_colour=ffffff&coffee_colour=FFDD00" /></a>
      </article>
      <p className="read-the-docs">
        Thanks for sticking around!
      </p>
    </>
  )
}

export default App
