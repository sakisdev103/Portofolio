import { createClient } from "contentful";
import { useEffect, useState } from "react";

const SPACE_ID = process.env.REACT_APP_SPACE_ID;
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

const client = createClient({
  space: SPACE_ID,
  environment: "master",
  accessToken: ACCESS_TOKEN,
});

export const useFetchIcons = () => {
  const [icons, setIcons] = useState([]);
  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "skills" });
      const icons = response.items.map((item) => {
        const { img, name } = item.fields;
        const id = item.sys.id;
        const image = img?.fields?.file.url;
        return { id, image, name };
      });
      setIcons(icons.reverse());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { icons };
};
