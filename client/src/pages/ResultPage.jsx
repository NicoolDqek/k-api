import React, { useContext } from 'react';
import { ContextGlobal } from '../context/GlobalContext';
import CardAlbum from '../components/cards/CardAlbum';
import Navbar from '../components/Navbar';

function ResultPage() {
  const { result } = useContext(ContextGlobal);

  if (!result) return <p>Cargando resultados...</p>;

  return (
    <div>
      <Navbar />
      <div className="container-fluid resultados card_section ">

        <h2 className="">Resultados</h2>
     
        <h3 className="text-lg font-semibold mt-4 mb-2">Álbumes</h3>
        {result.albums?.length > 0 ? (
          <div className="row section_albums">
            {result.albums.map((album) => (
              <CardAlbum key={album._id} album={album} />
            ))}
          </div>
        ) : (
          <div className='none'><img src="/music.gif" alt="" />
          <p>No hay álbumes</p></div>
          
        )}

        <h3 className="text-lg font-semibold mt-6 mb-2">Integrantes</h3>
        {result.idols?.length > 0 ? (
          <div className="row section_albums">
            {result.idols.map((idol) => (
              <CardAlbum key={idol._id} album={idol} />
            ))}
          </div>
        ) : (
          <div className='none'><img src="/music.gif" alt="" />
          <p>No hay Artistas</p></div>
        )}
      </div>
    </div>
  );
}

export default ResultPage;
