import axios from "axios";
import { useEffect, useState } from "react";
import { CDN_ASSETS, CDN_ENTRIES } from "../lib/constants";
import Project from "./project";
import Container from "./container";

export default function Projects() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const {
          data: { items: entryData },
        } = await axios(CDN_ENTRIES);
        const {
          data: { items: assetData },
        } = await axios(CDN_ASSETS);

        setEntries(mapAssetToEntry(entryData, assetData));
      } catch (e) {
        throw e;
      }
    };

    getProjects();

  }, []);

  const mapAssetToEntry = (entries, assets) => {
    return entries.map((entry) => {
      const { fields: { cover: { sys: { id } } }} = entry;
      const { fields } = assets.find((asset) => asset.sys.id === id);
      return { ...entry, asset: { ...fields }};
    });
  }


  return (
    <Container>
      <h3 className="mb-8 my-8 text-3xl md:text-3xl font-bold tracking-tighter leading-tight">Projects</h3>
      {entries.length > 0 && entries.map((entry, i) => <Project key={i} entry={entry} />)}
    </Container>
  );
}
