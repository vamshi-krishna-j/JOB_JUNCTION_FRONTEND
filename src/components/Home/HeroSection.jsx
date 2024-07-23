import React from "react";

import { FaBuilding, FaSuitcase, FaUser, FaUserPlus } from "react-icons/fa";

const HeroSection = () => {
    //array of objects
    const details = [
        {
            id: 1,
            title: "1,23,441",
            subTitle: "Live Job",
            icon: <FaSuitcase />,

        },
        {
            id: 2,
            title: "91220",
            subTitle: "Companies",
            icon: <FaBuilding />,
        },
        {
            id: 3,
            title: "2,34,200",
            subTitle: "CareerExplorer",
            icon: <FaUser />,
        },
        {
            id: 4,
            title: "1,03,761",
            subTitle: "Recruiter",
            icon: <FaUserPlus />,
        },
    ];
    return (
        <>
            <div className="heroSection">
                <div className="container">
                    <div className="title">
                        <h1>Find a job that suits your interest and skills</h1>
                        <p>By aligning your career with your passions, you increase your motivation and enjoyment in your work. Additionally, utilizing your skills ensures you can excel and make meaningful contributions. Explore opportunities that match your unique interests and strengths to create a fulfilling and sustainable career path






                        </p>

                    </div>
                    <div className="image">
                        <img src="/heroS.jpg" alt="hero" />
                    </div>
                </div>
                <div className="details">
                    {
                        details.map((element) => {
                            return (
                                <div className="card" key={element.id}>
                                    <div className="icon">{element.icon}</div>
                                    <div className="content">
                                        <p>{element.title}</p>
                                        <p>{element.subTitle}</p>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>

            </div>
        </>
    )
}

export default HeroSection;