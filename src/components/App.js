import React from 'react';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import 'styles/App.css'


const App = () => {
  return (
    <div className='outter-box'>
      <CommentBox />
      <CommentList />
    </div>
  )
};

export default App