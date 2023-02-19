import { Card, Title, Flex, Progress } from "@mantine/core";
type Props = {
  language: string;
  percent: number;
};

const LanguageCard = ({ language, percent }: Props) => {
  return (
    <Card shadow='xl' radius='md' withBorder my={"lg"}>
      <Title order={4} mb='sm'>
        {language}
      </Title>
      <Progress radius='xl' size='xl' value={percent} />
    </Card>
  );
};

export default LanguageCard;
