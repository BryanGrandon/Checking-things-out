import { extractColors } from 'extract-colors'
import './app.css'
import Values from 'values.js'
import { useEffect, useState } from 'react'

function App () {
  const [imageColor, setImageColor] = useState([])
  const [srcImg, setSrcImg] = useState('')
  const [theColor, setTheColor] = useState('')
  const [TColor, setTColor] = useState([])

  useEffect(() => {
    setTheColor('#ff0000')
    setTColor(new Values('#ff0000').all(20))
  }, [])

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

  const handlerClickT = (color) => {
    setTheColor(color)
    setTColor(new Values(color).all(20))
  }

  return (
    <main>
      <section>
        <input type='file' name='file' id='img-file' onChange={(e) => handlerClick(e)} />

        <img src={`${srcImg}`} alt='K' width='20%' />

        <section>
          {imageColor.map((e) => (
            <p key={Math.random() * 100} style={{ backgroundColor: `${e.hex}` }} className='colors'>
              {e.hex}
            </p>
          ))}
        </section>
      </section>

      <section className='color-sect'>
        {TColor.map((e) => (
          <p
            key={Math.random() * 10}
            style={{ background: `#${e.hex}` }}
            onClick={() => handlerClickT(`#${e.hex}`)}
            className={theColor === `#${e.hex}` ? 'card active' : 'card'}
          >
            {e.hex}
          </p>
        ))}
      </section>
      <section />
    </main>
  )
}
export default App
