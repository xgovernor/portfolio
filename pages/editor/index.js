import React, { useEffect, useState } from 'react';
import Container from '../../components/Container';
import Layout from '../../components/Layout';
import { createReactEditorJS } from 'react-editor-js';


const Editor = () => {
    const [editorData, setEditorData] = useState({});  // Editor contents.
    const [readOnly, setReadOnly] = useState(true);
    
    // useEffect(() => {
    //     // EditorJS.save().then(outputData => console.log(outputData));
    //     console.log(editorData)
    // }, [editorData])

    const saveEditorData = async (data) => {
        const dataa = await data.saver.save();

        setEditorData(dataa);
        // await console.log('Block Index: ', data);
    }


    const showData = () => {
        console.log('Editor Data: ', editorData)

        editorData?.blocks?.map(block => {
            switch (block.type) {
                case 'paragraph':
                    console.log(`<p>${block.data.text}</p>`);
                     
                    break;
            }
        });
    }
 
    return (
        <>
            <Layout>
                <section>
                    <Container>
                        <h1>Single post editor</h1>

                        <button onClick={showData}>Show data</button>
<hr />
                        <div className='editor'>
                            <EditorJSEditor 
                                holder="editorjs"  // Required. This is the wrapper id. Without it editor can cause problems.
                                // readOnly={true}  // Optional. This will stop editor from editing.
                                onReady={()=> console.log('Editor is ready')}  // This will fired when editor will be ready.
                                onChange={data=> saveEditorData(data)}
                                data={editorData}  // Initial datas.
                            />
                        </div>
                    </Container>
                </section>
                
            </Layout>
            
            <style jsx>{`
                setion {
                    background: rgb(240,240,240) !important;
                }
                h1 {
                    margin-bottom: 15px;
                }

                .editor {
                    height: auto;
                    margin-bottom: 80px;
                    background: #ffffff;
                    // border: 1px solid #757575;
                }
            `}</style>
        </>
    );
}

export default Editor;
