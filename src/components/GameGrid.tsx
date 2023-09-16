import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { GameQuery } from '../App';

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({gameQuery}: Props) => {

    const { data, error, isLoading } = useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
        {error && <Text>{error}</Text>}
        <SimpleGrid columns={{sm: 1, md: 2, lg: 3}} padding={10} spacing={3}>

          {isLoading && skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
             <GameCardSkeleton  />
          </GameCardContainer>
            ))}
            {data.map((game) => (
            <GameCardContainer>
              <GameCard key={game.id} game={game} />
            </GameCardContainer>
            ))}
          </SimpleGrid>
    </>
  )
}

export default GameGrid