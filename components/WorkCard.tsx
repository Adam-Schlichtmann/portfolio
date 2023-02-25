import { Card, Text, Flex, Badge, List, Title } from "@mantine/core";
import { IconMinus } from "@tabler/icons";

import { Work } from "../data";

type Props = {
  work: Work;
};

const WorkCard = ({ work }: Props) => {
  return (
    <Card shadow='xl' radius='lg' withBorder my='xs'>
      <Flex direction='column' gap='xl'>
        <Flex direction='column' gap='xs'>
          <Flex direction='row' justify='space-between' align='center'>
            <Title order={3}>{work.title}</Title>
            <Title order={4}>{`${work.startDate} - ${work.endDate}`}</Title>
          </Flex>
          <Title order={4}>{work.company}</Title>
        </Flex>
        <List spacing='xs' size='sm' center icon={<IconMinus size='20' />}>
          {work.description.map((item) => (
            <List.Item key={item}>{item}</List.Item>
          ))}
        </List>
        <Flex direction='column' gap='md'>
          <Text weight={500}>Skills</Text>
          <Flex gap='md' wrap='wrap'>
            {work.badges.map((badge) => (
              <Badge variant='filled' key={badge}>
                {badge}
              </Badge>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
};

export default WorkCard;
