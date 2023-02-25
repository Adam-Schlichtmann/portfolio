import { Card, Text, Flex, Title } from "@mantine/core";

import { School } from "../data/school";

type Props = {
  school: School;
};

const SchoolCard = ({ school }: Props) => {
  return (
    <Card shadow='xl' radius='md' withBorder my='xs'>
      <Flex direction='column' gap='sm'>
        <Flex direction='row' align='center' justify='space-between'>
          <Title order={3}>{school.degree}</Title>
          <Text weight={500}>{`${school.start} - ${school.end}`}</Text>
        </Flex>
        <Title order={4}>{school.school}</Title>
      </Flex>
    </Card>
  );
};

export default SchoolCard;
