import { Inter } from 'next/font/google'
import {fetchNewCases, fetchVaccinationAgeDemographics} from "@/api/api";
import Content from "@/pages/_content";

const inter = Inter({ subsets: ['latin'] })

export default function Home({newCasesByDate, vaccinationAgeDemographics}) {
  return (
    <>
        <header>App title</header>
        <section>Page title</section>
        <Content newCasesByDate={newCasesByDate} vaccinationAgeDemographics={vaccinationAgeDemographics}/>
    </>
  )
}


export const getStaticProps = async () => {
  const [newCasesByDate, vaccinationAgeDemographics] =
    await Promise.all([fetchNewCases(), fetchVaccinationAgeDemographics()])

  return {
    props: {
      newCasesByDate,
      vaccinationAgeDemographics
    },
  };
};