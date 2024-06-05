import React from "react";

const RepoPrincipalComponent = () => {
  return (
    <div className="tw-relative tw-bg-cover tw-w-full tw-h-full tw-py-12 tw-px-20">
      <div className="tw-w-full tw-h-full tw-flex tw-justify-center tw-items-start tw-mt-[5%]">
        <div className="tw-grid tw-grid-cols-3 tw-gap-5 tw-w-[70%]">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="card tw-bg-[#ead6b9]">
              <div className="card-body tw-bg-[#ead6b9]">
                <h4 className="card-title tw-bg-[#ead6b9]">Ofcio N°</h4>
                <p className="card-text tw-bg-[#ead6b9]">Text</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item tw-bg-[#ead6b9]">Item 1</li>
                <li className="list-group-item tw-bg-[#ead6b9]">Item 2</li>
                <li className="list-group-item tw-bg-[#ead6b9]">Item 3</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RepoPrincipalComponent;
