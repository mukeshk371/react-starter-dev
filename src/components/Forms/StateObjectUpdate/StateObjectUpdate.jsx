import { useState } from "react";

export default function StateObjectUpdate() {
  const [person, setPerson] = useState({
    name: "Mukesh",
    artwork: {
      title: "React Starter Dev",
      city: "Pune",
      image: "https://strapi.dhiwise.com/uploads/react_testing_libraries_and_tools_of_2022_0_7760290a25.gif",
    },
  });

  function handleNameChange(e) {
    setPerson({
      ...person,
      name: e.target.value,
    });
  }

  function handleTitleChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value,
      },
    });
  }

  function handleCityChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value,
      },
    });
  }

  function handleImageChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value,
      },
    });
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">State Object Update</h1>
      <div className="row">
        <div className="col-lg-6">
          <div className="mb-3">
            <label htmlFor="nameInput" className="form-label">
              Name:
            </label>
            <input
              id="nameInput"
              type="text"
              className="form-control"
              value={person.name}
              onChange={handleNameChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="titleInput" className="form-label">
              Title:
            </label>
            <input
              id="titleInput"
              type="text"
              className="form-control"
              value={person.artwork.title}
              onChange={handleTitleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="cityInput" className="form-label">
              City:
            </label>
            <input
              id="cityInput"
              type="text"
              className="form-control"
              value={person.artwork.city}
              onChange={handleCityChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="imageInput" className="form-label">
              Image URL:
            </label>
            <input
              id="imageInput"
              type="text"
              className="form-control"
              value={person.artwork.image}
              onChange={handleImageChange}
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card">
            <img
              src={person.artwork.image}
              className="card-img-top"
              alt={person.artwork.title}
            />
            <div className="card-body">
              <h5 className="card-title">{person.artwork.title}</h5>
              <p className="card-text">
                <i>{person.artwork.title}</i> by {person.name}
                <br />
                (located in {person.artwork.city})
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
