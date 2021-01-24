import linkPicture from "../asset/img/logo.svg.png";
const Bandeau = () => {
  return (
    <>
      <div className="bandeau">
        <div className="bandeauCenter">
          <img className="logo" src={linkPicture} alt="Logo"></img>
        </div>
      </div>
    </>
  );
};

export default Bandeau;
