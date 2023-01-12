// TODO: answer here
import { Box , Image , Heading, Center} from "@chakra-ui/react"
import { Link } from "react-router-dom";

function Card({ card }) {
  return (
  <Link to={`/card/${card?.id}`}>
    <Box className="yugioh-card">
      <Image src={card?.card_images[0].image_url}/>
      <Center>
        <Heading fontSize='20px' as='h2'>
          {card?.name}
        </Heading>
      </Center>
      <br/>
    </Box>
  </Link>
  
  ) 
}

export default Card;
