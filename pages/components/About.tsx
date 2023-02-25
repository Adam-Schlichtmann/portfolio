import { Card, Text, Flex, Badge, Title, ActionIcon } from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandGithub,
  IconBrandReddit,
  IconWorldWww,
} from "@tabler/icons";
import { ForwardedRef, forwardRef } from "react";
import { About } from "../data/about";

type Props = {
  me: About;
};

const About = ({ me }: Props, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <Card shadow='xl' radius='lg' withBorder my={"lg"} ref={ref}>
      <Flex direction='column' gap='md'>
        <Flex direction='column' gap='xs'>
          <Flex direction='row' justify='space-between'>
            <Title order={1}>{me.name}</Title>
            <Flex direction='row' gap='sm' justify='center' align='center'>
              {me.socials.facebook && (
                <ActionIcon
                  component='a'
                  href={me.socials.facebook}
                  target='_blank'
                >
                  <IconBrandFacebook />
                </ActionIcon>
              )}
              {me.socials.instagram && (
                <ActionIcon
                  component='a'
                  href={me.socials.instagram}
                  target='_blank'
                >
                  <IconBrandInstagram />
                </ActionIcon>
              )}
              {me.socials.twitter && (
                <ActionIcon
                  component='a'
                  href={me.socials.twitter}
                  target='_blank'
                >
                  <IconBrandTwitter />
                </ActionIcon>
              )}
              {me.socials.github && (
                <ActionIcon
                  component='a'
                  href={me.socials.github}
                  target='_blank'
                >
                  <IconBrandGithub />
                </ActionIcon>
              )}
              {me.socials.reddit && (
                <ActionIcon
                  component='a'
                  href={me.socials.reddit}
                  target='_blank'
                >
                  <IconBrandReddit />
                </ActionIcon>
              )}
              {me.socials.myWebsite && (
                <ActionIcon
                  component='a'
                  href={me.socials.myWebsite}
                  target='_blank'
                >
                  <IconWorldWww />
                </ActionIcon>
              )}
            </Flex>
          </Flex>
          <Title order={4}>{me.location}</Title>
        </Flex>
        <Flex direction='column' gap='xs'>
          <Title order={4}>About Me</Title>
          <Text>{me.description}</Text>
        </Flex>
        <Flex direction='column' gap='sm'>
          <Title order={4}>Hobbies</Title>
          <Flex direction='row' gap='sm'>
            {me.hobbies.map((hobby) => (
              <Badge variant='filled' key={hobby}>
                {hobby}
              </Badge>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
};

export default forwardRef(About);
