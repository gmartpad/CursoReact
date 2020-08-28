import React, { useState, useEffect } from 'react';
import ChuckAPI from '../../helpers/ChuckNorrisAPI';
import PokémonAPI from '../../helpers/PokémonAPI';
import KanyeAPI from '../../helpers/KanyeWestAPI';
import Textlike from '../../components/partials/Textlike';
import TriangleLoader from '../../components/partials/TriangleLoader';
import Pokédex from '../../components/partials/Pokédex'
import { APIBody, Codelike, Divisoria, PokéTitle } from './styled';
import { useSelector, useDispatch } from 'react-redux';
import pokemon from 'pokemon'

const APIs = () => {

    //-----------------------------------------------------
    
        const dispatch = useDispatch();

        //selector
        const apiLoading = useSelector(state => state.api.loading);
        const chuckLoading = useSelector(state => state.chuck.loading);
        const kanyeLoading = useSelector(state => state.kanye.loading);

        //dispatcher

        const setAPILoading = (newAPILoading) => dispatch({
            type: 'SET_API_LOADING',
            payload: {
                loading: newAPILoading,
            }
        });

        const setChuckLoading = (newChuckLoading) => dispatch({
            type: 'SET_CHUCK_LOADING',
            payload: {
                loading: newChuckLoading
            },
        })
        
        const setKanyeLoading = (newKanyeLoading) => dispatch({
            type: 'SET_KANYE_LOADING',
            payload: {
                loading: newKanyeLoading
            },
        })

    //-----------------------------------------------------

    const chuckApi = ChuckAPI();
    const pokémonApi = PokémonAPI();
    const kanyeApi = KanyeAPI();

    //-----------------------------------------------------

    const [piada, setPiada] = useState('');
    const [chuckBody, setChuckBody] = useState({});
    const [chuckSet, setChuckSet] = useState(false);

    const getJoke = async () => {
        setChuckSet(false);
        setChuckLoading(true);
        const joke = await chuckApi.getJokes();
        setPiada(joke.value);
        setChuckBody(joke);
        setChuckSet(true);
        setChuckLoading(false);
    }

    useEffect(()=>{
        getJoke();
    }, []);

    //-----------------------------------------------------

    const pokémonList = pokemon.all();

    const [pokémonName, setPokémonName] = useState('bulbasaur');
    const [pokémonSprite, setPokémonSprite] = useState('');
    const [pokémonHeight, setPokémonHeight] = useState('');
    const [pokémonWeight, setPokémonWeight] = useState('');
    const [pokémonTypes, setPokémonTypes] = useState([]);
    const [pokémonSpecies, setPokémonSpecies] = useState('');
    const [pokémonBody, setPokémonBody] = useState({});
    const [pokémonSet, setPokémonSet] = useState(false);

    useEffect(()=>{
        const getPokémon = async () => {
            setPokémonSet(false);
            const json = await pokémonApi.getPokémon(pokémonName);
            setPokémonSprite(json.sprites.front_default);
            setPokémonHeight(json.height);
            setPokémonWeight(json.weight);
            setPokémonTypes(json.types);
            setPokémonSpecies(json.species.name);
            setPokémonBody(json);
            setPokémonSet(true);
        }
        getPokémon();
    }, [pokémonName])

    //-----------------------------------------------------
    
    const [frase, setFrase] = useState('');
    const [kanyeBody, setKanyeBody] = useState({});
    const [kanyeSet, setKanyeSet] = useState(false);

    const getQuote = async () => {
        setKanyeSet(false);
        setKanyeLoading(true);
        const quote = await kanyeApi.getKanyeQuote();
        setFrase(quote.quote);
        setKanyeBody(quote);
        setKanyeSet(true);
        setKanyeLoading(false);
    }

    useEffect(()=>{
        getQuote();
    }, []);

    //-----------------------------------------------------

    const [fullLoad, setFullLoad] = useState(false);

    useEffect(()=>{
        if(chuckSet && pokémonSet && fullLoad !== true){
            console.log('settado');
            setFullLoad(true);
            setAPILoading(false);
        }else{
            console.log('n settado');
        }
    }, [chuckSet]);

    //-----------------------------------------------------


    return (
        <>
            {apiLoading ? 
                    <APIBody>
                        <TriangleLoader/> 
                    </APIBody>
                        :  
                    <APIBody>
                        <Textlike 
                            title="API de Piadas sobre o Chuck Norris"
                            contentTitle="Piada"
                            content={piada}
                            buttonFunction={getJoke}
                            buttonTitle="Gerar nova piada do Chuck Norris"
                            loading={chuckLoading}
                        />
                        <Codelike>
                            <pre>{JSON.stringify(chuckBody, null, 2)}</pre>
                        </Codelike>

                        <Divisoria/>

                        <PokéTitle>
                            <h3>API de Pokémon</h3>   

                            <select className="pokémonSelect" onChange={e=>setPokémonName(e.target.value)} name="pokemonList">
                                {pokémonList.map((i, k)=>

                                    <option key={k} value={i.toLowerCase()} >{i}</option>
                                )}
                            </select>
                        </PokéTitle>

                        <Codelike>
                            <Pokédex 
                                pokémonSprite={pokémonSprite}
                                pokémonHeight={pokémonHeight}
                                pokémonWeight={pokémonWeight}
                                pokémonTypes={pokémonTypes}
                                pokémonSpecies={pokémonSpecies}
                            />
                        </Codelike>

                        <Codelike>
                            <pre>{JSON.stringify(pokémonBody, null, 2)}</pre>
                        </Codelike>

                        <Divisoria/>

                        <Textlike 
                            title="API de Frases do Kanye West"
                            contentTitle="Frase"
                            content={frase}
                            buttonFunction={getQuote}
                            buttonTitle="Gerar nova frase do Kanye West"
                            loading={kanyeLoading}
                        />
                        <Codelike>
                            <pre>{JSON.stringify(kanyeBody, null, 2)}</pre>
                        </Codelike>
                        
                    </APIBody>
            } 
        </>
    )
}

export default APIs;