const CardTitle = ({ userName }) => {
  return (
    <h2 className="name">
      <i className="bx bxs-user bx-tada-hover"></i>
      {userName}
    </h2>
  );
};
export default CardTitle;
