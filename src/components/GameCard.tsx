import { Game } from '../hooks/useGames';
import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react';

interface Props {
    game: Game;
}

const GameCard = ({game} : Props) => {
  return (
    <Card borderRadius={10} overflow='hidden'>
        <Image src={game.background_image}/>
        <CardBody>
            <Heading fontSize='2xl'>{game.name}</Heading>
             {game.parent_platforms.map(({platform}) => <Text>{platform.name}</Text>)} {/*we need to distract the platform */}
        </CardBody>
    </Card>
  )
}

export default GameCard