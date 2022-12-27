function Restoran({res}) {


    return (
     <div className = 'restorani' >

        <div className="card"   >
        <img src={res.slika} className="card-img-top" alt="..."/>
        <div className="card-body">
          <p className="card-title">{res.naziv}</p>
          <p className="card-text">{res.opis} <br /> Ocena: {res.ocena} <br/> Telefon: {res.telefon} <br /> Adresa: {res.adresa} <br /> </p>
          <a href="#" className="btn btn-primary">Dodaj</a>
        </div>
      </div>

    </div>
    );
  }

  export default Restoran;