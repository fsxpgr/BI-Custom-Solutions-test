import { NewCasesByDate, VaccinationByAge} from "@/api/api";
import {Card, Button, Flex, Divider, Avatar} from "antd/lib";
import {
  DownloadOutlined,
  AlignLeftOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import PieChart from "@/components/Chart/PieChart";
import LineChart from "@/components/Chart/LineChart";
import ChartCard from "@/components/Card/ChartCard";


interface ContentProps {
  newCasesByDate: NewCasesByDate[]
  vaccinationAgeDemographics: VaccinationByAge[]
}

/*    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    gap: 8px;*/
export default function ChartsContent({newCasesByDate, vaccinationAgeDemographics}:ContentProps) {
  return (
      <>
        <Flex align={"center"} justify={'space-between'}>
          <p>Coronavirus spread and vaccination stats</p>
          <Flex gap={10} align={"center"} style={{padding: '10px 0'}}>
            <Button type="text" icon={<DownloadOutlined />}   style={{background:'#fff'}}>
              Export to PDF
            </Button>

            <Button type="text" icon={<AlignLeftOutlined />}  style={{background:'#fff'}}>
              Notes
            </Button>

            <Button type="text" icon={<FilterOutlined />}   style={{background:'#fff'}}>
              Filter
            </Button>
          </Flex>
        </Flex>

        <Flex gap={20} justify={"space-between"}>
          <ChartCard title="New Cases of coronavirus" likeCount={3} isLiked={false} avatar={'https://api.dicebear.com/7.x/miniavs/svg?seed=1'}>
            <LineChart
              data={newCasesByDate}
              encode={{
                x: 'date',
                y: 'newCasesByPublishDate',
              }}
            />
          </ChartCard>

          <ChartCard title="Vaccination age breakdown" likeCount={15} isLiked={true} avatar={'https://api.dicebear.com/7.x/miniavs/svg?seed=3'}>
            <PieChart
              data={vaccinationAgeDemographics}
              encode={{
                color: 'age',
                y: 'vaccinated',
              }}
            />
          </ChartCard>
        </Flex>
      </>
  )
}

