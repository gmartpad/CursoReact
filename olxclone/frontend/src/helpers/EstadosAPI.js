const ESTADOURL = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

const EstadoAPI = async () => {
    const promise = await fetch(`${ESTADOURL}`).then(response =>
        response.json().then(data => ({
            data:data,
            status:response.status
        }))
    )

    // .then(response => {
    //     let estados = []
    //     response.data.geonames.forEach(element => {
    //         estados.push(element.toponymName);
    //     });
    //     return estados;
    // });
    return promise.data;

}

export default EstadoAPI;