import JobList from "@/components/JobList";
import Header from "@/components/Layout/Header";
import { useEffect, useState } from "react";
import Footer from "@/components/Layout/Footer";

export default function Home() {
  const [jobs, setJobs] = useState();
  const getJobs = async (page) => {
    try {
      const response = await fetch(`https://learnkoodsapi.onrender.com/jobs_api/?page=${page}`, {
        method: 'GET',
      });
      if (response.ok) {
        const data = await response.json();
        setJobs(data)
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(()=>{
     getJobs(1);
  }, [])


  return (
    <main >
      <Header />
      <JobList jobs={jobs} getJobs={getJobs} />
      <Footer/>
    </main>
  );
}
