import React, { useEffect, useState } from 'react';

import { ToggleButton } from "primereact/togglebutton";

import AddTask from './AddTask';
import FilterToDoList from './FilterToDoList';
import TodoFooter from "./ToDoFooter";

export default function ToDoList() {
    const [toDoList, setToDoList] = useState([]);
    const [filter, setFilter] = useState("all");;

    const delTodo = (id) => {
        setToDoList(toDoList.filter((todo) => todo.id !== id));
    };

    const changeStatus = (key) => {
        setToDoList(
            toDoList.map((todo) =>
                todo.id === key
                    ? { ...todo, status: todo.status === "open" ? "closed" : "open" }
                    : todo
            )
        );
    };

    const addToDo = (title) => {
        let newTodo = {
            id: toDoList.length,
            title,
            status: "open",
        };

        setToDoList([...toDoList, newTodo]);
    }

    return (
        <>
            <div>
                <AddTask addToDo={addToDo} />
                <FilterToDoList setFilter={setFilter} />
                {toDoList ? (
                    toDoList.map((value, key) => {
                        if (filter !== "all" && value.status !== filter) return;

                        return (
                            <div key={key}>
                                <div
                                    className={
                                        "todoItemDivColor " +
                                        (value.status === "open"
                                            ? "todoItemNewDivColor"
                                            : "todoItemDoneDivColor")
                                    }
                                    key={key}
                                    onClick={(e) => {
                                        changeStatus(value.id);
                                    }}
                                >
                                    <span>
                                        {" "}
                                        <strong> {value.title} </strong>
                                        {value.status === "open" ? "Açık" : " Tamamlanmış"}
                                    </span>
                                    <ToggleButton
                                        style={{
                                            backgroundColor:
                                                value.status === "open" ? "#479f76" : "#e35d6a",
                                            borderColor: value.status === "open" ? "#4dd4ac" : "#fff",
                                            color: "#fff",
                                        }}
                                        checked={value.status === "open"}
                                        onChange={(e) => changeStatus(value.id)}
                                        onLabel="Tamamla"
                                        offLabel="Tekrar Aç"
                                        onIcon="pi pi-check"
                                        offIcon="pi pi-refresh"
                                    />
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div> Listelenecek İş Bulunamadı </div>
                )}
            </div>
            <TodoFooter
                totalTasks={toDoList.length}
                doneTasks={toDoList.filter((todo) => todo.status === "closed").length}
                filter={filter}
            />
        </>
    )
}
