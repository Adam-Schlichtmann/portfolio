import { Card, Title, Progress } from "@mantine/core";

import { Skill } from "../data";

type Props = {
  skill: Skill;
};

const SkillCard = ({ skill }: Props) => {
  return (
    <Card shadow='xl' radius='md' withBorder my='xs'>
      <Title order={4} mb='sm'>
        {skill.name}
      </Title>
      <Progress radius='xl' size='xl' value={skill.confidence} />
    </Card>
  );
};

export default SkillCard;
