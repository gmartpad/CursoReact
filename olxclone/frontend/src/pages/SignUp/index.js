import React, { useState, useEffect } from 'react';
import { PageArea } from './styled';
import useApi from '../../helpers/OlxAPI';
import estadosApi from '../../helpers/EstadosAPI';
import { doLogin } from '../../helpers/AuthHandler';

import { PageContainer, PageTitle, ErrorMessage } from '../../components/MainComponents';

const Page = () => {

    const api = useApi();

    const [estados, setEstados] = useState([]);
    const [name, setName] = useState('');
    const [stateLoc, setStateLoc] = useState('');
    const [stateList, setStateList] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('')

    // function stateLocOperator(){
    //     let options = [];
    //     estados.forEach(e=>{
    //         options.push(<option>{e}</option>)
    //     });
    //     return options;
    // }

    // const teste = async () => {
    //     const promise = await estadosApi().then(response => {
    //         let estadosProto = [];
    //         response.forEach(e => {
    //            estadosProto.push(e.nome);
    //         });
    //         setEstados(estadosProto);
    //     })
    // }

    //teste();

    useEffect( () => {
        //teste();
        const getStates = async () => {
            const slist = await api.getStates();
            setStateList(slist);
        }

        getStates();

    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setDisabled(true);

        setError('');

        if(password !== confirmPassword){
            setError('Senhas não batem!');
            setDisabled(false);
            return;
        }

        const json = await api.register(name, email, password, stateLoc);

        if(json.error) {
            setError(json.error);
        } else {
            doLogin(json.token);
            window.location.href = '/';
        }

        setDisabled(false);
    }

    return (
        <PageContainer>
            <PageTitle>
                Cadastro
            </PageTitle>
            <PageArea>
                { error &&
                
                    <ErrorMessage>{error}</ErrorMessage>    

                }
                <form onSubmit={handleSubmit}>
                <label className="area">
                        <div className="area--title">Nome Completo</div>
                        <div className="area--input">
                            <input 
                                disabled={disabled} 
                                type="text" 
                                value={name}
                                onChange={e=>setName(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Estado</div>
                        <div className="area--input">
                            <select value={stateLoc} onChange={e=>setStateLoc(e.target.value)} required>
                                <option></option>
                                {stateList.map((i, k)=>
                                    <option key={k} value={i._id}>{i.name}</option>
                                )}
                            </select>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">E-mail</div>
                        <div className="area--input">
                            <input 
                                disabled={disabled} 
                                type="email" 
                                value={email}
                                onChange={e=>setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Senha</div>
                        <div className="area--input">
                            <input 
                                disabled={disabled} 
                                type="password" 
                                value={password}
                                onChange={e=>setPassword(e.target.value)}
                            />
                        </div>
                    </label> 
                    <label className="area">
                        <div className="area--title">Confirmar a Senha</div>
                        <div className="area--input">
                            <input 
                                disabled={disabled} 
                                type="password" 
                                value={confirmPassword}
                                onChange={e=>setConfirmPassword(e.target.value)}
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button 
                                disabled={disabled}
                            >
                                Realizar Cadastro
                            </button>
                        </div>
                    </label>

                </form>
            </PageArea>
        </PageContainer>
    );
}

export default Page;