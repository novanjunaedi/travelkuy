import { FaMap, FaUsers } from "react-icons/fa6";

type CampSiteProps = {
    backgroundImage: string;
    title: string;
    subtitle: string;
    peopleJoined: string;
};

const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: CampSiteProps) => {
    return (
        <div className="h-full w-full min-w-[1100px] bg-cover bg-no-repeat lg:rounded-5xl 2xl:rounded-5xl" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="h-full flex flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
                <div className="flexCenter gap-4">
                    <div className="rounded-full bg-green-50 p-4">
                        <FaMap color="#fff" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="bold-20 text-white">{title}</h4>
                        <p className="regular-16 text-gray-10">{subtitle}</p>
                    </div>
                </div>

                <div className="flexCenter gap-6">
                    <span className="flex -space-x-4 overflow-hidden">
                        <FaUsers size="45px" className="text-white mb-1" />
                    </span>
                    <p className="text-white bold-16 md:bold-20">{peopleJoined}+ <span className="regular-16">Joined</span></p>
                </div>
            </div>
        </div>
    );
};

export default CampSite;
