import React from 'react'
import { Book } from '../hooks/useBooks' 
import { Card, CardBody, Heading, Image } from '@chakra-ui/react'

interface bookCardsProps {
    book: Book
}

const BookCard = ({ book }: bookCardsProps) => {
  return (
    <Card borderRadius={10} overflow={'hidden'}>
        <Image src={book.volumeInfo.imageLinks?.thumbnail}/>
        <CardBody>
            <Heading fontSize='2xl'>{book.volumeInfo.title}</Heading>
        </CardBody>
    </Card>
  )
}

export default BookCard