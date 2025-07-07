const Card = ({ movie }) => {
  const { id, title,name ,  poster_path, genre_ids, overview } = movie;

  const image = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    <>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title || name}</h2>
          
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
