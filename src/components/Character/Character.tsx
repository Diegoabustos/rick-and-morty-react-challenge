export type CharacterType = {
  key: number;
  name: string;
  image: string;
};

const Character: React.FC<CharacterType> = ({ name, image }) => {
  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name} />
    </div>
  );
};

export default Character;
