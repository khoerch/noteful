import React from 'react';

const NoteContext = React.createContext({
    store: {},
    deleteNote: () => {},
})

export default NoteContext;