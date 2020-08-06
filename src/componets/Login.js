import React from 'react'
import LcfaSvg from '../svg/LcfaSvg'
const Login = () => {
    return (
        <div>
            <div className='loginPage'>
                <div className='loginForm'>
                    <form action="" method="post">
                        <div className="imgContainer">
                            <LcfaSvg/>
                            </div>

                        <div className="containerInput">
                                <label for="uname"><b>Nome do Usuário</b></label>
                                <input type="text" placeholder="Nome de usuário" name="uname" required/>
                                    <label for="psw"><b>Senha</b></label>
                                    <input type="password" placeholder="Senha" name="psw" required/>
                                        <button type="submit">Entrar</button>
                    
                        </div>

                            <div className="containerForgot">
                                <button type="button" className="cancelbtn">Cancelar</button>
                                <span className="psw">Esqueceu sua <a href="#">senha?</a></span>
                            </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login;