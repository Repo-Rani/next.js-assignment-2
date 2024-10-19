import { countriesInfo } from "../../../../type/type";
import Button from "@/components/Button";
import Card from "@/components/Card";

const countryName = ({ params }: { params: { country_name: string } }) => {
  const countryDetail: countriesInfo[] = [
    {
      name: "Pakistan",
      population: "231 Million",
      capital: "Islamabad",
    },
    {
      name: "Bangladesh",
      population: "170 Million",
      capital: "Dhaka",
    },
    {
      name: "England",
      population: "56 Million",
      capital: "London",
    },
    {
      name: "Australia",
      population: "26 Million",
      capital: "Canberra",
    },
    {
      name: "China",
      population: "1.4 Billion",
      capital: "Beijing",
    },
  ];

  const findCountry = countryDetail.find(
    (countries) =>
      countries.name.toLowerCase() === params.country_name.toLowerCase()
  );

  if (!findCountry) {
    return (
      <h1 className="text-red-600 text-3xl font-bold">Country Not Found</h1>
    );
  }
  return (
    <>
      <div className="min-h-screen bg-gradient-to-bl from-blue-900 to-purple-900 text-white flex flex-col items-center justify-center py-20 ">
        <h1 className="text-4xl font-bold mb-8 uppercase tracking-wider">
          Countries Information!
        </h1>

        <Card
          name={findCountry.name}
          population={findCountry.population}
          capital={findCountry.capital}
        />

        <div className="mt-8">
          <Button />
        </div>
      </div>
    </>
  );
};

export default countryName;
