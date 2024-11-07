import { extractColors } from 'extract-colors'
import './app.css'
import { useState } from 'react'

function App () {
  const [imageColor, setImageColor] = useState([])
  const [srcImg, setSrcImg] = useState('')

  const palette = async (img) => {
    const output = await extractColors(img)
    setImageColor(output)
  }

  const handlerClick = async (e) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      setSrcImg(e.target.result)
      palette(e.target.result)
    }
    reader.readAsDataURL(e.target.files[0])
  }

  return (
    <main>

      <input type='file' name='file' id='img-file' onChange={(e) => handlerClick(e)} />

      <img src={`${srcImg}`} alt='K' width='20%' />

      <section>
        {imageColor.map(e => (
          <p key={Math.random() * 100} style={{ backgroundColor: `${e.hex}` }} className='colors'>{e.hex}</p>
        ))}
      </section>
    </main>
  )
}
export default App
