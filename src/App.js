import React, {Component, PropTypes} from 'react';
import { jsPDF } from "jspdf";

const App = () => {
  var doc = new jsPDF()

  doc.setFont('Roboto-Medium', 'normal');
  doc.text('привет!', 10, 10)

  function somePDFCreator() {
    const doc = new jsPDF();
    console.log(doc.getFontList());
  }

  somePDFCreator()
  return (
    <div >
      <button onClick={()=>doc.save('a4.pdf')}>click</button>
    </div>
  );
};

export default App;

