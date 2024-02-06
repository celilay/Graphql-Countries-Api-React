import { useQuery } from "@apollo/client";
import { GET_COUNTRY } from "./query";
import { useState } from "react";

const Country = ({ inputValue }) => {
  const { loading, error, data } = useQuery(GET_COUNTRY);

  const [clicked, setClicked] = useState(null);

  const clickCard = (index) => {
    setClicked(index);
  };

  if (loading) return `Loading...`;
  if (error) return `Error: {error.message}`;

  const filteredData = data?.countries?.filter((country) =>
    country.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className="cardContainer">
      {filteredData?.map((cont, i) => (
        <div
          className={`card ${clicked === i ? "clicked" : ""}`}
          key={i}
          onClick={() => clickCard(i)}
        >
          <p>
            <b>Country:</b>
            {cont.name}
          </p>
          <p>
            <b>Capital:</b>
            {cont.capital}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Country;