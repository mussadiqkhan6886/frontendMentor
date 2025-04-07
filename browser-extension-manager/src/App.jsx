import logo from './assets/images/logo.svg'
import sun from './assets/images/icon-sun.svg'
import Card from './components/Card'
import Button from './components/Button'
import data from './data.json'
const App = () => {

  return (
    <section className="h-screen p-20 w-screen flex flex-col justify-center items-center bg-[linear-gradient(180deg,_#040918_0%,_#091540_100%)]">
      <div className='w-full flex'>
        <img src={logo} className='text-white absolute'  alt="logo" />
        <input type="text" className='bg-slate-500 w-full' placeholder="enter" />
        <img src={sun} alt="" />
      </div>
      <div className='w-full'>
        <div className='flex justify-between w-full mt-10'>
          <h1 className='text-white font-medium text-2xl'>Extensions List</h1>
          <div className='flex text-white'>
            <Button label={'All'} active={true} />
            <Button label={'Active'} />
            <Button label={'Inactive'} />
          </div>
        </div>
        <div className='grid grid-cols-4'>
          {data.map(item => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
     
    </section>
  )
}

export default App
