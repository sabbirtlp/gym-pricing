import Option from "../PricingOption/Option";

const PriceOptions = () => {
    const gymPricingOptions = [
        {
            id: 1,
            name: "Basic Plan",
            price: "$20/month",
            duration: "1 Month",
            features: ["Access to gym equipment", "Locker room access", "Free parking"]
        },
        {
            id: 2,
            name: "Standard Plan",
            price: "$50/3 months",
            duration: "3 Months",
            features: ["Access to gym equipment", "Locker room access", "Free parking", "1 Personal Training Session"]
        },
        {
            id: 3,
            name: "Premium Plan",
            price: "$90/6 months",
            duration: "6 Months",
            features: ["Access to gym equipment", "Locker room access", "Free parking", "Weekly Personal Training Sessions", "Access to group fitness classes"]
        },
        {
            id: 4,
            name: "Annual Plan",
            price: "$150/year",
            duration: "12 Months",
            features: ["Access to gym equipment", "Locker room access", "Free parking", "Weekly Personal Training Sessions", "Unlimited group fitness classes", "Nutrition Consultation"]
        },
        {
            id: 5,
            name: "Day Pass",
            price: "$10/day",
            duration: "1 Day",
            features: ["Access to gym equipment", "Locker room access"]
        }
    ];

    return (
        <div className="grid md:grid-cols-3 container mx-auto gap-5 py-10 px-8 md:px-2">
            {
                gymPricingOptions.map(option => <Option option={option} key={option.id}></Option>)
            }
        </div>
    );
};

export default PriceOptions;