import { HStack, Image, List, ListItem, Spinner, Button } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {

    const {data, isLoading, error} = useGenres();

    if(error) return null;

    if(isLoading) return <Spinner />

  return (
    <List>
        {data.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
              <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
            <Button onClick={() => console.log(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
          </HStack>
        </ListItem>
        ))}
    </List>
  )
}

export default GenreList