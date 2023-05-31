import React, { useState } from 'react';

function ImageUploader() {
    const [copyButtonClicked, setCopyButtonClicked] = useState(false);
    const [dataURL, setDataURL] = useState('');

    const handleImageUpload = (event) => {
        const file = event.target.files[0];

        const reader = new FileReader();

        reader.onloadend = () => {
            setDataURL(reader.result);
        };

        reader.readAsDataURL(file);
    };

    const handleCopy = async () => {
        setCopyButtonClicked(true);

        try {
            await navigator.clipboard.writeText(dataURL);
        } catch (ignore) {
            alert('클립보드 저장 실패');
        } finally {
            setCopyButtonClicked(false);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleImageUpload}/>
            {dataURL && <img src={dataURL} alt="Uploaded"/>}
            {dataURL && (
                <button
                    onClick={handleCopy}
                    disabled={copyButtonClicked}
                >
                    클립보드에 저장
                </button>
            )}
        </div>
    );
}

export default ImageUploader;
