import json
from itertools import groupby

col=open("public/col.json","r",encoding="utf-8")
datos = json.load(col)
dic = datos["response"]
obj={}
for k in dic:
    print(k)
    try:
        obj[dic[k]].append(k)
    except:
        obj[dic[k]] = [k]
cp = open("public/cp_dgo.json","w")
cp.write(json.dumps(obj,indent=4))
cp.close()