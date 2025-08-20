import { getImageUrl } from './components/UI/Utils.tsx'

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
  );
}

interface Person {
    name: string;
    imageId: string;
}
interface AvatarProps {
    person: Person;
    size: number;
}
function Avatar({ person, size }: AvatarProps) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

interface CardProps {
    children: React.ReactNode;
}

function Card({ children }: CardProps) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

