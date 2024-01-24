
const list = [{ "tab": "Home" }, { "tab": "Find Jobs" }, { "tab": "Employers" }, { "tab": "Candidates" }, { "tab": "Blog" }, { "tab": "About Us" }]

export default function Header() {
    return (
        <div className="flex justify-between px-14 py-4 items-center">
            <div>
                <strong className="text-primary text-3xl font-bold ">Learnkoods</strong>
            </div>
            <div className="flex justify-between gap-8 tab-list">
                {list?.map((val, index) => {
                    return (<div key={index}>
                        {val?.tab}
                    </div>)
                })}
            </div>
            <div className="flex justify-between gap-5 items-center">
                <div className="text-primary">Upload your CV</div>
                <div className="btn bg-secondary text-primary">Login / Register</div>
                <div className="btn bg-primary text-white">Job Post</div>
            </div>
        </div>
    )
}