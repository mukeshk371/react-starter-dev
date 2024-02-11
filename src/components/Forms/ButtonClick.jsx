import React from 'react';

function Button({ onClick, children }) {
  return (
    <button className="btn btn-primary mr-2" onClick={e => {
      e.stopPropagation();
      onClick();
    }}>
      {children}
    </button>
  );
}

export default function ButtonClick() {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-info text-white">Toolbar</div>
            <div className="card-body d-flex justify-content-around" onClick={() => {
              alert('You clicked on the toolbar!');
            }}>
              <Button onClick={() => alert('Playing!')}>
                Play Movie
              </Button>
              <Button onClick={() => alert('Uploading!')}>
                Upload Image
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
