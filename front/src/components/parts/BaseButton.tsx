
function BaseButton ({ name, onClick } : {name:any, onClick :any}) : JSX.Element {
  return (
        <button onClick={onClick} className="inline-block rounded-full
                            bg-purple py-2
                            px-4 text-lg
                            font-medium text-white shadow-2xl
                            transition hover:translate-y-0.5
                            hover:bg-thick-purple
                            hover:shadow-sm">
            {name}
        </button>
  )
}

export default BaseButton
