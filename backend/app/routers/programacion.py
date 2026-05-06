from fastapi import APIRouter
from datetime import datetime
import pytz

router = APIRouter(
    prefix="/programacion",
    tags=["Programación"]
)

PROGRAMACION = [
    {"hora_inicio": "07:00", "hora_fin": "08:30", "programa": "Noticiero Regional", "locutor": "Pacho Rocha"},
    {"hora_inicio": "09:00", "hora_fin": "12:00", "programa": "Las Mañanas Superbacanas", "locutor": "Eduardo Cogollo"},
    {"hora_inicio": "12:00", "hora_fin": "15:00", "programa": "Noticias y Música", "locutor": "Eduardo Cogollo"},
    {"hora_inicio": "15:00", "hora_fin": "18:00", "programa": "La Tarde Superbacana", "locutor": "Eduardo Cogollo"},
]

def programa_activo() -> list:
    zona = pytz.timezone("America/Bogota")
    ahora = datetime.now(zona)
    hora_actual = ahora.strftime("%H:%M")

    resultado = []
    for programa in PROGRAMACION:
        activo = programa["hora_inicio"] <= hora_actual < programa["hora_fin"]
        resultado.append({**programa, "activo": activo})

    return resultado

@router.get("/")
def get_programacion():
    return programa_activo()