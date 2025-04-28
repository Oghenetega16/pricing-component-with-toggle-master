import { useState } from "react";
export default function PricingCard({
    plan = '',
    price = '',
    storage = '',
    users = '',
    send = '',
    cardBgColor = 'bg-white',
    cardTextColor = 'text-dark-grayish-blue',
    buttonBgColor = '',
    buttonTextColor = '',
    height = '',
    paddingTopBottom = ''
}) {

    const [isActive, setIsActive] = useState(false);
    
    const gradientBorder = "border-2 border-transparent bg-origin-border bg-clip-padding"
    const gradientText = "bg-gradient-to-r from-[hsl(236,72%,79%)] to-[hsl(237,63%,64%)] bg-clip-text text-transparent"
    const isProfessional = plan === "Professional"

    return (
        <div className={`${cardBgColor} text-center ${cardTextColor} font-bold rounded-xl px-7 py-10 mb-8 w-full h-full sm:w-xs md:h-auto ${height} ${paddingTopBottom}`}>
            <p className="text-xl mb-8">{plan}</p>
            <div className="flex items-center justify-center text-7xl pb-8 border-b border-gray-200">
                <span className="text-4xl">$</span>
                <h1>{price}</h1>
            </div>
            <ul>
                <li className="py-4 border-b border-gray-200">{storage}</li>
                <li className="py-4 border-b border-gray-200">{users}</li>
                <li className="py-4 border-b border-gray-200">{send}</li>
            </ul>
            <button 
                className={`uppercase text-xs flex justify-center w-full mt-8 py-3 rounded-lg cursor-pointer tracking-widest transition duration-300 ease-in-out
                ${isActive ? (isProfessional ? "bg-transparent border-2 border-white text-white" : `bg-transparent ${gradientBorder}`) : buttonBgColor}`}
                onClick={() => setIsActive(!isActive)}
                style={isActive && !isProfessional ? {
                    backgroundImage: 'linear-gradient(white, white), linear-gradient(to right, hsl(236,72%,79%), hsl(237,63%,64%))',
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'padding-box, border-box'} : {}}>
                <span className={`${isActive ? (isProfessional ? "text-white" : gradientText) : buttonTextColor}`}>Learn More</span>
            </button>
        </div>
    )
}