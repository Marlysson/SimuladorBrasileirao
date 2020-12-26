import requests
from bs4 import BeautifulSoup


url = "https://www.cbf.com.br/futebol-brasileiro/competicoes/campeonato-brasileiro-serie-a"

clean_content = lambda content : content.replace(r'[\r|\n]'," ").strip()

def format_compose_name(content):

    names_to_format = ["Atlético", "Athletico", "Bragantino"]
    is_name_to_format = any(name in content.split() for name in names_to_format)

    if is_name_to_format:

        if "Athletico" in content:
            content = "Athletico-PR"

        elif "Atlético" in content:
            content = content.replace(" ","")

        else:
            content = "Bragantino"
            
    else:
        content = content.split("-")[0]

    return content.strip()

    
def get_soup():
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    return soup


def get_round_number(content):
    return content.string.split()[-1]


def get_schedule_match(content):
    infos_format  = lambda content : clean_content(content).split("-")[0]
    infos = infos_format(content.get_text()).strip()

    if infos == 'A definir':
        return {"schedule": None}

    return {
        "day_of_month": infos.split(",")[1].split()[0], 
        "hour": infos.split()[-1],
        "day_of_week": infos.split(",")[0].upper()
    }


def get_place_match(content):

    if content.a:
        content.a.extract()

    content = clean_content(content.get_text())

    if content == 'A definir':
        return {"place": None}

    parts = content.split("-")

    return {
        "stadium": parts[0].strip(),
        "country": parts[1].strip(),
        "initials_country": clean_content(parts[2]).split()[0]
    }


def get_match_result(content):

    teams = content.find_all(class_="time")
    
    home = teams[0]
    away = teams[1]
    
    result = clean_content(content.find("strong", class_="partida-horario").get_text())

    get_team_name = lambda content: format_compose_name(content.img["title"])
    format_result = lambda content, index : content.split("x")[index].strip()

    home_goals = format_result(result, 0) if "x" in result and len(result) > 1 else None
    away_goals = format_result(result, 1) if "x" in result and len(result) > 1 else None

    return {
        "home": get_team_name(home),
        "away": get_team_name(away),
        "goals_home": home_goals,
        "goals_away": away_goals
    }


rounds = {}

soup = get_soup()

for number in range(0, 38):

    round_container = soup.find('div', {"data-slide-index" : number})

    round_description = get_round_number(round_container.find("h3"))

    matches = round_container.find_all('li')

    games = []

    for match in matches:

        match_infos  = match.find_all(class_="partida-desc")
        match_result = match.find(class_="clearfix")

        schedule_info = get_schedule_match(match_infos[0])
        place_info    = get_place_match(match_infos[-1])
        result_info   = get_match_result(match_result)

        games.append({**schedule_info, **place_info, **result_info})

    rounds[int(number)+1] = { "games" : games }
        