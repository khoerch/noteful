import React from 'react';
import store from './dummy-store';

const NoteContext = React.createContext({
    store: store
})

export default NoteContext;