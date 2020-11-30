# Simulador do Brasileirão

![Tela do simulador](screenshot.png)

## Funcionalidades a serem implementadas

- Geração de placares da rodada;
    - Manual
    - Automática
- Geração automática de todos os resultados do campeonato;
- Fechamento da rodada;
    - Para não ser possível alterá-los mais.
- Visualização de tabela de classificação;
- Classificação dos times por critério de desempate;
- Animação quando um time perder posição devido ao resutlado;
    - Podendo ser perder posição ou subir na tabela
- Gráfico de evolução por time visualizando a relação **Posição por Rodada**

## Modelos

- Team
    - name
    - logo
    - position
    - points
    - games
    - victories
    - goal_pro
    - balance_goals

- Game
    - team_visitor
    - team_home
    - goal_visitor
    - goal_home
    - day
    - hour
    - place