import { Card, Text, Flex, Badge, List, ThemeIcon, Title } from "@mantine/core";
import { IconCheck } from "@tabler/icons";

type Props = {
  company: string;
  title: string;
  start: string;
  end: string;
  description: string[];
  badges: string[];
};

const WorkExperience = ({
  company,
  title,
  start,
  end,
  description,
  badges,
}: Props) => {
  return (
    <Card shadow='xl' radius='lg' withBorder my={"lg"}>
      <Flex direction='column' gap='xl'>
        <Flex direction='column' gap='xs'>
          <Flex direction='row' justify='space-between' align='center'>
            <Title order={3}>{title}</Title>
            <Title order={4}>{`${start} - ${end}`}</Title>
          </Flex>
          <Title order={4}>{company}</Title>
        </Flex>
        <List
          spacing='xs'
          size='sm'
          center
          icon={
            <ThemeIcon size='sm' variant='outline' radius='xl'>
              <IconCheck size='20' />
            </ThemeIcon>
          }
        >
          {description.map((item) => (
            <List.Item key={item}>{item}</List.Item>
          ))}
        </List>
        <Flex direction='column' gap='md'>
          <Text weight={500}>Skills</Text>
          <Flex gap='md' wrap='wrap'>
            {badges.map((badge) => (
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

export default WorkExperience;
