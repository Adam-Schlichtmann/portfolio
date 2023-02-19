import {
  Card,
  Text,
  Group,
  Flex,
  Badge,
  List,
  ThemeIcon,
  Grid,
} from "@mantine/core";
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
          <Flex direction='row' justify='space-between'>
            <Text weight={700}>{title}</Text>
            <Text weight={500}>{`${start} - ${end}`}</Text>
          </Flex>
          <Text weight={600}>{company}</Text>
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
        <Flex gap='md'>
          <Text weight={500}>Skills</Text>
          {badges.map((badge) => (
            <Badge variant='filled' key={badge}>
              {badge}
            </Badge>
          ))}
        </Flex>
      </Flex>
    </Card>
  );
};

export default WorkExperience;
