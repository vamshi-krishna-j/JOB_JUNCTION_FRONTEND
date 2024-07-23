import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
    return (
        <>
            <div className="howitworks">
                <div className="container">
                    <h3> How JobJunction Works</h3>
                    <div className="banner">
                        <div className="card">
                            <FaUserPlus />
                            <p>Create Account</p>
                            <p>Create a standout JobJunction account to enhance your professional presence and connect with key opportunities</p>
                        </div>
                        <div className="card">
                            <MdFindInPage />
                            <p>Find a Job / Post A Job</p>
                            <p>Unlock your career potential with Job Junction! Carrer Explorer can find their dream job by exploring hundred of job listings tailored to their skills and interests.For Recruiters, Job Junction offers a powerful platform to post jobs and find top talent.</p>
                        </div>
                        <div className="card">
                            <IoMdSend />
                            <p>Apply For Job/Recruit Suitable Candidates</p>
                            <p>Career Explorer can easily apply for their desired roles with just a few clicks, showcasing their skills and experience directly to potential employers. Recruiters can efficiently find and hire the best candidates using advanced search filters, detailed job postings, and applicant tracking tools.</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};


export default HowItWorks;