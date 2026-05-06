from fastapi import APIRouter, Query
from app.services.rss import obtener_noticias
from app.models.noticia import Noticia
from typing import List
from datetime import datetime, timedelta

router = APIRouter(
    prefix="/noticias",
    tags=["Noticias"]
)

# Caché simple en memoria
_cache: dict = {}

def get_cache(key: str):
    if key in _cache:
        datos, expira = _cache[key]
        if datetime.now() < expira:
            return datos
    return None

def set_cache(key: str, datos, horas: int = 24):
    _cache[key] = (datos, datetime.now() + timedelta(hours=horas))

@router.get("/", response_model=List[Noticia])
def get_noticias(
    categoria: str = Query(default="eltiempo"),
    limite: int = Query(default=10, le=30)
):
    key = f"{categoria}_{limite}"
    cached = get_cache(key)
    if cached:
        return cached

    noticias = obtener_noticias(categoria=categoria, limite=limite)
    set_cache(key, noticias, horas=24)
    return noticias