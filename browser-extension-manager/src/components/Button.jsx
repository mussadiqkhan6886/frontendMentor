const Button = ({label, active, border}) => {
  return (
    <button className={`rounded-2xl bg-opacity-10 px-4 py-1 cursor-pointer mr-2 ${active ? 'bg-red-500 text-black' : 'bg-gray-700 text-white'} ${border}`}>
        {label}
    </button>
  )
}

export default Button
