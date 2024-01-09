import {fetchNewCases, fetchVaccinationAgeDemographics, NewCasesByDate, VaccinationByAge} from "@/api/api";
import {Card} from "antd/lib";
import {Suspense} from "react";
import dynamic from "next/dynamic";
const LineChart = dynamic(() => import('../components/Chart/LineChart'), { ssr: false });
const PieChart = dynamic(() => import('../components/Chart/PieChart'), { ssr: false });


interface ContentProps {
  newCasesByDate: NewCasesByDate[]
  vaccinationAgeDemographics: VaccinationByAge[]
}
export default function Content({newCasesByDate, vaccinationAgeDemographics}:ContentProps) {
  return (
      <content>
        <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: "50%" }}>
          <Suspense fallback={<div>loading</div>}>
            <LineChart
              data={newCasesByDate}
              encode={{
                x: 'date',
                y: 'newCasesByPublishDate',
              }}
            />
          </Suspense>
        </Card>

        <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: "50%" }}>
          <Suspense fallback={<div>loading</div>}>
            <PieChart data={vaccinationAgeDemographics}    encode={{
              color: 'age',
              y: 'vaccinated',
            }}/>
          </Suspense>
        </Card>
      </content>
  )
}

