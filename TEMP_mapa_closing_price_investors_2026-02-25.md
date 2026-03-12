# Mapa de flujo `closing_price` (Investors)

Fecha: 2026-02-25
Objetivo: identificar el flujo de `closing_price` desde definición de datos hasta consumo en UI, y detectar el punto de corte.

## 1) Definición de contrato (interfaces)

- `src/pages/investors/interfaces/InvestorsHeader.ts`
  - `closing_price: string;` en el bloque de atributos de `Stock_information.stock_information.data.attributes`.
- `src/pages/investors/interfaces/InvestorBursatil.ts`
  - `closing_price: string;` en `stock_info.stock_information.data.attributes`.

## 2) Origen de datos (mocks)

- `src/pages/investors/mocks/InvestorsHeaderMock.ts`
  - contiene `Stock_information.stock_information.data.attributes.closing_price`.
- `src/pages/investors/mocks/InvestorsBursatilMock.ts`
  - contiene `stock_info.stock_information.data.attributes.closing_price`.
- `src/pages/investors/mocks/InvestorsBursatilGraphicMock.ts`
  - contiene `closing_price` en los datos de gráfica.

## 3) Flujo por contenedores de página

- `src/pages/investors/Investors.tsx`

  - enruta por tabs y renderiza:
    - `InvestorHeader` (`api/investors-header`)
    - `InvestorBursatil` (`api/investors-stock-market`)

- `src/pages/investors/components/InvestorHeader/InvestorHeader.tsx`

  - consume `InvestorsHeaderInterface` vía `useFetchData('api/investors-header')`.
  - delega el header visual en:
    - `../InvestorHome/InvestorHomeHeader/InvestorHomeHeader`
    - `../InvestorUs/InvestorUsHeader/InvestorUsHeader`

- `src/pages/investors/components/InvestorBursatil/InvestorBursatil.tsx`
  - consume `InvestorBursatilInterface` vía `useFetchData('api/investors-stock-market')`.
  - delega el render de `stock_info` en:
    - `./InvestorBursatilAction/InvestorBursatilAction`
  - y otras secciones en:
    - `InvestorBursatilCoverage`, `InvestorBursatilConversion`, `InvestorBursatilEvents`, `InvestorBursatilNextEvents`.

## 4) Transformación utilitaria relacionada

- `src/pages/utils/processActionPrice.ts`
  - recibe `{ closing_price, opening_price }` y calcula variación.
- `src/pages/utils/processActionPrice.test.ts`
  - pruebas con casos de `closing_price`.

## 5) Punto de corte detectado en UI

Actualmente el flujo de datos llega a contenedores, pero se corta antes del render final de `closing_price` por componentes faltantes/no implementados:

- Carpeta vacía: `src/pages/investors/components/InvestorHome/InvestorHomeHeader/`
- Carpeta vacía: `src/pages/investors/components/InvestorUs/InvestorUsHeader/`
- Carpeta vacía: `src/pages/investors/components/InvestorHome/InvestorHomeNumbers/`
- Carpeta vacía: `src/pages/investors/components/InvestorHome/InvestorHomeMoreInfo/`
- Carpeta vacía: `src/pages/investors/components/InvestorHome/InvestorHomeSections/`
- Carpeta vacía: `src/pages/investors/components/InvestorUs/InvestorUsHistory/`
- Carpeta vacía: `src/pages/investors/components/InvestorUs/InvestorUsKnowMore/`
- Carpeta vacía: `src/pages/investors/components/InvestorUs/InvestorUsSections/`
- En `InvestorBursatil`, no existen subcomponentes `.tsx` importados (`InvestorBursatilAction`, `Coverage`, `Conversion`, `Events`, `NextEvents`): solo existen `InvestorBursatil.tsx` y `InvestorBursatil.test.tsx`.

## Conclusión

- `closing_price` sí está definido y presente en contratos y mocks.
- La utilidad de cálculo existe (`processActionPrice`).
- El consumo final en UI está incompleto por ausencia de componentes de presentación en la rama `investors`.
