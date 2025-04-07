const Button = ({label, active}) => {
  return (
    <button className={`rounded-2xl bg-gray-600 bg-opacity-10 px-4 py-1 cursor-pointer mr-2 ${active ? 'bg-red-500 text-black' : ''}`}>
        {label}
    </button>
  )
}

export default Button
