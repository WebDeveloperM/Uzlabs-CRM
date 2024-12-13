import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface TextEditorProps {
    value?: string;
    onChange?: (value: string) => void;
    
}

const TextEditor: React.FC<TextEditorProps> = ({ value = '', onChange }) => {
    const [text, setText] = useState<string>(value);

    const handleChange = (content: string) => {
        setText(content);


        if (onChange) {
            onChange(content);
        }
    };

    return (
        <ReactQuill
            theme="snow"
            value={text}
            onChange={handleChange}
            className='h-[98px] w-full'
            modules={{
                toolbar: [
                    [{ header: [1, 2, 3, 4, 5, false] }],
                    ['bold', 'italic', 'underline'],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                    ['link']
                ],
            }}
            formats={[
                'header',
                'bold',
                'italic',
                'underline',
                'list',
                'bullet',
                'link',
            ]}
        />
    );
};

export default TextEditor;
