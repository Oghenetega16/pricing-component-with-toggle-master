export default function PricingCard({
    plan = '',
    price = '',
    storage = '',
    users = '',
    send = '',
    cardBgColor = 'bg-white',
    cardTextColor = 'text-dark-grayish-blue',
    buttonBgColor = 'bg-gradient-to-br from-[hsl(236,72%,79%)] to-[hsl(237,63%,64%)]',
    buttonTextColor = 'text-white'
}) {
    return (
        <div className={`${cardBgColor} text-center ${cardTextColor} font-bold rounded-xl px-7 py-10 mb-8`}>
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
            <button className={`uppercase ${buttonBgColor} ${buttonTextColor} flex justify-center w-full mt-8 py-3 rounded-lg`}>Learn More</button>
        </div>
    )
}