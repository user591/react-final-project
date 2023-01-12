// TODO: answer here
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box , Button , Heading , Image , Text, SimpleGrid ,HStack ,Center} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Detail() {
  const {id} = useParams();
  const [ kartu , setKartu ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  async function fetchKartu() {
    setLoading(true);
    const respone = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?id=' + id);
    const result = await respone.json();
    setKartu(result.data[0]);
    setLoading(false);
    // console.log(result.data);
  };

  useEffect(() => {
    fetchKartu()
  }, []);
  return (
    <Box p='30px'>
      {/* <Heading>{id}</Heading> */}
      <Link to="/"><Button>Back</Button></Link>
      {/* {console.log(kartu?.card_images)} */}
      {loading? (<h1> Loading... </h1>) : (
      <Box w='80%' p='50px'>
        <HStack>
          <Box w='200px' h='400px'>
            <Image src={kartu.card_images[0].image_url}/>
          </Box>
            <Box>
              <Heading as='h2'>
                {kartu.name}
              </Heading>
              
              <Text> 
                Level: {kartu.level}
              </Text>
              <Text>
                {kartu.attribute}
              </Text>
              <Text>
                ATK/{kartu.atk} DEF/{kartu.def}
              </Text>
              <Text>
                [ {kartu.type} / {kartu.race} ]
              </Text>
              <Text>
                {kartu.desc}
              </Text>
            </Box>
        </HStack>
        <Box w='100%'>
          <Center>
            <Text as='b'>
              Card Set
            </Text>
          </Center>
          <br/>

          <SimpleGrid columns='4'>
            {kartu.card_sets.map((item , index) => (
              <Box key={index} >
                <Text>
                  Name: {item.set_name}
                </Text>
                <Text>
                  Code: {item.set_code}
                </Text>
                <Text>
                  Rarity: {item.set_rarity}
                </Text>
                <Text>
                  Price: {item.set_price}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
      )}
    </Box>
  )
} 

export default Detail;
