import feedparser
import re
import httpx
from app.models.noticia import Noticia
from typing import List

FEEDS = {
    "colombia": "https://news.google.com/rss/search?q=colombia&hl=es-419&gl=CO&ceid=CO:es-419",
    "bucaramanga": "https://news.google.com/rss/search?q=Bucaramanga+Santander&hl=es-419&gl=CO&ceid=CO:es-419",
    "entretenimiento": "https://news.google.com/rss/search?q=entretenimiento+colombia&hl=es-419&gl=CO&ceid=CO:es-419",
    "eltiempo": "https://www.eltiempo.com/rss/colombia.xml",
    "rcn": "https://www.rcnradio.com/feed",
    "bluradio": "https://www.bluradio.com/feed",
}

def extraer_imagen_rss(entry: dict) -> str | None:
    if entry.get("media_thumbnail"):
        return entry["media_thumbnail"][0].get("url")
    if entry.get("media_content"):
        return entry["media_content"][0].get("url")
    summary = entry.get("summary", "") or ""
    match = re.search(r'<img[^>]+src=["\']([^"\']+)["\']', summary)
    if match:
        return match.group(1)
    return None

def extraer_og_image(url: str) -> str | None:
    try:
        headers = {"User-Agent": "Mozilla/5.0"}
        response = httpx.get(url, headers=headers, timeout=5, follow_redirects=True)
        html = response.text
        match = re.search(r'<meta[^>]+property=["\']og:image["\'][^>]+content=["\']([^"\']+)["\']', html)
        if match:
            return match.group(1)
        match = re.search(r'<meta[^>]+content=["\']([^"\']+)["\'][^>]+property=["\']og:image["\']', html)
        if match:
            return match.group(1)
    except Exception:
        return None
    return None

def obtener_noticias(categoria: str = "eltiempo", limite: int = 10) -> List[Noticia]:
    url = FEEDS.get(categoria, FEEDS["eltiempo"])
    feed = feedparser.parse(url)

    noticias = []
    for entry in feed.entries[:limite]:
        imagen = extraer_imagen_rss(entry)

        # Si el RSS no trae imagen, la buscamos en la página del artículo
        if not imagen:
            imagen = extraer_og_image(entry.get("link", ""))

        noticias.append(Noticia(
            titulo=entry.get("title", "Sin título"),
            resumen=entry.get("summary", None),
            url=entry.get("link", ""),
            fecha=entry.get("published", None),
            imagen=imagen,
            fuente=feed.feed.get("title", categoria),
            categoria=categoria
        ))

    return noticias