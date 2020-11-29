const TIMES = [
    { 
        "nome": "Athletico-PR",
        "escudo": "https://s.glbimg.com/es/sde/f/organizacoes/2019/09/09/Athletico-PR.svg" 
    },
    {
        "nome": "Atlético-GO",
        "escudo": "https://s.glbimg.com/es/sde/f/organizacoes/2020/07/02/atletico-go-2020.svg"
    },
    {
        "nome": "Atlético-MG",
        "escudo": "https://s.glbimg.com/es/sde/f/organizacoes/2018/03/10/atletico-mg.svg"
    },
    {
        "nome": "Bahia",
        "escudo": "https://s.glbimg.com/es/sde/f/organizacoes/2018/03/11/bahia.svg"
    },
    {
        "nome": "Botafogo",
        "escudo": "https://s.glbimg.com/es/sde/f/organizacoes/2019/02/04/botafogo-svg.svg"
    },
    {
        "nome": "Bragantino",
        "escudo": "https://s.glbimg.com/es/sde/f/organizacoes/2019/12/30/svg.svg"
    },
    {
        "nome": "Ceará",
        "escudo": "https://s.glbimg.com/es/sde/f/organizacoes/2019/10/10/ceara.svg"
    },
    {
        "nome": "Corinthians",
        "escudo": "https://s.glbimg.com/es/sde/f/organizacoes/2019/09/30/Corinthians.svg"
    },
    {
        "nome": "Coritiba",
        "escudo": "https://s.glbimg.com/es/sde/f/organizacoes/2018/03/11/coritiba.svg"
    },
    {
        "nome": "Flamengo",
        "escudo": "https://s.glbimg.com/es/sde/f/organizacoes/2018/04/10/Flamengo-2018.svg"
    },
    {
        "nome": "Fluminense",
        "escudo": "https://s.glbimg.com/es/sde/f/organizacoes/2018/03/11/fluminense.svg"
    },
    {
        "nome": "Fortaleza",
        "escudo": "https://s.glbimg.com/es/sde/f/organizacoes/2018/06/10/optimised.svg"
    },
    {
        "nome": "Goiás",
        "escudo": "https://s.glbimg.com/es/sde/f/organizacoes/2019/05/01/Goias_SVG.svg"
    },
    {
        "nome": "Grêmio",
        "escudo": "https://s.glbimg.com/es/sde/f/organizacoes/2018/03/12/gremio.svg"
    },
    {
        "nome": "Internacional",
        "escudo": "https://s.glbimg.com/es/sde/f/organizacoes/2018/03/11/internacional.svg"
    },
    {
        "nome": "Palmeiras",
        "escudo": "https://s.glbimg.com/es/sde/f/organizacoes/2019/07/06/Palmeiras.svg"
    },
    {
        "nome": "Santos",
        "escudo": "https://s.glbimg.com/es/sde/f/organizacoes/2018/03/12/santos.svg"
    },
    {
        "nome": "São Paulo",
        "escudo": "https://s.glbimg.com/es/sde/f/organizacoes/2018/03/11/sao-paulo.svg"
    },
    {
        "nome": "Sport",
        "escudo": "https://s.glbimg.com/es/sde/f/organizacoes/2018/03/11/sport.svg"
    },
    {
        "nome": "Vasco",
        "escudo": "https://s.glbimg.com/es/sde/f/organizacoes/2018/03/11/vasco.svg"
    }
    
]

function obterPorNome(descricao){
    return TIMES.filter(time => time.nome == descricao)
}

export default obterPorNome