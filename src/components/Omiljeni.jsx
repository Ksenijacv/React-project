import Restoran from "./Restoran";

function Omiljeni({restorani,kriterijum, izbaci}) {
    return (
    <div className="row">
        {kriterijum==""
        ?
        restorani.map((res)=> <div className="col-sm-3"><Restoran  key={res.id} res={res} mod={2} izbaci={izbaci} ></Restoran><br /></div>)
        :
        <>
        {restorani
        .filter((res)=>res.naziv.toLowerCase().includes(kriterijum.toLowerCase()))
        .map((res)=> <div className="col-sm-3"><Restoran  key={res.id} res={res} mod={2} izbaci={izbaci} ></Restoran><br /></div>)}
        </>
        }

      </div>
    );
  }

  export default Omiljeni;