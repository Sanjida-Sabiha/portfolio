import React from 'react'

const CV = () => {const onButton =()=> {
    const pdfUrl = "http://localhost:5175/src/assets/Sanjida.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "cv.pdf";
    link.click();
}
return (
<Fragment>
    <button onClick={onButton}>
        <a href="">Download_CV</a>
    </button>
</Fragment>
  )
}

export default CV