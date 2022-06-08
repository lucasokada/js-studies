import React, { useState } from 'react'

const UseStateHook = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const cadastraUsuario = (e: any) => {
        e.preventDefault()
        console.log(`Usuário ${username} com senha: ${password}`)
    }

    const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        console.log(`clicou: username = ${username} e password = ${password}`)
    }

    return (
        <div>
            <h1>
                Meu Cadastro
            </h1>
            <form>
                <label>
                    Username:
                    <input 
                        type="text"
                        name="name"
                        placeholder="digite seu username"
                        onChange={(e) => {setUsername(e.target.value)}}
                    />
                    Password:
                    <input
                        type="text"
                        name="password"
                        placeholder="digite sua senha"
                        onChange={(e) => {setPassword(e.target.value)}}
                    />
                </label>
                <button onClick={buttonHandler}>
                    Log in
                </button>
            </form>
        </div>
    )
}

export default UseStateHook