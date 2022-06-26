const CardBtn = ({ btnOnClick, color }) => {
  return (
    <button className="btn" onClick={btnOnClick} style={{ color: color }}>
      <i className="bx bx-rotate-right bx-spin "></i>
    </button>
  );
};
export default CardBtn;
