type ItemFeatureProps = {
    title: string;
    icon?: any;
    description: string;
};

const ItemFeature = ({ icon, title, description }: ItemFeatureProps) => {
    return (
        <li className="flex flex-1 w-full flex-col items-start">
            <div className="rounded-full p-3 lg:p-5 bg-green-50 text-white text-xl">
                {icon}
            </div>
            <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
            <p className="regular-16 mt-4 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
                {description}
            </p>
        </li>
    );
};

export default ItemFeature;
