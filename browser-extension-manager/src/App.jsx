import logo from '../public/images/logo.svg'
import sun from '../public/images/icon-sun.svg'
import Card from './components/Card'
import Button from './components/Button'
import data from './data.json'
const App = () => {

  return (
    <section className="min-h-screen p-5 md:p-20 w-full flex flex-col justify-center items-center bg-[linear-gradient(180deg,_#040918_0%,_#091540_100%)]">
      <div className='w-full flex relative'>
        <img src={logo} className=' absolute top-2 left-3'  alt="logo" />
        <input type="text" className='bg-slate-600 w-full h-14 rounded-xl'  />
        <button className='outline-orange-400' >
        <img src={sun} className='cursor-pointer absolute right-2 bg-slate-500 p-2.5 rounded-2xl top-[7px]' alt="sun logo" />
        </button>
      </div>
      <div className='w-full flex flex-col items-center'>
        <div className='flex flex-col md:flex-row  justify-between w-full mt-10 items-center gap-3'>
          <h1 className='text-white font-medium text-3xl'>Extensions List</h1>
          <div className='flex text-white'>
            <Button label={'All'} active={true} />
            <Button label={'Active'} />
            <Button label={'Inactive'} />
          </div>
        </div>
        <div className='flex md:grid-cols-3 md:w-full md:grid gap-3 mt-7 flex-wrap w-[300px] items-center justify-center'>
          {data.map(item => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
     
    </section>
  )
}

export default App
