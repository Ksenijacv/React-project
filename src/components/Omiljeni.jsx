import Restoran from "./Restoran";

function Omiljeni({restorani,kriterijum}) {
    return (
    <div className="row">
        {kriterijum==""
        ?
        restorani.map((res)=> <div className="col-sm-3"><Restoran  key={res.id} res={res}></Restoran><br /></div>)
        :
        <>
        {restorani
        .filter((res)=>res.naziv.toLowerCase().includes(kriterijum.toLowerCase()))
        .map((res)=> <div className="col-sm-3"><Restoran  key={res.id} res={res}></Restoran><br /></div>)}
        </>
        }

      </div>
    );
  }

  export default Omiljeni;