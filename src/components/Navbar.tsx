import { HStack, Image } from '@chakra-ui/react'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'
import { MdMenuBook } from "react-icons/md";

interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
   <HStack padding='10px'>
    <MdMenuBook size={75}/>
    <SearchInput onSearch={onSearch}/>
    <ColorModeSwitch /> 
   </HStack>
  )
}

export default Navbar