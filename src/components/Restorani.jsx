  import Restoran from "./Restoran";

  function Restorani({restorani, kriterijum, dodaj}) {
    return (
      <div className="restorani">
    <div className="row">
      {kriterijum==""
        ?
        restorani.map((res)=> <div className="col-sm-3"><Restoran dodaj={dodaj} key={res.id} res={res}></Restoran><br /></div>)
        :
        <>
        {restorani.filter((res)=>res.naziv.toLowerCase().includes(kriterijum.toLowerCase()))
        .map((res)=> <div className="col-sm-3"><Restoran dodaj={dodaj} key={res.id} res={res}></Restoran><br /></div>)}
        </>
        } 
    </div>
    </div>
        );

  }

  export default Restorani;

