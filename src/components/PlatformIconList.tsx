import { Platform } from '../hooks/useGames'
import { HStack, Icon } from '@chakra-ui/react'
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
import { IconType } from 'react-icons'


interface Props {
    platforms: Platform[],
}

const PlatformIconList = ({platforms}: Props) => {

    const iconMap: {[key: string]: IconType }= { // index signature that represent a key or a property in this object, and each key is mapped with a value of type IconType
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        android: FaAndroid,
        web: BsGlobe
    }

  return (
    <HStack marginY={'10px'}>
        {platforms.map((platform) => <Icon as={iconMap[platform.slug]} color='gray.400' />)}
    </HStack>
  )
}

export default PlatformIconList