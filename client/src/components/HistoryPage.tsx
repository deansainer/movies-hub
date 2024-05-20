import React, {FC} from 'react'
import HistoryMovie from '../models/HistoryMovie'

interface HistoryPageProps {
    historyList: HistoryMovie[],
}

const HistoryPage: FC<HistoryPageProps> = ({historyList}) => {
  return (
    <div>
        {historyList.map((movie) => (
            <span>{movie.Title}</span>
        ))}
    </div>
  )
}

export default HistoryPage