import Image from "next/image";
import ItemFeature from "./ItemFeature";
import { FaCalendar, FaLaptopCode, FaMap } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import styles from "./SectionFeatures.module.css";

const SectionFeatures = () => {
    const features = [
        {
            title: 'Real maps can be offline',
            icon: <FaMap />,
            description:
                'We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location',
        },
        {
            title: 'Set an adventure schedule',
            icon: <FaCalendar />,
            description:
                "Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion",
        },
        {
            title: 'Technology using augment reality',
            icon: <FaLaptopCode />,
            description:
                'Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection',
        },
        {
            title: 'Many new locations every month',
            icon: <FaMapMarkerAlt />,
            description:
                'Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing',
        }
    ];


    return (
        <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
            <div className="flex max-container padding-container relative w-full justify-end">
                <div className="flex flex-1 lg:min-h-[900px]">
                    <Image
                        src="/assets/img/phone.png"
                        alt="Phone"
                        width={440}
                        height={1000}
                        className={styles.feature_phone}
                    />
                </div>

                <div className="z-20 flex w-full flex-col lg:w-[60%]">
                    <h2 className="bold-40 lg:bold-64">Our Features</h2>
                    <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mt-20 lg:gap-20 ">
                        {features.map((feature, index) => {
                            return (
                                <ItemFeature
                                    key={index}
                                    icon={feature.icon}
                                    title={feature.title}
                                    description={feature.description}
                                />
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default SectionFeatures;
