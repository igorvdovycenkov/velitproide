import React, { useState } from 'react';

const ExampleComponent = () => {
    const [view, setView] = useState({ hideNavbar: false });

    return (
        <button onClick={() => setView({ hideNavbar: true })}>
            Hide Navbar
        </button>
    );
}

export default ExampleComponent;
