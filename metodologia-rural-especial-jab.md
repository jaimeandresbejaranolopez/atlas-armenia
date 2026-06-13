# Metodología JAB — Avalúos RURALES y ESPECIALES (extraída de 5 informes reales, jun-2026)

Fuente: Finca La Esperanza, Casa Campestre Murillo, Casa-Lote Palo de Agua (rurales) + Hotel Volaré, Empresa Joules (especiales). Marco: Ley 388/97 · Ley 1673 · Ley 1420 · Res. 620/2008 IGAC · POT/EOT.

## RURAL — 3 variantes de método (selector según vocación)
- **A. Mercado puro** (casa campestre en conjunto, ej. Palo de Agua): Valor = Vr m² construido homogeneizado × área privada. Adopta PROMEDIO(min,max).
- **B. Mercado + espacios especiales** (campestre de lujo, ej. Murillo): Valor = (Vr m² homog × área) + Σ espacios especiales. Adopta MÁXIMO. Espacios = costo unitario m²/m³ (cancha volley $120k/m², lago $45k/m³, cancha fútbol $150k/m²).
- **C. Residual + reposición** (lote con potencial, ej. Esperanza): Valor = terreno(residual) + construcción(reposición Fitto-Corvini).

### Ficha rural (campos extra vs urbano)
vereda · área lote (m²/ha) · linderos con ficha catastral vecino + distancia N/S/E/O · topografía/pendientes por % superficie · forma geométrica · clima (altura msnm, temperatura, precipitación mm, piso térmico Holdridge bh-mb/bmh-pm) · suelos (clase agrológica I-VIII) · recursos hídricos · frente a vías + vías internas (long+material) · distancia a cabecera km · cercas perimetrales (material+altura) · riego sí/no · servidumbres/afectaciones · impacto ambiental · orden público.

### Comparables rurales: se compara por m² de construcción (no por hectárea). Atributos similitud: área privada, área lote, habitaciones, baños, espacios complementarios (4×25% o 5×20%). Factores homogenización rango 0.90–1.15 (Murillo llega a 1.15). Estadística: prom, desv, CV; max=prom+desv, min=prom−desv.

## ESPECIAL — 2 ramas
- **Rama HOTEL/vendible** (Volaré): I. Mercado(m² producto) → II. Residual(terreno) → III. Reposición depreciada(construcción) → IV. Mobiliario. TOTAL = construcción + terreno + mobiliario. El Vr m² de mercado NO se multiplica por área directo: es insumo del residual (precio de venta del producto).
- **Rama INDUSTRIAL/lote** (Joules): I. Mercado(m² lote)→terreno directo (×área lote) + III. Reposición depreciada por tipo de estructura. TOTAL = construcción + terreno. Sin residual ni mobiliario.

### Método RESIDUAL (terreno) — fórmula y parámetros reales (Volaré)
```
area_max_ocupacion = IO × area_lote          # IO=1.00 (hotel urbano) / 0.25 (campestre)
area_construible    = IC × area_max_ocupacion # IC=3.00 (hotel) / 2.00 (campestre)
area_vendible       = area_construible × 0.80 # factor privada vendible
ventas              = area_vendible × precio_venta_m2   # precio del mercado (límite superior)
costo_construccion  = area_construible × costo_m2_obra_nueva  # ~$1.350.000
RESIDUO = ventas − costo_construccion − 2%·ventas(admin) − 6%·ventas(financ) − 3%·ventas(mercadeo) − 10-15%·ventas(utilidad)
valor_terreno = RESIDUO
```
Los % se aplican SOBRE LAS VENTAS, no sobre el costo.

### Costo de REPOSICIÓN — constantes calibradas (defaults editables)
- Vr m² reposición a nuevo: **mampostería/concreto $1.350.000** · **estructura metálica $650.000**. Vida útil 100 años.
- Fitto-Corvini: %dep por (% vida transcurrida = vetustez/100 × 100) × clase conservación (1-5). Verificado: vetustez5/clase1→2,6% · vetustez10/clase1→5,5%. Vr unit depreciado mampostería ≈ $1.314.652.
- Clases: 1 óptimo · 2 acabados menores · 3 reparaciones sencillas · 4 reparaciones estructura · 5 ruina (100%).

### MOBILIARIO (hotel): por ítem 3 cotizaciones → promedio → ×(1−%dep). %dep Art.137 Estatuto Tributario: muebles/equipos generales 30%, electrónica/comedores 40%. Vr total = unit × cantidad.

### Homogenización HOTEL (factores): Ubicación Regular1.1/Buena1.0/Óptima0.9 · Área 340-640→1.1/641-941→1.0/942+→0.9 · Hab 1-9→1.1/10-20→1.0/21+→0.9 · descuento negociación 1%. Adopta límite superior (prom+desv).
### Homogenización LOTE industrial (Joules): puntaje similitud (área/vías/uso/ubicación ×25%) + factores (área 0.95/1.0/1.05, vías 0.9/0.95/1.0, uso no0.95/sí1.0, ubic 0.95/1.0/1.05). Adopta máximo.

## NO usados por el perito (no inventar): capitalización de rentas, avance de obra por capítulos, cuantificación monetaria del good will.
