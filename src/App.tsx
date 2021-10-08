import { useState } from 'react';
import { Header } from './components/Header';
import { Tasks } from './components/Tasks';
import { GlobalStyle } from './styles/global';
import { AddTask } from './components/AddTask';

interface Iprops {
    id: number;
    title: string;
    done: boolean;
}

const App = () => {
    const [task, setTask] = useState<Iprops[]>([
        { id: 1, title: 'Estudar Programação', done: false },
        { id: 2, title: 'Atividades da Faculdade', done: false },
    ]);

    const handleAddTask = (taskTitle: string) => {
        let newTask = [...task];
        newTask.push({
            id: task.length + 1,
            title: taskTitle,
            done: false,
        });
        setTask(newTask);
    };

    const handleClickTask = (taskID: number) => {
        const newTask = task.map((tasks) => {
            if (tasks.id === taskID) {
                return { ...tasks, done: !tasks.done };
            }
            return tasks;
        });
        setTask(newTask);
    };

    const handleDeletionTask = (taskID: number) => {
        const newTask = task.filter((tasks) => tasks.id !== taskID);

        setTask(newTask);
    };
    return (
        <>
            <Header />
            <AddTask onEnter={handleAddTask} />
            <div>
                {task.map((task, key) => (
                    <Tasks
                        key={key}
                        task={task}
                        swapDone={handleClickTask}
                        deletionTask={handleDeletionTask}
                    />
                ))}
            </div>

            <GlobalStyle />
        </>
    );
};

export default App;
