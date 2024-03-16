import Image from "next/image";

const SectionGuide = () => {
    return (
        <section className="flexCenter flex-col">
            <div className="padding-container max-container w-full pb-24">
                <p className="regular-18 font-bold uppercase mb-3 text-green-50">we are here for you</p>
                <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
                    <h2 className="bold-40 lg:bold-64 xl:max-w-[390px] lg:my-auto">Guide You to Easy Path</h2>
                    <p className="regular-15 text-gray-500 xl:max-w-[520px] lg:my-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum a nemo, voluptate esse harum, perspiciatis asperiores ullam impedit at nesciunt accusantium, debitis ea perferendis amet ad repellendus dolorem beatae sunt!</p>
                </div>
            </div>
            <div className="flexCenter max-container relative w-full">
                <Image
                    src="/assets/img/boat.png"
                    alt="boat"
                    width={1440}
                    height={580}
                    className="w-full object-cover object-center 2xl:rounded-5xl"
                />

                <div className="absolute flex bg-white py-8 ps-5 pe-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
                    <Image
                        src="/assets/img/meter.svg"
                        alt="meter"
                        width={16}
                        height={158}
                        className="h-full w-auto"
                    />

                    <div className="flexBetween flex-col">
                        <div className="flex w-full flex-col">
                            <div className="flexBetween w-full">
                                <p className="regular-16 text-gray-20">Destination</p>
                                <p className="bold-16 text-green-500">5 hours</p>
                            </div>
                            <p className="bold-20 mt-2">Gunung Manglayang</p>
                        </div>

                        <div className="flex w-full flex-col">
                            <p className="regular-16 text-gray-20">Start track</p>
                            <p className="bold-20 mt-2 whitespace-nowrap">Batu Kuda</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionGuide;
