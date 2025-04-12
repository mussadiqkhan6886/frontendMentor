const Button = ({label, active, border}) => {
  function handleCLick(e){
    
  }
  return (
    <button onClick={handleCLick} className={`rounded-2xl bg-opacity-10 px-4 py-1 cursor-pointer mr-2 ${active ? 'bg-red-500 dark:bg-red-500 text-black dark:text-white' : 'bg-gray-700 text-white dark:bg-white'} ${border} outline-orange-500  dark:text-black` }>
        {label}
    </button>
  )
}

export default Button 
