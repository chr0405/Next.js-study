export default function MovieDetail( {
    params : {id}, 
}: {
    params : {id : string};
}) {
    console.log(id);
    return (
    <div>Movie {id}</div>
  )
}
