const Button = ({label, iconUrl, bgColor, borderColor, textColor, fullWidth}) =>{
  return (
    <button className=
              {
                `flex justify-center
                items-center gap-2 px-7 py-4 max-sm:px-5 max-sm:py-3 border font-montserrat
                text-lg max-sm:text-sm leading-none
                active:bg-coral-red-500
                ${bgColor
                  ? `${bgColor} ${borderColor} ${textColor}`
                  : `bg-coral-red
                     text-white border-coral-red`} rounded-full ${fullWidth && "w-full"}`
              }>
        {label}

        {iconUrl && <img
            className="ml-2 w-5 h-5 rounded-full"
            src={iconUrl}
            alt="Arrow right"
            width={5}
            height={5}
        />}

        
    </button>
  )
}

export default Button