import React from "react";

const RepoPrincipalComponent = () => {
  return (
    <div className="tw-relative tw-bg-cover tw-w-full tw-h-full tw-py-12 tw-px-20">
      <div className="tw-w-full tw-h-full tw-flex tw-justify-center tw-items-start tw-mt-[5%]">
        <div className="tw-grid tw-grid-cols-3 tw-gap-5 tw-w-[70%]">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="card">
              <div className="card-body">
                <h4 className="card-title">Ofcio N°</h4>
                <p className="card-text">Text</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Item 1</li>
                <li className="list-group-item">Item 2</li>
                <li className="list-group-item">Item 3</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RepoPrincipalComponent;
