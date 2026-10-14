import urllib.request, urllib.parse, json, pathlib, concurrent.futures, math
ROOT=pathlib.Path(__file__).resolve().parents[1]
OUT=ROOT/'public'/'images'; OUT.mkdir(parents=True,exist_ok=True)
HEAD={'User-Agent':'UlyDalaEducationalProject/1.0 (historical educational website)'}
def get(url):
    return urllib.request.urlopen(urllib.request.Request(url,headers=HEAD),timeout=60).read()
names={'Genghis Khan':'genghis','Jochi':'jochi','Chagatai Khan':'chagatai','Ögedei Khan':'ogedei','Tolui':'tolui','Batu Khan':'batu','Otrar':'otrar'}
data=json.loads(get('https://en.wikipedia.org/w/api.php?'+urllib.parse.urlencode({'action':'query','titles':'|'.join(names),'prop':'pageimages','format':'json','pithumbsize':900})))
def save(p):
    url=p['thumbnail']['source'].split('?')[0]
    content=get(url)
    (OUT/(names[p['title']]+'.jpg')).write_bytes(content)
    return {'name':names[p['title']], 'file':p['pageimage'], 'url':url}
with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
    sources=list(pool.map(save,data['query']['pages'].values()))
(OUT/'sources.json').write_text(json.dumps(sources,ensure_ascii=False,indent=2),encoding='utf-8')
print('Downloaded',len(sources),'historical images')
world=json.loads(get('https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson'))
def project(lon,lat): return ((lon+15)/160*1200,(78-lat)/70*620)
def path(coords,proj=project):
    return ' '.join('M'+' L'.join(f'{x:.1f},{y:.1f}' for x,y in [proj(*p[:2]) for p in ring])+' Z' for ring in coords)
countries=[]; kaz=None
for f in world['features']:
    geom=f['geometry']; props=f['properties']; polys=geom['coordinates'] if geom['type']=='MultiPolygon' else [geom['coordinates']]
    n=props.get('ADMIN','')
    if n=='Kazakhstan': kaz=polys
    countries.append({'name':n,'d':' '.join(path(p) for p in polys)})
geo={'countries':countries,'kazakhstan':' '.join(path(p,lambda lon,lat:((lon-46)*25,(57-lat)*36)) for p in kaz),'source':'Natural Earth, public domain, 1:110m'}
(ROOT/'src'/'geography.json').write_text(json.dumps(geo),encoding='utf-8')
print('Prepared geographic SVG geometry')
