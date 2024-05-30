import React, {FC} from 'react'
import HistoryMovie from '../models/HistoryMovie'
import 'bootstrap/dist/css/bootstrap.css';
import { MdDelete } from "react-icons/md";

interface HistoryPageProps {
    historyList: HistoryMovie[],
    deleteFromHistory: (movieId: string) => void,
}

const HistoryPage: FC<HistoryPageProps> = ({historyList, deleteFromHistory}) => {
  return (
    <>
    {historyList.length === 0 ? <img className='no_results' src='https://i.ibb.co/4RyGhNY/Pngtree-no-result-search-icon-6511543.png' alt='Pngtree-no-result-search-icon-6511543' /> : 
    <div className='history_container'>
    <div><span className='watching_history_label'>Watching history</span></div>
     <div className='history_table'>
     <table className="table table-striped">
   <thead>
     <tr>
       <th scope="col"></th>
       <th scope="col">Title</th>
       <th scope="col">My Score</th>
       <th scope="col">Year</th>
       <th scope="col">IMDB ID</th>
       <th scope="col">Type</th>
       <th scope="col">Completed at</th>
       <th scope="col"></th>

     </tr>
   </thead>
   <tbody>
     {historyList.map((movie, index) => (
       <tr>
       <th scope="row">{index+1}</th>
       <td><a href={movie.poster}>{movie.title}</a></td>
       <td>{movie.rating}</td>
       <td>{movie.year}</td>
       <td><a href={`https://www.imdb.com/title/${movie.imdbid}/`}>{movie.imdbid}</a></td>
       <td>{movie.type.charAt(0).toUpperCase() + movie.type.slice(1)}</td>
       <td>{String(movie.completedAt)}</td>
       <td><MdDelete className='delete_from_history_icon' onClick={() => deleteFromHistory(movie.imdbid)}/></td>
       </tr>
       ))}
   </tbody>
 </table>
 </div>
     </div>}
     
    </>
  )
}

export default HistoryPage