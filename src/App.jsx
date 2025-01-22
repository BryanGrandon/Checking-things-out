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

  const handlerClickE = async (ev) => {
    ev.preventDefault()

    let url = ''
    const element = ev.dataTransfer.items

    if (element) {
      [...element].forEach((item, i) => {
        if (item.kind === 'file') {
          const file = item.getAsFile()
          url = file
        }
      })
    } else {
      [...ev.dataTransfer.files].forEach((file, i) => {
        url = file
      })
    }

    const reader = new FileReader()
    reader.onload = (e) => {
      setSrcImg(e.target.result)
      palette(e.target.result)
    }
    reader.readAsDataURL(url)
    console.log(url)
  }

  function dragOverHandler (ev) {
    console.log('File(s) in drop zone')
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault()
  }

  return (
    <main>
      <section>
        <section className='dropzone' onDrop={(ev) => handlerClickE(ev)} onDragOver={(ev) => dragOverHandler(ev)}>
          <p>Drag & Drop </p>
          <p>Icon</p>
        </section>

        <input type='file' name='file' onChange={(e) => handlerClick(e)} />

        <img src={`${srcImg}`} alt='K' width='20%' />
      </section>

      <section>
        {imageColor.map((e) => (
          <p key={Math.random() * 100} style={{ backgroundColor: `${e.hex}` }} className='colors'>
            {e.hex}
          </p>
        ))}
      </section>

    </main>
  )
}
export default App
