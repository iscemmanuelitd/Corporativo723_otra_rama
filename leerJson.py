
import json
from itertools import groupby

def json():
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
    
    
def shape():
    import shapefile
    import polyline
    import json
    #shape = shapefile.Reader("C:/Users/iscem/Downloads/702825299415_s/100050001/100050001/100050001ne.shp")
    shape = shapefile.Reader("C:/Users/iscem/Downloads/ne.shp")
   
    
    shape.encodingErrors="ignore"
    feature=shape.shapeRecords()
   
    a = []
    id=1
    
    for p in feature:
        c = p.__dict__['record']
        s = p.__dict__['shape']
        r = {"__id":id,"ne":c[0],"v":c[2],"c":c[3][-4:],"g":polyline.encode([s.__geo_interface__["coordinates"]],5)}
        #r = {"__id":c[1][-4:],"n":c[2],"g":s.__geo_interface__["coordinates"]}
        id+=1
        #print(r)
        a.append(r)
    f = open("nExt.json","w")
    f.write(json.dumps(a))
    f.close()
shape()