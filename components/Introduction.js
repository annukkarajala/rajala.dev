export default function Introduction({ svg, firstRow, secondRow, className }) {
  return (
    <div className={`introduction`}>
      <span className={className}>{svg}</span>
      <p>
        {firstRow}
        <br />
        {secondRow}
      </p>
    </div>
  );
}
