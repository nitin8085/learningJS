import InputText from './InputText'
import FileUploader from './FileUploader'
import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import Select from './Select'



function Assignment3() {
    const [textBoxValue, setTextBoxValue] = useState('Text box default value');
    const [selectedFile, setSelectedFile] = useState(null);
    const [value, onChange] = useState(new Date());
    const [selectValue, setSelectValue] = useState('mercedes');

    function handleChange(e) {
        setTextBoxValue(e.target.value);
    }
    function handleSelectChange(e) {
        setSelectValue(e.target.value );
        console.log(e.target.value );
    }
    return (
        <div>
            <h1>form components.</h1>
            <InputText placeholder="This is placeholder" value={textBoxValue} handleChange={() => handleChange} />
            <br />
            <FileUploader onFileSelectSuccess={(file) => setSelectedFile(file)} onFileSelectError={({ error }) => alert(error)} />
            <DatePicker
                onChange={onChange}
                value={value}
            />
            <Select value={selectValue} onChange={handleSelectChange}>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </Select>
        </div>
    )
}

export default Assignment3;