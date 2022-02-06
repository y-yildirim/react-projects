import React, { useEffect, useState } from 'react'

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export default function AddTask({addToDo}) {

    const [task, setTask] = useState("")

    const addTaskFunc = () => {
        addToDo(task)
    }
    
    return (
        <div className="col-12 md:col-4">
            <div className="p-inputgroup">
                <InputText
                    name="task-title"
                    type="text"
                    placeholder="Add a New Task"
                    value={task}
                    onChange={(evt) => {
                        setTask(evt.target.value)
                    }}
                />
                <Button icon="pi pi-check" className="p-button-success" onClick={addTaskFunc} />
            </div>
        </div>
    )
}
