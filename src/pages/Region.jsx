import { useEffect, useState } from "react";

function Region() {
  const [selectedRegions, setSelectedRegions] = useState([]);

  const handleClickTheme = (name) => {
    const searchSelectRegion = selectedRegions.find((e) => e.region === name);
    if (searchSelectRegion !== undefined) {
      setSelectedRegions((prevState) => [
        ...prevState.filter((theme) => theme.region !== name),
      ]);
      return;
    }
    setSelectedRegions((prevState) => [...prevState, { region: name }]);
  };

  useEffect(() => {
    console.info("selectedRegions", selectedRegions);
  }, [selectedRegions]);

  return (
    <div>
      <button
        type="button"
        onClick={() => handleClickTheme("Europe")}
        // color (class name)
        // className={
        //   selectedRegions.find((name) => name.region === "europe") !== undefined
        // }
        // className={
        //     selectedRegions.find((name) => name.region === "europe") !== undefined
        //   }
      >
        Europe
      </button>
      <button
        type="button"
        onClick={() => handleClickTheme("Asia")}
        // color (class name)
        // buttonState={
        //   selectedThemes.find((name) => name.apiName === "cocktail") !==
        //   undefined
        // }
      >
        Asia
      </button>
      <button
        type="button"
        onClick={() => handleClickTheme("Oceania")}
        // color (class name)
        // buttonState={
        //   selectedThemes.find((name) => name.apiName === "cocktail") !==
        //   undefined
        // }
      >
        Oceania
      </button>
      <button
        type="button"
        onClick={() => handleClickTheme("Africa")}
        // color (class name)
        // buttonState={
        //   selectedThemes.find((name) => name.apiName === "cocktail") !==
        //   undefined
        // }
      >
        Africa
      </button>
      <button
        type="button"
        onClick={() => handleClickTheme("America")}
        // color (class name)
        // buttonState={
        //   selectedThemes.find((name) => name.apiName === "cocktail") !==
        //   undefined
        // }
      >
        America
      </button>
      <p>Sélection : </p>
      {selectedRegions.map((region) => {
        // console.info("region", region);
        return <h1 key={region.region}> {region.region}</h1>;
      })}
    </div>
  );
}

export default Region;
