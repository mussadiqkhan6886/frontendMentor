import logo from '../public/images/logo.svg'
import sun from '../public/images/icon-sun.svg'
import Card from './components/Card'
import data from './data.json'
import moon from '../public/images/icon-moon.svg'
import { useState, useEffect } from 'react'
const App = () => {

  const [darkMode, setDarkMode] = useState(false);
  const [allActive, setAllActive] = useState(true)
  const [active, setActive] = useState(false)
  const [inActive, setInActive] = useState(false)
  const [dataList, setDataList] = useState(data)
  const [cardId, setCardId] = useState(null)

  console.log(cardId)

  const handleCardIdChange = (id) => {
    setCardId(id)
  }

  const handleAll = () => {
    setInActive(false)
    setActive(false)
    setAllActive(!allActive)
  }

  const handleActive = () => {
    setInActive(false)
    setAllActive(false)
    setActive(!active)
  }
  const handleInActive = () => {
    setActive(false)
    setAllActive(false)
    setInActive(!inActive)
  }
  
  useEffect(() => {
    // Add or remove 'dark' class to the <html> element
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <section className="min-h-screen p-5 md:p-20 w-full flex flex-col justify-center items-center bg-gradient-to-b from-[#040918] to-[#091540] dark:from-gray-200 dark:to-white">
      <div className='w-full flex relative'>
        <img src={logo} className=' absolute top-2 left-3'  alt="logo" />
        <input type="text" className='bg-slate-600 dark:bg-white w-full h-14 rounded-xl'  />
        <button onClick={() => setDarkMode(!darkMode)} className='outline-orange-400' >
        <img src={darkMode ?  moon : sun } className='cursor-pointer absolute right-2 bg-slate-500 p-2.5 rounded-2xl top-[7px] dark:bg-slate-300' alt="sun logo" />
        </button>
      </div>
      <div className='w-full flex flex-col items-center'>
        <div className='flex flex-col md:flex-row  justify-between w-full mt-10 items-center gap-3'>
          <h1 className='text-white font-medium text-3xl dark:text-black'>Extensions List</h1>
          <div className='flex text-white'>
            <button onClick={handleAll} className={`rounded-2xl bg-opacity-10 px-4 py-1 cursor-pointer mr-2 ${allActive ? 'bg-red-500 dark:bg-red-500 text-black dark:text-white' : 'bg-gray-700 text-white dark:bg-white'} outline-orange-500  dark:text-black` }>
              All
            </button>
            <button onClick={handleActive} className={`rounded-2xl bg-opacity-10 px-4 py-1 cursor-pointer mr-2 ${active ? 'bg-red-500 dark:bg-red-500 text-black dark:text-white' : 'bg-gray-700 text-white dark:bg-white'} outline-orange-500  dark:text-black` }>
              Active
            </button>
            <button onClick={handleInActive} className={`rounded-2xl bg-opacity-10 px-4 py-1 cursor-pointer mr-2 ${inActive ? 'bg-red-500 dark:bg-red-500 text-black dark:text-white' : 'bg-gray-700 text-white dark:bg-white'} outline-orange-500  dark:text-black` }>
              InActive
            </button>
          </div>
        </div>
        <div className='flex md:grid-cols-3 md:w-full md:grid gap-3 mt-7 flex-wrap w-[300px] items-center justify-center'>
          {allActive && data.map((item,index) => (
            <Card key={index} {...item} />
          ))}
          {active &&
            dataList
              .filter(item => item.isActive) // only items with isActive: true
              .map(item => (
                <Card key={item.id} {...item} />
              ))
          }
          {inActive &&
            dataList
              .filter(item => !item.isActive) // only items with isActive: true
              .map(item => (
                <Card key={item.id} {...item} onIdChange={handleCardIdChange} />
              ))
          }
        </div>
      </div>
     
    </section>
  )
}

export default App
