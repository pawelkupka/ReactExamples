import './App.css';
import Paragraph from './components/Paragraph';
import ParagraphWithHeader from './components/ParagraphWithHeader';

function App() {
  return (
      <div className="App">
          <Paragraph text="Lorem Ipsum normal" />
          <ParagraphWithHeader text="Lorem Ipsum with header" header="some header" />
    </div>
  );
}

export default App;
