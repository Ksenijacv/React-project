function Restoran({res}) {


    return (
     
        <div className="card"   >
        <img src={res.slika} className="card-img-top" alt="..."/>
        <div className="card-body">
          <p className="card-title">{res.naziv}</p>
          <p className="card-text">{res.opis} <br /> Ocena: {res.ocena} <br/> Telefon: {res.telefon} <br /> Adresa: {res.adresa} <br /> </p>
          <h4><a href="#" className="btn btn-primary" style={{marginLeft: "20px" , opacity: "80%", 
          padding:"10px", paddingLeft: "20px", paddingRight: "20px", border: "3px solid #EEEFEB"}}>Dodaj u omiljene</a></h4>
        </div>
      </div>

    );
  }

  export default Restoran;