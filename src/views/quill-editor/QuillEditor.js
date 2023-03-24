import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './Quill.css';
import { Card } from '@mui/material';

 
import PageContainer from '../../components/container/PageContainer';

 

const QuillEditor = (props) => {
   

  return (
    <PageContainer title="Quill Editor" description="this is Quill Editor page">
      {/* breadcrumb */}
     
      {/* end breadcrumb */}
      <Card sx={{ p: 0 }}>
        <ReactQuill
           {...props}
          placeholder="Type here..."
        />
      </Card>
    </PageContainer>
  );
};

export default QuillEditor;
