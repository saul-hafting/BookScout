import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import { FaBook } from "react-icons/fa";

const Navbar = () => {
  return (
   <HStack justifyContent='space-between' padding='10px'>
    {/* <Image src={logo} boxSize='60px'/>
     */}
     <FaBook size='50px'/>
    <ColorModeSwitch /> 
   </HStack>
  )
}

export default Navbar