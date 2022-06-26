const CardContent = ({
  directionCity,
  directionState,
  country,
  postCode,
  email,
  phone,
}) => {
  return (
    <div className="card__info-user ">
      <h3 className="direction">
        <i className="bx bx-map-pin bx-tada-hover"></i>
        {directionCity}
        <span>{directionState}.</span>
      </h3>
      <h3 className="country">
        <i className="bx bxs-map bx-tada-hover"></i>
        {country}.
      </h3>
      <h3 className="postcode">
        <i className="bx bx-id-card bx-tada-hover"></i>
        {postCode}.
      </h3>
      <h3 className="email">
        <i className="bx bx-envelope bx-tada-hover"></i>
        {email}.
      </h3>
      <h3 className="phone">
        <i className="bx bx-phone bx-tada-hover"></i>
        {phone}.
      </h3>
    </div>
  );
};
export default CardContent;
