import { Card, Text, Flex, Title, ActionIcon, Badge } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandGooglePlay,
  IconBrandAppstore,
} from "@tabler/icons";

import { Project } from "../data";

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <Card shadow='xl' radius='md' withBorder my={16}>
      <Flex direction='column' gap='md'>
        <Flex direction='row' align='center' justify='space-between'>
          <Title order={3}>{project.name}</Title>
          <Flex gap='sm'>
            {project.appstore && (
              <ActionIcon component='a' href={project.appstore} target='_blank'>
                <IconBrandAppstore />
              </ActionIcon>
            )}
            {project.googlePlayStore && (
              <ActionIcon
                component='a'
                href={project.googlePlayStore}
                target='_blank'
              >
                <IconBrandGooglePlay />
              </ActionIcon>
            )}
            {project.github && (
              <ActionIcon component='a' href={project.github} target='_blank'>
                <IconBrandGithub />
              </ActionIcon>
            )}
          </Flex>
        </Flex>
        <Text>{project.description}</Text>
        <Flex gap='xs'>
          {project.badges.map((badge) => (
            <Badge variant='filled' key={badge}>
              {badge}
            </Badge>
          ))}
        </Flex>
      </Flex>
    </Card>
  );
};

export default ProjectCard;
