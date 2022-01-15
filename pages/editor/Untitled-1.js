editorData?.blocks?.map(block => {
    switch (block.type) {
        case 'paragraph':
            console.log(`<p>${block.data.text}</p>`);
             
            break;
    }
});