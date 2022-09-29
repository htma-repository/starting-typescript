interface CountProps {
  count: number;
  countHandler: (event: React.MouseEvent) => void;
}

const Count: React.FC<CountProps> = ({ count, countHandler }) => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: "1rem",
      }}
    >
      <span>{count}</span>
      <button onClick={countHandler}>+1</button>
    </section>
  );
};

export default Count;
