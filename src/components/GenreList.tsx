import { HStack, Image, List, ListItem, Spinner, Button } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import { Genre } from "../hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({onSelectGenre, selectedGenre}: Props) => {

    const {data, isLoading, error} = useGenres();

    if(error) return null;

    if(isLoading) return <Spinner />

  return (
    <List>
        {data.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
              <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
            <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
          </HStack>
        </ListItem>
        ))}
    </List>
  )
}

export default GenreList