export default function Footer() {
    return (
        <>
            <div className="flex px-8 py-4 pb-28">
                <div className="w-2/6">
                    <div><strong className="text-primary text-3xl font-bold ">Learnkoods</strong></div>
                    <div className="font-medium text-xl mt-8">Call us</div>
                    <div className="font-medium text-lg text-primary">123 456 7890</div>
                    <div className="footer-text mt-8">
                        <div>
                            329 Queensberry Street, North Melbourne VIC
                        </div>
                        <div>
                            3051, Australia.
                        </div>
                        <div>
                            support@learnkoods.com
                        </div>
                    </div>
                </div>
                <div className="w-4/6 flex justify-between ">
                    <div>
                        <div className="font-medium text-xl mb-8 ">For Candidates</div>
                        <div className="footer-text">
                            <div>
                                Browse Jobs
                            </div>
                            <div>
                                Browse Categories
                            </div>
                            <div>
                                Candidate Dashboard
                            </div>
                            <div>
                                Job Alerts
                            </div>
                            <div>
                                My Bookmarks
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="font-medium text-xl mb-8 ">For Employers</div>
                        <div className="footer-text">
                            <div>
                                Browse Candidates
                            </div>
                            <div>
                                Employer Dashboard
                            </div>
                            <div>
                                Add Job
                            </div>
                            <div>
                                Job Packages
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="font-medium text-xl mb-8 ">About us</div>
                        <div className="footer-text">
                            <div>
                                About us
                            </div>
                            <div>
                                Job Page Invoice
                            </div>
                            <div>
                                Terms Page
                            </div>
                            <div>
                                Blog
                            </div>
                            <div>
                                Contact
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="font-medium text-xl mb-8 ">Helpful Resources</div>
                        <div className="footer-text">
                            <div>
                                Site Map
                            </div>
                            <div>
                                Terms of Use
                            </div>
                            <div>
                                Privacy Center
                            </div>
                            <div>
                                Security Center
                            </div>
                            <div>
                                Accessibility Center
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="footer-bottom flex justify-between px-8 footer-text items-center">
                <div>
                    © 2024 Learnkoods by Epic . All Right Reserved.
                </div>
                <div className="flex gap-5 social-logo">
                    <img  src="/facebook-logo.png" alt="facebook-logo"/>
                    <img  src="/twitter-sign.png" alt="twitter-logo"/>
                    <img  src="/linkedin-logo.png" alt="linkedin-logo"/>
                    <img  src="/instagram.png" alt="instagram-logo"/>

                </div>
            </div>
        </>
    )
}