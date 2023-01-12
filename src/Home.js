// TODO: answer here
import { useEffect, useState } from "react";
import { Box , Select , SimpleGrid , Center} from "@chakra-ui/react"
import Card from "./Cards";

function Home() {
  // TODO: answer here
  const [ isi , setIsi ] = useState([]);
  const [ loading , setLoading ] = useState(true);

  async function getData() {
    setLoading(true);
    const result = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?banlist=tcg&level=4');
    const respone = await result.json();
    setIsi(respone.data);
    // console.log(respone.data.card_images[0].image_url);
    // console.log(isi);
    setLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  function sortData(type) {
    // TODO: answer here
    if ( type === "attack") {
      const attackSort = [...isi].sort((a, b) => a.atk - b.atk);
      // console.log(attackSort);
      setIsi(attackSort);
    }

    if ( type === "name") {
      const nameSort= [...isi].sort((a, b) => a.name.localeCompare(b.name));
      setIsi(nameSort);
      console.log(nameSort);
    }

    if (type === "defence") {
    const defenceSort = [...isi].sort((a, b) => a.def - b.def);
    // console.log(defenceSort);
    setIsi(defenceSort);
    }
  }
  return (
  <Center>
    <Box w='80%' p='50px'>
      {loading && <h1> Loading... </h1> }
      <Select onClick={(e) => sortData(e.target.value)} name="sort" placeholder="Sort By">
        <option value="name">Name</option>
        <option value="attack">Attack</option>
        <option value="defence">Defence</option>
      </Select>
      <br/>
      
      <SimpleGrid columns='4'>
        {
        isi.map((item) => (
          <Card key={item.id} card={item}/>
        ))
      }
      </SimpleGrid>
    </Box>
  // </Center>
  ) 
}

export default Home;
