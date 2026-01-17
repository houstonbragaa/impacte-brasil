type TitleType = {
  text: string
  color: TitleColor
}

type TitleColor = "text-white" | ""

const Title = ({text, color }: TitleType) => {
  return (
    <h1 className={`${color} md:text-4xl text-2xl font-semibold`}>
      {text}
    </h1>
  );
};

export default Title;
