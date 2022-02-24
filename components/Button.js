export default function Button({ name ,color ,fontSize}) {
  return (
    <>
      <button style={{color: color,fontSize: fontSize}}>{name}</button>
    </>
  );
}
