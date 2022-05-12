import { Card, Button, Heading } from '@castoredc/matter';

const MatterCard = () => {
  return (
    <Card title="User profile" headerActions={<Button>Edit</Button>}>
      <Heading>Homer J Simpson</Heading>
      <p>
        742 Evergreen Terrace
        <br />
        Springfield
        <br />
        USA
      </p>
    </Card>
  );
};

export default MatterCard;
