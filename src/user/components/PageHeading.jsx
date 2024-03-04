export default function PageHeading(props) {
  return (
    <>
      <div className="page-heading" id="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-content">
                <h2>
                  {props.pageName ? props.pageName : "Our Latest Products"}
                </h2>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
