  import Restoran from "./Restoran";

  function Restorani({restorani}) {
    return (
      <div className="restorani">
    <div className="row">
          {restorani.map((res)=> <div className="col-sm-3"><Restoran  key={res.id} res={res}></Restoran><br /></div>)}
    </div>
    </div>
        );

  }

  export default Restorani;

