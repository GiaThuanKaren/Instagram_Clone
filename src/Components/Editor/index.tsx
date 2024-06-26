import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import React from "react";

const Editor = ({
    value,
    onChange,
}: {
    value?: any;
    onChange?: any;
}) => {
    return (
        <CKEditor
            className="outline-none border-none h-full bg-red-300 "
            editor={ClassicEditor}
            data={value}
            onChange={(event: any, editor: { getData: () => any; }) => {
                const data = editor.getData();
                console.log(data)
                onChange(data);
            }}
            
        />
    );
};

export default Editor;