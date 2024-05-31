import React from "react";

const RepoPrincipalComponent = () => {
  return (
    <div className="tw-relative tw-bg-cover tw-w-full tw-h-full tw-py-12 tw-px-20">
      <div className="tw-w-full tw-h-full tw-flex tw-justify-center tw-items-start tw-mt-[5%]">
        <div className="tw-grid tw-grid-cols-3 tw-gap-5 tw-w-[70%]">
          {Array.from({ length: 6 }).map((_, index) => (
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Ofcio N°</h4>
                <p class="card-text">Text</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Item 1</li>
                <li class="list-group-item">Item 2</li>
                <li class="list-group-item">Item 3</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RepoPrincipalComponent;
