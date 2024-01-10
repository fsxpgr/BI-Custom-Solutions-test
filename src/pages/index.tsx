import { Inter } from 'next/font/google'
import {fetchNewCases, fetchVaccinationAgeDemographics, NewCasesByDate, VaccinationByAge} from "@/api/api";
import {Layout } from "antd/lib";
import ChartsContent from "@/pages/ChartsContent";

const inter = Inter({ subsets: ['latin'] })
const { Header, Footer,Content } = Layout;

interface HomeProps {
  newCasesByDate: NewCasesByDate[]
  vaccinationAgeDemographics: VaccinationByAge[]
}
export default function Home({newCasesByDate, vaccinationAgeDemographics}:HomeProps) {
  return (
      <Layout style={{minHeight:"100vh"}}>
        <Header style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <h3>Coronavirus stats</h3>
        </Header>
        <Content style={{  margin: "0 10vw" }}>
          <ChartsContent newCasesByDate={newCasesByDate} vaccinationAgeDemographics={vaccinationAgeDemographics}/>
        </Content>
        <Footer style={{background:'white', marginTop:10,textAlign:'end'}}>by Oleksii Boiko, <a href={'mailto:olexiy.bojko@gmail.com'}>olexiy.bojko@gmail.com</a></Footer>
      </Layout>
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