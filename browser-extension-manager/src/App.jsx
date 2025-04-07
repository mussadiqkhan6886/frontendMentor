import logo from './assets/images/logo.svg'
import sun from './assets/images/icon-sun.svg'
const App = () => {

  return (
    <section className="h-screen p-20 w-screen flex flex-col justify-center items-center bg-[linear-gradient(180deg,_#040918_0%,_#091540_100%)]">
      <div className='w-full flex'>
        <img src={logo}  alt="logo" />
        <input type="text" className='bg-slate-500 w-full' placeholder="enter" />
        <img src={sun} alt="" />
      </div>
      <div>
        <div>
          <h1>Extensions List</h1>
          <div className='flex'>
            <button>All</button>
            <button>Active</button>
            <button>Inactive</button>
          </div>
        </div>
      </div>
     
    </section>
  )
}

export default App
