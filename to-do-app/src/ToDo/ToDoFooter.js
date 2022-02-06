import React from "react";

export default function TodoFooter({ totalTasks, doneTasks, filter }) {
    return (
        <div className='toDoFooterDiv'>
            <strong>
                {filter === 'all' && <p> Toplam İş Sayısı: {totalTasks} </p>}
                {filter === 'open' && <p> Açık İş Sayısı: {totalTasks - doneTasks} </p>}
                {filter === 'closed' && <p> Kapalı İş Sayısı: {doneTasks} </p>}
            </strong>
        </div>
    );
}
