
import PricingCard from "./PricingCard"
export default function PricingPage() {
    return (
        <div className="min-h-screen bg-grayish-blue bg-[url(/images/bg-top.svg)] bg-contain bg-top-right bg-no-repeat">
            <div className="font-display text-center py-12 px-6">
                <h1 className="text-4xl font-bold text-gray-blue mb-8">Our Pricing</h1>
                <div className="flex items-center justify-center space-x-8 text-light-grayish-blue font-bold mb-20">
                    <p>Annually</p>
                    <img src="/images/toggle-on.png" alt="" />
                    <p>Monthly</p>
                </div>

                <PricingCard />
            </div>
        </div>
    )
}