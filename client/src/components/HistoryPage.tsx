import React, {FC} from 'react'
import HistoryMovie from '../models/HistoryMovie'
import 'bootstrap/dist/css/bootstrap.css';

interface HistoryPageProps {
    historyList: HistoryMovie[],
}

const HistoryPage: FC<HistoryPageProps> = ({historyList}) => {
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
     </tr>
   </thead>
   <tbody>
     {historyList.map((movie, index) => (
       <tr>
       <th scope="row">{index+1}</th>
       <td><a href={movie.Poster}>{movie.Title}</a></td>
       <td>{movie.rating}</td>
       <td>{movie.Year}</td>
       <td>{movie.imdbID}</td>
       <td>{movie.Type.charAt(0).toUpperCase() + movie.Type.slice(1)}</td>
       <td>{String(movie.completedAt.toLocaleDateString("en-US"))}</td>
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