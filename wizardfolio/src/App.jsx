import { useState } from 'react';
import Spellbook from './components/Spellbook';
import BookCover from './components/BookCover';

export default function App() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      {!opened && <BookCover onOpen={() => setOpened(true)} />}
      {opened && <Spellbook />}
    </>
  );
}
