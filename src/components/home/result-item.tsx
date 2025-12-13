interface ResultItemProps {
  value: string;
  description: string;
}

const ResultItem = ({ value, description }: ResultItemProps) => {
  return (
    <div className="flex flex-col gap-2 items-start">
      <h1 className="text-[40px] font-semibold">
        {value} <span className="text-primary-green">+</span>
      </h1>
      <p className="text-lg">
        {description.split('\n').map((line, idx) => (
          <span key={idx}>
            {line}
            {idx < description.split('\n').length - 1 && <br />}
          </span>
        ))}
      </p>
    </div>
  );
};

export default ResultItem;
