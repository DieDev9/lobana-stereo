from pydantic import BaseModel
from typing import Optional

class Noticia(BaseModel):
    titulo: str
    resumen: Optional[str] = None
    url: str
    fecha: Optional[str] = None
    imagen: Optional[str] = None
    categoria: Optional[str] = None
    fuente: Optional[str] = None