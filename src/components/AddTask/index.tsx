import { useState, KeyboardEvent } from 'react';
import { Container } from './styles';
import { AiOutlinePlus } from 'react-icons/ai';

interface Props {
    onEnter: (taskTitle: string) => void;
}

export const AddTask = ({ onEnter }: Props) => {
    const [inputValue, setInputValue] = useState('');

    const handleActiveKey = (e: KeyboardEvent) => {
        if (e.code === 'Enter' && inputValue !== '') {
            onEnter(inputValue);
            setInputValue('');
        }
    };

    return (
        <Container>
            <div className="plus">
                <AiOutlinePlus />
            </div>

            <input
                type="text"
                placeholder="Adicione uma Tarefa"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyUp={handleActiveKey}
            />
        </Container>
    );
};
