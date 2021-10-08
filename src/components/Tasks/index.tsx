import { Container } from './styles';
import { IoMdClose } from 'react-icons/io';

interface Iprops {
    task: {
        id: number;
        title: string;
        done: boolean;
    };
    swapDone: (taskID: number) => void;
    deletionTask: (taskID: number) => void;
}

export const Tasks = ({ task, swapDone, deletionTask }: Iprops) => {
    return (
        <Container done={task.done}>
            <label>
                <div>
                    <input
                        type="checkbox"
                        checked={task.done}
                        onClick={() => swapDone(task.id)}
                    />
                    <div>{task.title}</div>
                </div>
                <div
                    className="deleteTask"
                    onClick={() => deletionTask(task.id)}
                >
                    <IoMdClose />
                </div>
            </label>
        </Container>
    );
};
