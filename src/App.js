import { atom, selector} from 'recoil';
import './App.css';
import TextInput from './components/TextInput';
import CharacterCounter from './components/CharacterCounter';

export const textState = atom({
  key: 'textState',
  default: '',
})
export const charCountState = selector({
  key: 'charCountState',
  get: ({get}) => {
    const test = get(textState);

    return test.length;
  }
})
function App() {
  return (
    <div className="App">
      <TextInput />
      <CharacterCounter />
    </div>
  );
}

export default App;
