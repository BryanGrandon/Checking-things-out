import './app.css'

const App = () => {
  return (
    <main className='bg-gray-200 h-screen p-4 flex flex-col gap-4'>
      <h1 className='text-4xl text-blue-600 font-bold'>Welcome to React</h1>
      <div className='flex items-center justify-center border border-black border-solid rounded-lg h-30 bg-red-600 shadow-xl'>
        <p>Box</p>
      </div>

      <article>
        <h2 className='text-3xl font-semibold text-purple-800'>Title 2</h2>
        <section className='grid grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))] border border-blue-600 border-solid rounded-2xl overflow-hidden shadow'>
          <div className='flex items-center justify-center bg-yellow-400 text-2xl'>1</div>
          <div className='flex items-center justify-center bg-yellow-400 text-2xl'>2</div>
          <div className='flex items-center justify-center bg-yellow-400 text-2xl'>3</div>
          <div className='flex items-center justify-center bg-yellow-400 text-2xl'>4</div>
          <div className='flex items-center justify-center bg-yellow-400 text-2xl'>5</div>
          <div className='flex items-center justify-center bg-yellow-400 text-2xl'>6</div>
        </section>
      </article>
    </main>
  )
}

export default App
