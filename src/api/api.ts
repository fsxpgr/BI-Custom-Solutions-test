export interface VaccinationByAge {
  age: string,
  vaccinated: number
}

export interface NewCasesByDate {
  date: string,
  newCasesByPublishDate: number
}

const baseUrl = 'https://api.coronavirus.data.gov.uk/v1/data'
const baseFilter = 'filters=areaType=nation;areaName=england'

export const fetchNewCases = async ():Promise<NewCasesByDate[]> => {
  const res = await fetch(`${baseUrl}?${baseFilter}&structure={"date":"date", "newCasesByPublishDate":"newCasesByPublishDate"}`);
  const data = await res.json();
  return (data.data as NewCasesByDate[])
    .filter(it=>!!it.newCasesByPublishDate)
}


export const fetchVaccinationAgeDemographics = async ():Promise<VaccinationByAge[]> => {
  const res = await fetch(`${baseUrl}?${baseFilter}&structure={"date":"date", "vaccinated":"vaccinationsAgeDemographics"}`);
  const data = await res.json();

  return (data.data[0].vaccinationsAgeDemographics as VaccinationByAge[])
    .filter(it=>!it?.age?.includes("+"))
    .map((it)=>({
        age:it.age,
        vaccinated: it.vaccinated as number
    }))
}