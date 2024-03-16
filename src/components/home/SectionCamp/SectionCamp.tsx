import Image from "next/image";
import CampSite from "../CampSite/CampSite";
import styles from "./SectionCamp.module.css";

const SectionCamp = () => {
    return (
        <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
            <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px] lg:ps-[80px] 2xl:ps-[0px] lg:pe-[80px] 2xl:pe-[0px]">
                <CampSite
                    backgroundImage="/assets/img/img-1.png"
                    title="Lorem Ipsum"
                    subtitle="lorem ipsum dolor sit amet"
                    peopleJoined="230"
                />
                <CampSite
                    backgroundImage="/assets/img/img-2.png"
                    title="Lorem Ipsum"
                    subtitle="lorem ipsum dolor sit amet"
                    peopleJoined="230"
                />
            </div>

            <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
                <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
                    <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
                        <strong>Feeling Lost</strong> and not knowing the way?
                    </h2>
                    <p className="regular-14 lg:regular-16 text-white mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore possimus quos temporibus consequuntur ut reiciendis quibusdam cupiditate molestiae dolorum officia labore facere sint laborum vitae, eum est itaque, accusantium quaerat.</p>
                    <Image
                        src="/assets/img/quote.svg"
                        className={styles.camp_quote}
                        height={186}
                        width={219}
                        alt="Camp Quote"
                    />
                </div>
            </div>
        </section>
    );
};

export default SectionCamp;
