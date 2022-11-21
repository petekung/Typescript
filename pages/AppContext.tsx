import React from 'react';
import LoginArea from './LoginArea';

const fakeUser = { username: 'pete@gmail.com', name: 'น้องพีท' };

const AuthContext = React.createContext();

function AppContext() {
    return (
        <AuthContext.Provider value={null}>
            <section className="app-section">
                <div className="app-container">
                    <LoginArea />
                </div>
            </section>
        </AuthContext.Provider>
    );
}

export { AuthContext };
export default AppContext;