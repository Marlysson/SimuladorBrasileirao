from pathlib import Path
from crawler import rounds
import json

parent_dir = Path(".").resolve().parent
data_dir = parent_dir / Path("src") / Path("data") / Path("rounds.js")

content = json.dumps(rounds, ensure_ascii=False, indent=2)
file_content = open(data_dir).read().replace("{content}", content)

with open(data_dir, 'w', encoding="utf-8") as f:
    f.write(file_content)