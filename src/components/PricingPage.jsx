import { useState } from "react"
import PricingCard from "./PricingCard"
export default function PricingPage() {
    const [toggle, setToggle] = useState(true)

    function handleToggle() {
        setToggle(!toggle)
    }

    return (
        <div className="min-h-screen bg-grayish-blue">
            <div className="font-display text-center py-12 px-6">
                <h1 className="text-4xl font-bold text-gray-blue mb-8">Our Pricing</h1>
                <div className="flex items-center justify-center space-x-8 text-light-grayish-blue font-bold mb-20">
                    <p>Annually</p>
                    <img 
                        src={toggle ? '/images/toggle-on.png' : '/images/toggle-off.png'} 
                        alt="toggle icon" 
                        onClick={() => handleToggle()}
                        className="cursor-pointer"
                    />
                    <p>Monthly</p>
                </div>
                <div className="flex justify-center flex-col md:flex-row">
                    <PricingCard 
                        plan = 'Basic'
                        price = {toggle ? '19.99' : '199.99'}
                        storage = '500 GB Storage'
                        users = '2 Users Allowed'
                        send = 'Send up to 3 GB'
                    />
                    <PricingCard 
                        plan="Professional"
                        price={toggle ? '24.99' : '249.99'}
                        storage="1TB Storage"
                        users="5 Users Allowed"
                        send="Send up to 10 GB"
                        cardBgColor="bg-gradient-to-tr from-[hsl(236,72%,79%)] to-[hsl(237,63%,64%)]"
                        cardTextColor="text-white"
                        buttonBgColor="bg-white"
                        buttonTextColor=""
                    />
                    <PricingCard 
                        plan="Master" 
                        price={toggle ? '39.99' : '399.99'}
                        storage="2TB Storage" 
                        users="10 Users Allowed" 
                        send="Send up to 20 GB"
                    />
                </div>
            </div>
        </div>
    )
}

// bg-[url(/images/bg-top.svg)] bg-contain bg-top-right bg-no-repeat