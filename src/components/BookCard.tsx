import React from 'react';
import { Book } from '../hooks/useBooks';
import { Card, CardBody, Heading, Image, Text, Stack } from '@chakra-ui/react';
import ExpandableText from './ExpandableText';

interface bookCardsProps {
  book: Book;
}

const BookCard = ({ book }: bookCardsProps) => {
  return (
    <Card
      borderRadius={10}
      overflow={'hidden'}
      boxShadow="md"
      _hover={{ boxShadow: "lg" }}
      transition="box-shadow 0.2s"
      m={2}
    >
      <Image src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
      <CardBody>
        <Stack spacing={2}>
          <Heading fontSize='xl'>{book.volumeInfo.title}</Heading>
          {book.volumeInfo.authors?.map((author, index) => (
            <Text key={index} fontSize="sm" color="gray.600">{author}</Text>
          ))}
          <Text fontSize="sm" color="gray.600">{book.volumeInfo.publishedDate}</Text>
          <Text fontSize="sm" color="gray.600">{book.volumeInfo.categories?.join(', ')}</Text>
          <Text fontSize="sm" color="gray.600">{book.volumeInfo.pageCount} pages</Text>
          <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer" style={{ color: "blue", textDecoration: "underline" }}>
            More info
          </a>
          <ExpandableText maxChars={20}>{book.searchInfo?.textSnippet || ''}</ExpandableText>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default BookCard;