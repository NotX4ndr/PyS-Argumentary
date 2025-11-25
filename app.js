const SECTION_LABELS = {
  info: "Info general",
  coberturas: "Coberturas",
  exclusiones: "Exclusiones",
  procesos: "Procesos clave",
  fidelizacion: "Fidelización / Promos",
  ejemplos: "Ejemplos de uso",
  argumentario: "Argumentario simple"
};

const FAMILIES = [
  "Todas las familias",
  "PYS Protección",
  "PYS Gas",
  "SSAA Asistente Smart",
  "SSAA Mobility",
  "SSAA Seguridad",
  "SSAA Energía"
];

const PRODUCTS = [
  {
  id: "PIH",
  family: "PYS Protección",
  name: "PIH · Pack Iberdrola Hogar",
  price: "8,95 €/mes + impuestos",
  carencia: "1 mes general, 6 meses AE",
  fidelizacionResumen: "50% 12 meses si elegible",
  resumenCorto: "Pack integral con urgencias eléctricas, electrodomésticos, bricolaje y servicios digitales.",
  sections: {
    info: `
      PIH es un pack integral para clientes residenciales orientado a cubrir averías eléctricas, electrodomésticos, pequeños trabajos de bricolaje y servicios digitales como hogar conectado y ciberseguridad. Ofrece además un nivel básico de protección de pagos.
    `,
    coberturas: `
      <h3>Urgencias eléctricas</h3>
      <ul>
        <li>Atención urgente 24/7.</li>
        <li>Desplazamiento, mano de obra y materiales incluidos hasta el límite anual fijado en 300€ con opción a pago de sustitución por reparación inviable de
hasta 300€ en función de la antigüedad, a decisión del técnico.
.</li>
      </ul>
      <h3>Reparación de electrodomésticos</h3>
      <ul>
        <li>Incluye desplazamiento + 2 horas mano de obra.</li>
        <li>Piezas cubiertas hasta el límite económico anual.</li>
        <li>Electrodomésticos de cocina y TV bajo antigüedad máxima permitida.</li>
      </ul>
      <h3>Bricolaje eléctrico</h3>
      <ul>
        <li>Instalación de enchufes, interruptores, lámparas sobre punto existente.</li>
        <li>1 intervención anual incluida.</li>
      </ul>
      <h3>Servicios digitales</h3>
      <ul>
        <li>Ciberseguridad.</li>
        <li>Control parental.</li>
        <li>Asistencia remota.</li>
      </ul>
      <h3>Protección de pagos</h3>
      <ul>
        <li>Saldo compensatorio si se cumplen las condiciones (baja laboral, desempleo, etc.).</li>
      </ul>
    `,
    exclusiones: `
      <ul>
        <li>Averías en equipos fuera de antigüedad permitida.</li>
        <li>Instalaciones irregulares o sin certificación.</li>
        <li>Daños intencionados o manipulación indebida.</li>
      </ul>
    `,
    procesos: `
      <h3>Contratación</h3>
      <ul>
        <li>Comprobar potencia ≤ 15 kW.</li>
        <li>Cliente en mercado libre.</li>
      </ul>
      <h3>Uso</h3>
      <ul>
        <li>Clasificación correcta de avería.</li>
        <li>Confirmación del límite económico disponible.</li>
      </ul>
    `,
    fidelizacion: `
      <ul>
        <li>Ofrecer 50% 12 meses si el cliente duda por precio.</li>
        <li>Derivar a PEH si quiere algo más básico.</li>
      </ul>
    `,
    ejemplos: `
      <ul>
        <li>Cliente con lavadora y frigorífico antiguos.</li>
        <li>Familias con varios dispositivos electrónicos.</li>
      </ul>
    `,
    argumentario: `
      “Una sola avería eléctrica o de electrodoméstico puede superar en coste varios meses del pack PIH.”
    `
  }
},
{
  id: "PEH",
  family: "PYS Protección",
  name: "PEH · Protección Eléctrica Hogar",
  price: "6,95 €/mes + impuestos",
  carencia: "1 mes",
  fidelizacionResumen: "50% 12 meses si elegible",
  resumenCorto: "Cobertura básica de urgencias y averías de instalación eléctrica.",
  sections: {
    info: `
      PEH es el nivel básico de protección eléctrica para clientes residenciales. Cubre urgencias y averías en la instalación eléctrica interior con mano de obra y materiales limitados.
    `,
    coberturas: `
      <h3>Instalación eléctrica</h3>
      <ul>
        <li>Incluye desplazamiento, mano de obra y materiales hasta un límite de 550€ anuales sin limite de intervenciones.</li>
        <li>Reparaciones simples con materiales hasta límite anual.</li>
        <li>Atención en menos de 3 horas los 365 días del año excluyendo los garajes, trasteros, anexos, piscinas e iluminación exterior.</li>
      </ul>
    `,
    exclusiones: `
      <ul>
        <li>Instalaciones sin normativa o manipuladas.</li>
        <li>Averías derivadas de obras sin certificación.</li>
      </ul>
    `,
    procesos: `
      <ul>
        <li>Comprobación de elegibilidad.</li>
        <li>Apertura de servicio con clasificación exacta del fallo.</li>
      </ul>
    `,
    fidelizacion: `
      <ul>
        <li>Recordar coste real de una reparación eléctrica externa.</li>
      </ul>
    `,
    ejemplos: `
      <ul>
        <li>Salto continuo del automático.</li>
        <li>Cortocircuitos en puntos de luz.</li>
      </ul>
    `,
    argumentario: `
      “PEH evita pagar desplazamientos y mano de obra de urgencias eléctricas, que suelen ser costosos.”
    `
  }
},
{
  id: "PEH_PLUS",
  family: "PYS Protección",
  name: "PEH+ · Protección Eléctrica Hogar Plus",
  price: "Consultar precio vigente",
  carencia: "1 mes",
  fidelizacionResumen: "50% 12 meses si elegible",
  resumenCorto: "PEH ampliado con electrodomésticos y climatización.",
  sections: {
    info: `
      PEH+ amplía PEH añadiendo electrodomésticos, climatización y mayor cobertura de mano de obra.
    `,
    coberturas: `
      <h3>Instalación eléctrica</h3>
      <ul>
        <li>Urgencias eléctricas ampliadas.</li>
      </ul>
      <h3>Electrodomésticos</h3>
      <ul>
        <li>Reparación de electrodomésticos con desplazamiento y mano de obra.</li>
        <li>Materiales cubiertos hasta límite económico anual.</li>
      </ul>
      <h3>Climatización</h3>
      <ul>
        <li>Cobertura de equipos dentro de antigüedad permitida.</li>
      </ul>
    `,
    exclusiones: `
      <ul>
        <li>Antigüedad superior al límite.</li>
        <li>Equipos sin instalación reglamentaria.</li>
      </ul>
    `,
    procesos: `
      <ul>
        <li>Validar que no existen equipos fuera de rango.</li>
      </ul>
    `,
    fidelizacion: `
      <ul>
        <li>Comparar coste usual de climatización/electrodomésticos.</li>
      </ul>
    `,
    ejemplos: `
      <ul>
        <li>Averías de aire acondicionado.</li>
      </ul>
    `,
    argumentario: `
      “PEH+ protege electrodomésticos y climatización, reparaciones de alto coste en temporada.”
    `
  }
},
{
  id: "PB",
  family: "PYS Protección",
  name: "PB · Pack Bienestar",
  price: "8,95 €/mes + impuestos",
  carencia: "1 mes",
  fidelizacionResumen: "50% 12 meses",
  resumenCorto: "Cobertura de urgencias eléctricas y pequeños servicios del hogar.",
  sections: {
    info: `
      Pack Bienestar cubre urgencias básicas del hogar con especial foco en electricidad y pequeñas incidencias domésticas.
    `,
    coberturas: `
      <ul>
        <li>Urgencias eléctricas con desplazamiento y mano de obra.</li>
        <li>Pequeños trabajos básicos según ficha técnica.</li>
      </ul>
    `,
    exclusiones: `
      <ul>
        <li>Materiales no incluidos fuera del límite anual.</li>
      </ul>
    `,
    procesos: `
      <ul>
        <li>Validar elegibilidad.</li>
      </ul>
    `,
    fidelizacion: `
      <ul>
        <li>Recordar que incluye desplazamiento + mano de obra.</li>
      </ul>
    `,
    ejemplos: `
      <ul>
        <li>Cortocircuitos y problemas habituales.</li>
      </ul>
    `,
    argumentario: `
      “PB cubre las urgencias habituales sin coste adicional para el cliente.”
    `
  }
},
{
  id: "TAL",
  family: "PYS Protección",
  name: "TAL · Tu Asesor Legal",
  price: "3,95 €/mes + impuestos",
  carencia: "30 días",
  fidelizacionResumen: "50% 12 meses",
  resumenCorto: "Consultas jurídicas ilimitadas y revisión de documentos.",
  sections: {
    info: `
      Servicio de consulta telefónica con abogados especializados: vivienda, consumo, laboral y fiscalidad básica.
    `,
    coberturas: `
      <ul>
        <li>Consultas ilimitadas.</li>
        <li>Revisión de contratos.</li>
        <li>Redacción de escritos simples.</li>
      </ul>
    `,
    exclusiones: `
      <ul>
        <li>No cubre abogado presencial ni costas.</li>
      </ul>
    `,
    procesos: `
      <ul>
        <li>Transferencia al proveedor jurídico.</li>
      </ul>
    `,
    fidelizacion: `
      <ul>
        <li>Recordar precio de una consulta privada externa.</li>
      </ul>
    `,
    ejemplos: `
      <ul>
        <li>Cliente que va a firmar alquiler.</li>
      </ul>
    `,
    argumentario: `
      “Una sola consulta externa supera la cuota anual del servicio.”
    `
  }
},
{
  id: "PMG",
  family: "PYS Gas",
  name: "PMG · Pack Mantenimiento Gas",
  price: "9,95 €/mes + impuestos",
  carencia: "15 días",
  fidelizacionResumen: "50% 12 meses si es elegible",
  resumenCorto: "Revisión anual de gas + asistencia en averías con mano de obra y desplazamiento incluidos.",
  sections: {
    info: `
      PMG cubre la revisión anual de la instalación de gas y de la caldera, además de reparaciones urgentes con desplazamiento y mano de obra incluidos. Proporciona mantenimiento preventivo y correctivo, reduciendo el riesgo de fallos y evitando costes inesperados.
    `,
    coberturas: `
      <h3>Revisión anual obligatoria</h3>
      <ul>
        <li>Revisión de caldera e instalación de gas.</li>
        <li>Emisión de informe técnico.</li>
        <li>Ajustes menores incluidos.</li>
      </ul>

      <h3>Averías de la instalación de gas</h3>
      <ul>
        <li>Desplazamiento incluido 100%.</li>
        <li>Mano de obra incluida 100%.</li>
        <li>Materiales cubiertos hasta el límite anual indicado por proveedor.</li>
      </ul>

      <h3>Asistencia urgente</h3>
      <ul>
        <li>Atención 24/7 en fugas o riesgo.</li>
      </ul>
    `,
    exclusiones: `
      <ul>
        <li>Calderas con antigüedad superior al límite fijado por proveedor.</li>
        <li>Instalaciones irregulares o sin normativa.</li>
        <li>Daños estructurales ajenos al circuito de gas.</li>
      </ul>
    `,
    procesos: `
      <h3>Alta</h3>
      <ul>
        <li>Verificación de elegibilidad de caldera y sistema.</li>
        <li>Aplicación de carencia según normativa.</li>
      </ul>

      <h3>Uso</h3>
      <ul>
        <li>Clasificación del tipo de avería: caldera / conducción / válvula.</li>
        <li>Confirmación de disponibilidad técnica.</li>
      </ul>

      <h3>Baja</h3>
      <ul>
        <li>Riesgo de regularización si no se ha realizado la revisión anual dentro del ciclo.</li>
      </ul>
    `,
    fidelizacion: `
      <ul>
        <li>Recordar que una revisión anual externa supera el coste de varios meses.</li>
        <li>Ofrecer 50% 12 meses si el cliente valora coste.</li>
        <li>Comparar precio de reparación de caldera sin servicio.</li>
      </ul>
    `,
    ejemplos: `
      <ul>
        <li>Cliente con caldera antigua o historial de fallos.</li>
        <li>Viviendas con revisiones pendientes.</li>
      </ul>
    `,
    argumentario: `
      “Una reparación de caldera puede superar fácilmente la cuota anual de PMG. Con este servicio, revisión + asistencia urgente están cubiertas sin coste adicional.”
    `
  }
},
{
  id: "AG",
  family: "PYS Gas",
  name: "AG · Asistencia Gas",
  price: "5,95€/mes + impuestos",
  carencia: "15 días",
  fidelizacionResumen: "50% 12 meses",
  resumenCorto: "Asistencia urgente en instalación de gas con desplazamiento y mano de obra incluidos.",
  sections: {
    info: `
      AG es un servicio orientado a dar soporte rápido frente a incidencias en la instalación de gas, sin incluir mantenimiento preventivo. Ideal para clientes que solo necesitan intervenciones puntuales.
    `,
    coberturas: `
      <ul>
        <li>Asistencia urgente por fugas o cortes.</li>
        <li>Desplazamiento incluido 100%.</li>
        <li>Mano de obra incluida hasta límite anual.</li>
        <li>Materiales incluidos hasta límite económico de proveedor.</li>
      </ul>
    `,
    exclusiones: `
      <ul>
        <li>No incluye revisión anual.</li>
        <li>No cubre caldera completa (solo instalación).</li>
        <li>Daños estructurales no vinculados a gas.</li>
      </ul>
    `,
    procesos: `
      <ul>
        <li>Identificar si es instalación o caldera (si es caldera → PMG/PG).</li>
        <li>Clasificar si existe riesgo para activar urgencias 24/7.</li>
      </ul>
    `,
    fidelizacion: `
      <ul>
        <li>Comparar con precio de desplazamiento de un técnico independiente.</li>
        <li>Ofrecer subida a PMG si quiere revisión anual.</li>
      </ul>
    `,
    ejemplos: `
      <ul>
        <li>Olor a gas o pérdida de presión.</li>
        <li>Cortes de suministro internos.</li>
      </ul>
    `,
    argumentario: `
      “Una intervención de instalación de gas sin servicio puede costar más que meses del pack AG.”
    `
  }
},
{
  id: "PG",
  family: "PYS Gas",
  name: "PG · Protección Gas",
  price: "4,95€/mes + impuestos",
  carencia: "15 días",
  fidelizacionResumen: "50% 12 meses",
  resumenCorto: "Cobertura ampliada de gas: instalación + caldera + mano de obra + materiales.",
  sections: {
    info: `
      PG es la cobertura más completa en el área de gas. Incluye tanto la instalación interior como la caldera, cubriendo mantenimiento correctivo con un nivel económico superior al de AG.
    `,
    coberturas: `
      <h3>Instalación de gas</h3>
      <ul>
        <li>Reparaciones de conducción.</li>
        <li>Desplazamiento y mano de obra incluidos.</li>
        <li>Materiales incluidos hasta límite ampliado.</li>
      </ul>

      <h3>Caldera</h3>
      <ul>
        <li>Reparaciones de componentes internos.</li>
        <li>Ajustes y purgado.</li>
        <li>Materiales y piezas cubiertas hasta tope técnico anual.</li>
      </ul>

      <h3>Asistencia urgente</h3>
      <ul>
        <li>Fugas o riesgo → intervención inmediata.</li>
      </ul>
    `,
    exclusiones: `
      <ul>
        <li>Calderas con antigüedad superior al límite.</li>
        <li>Instalaciones sin normativa.</li>
      </ul>
    `,
    procesos: `
      <ul>
        <li>Alta: verificar caldera y datos del fabricante.</li>
        <li>Uso: diferenciar instalación vs caldera.</li>
      </ul>
    `,
    fidelizacion: `
      <ul>
        <li>Comparar coste habitual de reparaciones de caldera.</li>
        <li>Ofrecer bajada a PMG si el cliente quiere reducir cuota.</li>
      </ul>
    `,
    ejemplos: `
      <ul>
        <li>Fallos en quemador.</li>
        <li>Averías recurrentes en tuberías internas.</li>
      </ul>
    `,
    argumentario: `
      “PG cubre tanto instalación como caldera, evitando gastos imprevistos de reparaciones de alto coste.”
    `
  }
},
{
  id: "AS",
  family: "SSAA Asistente Smart",
  name: "AS · Asistente Smart (Residencial)",
  price: "2,95 €/mes + impuestos",
  carencia: "Carencia 1 mes para reparaciones / 6 meses para Asesoramiento Energético",
  fidelizacionResumen: "Descuento fidelización 50% 12 meses si no disfruta descuentos de captación",
  resumenCorto: "Servicio digital que combina información detallada de consumos, reparación de electrodomésticos y Asesoramiento Energético.",
  sections: {
    info: `
      Asistente Smart Residencial es el servicio histórico para clientes domésticos 2.0TD que quieren entender mejor su consumo,
      tener apoyo en la reparación de electrodomésticos y acceder a Asesoramiento Energético.
      Desde febrero de 2024, se prioriza la contratación de Asistente Smart Hogar (ASH), manteniendo AS como alternativa solo si el cliente rechaza el ASH.
    `,
    coberturas: `
      <h3>Información detallada de consumos</h3>
      <ul>
        <li>Acceso desde App / Web Iberdrola Clientes.</li>
        <li>Desagregación aproximada del consumo por usos y electrodomésticos, sin necesidad de instalar dispositivos adicionales.</li>
        <li>Histórico de consumo en €/kWh y gráficos comparativos.</li>
        <li>Alertas y notificaciones con consejos de ahorro.</li>
      </ul>

      <h3>Reparación de electrodomésticos</h3>
      <ul>
        <li>Cobertura para frigorífico, lavadora, cocina eléctrica, horno, campana, lavavajillas, secadora y congelador.</li>
        <li>Incluye desplazamiento y 2 horas de mano de obra por intervención.</li>
        <li>Sin límite de intervenciones, dentro de las condiciones del servicio.</li>
        <li>Carencia de 1 mes para esta cobertura.</li>
      </ul>

      <h3>Asesoramiento Energético (AE)</h3>
      <ul>
        <li>Estudio del consumo y recomendaciones de eficiencia.</li>
        <li>Carencia de 6 meses desde el alta para poder utilizarlo.</li>
      </ul>
    `,
    exclusiones: `
      <ul>
        <li>No compatible con Energy Wallet ni con Asistente Smart Empresas.</li>
        <li>No cubre televisores ni calderas/termos eléctricos.</li>
        <li>No cubre electrodomésticos en garantía ni equipos fuera del domicilio del punto de suministro.</li>
        <li>La información de consumo es estimada y no equivale a un equipo de medida en tiempo real.</li>
      </ul>
    `,
    procesos: `
      <h3>Contratación</h3>
      <ul>
        <li>Clientes residenciales con tarifa eléctrica 2.0TD.</li>
        <li>Requiere contador con telegestión operativa.</li>
        <li>Ofrecer ASH como opción principal y AS solo si el cliente no quiere ASH.</li>
      </ul>

      <h3>Uso del servicio</h3>
      <ul>
        <li>Las consultas sobre consumo se gestionan vía App/Web; si hay incidencias, se deriva según procedimiento de Asistente Smart.</li>
        <li>Para reparaciones de electrodomésticos, abrir solicitud indicando tipo de equipo, antigüedad aproximada y síntoma.</li>
        <li>Para Asesoramiento Energético, confirmar que se ha superado la carencia de 6 meses antes de ofrecer la visita/estudio.</li>
      </ul>
    `,
    fidelizacion: `
      <ul>
        <li>Antes de tramitar una baja, recordar al cliente el coste de una reparación estándar (desplazamiento + mano de obra) sin servicio.</li>
        <li>Aplicar, si procede, descuento de fidelización del 50% durante 12 meses sobre la cuota, siempre que no tenga descuentos de captación activos.</li>
        <li>Si el cliente solo usa la parte de consumos, valorar migrar a ASH si le aporta más valor (hogar digital) o a otro servicio según perfil.</li>
      </ul>
    `,
    ejemplos: `
      <ul>
        <li>Cliente que sospecha que un electrodoméstico gasta demasiado y quiere identificarlo.</li>
        <li>Cliente que ha tenido varias averías de lavadora o frigorífico y quiere evitar más gastos imprevistos.</li>
      </ul>
    `,
    argumentario: `
      “Con Asistente Smart ve en detalle cómo y cuándo consume su energía, recibe recomendaciones para ahorrar y, además, tiene cubiertas
      las averías de sus electrodomésticos más importantes con desplazamiento y mano de obra incluidos. Una sola reparación sin servicio puede
      costar más que varios meses de cuota.”
    `
  }
},
{
  id: "ASH",
  family: "SSAA Asistente Smart",
  name: "ASH · Asistente Smart Hogar",
  price: "3,45 €/mes + impuestos",
  carencia: "Carencia 1 mes para reparaciones de electrodomésticos; 1 mes en Hogar Digital salvo indicación distinta",
  fidelizacionResumen: "Descuento fidelización 50% 12 meses o meses gratis según campañas de SSAA",
  resumenCorto: "Servicio prioritario para residenciales: combina Asistente Smart + Hogar Digital + Protección de Pagos Esencial.",
  sections: {
    info: `
      Asistente Smart Hogar es la evolución del Asistente Smart Residencial. Incluye:
      información detallada de consumos, reparación de electrodomésticos, Hogar Digital (ciberseguridad + soporte técnico)
      y Servicio de Protección de Pagos Esencial.
      Es el servicio de referencia que se debe ofrecer por defecto a clientes domésticos que cumplan requisitos.
    `,
    coberturas: `
      <h3>Información detallada de consumos</h3>
      <ul>
        <li>Acceso directo desde la App Iberdrola Clientes.</li>
        <li>Consumo desglosado por electrodomésticos y categorías.</li>
        <li>Evolución en € y kWh, con gráficos y comparativas.</li>
        <li>Notificaciones sobre consumos anómalos y consejos de ahorro.</li>
      </ul>

      <h3>Reparación de electrodomésticos</h3>
      <ul>
        <li>Frigorífico, lavadora, cocina eléctrica, horno, campana, lavavajillas, secadora, congelador.</li>
        <li>Cubre desplazamiento y 2 horas de mano de obra por intervención.</li>
        <li>Sin límite de intervenciones, según condiciones del servicio.</li>
        <li>Atención en un máximo de 48 horas laborables.</li>
        <li>Excluye calderas, termos eléctricos y televisores.</li>
        <li>Carencia de 30 días para reparación de electrodomésticos.</li>
      </ul>

      <h3>Hogar Digital</h3>
      <ul>
        <li>Servicio de ciberseguridad: antivirus, control parental, protección bancaria, protección de identidad, informe de presencia en Internet, borrado digital.</li>
        <li>Soporte digital remoto 24h para ordenadores y dispositivos conectados, con hasta 2 visitas presenciales al año si no puede resolverse online.</li>
        <li>Soporte IoT (hogar conectado) y optimización de dispositivos y conectividad.</li>
      </ul>

      <h3>Servicio de Protección de Pagos Esencial</h3>
      <ul>
        <li>Coberturas básicas en caso de determinadas contingencias (incapacidad, desempleo, fallecimiento, etc.) según perfil del cliente.</li>
      </ul>
    `,
    exclusiones: `
      <ul>
        <li>Electrodomésticos en garantía del fabricante.</li>
        <li>Equipos no ubicados habitualmente en el domicilio del suministro.</li>
        <li>Calderas, termos eléctricos y televisores no están cubiertos por la parte de reparación de electrodomésticos.</li>
        <li>Hogar Digital no cubre daños físicos en dispositivos, solo software/servicio.</li>
        <li>No compatible con Energy Wallet ni con AS Empresas.</li>
      </ul>
    `,
    procesos: `
      <h3>Contratación</h3>
      <ul>
        <li>Clientes residenciales con tarifa eléctrica 2.0TD.</li>
        <li>Potencia contratada ≤ 15 kW.</li>
        <li>Requiere contador con telegestión operativa.</li>
        <li>Ofrecer ASH como opción principal. Solo si el cliente no quiere incluir Hogar Digital y SPP, valorar otras alternativas.</li>
      </ul>

      <h3>Uso del servicio</h3>
      <ul>
        <li>Reparaciones: abrir parte indicando electrodoméstico, antigüedad, síntoma y confirmar carencia superada.</li>
        <li>Hogar Digital: el cliente accede a hogardigitaliberdrola.es para activar/usar coberturas.</li>
        <li>Consultas de consumos: guiar al cliente en el uso de la App y resolver dudas de interpretación.</li>
      </ul>
    `,
    fidelizacion: `
      <ul>
        <li>Recordar que integra varios servicios en una sola cuota (consumo + reparaciones + digital + protección de pagos).</li>
        <li>Si el cliente ve el precio alto pero reconoce el valor, ofrecer 50% 12 meses o meses gratis según política de fidelización y campañas.</li>
        <li>Si el cliente no utiliza Hogar Digital, explorar bajar a un producto más simple (p.ej. solo Asistente Smart) manteniendo parte del valor.</li>
      </ul>
    `,
    ejemplos: `
      <ul>
        <li>Familias con varios electrodomésticos y uso intensivo de internet y dispositivos conectados.</li>
        <li>Clientes preocupados por ciberseguridad y protección de menores en internet.</li>
      </ul>
    `,
    argumentario: `
      “Con Asistente Smart Hogar en una sola cuota tiene:
      control de su consumo eléctrico, reparaciones de los electrodomésticos más importantes sin pagar desplazamiento ni mano de obra,
      protección digital para toda la familia y un seguro que le ayuda a pagar las facturas en situaciones complicadas. Si sumáramos todos
      estos servicios por separado, el coste sería muy superior.”
    `
  }
},
{
  id: "ASE",
  family: "SSAA Asistente Smart",
  name: "ASE · Asistente Smart Empresas",
  price: "2,95 €/mes + impuestos",
  carencia: "Sin carencia",
  fidelizacionResumen: "Descuento fidelización 50% 12 meses aplicable como Asistente Smart Empresas",
  resumenCorto: "Servicio de información y optimización de consumos para PYMES, con informes y recomendaciones de eficiencia.",
  sections: {
    info: `
      Asistente Smart Empresas permite a las PYMES visualizar y analizar su consumo energético sin necesidad de instalar hardware adicional.
      Está pensado para negocios como tiendas, restaurantes y oficinas, y se irá ampliando a otros sectores.
    `,
    coberturas: `
      <ul>
        <li>Información desglosada del consumo energético del negocio.</li>
        <li>Comparativas con instalaciones similares (tipo de actividad, superficie, ubicación).</li>
        <li>Recomendaciones personalizadas para mejorar la eficiencia energética.</li>
        <li>Informes mensuales accesibles en el área cliente o por correo electrónico.</li>
        <li>Acceso a plataforma NZE Manager con plan de descarbonización y seguimiento.</li>
      </ul>
    `,
    exclusiones: `
      <ul>
        <li>No incluye reparaciones ni averías de equipos o instalaciones.</li>
        <li>No compatible con Energy Wallet.</li>
        <li>No sustituye a un sistema de monitorización hardware en tiempo real, trabaja sobre datos de medida existentes.</li>
      </ul>
    `,
    procesos: `
      <h3>Contratación</h3>
      <ul>
        <li>Negocios con tarifa 2.0TD o 3.0TD.</li>
        <li>Confirmar que el cliente entiende que es un servicio de análisis y asesoramiento, no de reparación.</li>
      </ul>

      <h3>Uso del servicio</h3>
      <ul>
        <li>Indicar al cliente cómo acceder a los informes mensuales y a la plataforma web.</li>
        <li>Si el cliente detecta incoherencias, revisar primero sus datos de contrato y consumo antes de escalar como incidencia.</li>
      </ul>
    `,
    fidelizacion: `
      <ul>
        <li>Destacar el potencial de ahorro en la factura eléctrica gracias a la optimización de hábitos y potencia contratada.</li>
        <li>Recordar que el coste del servicio es reducido frente al ahorro potencial si se aplican las recomendaciones.</li>
      </ul>
    `,
    ejemplos: `
      <ul>
        <li>Restaurante con consumo elevado en horas punta que quiere ajustar el uso de equipos.</li>
        <li>Tienda u oficina que quiere reducir su término de potencia y consumos nocturnos innecesarios.</li>
      </ul>
    `,
    argumentario: `
      “Con Asistente Smart Empresas tiene un ‘consultor energético’ permanente para su negocio: ve dónde se va la energía,
      recibe recomendaciones concretas y puede reducir su factura sin inversiones adicionales.”
    `
  }
},
{
  id: "ASA",
  family: "SSAA Asistente Smart",
  name: "ASA · Asistente Smart Avanzado",
  price: "2,95 €/mes + impuestos",
  carencia: "Sin carencia",
  fidelizacionResumen: "Promoción habitual: 12 meses gratis + bonificación 50% energía gestionada para carga de VE",
  resumenCorto: "Monitorización avanzada con hardware incluido para consumo y carga de vehículo eléctrico.",
  sections: {
    info: `
      Asistente Smart Avanzado está pensado para clientes residenciales con vehículo eléctrico y/o instalación solar realizada por Iberdrola.
      Incluye un Monitor de Consumo Smart que permite un control granular del consumo y de la carga del vehículo, así como recomendaciones
      avanzadas de optimización.
    `,
    coberturas: `
      <h3>Monitorización avanzada</h3>
      <ul>
        <li>Monitor de Consumo Smart instalado, que mide consumo en tiempo casi real de los principales circuitos.</li>
        <li>Visualización detallada en la App Iberdrola Clientes.</li>
        <li>Alertas de potencia, hábitos de uso y anomalías de consumo.</li>
      </ul>

      <h3>Optimización de carga de vehículo eléctrico</h3>
      <ul>
        <li>Recomendaciones de carga para aprovechar horas más económicas.</li>
        <li>Promoción de bonificación del 50% en la energía que gestiona el propio Asistente para cargar el vehículo eléctrico
            (según condiciones de campaña).</li>
      </ul>

      <h3>Hardware incluido</h3>
      <ul>
        <li>Monitor de Consumo Smart incluido sin coste inicial para el cliente, sujeto a permanencia de 12 meses.</li>
      </ul>
    `,
    exclusiones: `
      <ul>
        <li>El hardware queda sujeto a permanencia: si hay baja anticipada, se puede facturar parte del valor del monitor según meses restantes.</li>
        <li>Requiere condiciones técnicas: potencia hasta 15 kW, instalación solar de Iberdrola y equipos compatibles (punto de recarga, etc.).</li>
      </ul>
    `,
    procesos: `
      <h3>Contratación</h3>
      <ul>
        <li>Validar requisitos técnicos: instalación solar Iberdrola, potencia ≤ 15 kW, punto de recarga Wallbox Pulsar Plus u otros equipos compatibles.</li>
        <li>Explicar claramente la permanencia de 12 meses asociada al monitor de consumo.</li>
      </ul>

      <h3>Instalación</h3>
      <ul>
        <li>Se agenda visita técnica para instalación del monitor y configuración con la App.</li>
      </ul>
    `,
    fidelizacion: `
      <ul>
        <li>Recordar que el cliente disfruta de 12 meses gratis y de bonificación sobre la energía gestionada para la carga del VE.</li>
        <li>En caso de querer baja, recordar la permanencia asociada al hardware y los posibles cargos si se da de baja antes de los 12 meses.</li>
      </ul>
    `,
    ejemplos: `
      <ul>
        <li>Cliente con vehículo eléctrico y placas solares que quiere exprimir al máximo su instalación.</li>
      </ul>
    `,
    argumentario: `
      “Con Asistente Smart Avanzado ve exactamente cómo consume su hogar y su vehículo eléctrico, y puede ajustar su comportamiento
      para pagar menos en la factura, además de aprovechar promociones en la energía que utiliza para cargar el coche.”
    `
  }
},
{
  id: "ASA_SM",
  family: "SSAA Asistente Smart",
  name: "ASA · Asistente Smart Avanzado sin monitor",
  price: "2,95 €/mes + impuestos",
  carencia: "Sin carencia",
  fidelizacionResumen: "Promoción habitual: 12 meses gratis + bonificación 50% energía para carga VE. Sin permanencia.",
  resumenCorto: "Variante de Asistente Smart Avanzado orientada solo a gestión de vehículo eléctrico, sin monitor físico.",
  sections: {
    info: `
      Asistente Smart Avanzado sin monitor es la variante de ASA para clientes que no necesitan el dispositivo de monitorización.
      Se centra en la gestión inteligente de la carga del vehículo eléctrico mediante la App Iberdrola Clientes.
    `,
    coberturas: `
      <ul>
        <li>Gestión y optimización de la carga del vehículo eléctrico mediante la App.</li>
        <li>Recomendaciones de horarios de carga más económicos.</li>
        <li>Promoción de 12 meses gratis y bonificación del 50% en la energía que el Asistente gestiona para la carga del VE (según campaña).</li>
      </ul>
    `,
    exclusiones: `
      <ul>
        <li>No incluye Monitor de Consumo Smart ni permanencia asociada a hardware.</li>
        <li>Requiere vehículo eléctrico compatible y conectividad móvil en el lugar de estacionamiento.</li>
      </ul>
    `,
    procesos: `
      <h3>Contratación</h3>
      <ul>
        <li>Clientes residenciales con tarifa 2.0TD/2.1TD y vehículo eléctrico compatible.</li>
        <li>El técnico verifica compatibilidad del VE en la visita inicial si es necesario.</li>
      </ul>
    `,
    fidelizacion: `
      <ul>
        <li>En clientes que usan intensamente su VE, reforzar el ahorro que obtienen al optimizar la carga.</li>
        <li>Al no haber permanencia por hardware, el argumento de baja es más por valor que por compromiso.</li>
      </ul>
    `,
    ejemplos: `
      <ul>
        <li>Cliente con vehículo eléctrico, sin instalación solar, que solo quiere optimizar cuándo y cómo carga.</li>
      </ul>
    `,
    argumentario: `
      “Si carga su vehículo eléctrico con Asistente Smart Avanzado sin monitor, aprovecha mejor las horas baratas y puede beneficiarse
      de la bonificación sobre la energía gestionada por el servicio, sin necesidad de instalar ningún dispositivo adicional.”
    `
  }
},
  {
  id: "IREPAIR",
  family: "SSAA Mobility",
  name: "I+ Repair Mobility",
  price: "2,95 €/mes + impuestos",
  carencia: "1 mes",
  fidelizacionResumen: "Promos habituales en alta; fidelización con 50% 12 meses si no hay descuento de captación",
  resumenCorto: "Reparación del punto de recarga del vehículo eléctrico con desplazamiento y mano de obra incluidos, hasta un límite económico.",
  sections: {
    info: `
      I+ Repair Mobility es el servicio básico de reparación del punto de recarga (PR) asociado al vehículo eléctrico del cliente.
      Está pensado para quienes quieren asegurar el correcto funcionamiento del PR y evitar costes elevados en caso de avería.
    `,
    coberturas: `
      <h3>Reparación del punto de recarga</h3>
      <ul>
        <li>Desplazamiento del técnico incluido.</li>
        <li>Mano de obra incluida en la intervención.</li>
        <li>Materiales cubiertos hasta un máximo de 300 € por avería.</li>
        <li>Número de intervenciones según condiciones de la ficha interna (habitualmente 1-2 al año con cobertura económica completa).</li>
      </ul>
      <h3>Ámbito</h3>
      <ul>
        <li>Puntos de recarga vinculados a Iberdrola y compatibles con el servicio.</li>
        <li>Aplicable a PR domésticos instalados en garaje privado o comunitario, según condiciones.</li>
      </ul>
    `,
    exclusiones: `
      <ul>
        <li>No cubre daños por vandalismo, inundaciones u otros riesgos extraordinarios, que corresponden al seguro de hogar o comunidad.</li>
        <li>No cubre puntos de recarga instalados por terceros fuera del canal autorizado.</li>
        <li>No cubre vehículos eléctricos en sí mismos, solo el punto de recarga.</li>
      </ul>
    `,
    procesos: `
      <h3>Contratación</h3>
      <ul>
        <li>Verificar que el cliente tiene punto de recarga compatible y contrato de luz con Iberdrola.</li>
        <li>Explicar la carencia de 1 mes y el límite económico por avería (300 € en materiales y mano de obra).</li>
      </ul>
      <h3>Gestión de averías</h3>
      <ul>
        <li>Abrir parte indicando modelo del PR, ubicación (garaje privado/comunitario) y síntoma (no carga, error, fallo de comunicaciones, etc.).</li>
        <li>Informar de que el técnico valorará si la reparación entra en cobertura o si requiere presupuesto adicional fuera del límite.</li>
      </ul>
    `,
    fidelizacion: `
      <ul>
        <li>Si el cliente quiere baja por precio, comparar el coste de una sola intervención técnica de PR sin servicio con la cuota anual de I+ Repair Mobility.</li>
        <li>Ofrecer, si aplica, 50% 12 meses para reducir la cuota y mantener la cobertura.</li>
      </ul>
    `,
    ejemplos: `
      <ul>
        <li>Cliente cuyo PR deja de cargar o muestra errores de forma recurrente.</li>
        <li>Instalación en garaje comunitario con difícil acceso a técnicos externos.</li>
      </ul>
    `,
    argumentario: `
      “El punto de recarga es como la ‘gasolinera’ del vehículo eléctrico: si se avería, la reparación externa puede ser costosa.
      Con I+ Repair Mobility tiene desplazamiento y mano de obra incluidos, y la mayor parte de los materiales cubiertos hasta 300 €,
      lo que suele ser más que la cuota de todo el año.”
    `
  }
},
{
  id: "IHELP",
  family: "SSAA Mobility",
  name: "I+ Help Mobility",
  price: "11,95 €/mes + impuestos",
  carencia: "1 mes",
  fidelizacionResumen: "Promos habituales: hasta 2 meses gratis en captación; fidelización con descuentos sobre la cuota",
  resumenCorto: "Asistencia en ruta y en vacaciones para usuarios de vehículo eléctrico, con solución en caso de incidencias relacionadas con la recarga.",
  sections: {
    info: `
      I+ Help Mobility se centra en la asistencia al cliente cuando está de viaje o desplazado y tiene problemas para cargar
      o para continuar su ruta por incidencias vinculadas al uso del vehículo eléctrico.
    `,
    coberturas: `
      <h3>Solución vacaciones</h3>
      <ul>
        <li>Asistencia en desplazamientos vacacionales si el cliente tiene una incidencia de recarga vinculada al servicio.</li>
        <li>Organización de alternativas para que el cliente pueda continuar su viaje (según condiciones del servicio).</li>
      </ul>

      <h3>Traslado del beneficiario</h3>
      <ul>
        <li>Traslado del beneficiario hasta un máximo de 100 € por evento cubierto.</li>
        <li>Puede incluir taxi, remolque u otros medios según el tipo de incidencia y condiciones vigentes.</li>
      </ul>
    `,
    exclusiones: `
      <ul>
        <li>No cubre accidentes de tráfico ni daños al vehículo: eso corresponde al seguro del coche.</li>
        <li>No cubre incidencias de recarga en puntos que no sean compatibles o estén fuera del ámbito del servicio.</li>
        <li>No cubre gastos superiores a los límites marcados (p. ej. más de 100 € en traslado sin acuerdo previo).</li>
      </ul>
    `,
    procesos: `
      <h3>Contratación</h3>
      <ul>
        <li>Verificar que el cliente tiene vehículo eléctrico y usa puntos de recarga Iberdrola (hogar o red pública).</li>
        <li>Explicar la carencia de 1 mes y el límite de 100 € en traslados por incidente.</li>
      </ul>

      <h3>Uso del servicio</h3>
      <ul>
        <li>En caso de incidencia en ruta, se utiliza el teléfono de asistencia del servicio Mobility, que activa protocolo de ayuda.</li>
        <li>El agente debe informar del tipo de cobertura (solución vacaciones, traslado, etc.) y de los límites económicos.</li>
      </ul>
    `,
    fidelizacion: `
      <ul>
        <li>En clientes que viajan mucho con su VE, recordar el impacto que tiene quedarse sin solución en mitad de un viaje por avería o problema de recarga.</li>
        <li>Ofrecer descuentos de fidelización (p. ej., 50% 12 meses) si el motivo de baja es el coste y el cliente reconoce valor en la tranquilidad que le aporta.</li>
      </ul>
    `,
    ejemplos: `
      <ul>
        <li>Cliente que hace viajes largos de verano y quiere asegurar asistencia si tiene problemas de recarga.</li>
        <li>Clientes con segunda residencia a la que se desplazan con el vehículo eléctrico con frecuencia.</li>
      </ul>
    `,
    argumentario: `
      “Con I+ Help Mobility no solo tiene un seguro clásico del coche, sino un servicio específico para la movilidad eléctrica:
      si en vacaciones tiene un problema de recarga o se queda tirado, tiene cubiertos asistencia y traslado hasta 100 € por incidente.”
    `
  }
},
{
  id: "IPACK",
  family: "SSAA Mobility",
  name: "I+ Pack Mobility",
  price: "12,95 €/mes + impuestos",
  carencia: "1 mes",
  fidelizacionResumen: "Promos habituales: 4 meses al 50%; fidelización alineada con dichas promociones",
  resumenCorto: "Pack completo que une reparación del punto de recarga y asistencia en movilidad (Help + Repair). Es la opción más completa para VE.",
  sections: {
    info: `
      I+ Pack Mobility combina las coberturas de reparación del punto de recarga (I+ Repair) con las coberturas de asistencia en ruta y vacaciones (I+ Help).
      Es el producto recomendado para clientes de vehículo eléctrico que quieren tenerlo todo cubierto: en casa y durante los desplazamientos.
    `,
    coberturas: `
      <h3>Reparación del punto de recarga</h3>
      <ul>
        <li>Desplazamiento del técnico totalmente incluido.</li>
        <li>Mano de obra incluida hasta el tiempo fijado en las condiciones.</li>
        <li>Materiales cubiertos hasta 300 € por avería.</li>
        <li>Aplicable a PR compatibles vinculados al contrato de Iberdrola.</li>
      </ul>

      <h3>Solución vacaciones</h3>
      <ul>
        <li>Asistencia en desplazamientos vacacionales ante incidencias de recarga.</li>
        <li>Organización de alternativas para continuar el viaje (según condiciones).</li>
      </ul>

      <h3>Traslado del beneficiario</h3>
      <ul>
        <li>Cubre gastos de traslado del beneficiario hasta un máximo de 100 € por evento.</li>
        <li>Puede incluir taxi, remolque u otros medios de transporte en función del caso.</li>
      </ul>
    `,
    exclusiones: `
      <ul>
        <li>No cubre daños al vehículo derivados de accidentes, que corresponden al seguro del automóvil.</li>
        <li>No cubre PR no instalados o no homologados dentro del ámbito del servicio.</li>
        <li>Los límites económicos por avería (300 €) y traslado (100 €) no son ampliables salvo campañas específicas.</li>
      </ul>
    `,
    procesos: `
      <h3>Contratación</h3>
      <ul>
        <li>Confirmar que el cliente tiene PR compatible y vehículo eléctrico.</li>
        <li>Explicar de forma clara la diferencia entre solo Repair, solo Help y el Pack completo.</li>
        <li>Informar de las promociones vigentes (por ejemplo, 4 meses al 50%).</li>
      </ul>

      <h3>Uso del servicio</h3>
      <ul>
        <li>Para averías de PR: abrir parte detallando modelo, síntoma y ubicación, indicando que el cliente dispone de Pack Mobility.</li>
        <li>Para incidencias en ruta: derivar al teléfono de asistencia vinculado a Mobility, indicando la modalidad Pack.</li>
      </ul>
    `,
    fidelizacion: `
      <ul>
        <li>Si el cliente duda por precio, compararlo con el coste de una sola reparación de PR + un servicio de grúa/traslado en viaje sin tener el pack.</li>
        <li>Ofrecer fidelización (50% 12 meses o adaptación a las promos activas) manteniendo la cobertura completa.</li>
        <li>Si aun así ve caro el pack, plantear bajar a I+ Repair o I+ Help según el tipo de protección que más valore.</li>
      </ul>
    `,
    ejemplos: `
      <ul>
        <li>Clientes que usan el vehículo eléctrico a diario y hacen al menos un viaje largo al año.</li>
        <li>Usuarios con PR en garaje comunitario que quieren asegurar tanto la reparación como la asistencia fuera de casa.</li>
      </ul>
    `,
    argumentario: `
      “I+ Pack Mobility une lo mejor de los dos mundos: si se avería el punto de recarga en casa, la reparación está cubierta;
      si el problema surge durante un viaje, tiene asistencia y traslado. Para quien depende del vehículo eléctrico, es la forma más sencilla
      de tener todos los frentes cubiertos con una única cuota.”
    `
  }
},
{
  id: "KIT_HOGAR",
  family: "SSAA Seguridad",
  name: "Seguridad Iberdrola · Kit Hogar",
  price: "Cuota mensual según estudio (equipos financiados, instalación incluida)",
  carencia: "Sin carencia una vez instalada y activada la alarma",
  fidelizacionResumen: "Promos habituales: meses gratis, instalación sin coste inicial, revisable según campaña vigente",
  resumenCorto: "Sistema de alarma profesional para vivienda con conexión a central receptora y servicio 24/7.",
  sections: {
    info: `
      Seguridad Iberdrola Hogar ofrece un sistema de alarma profesional instalado por Securitas Direct, con conexión permanente
      a central receptora 24/7. Está orientado a viviendas principales o segundas residencias que buscan protección frente a intrusiones,
      intentos de robo y situaciones de emergencia.
    `,
    coberturas: `
      <h3>Equipos y servicios incluidos</h3>
      <ul>
        <li>Kit de alarma adaptado a la vivienda: panel de control, detectores de movimiento, detectores de apertura y dispositivos de disuasión.</li>
        <li>Conexión a central receptora de alarmas (CRA) 24/7.</li>
        <li>Verificación de alarmas (llamada al cliente, escucha silenciosa, imágenes, etc. según modelo).</li>
        <li>Aviso a fuerzas de seguridad en caso de intrusión confirmada.</li>
        <li>Servicios de mantenimiento y reposición de equipos según contrato con Securitas Direct.</li>
      </ul>

      <h3>Servicio 24/7</h3>
      <ul>
        <li>Recepción de saltos de alarma las 24 horas del día.</li>
        <li>Evaluación rápida de la causa y actuación según protocolo.</li>
      </ul>
    `,
    exclusiones: `
      <ul>
        <li>No es un seguro de hogar: no cubre indemnizaciones económicas por robo o daños.</li>
        <li>La cobertura depende de que el sistema esté armado y conectado correctamente.</li>
        <li>No cubre elementos de la vivienda no incluidos en el kit ni sin instalación por parte de Securitas Direct.</li>
      </ul>
    `,
    procesos: `
      <h3>Contratación</h3>
      <ul>
        <li>Recogida de datos básicos de la vivienda y derivación al canal de Seguridad Iberdrola.</li>
        <li>Un especialista realiza un estudio personalizado y define el kit y la cuota mensual.</li>
        <li>La firma del contrato y detalles operativos se realizan con Securitas Direct.</li>
      </ul>

      <h3>Instalación y puesta en marcha</h3>
      <ul>
        <li>Visita de instalador para colocar dispositivos y configurar la alarma.</li>
        <li>Explicación al cliente de uso diario, armado/desarmado y contactos de emergencia.</li>
      </ul>

      <h3>Gestión de incidencias</h3>
      <ul>
        <li>Problemas técnicos o falsas alarmas se gestionan directamente con Securitas Direct.</li>
        <li>El agente de Iberdrola debe orientar al cliente a los canales específicos de seguridad, no tramitarlo como incidencia de luz o gas.</li>
      </ul>
    `,
    fidelizacion: `
      <ul>
        <li>Recordar al cliente el valor de la instalación, la conexión 24/7 y la respuesta en caso de intrusión.</li>
        <li>Revisar si hay campañas de mejora de condiciones (meses gratis adicionales, revisión de cuota) en función de su antigüedad.</li>
        <li>En clientes con incidentes previos (intentos de robo), reforzar la importancia de seguir protegidos.</li>
      </ul>
    `,
    ejemplos: `
      <ul>
        <li>Viviendas unifamiliares, bajos o áticos con mayor exposición a intrusiones.</li>
        <li>Segundas residencias que permanecen vacías largos periodos.</li>
      </ul>
    `,
    argumentario: `
      “No es solo una alarma que suena: Seguridad Iberdrola Hogar incluye equipos profesionales, instalación,
      conexión a una central 24 horas y protocolos de actuación con aviso a la policía. La tranquilidad que aporta
      frente a un intento de robo es muy difícil de conseguir solo con elementos domésticos.”
    `
  }
},
{
  id: "KIT_NEGOCIO",
  family: "SSAA Seguridad",
  name: "Seguridad Iberdrola · Kit Negocio",
  price: "Cuota mensual según estudio (equipos financiados, instalación incluida)",
  carencia: "Sin carencia una vez instalada y activada la alarma",
  fidelizacionResumen: "Promos específicas para negocio: meses gratis, cuotas reducidas iniciales, según campaña",
  resumenCorto: "Sistema de alarma para negocios (comercios, oficinas) con conexión a central y servicios específicos para actividad profesional.",
  sections: {
    info: `
      Seguridad Iberdrola Negocio está enfocada a comercios, pequeños negocios y oficinas que necesitan proteger tanto las instalaciones
      como el contenido (mercancía, equipos informáticos, TPVs, etc.). Utiliza la infraestructura y experiencia de Securitas Direct,
      adaptada al entorno empresarial.
    `,
    coberturas: `
      <h3>Equipos para negocio</h3>
      <ul>
        <li>Kit de alarma dimensionado según superficie, accesos y tipo de negocio.</li>
        <li>Sensores específicos para zonas de riesgo (caja, almacén, escaparate).</li>
        <li>Posible integración con cámaras y sistemas de vídeo verificación según la oferta concreta.</li>
      </ul>

      <h3>Servicio 24/7 para negocio</h3>
      <ul>
        <li>Conexión a central receptora 24/7.</li>
        <li>Verificación de alarmas orientada a negocio (por ejemplo, fuera de horario comercial).</li>
        <li>Aviso a fuerzas de seguridad si se confirma intrusión o intento de robo.</li>
      </ul>
    `,
    exclusiones: `
      <ul>
        <li>Tampoco es un seguro de comercio: no cubre indemnizaciones económicas por robo o daños en mercancía.</li>
        <li>La cobertura depende de que la alarma esté correctamente armada cuando el negocio está cerrado.</li>
        <li>Quedan fuera elementos que no se hayan incluido en el estudio y kit definidos con el especialista.</li>
      </ul>
    `,
    procesos: `
      <h3>Contratación</h3>
      <ul>
        <li>Identificar que se trata de un negocio y no de una vivienda.</li>
        <li>Recoger datos de la actividad (tipo de comercio, horario, superficie) y derivar al canal de Seguridad Negocio.</li>
        <li>Un especialista realiza un estudio y define la solución técnica y económica.</li>
      </ul>

      <h3>Instalación y uso</h3>
      <ul>
        <li>Instalación profesional de equipos en el local.</li>
        <li>Formación al responsable del negocio para armado, desarmado y gestión de usuarios.</li>
      </ul>

      <h3>Soporte e incidencias</h3>
      <ul>
        <li>Las incidencias técnicas y falsas alarmas se gestionan directamente con Securitas Direct.</li>
        <li>El agente Iberdrola orienta al cliente al teléfono de seguridad adecuado, no al de averías de luz/gas.</li>
      </ul>
    `,
    fidelizacion: `
      <ul>
        <li>Reforzar el impacto que puede tener un robo en un negocio (cierres, pérdidas de stock, etc.).</li>
        <li>Recordar que la cuota se justifica por la disuasión, la vigilancia constante y la respuesta inmediata.</li>
        <li>Revisar campañas específicas para negocios (p. ej., mejora de condiciones tras cierta antigüedad).</li>
      </ul>
    `,
    ejemplos: `
      <ul>
        <li>Tiendas de barrio con escaparate a la calle.</li>
        <li>Pequeños almacenes con mercancía de valor.</li>
        <li>Oficinas con equipos informáticos sensibles.</li>
      </ul>
    `,
    argumentario: `
      “Un negocio no solo se protege con una cerradura fuerte. El sistema de Seguridad Iberdrola Negocio vigila el local
      24 horas, detecta intentos de intrusión y coordina la respuesta con la central, reduciendo el riesgo de pérdida y
      ofreciendo mucha más tranquilidad al empresario.”
    `
  }
},
{
  id: "SOLAR_CLOUD",
  family: "SSAA Energía",
  name: "Solar Cloud",
  price: "Cuota o condiciones según modalidad de excedentes vigente",
  carencia: "Sin carencia una vez activado el servicio",
  fidelizacionResumen: "Promos asociadas a autoconsumo; revisar campañas de captación/fidelización en vigor",
  resumenCorto: "Servicio que acumula el valor de excedentes de autoconsumo como saldo virtual para aplicarlo a futuras facturas.",
  sections: {
    info: `
      Solar Cloud está diseñado para clientes con instalaciones fotovoltaicas de autoconsumo que generan excedentes.
      En lugar de liquidarlos mes a mes bajo el esquema estándar, el servicio permite acumular el valor de esos excedentes
      como saldo virtual, que puede aplicarse a facturas posteriores según las condiciones contratadas.
    `,
    coberturas: `
      <ul>
        <li>Acumulación del valor económico de los excedentes generados en un saldo asociado al contrato.</li>
        <li>Aplicación del saldo a futuras facturas de suministro eléctrico (y, en su caso, a otros suministros vinculados, según modalidad).</li>
        <li>Visualización del saldo y movimientos en el área cliente o en la App Iberdrola.</li>
      </ul>
    `,
    exclusiones: `
      <ul>
        <li>Puede haber límites al importe máximo de saldo acumulable y/o al tiempo disponible para consumirlo (caducidad).</li>
        <li>No sustituye el régimen regulado de compensación de excedentes cuando el cliente no cumpla requisitos para la modalidad contratada.</li>
        <li>El saldo no se liquida en efectivo: se aplica en forma de descuento en facturas.</li>
      </ul>
    `,
    procesos: `
      <h3>Contratación</h3>
      <ul>
        <li>Confirmar que el cliente dispone de una instalación fotovoltaica de autoconsumo activa y que vierte excedentes a la red.</li>
        <li>Explicar la diferencia entre la compensación estándar y el modelo de acumulación de Solar Cloud.</li>
        <li>Informar de posibles límites de acumulación y caducidad del saldo.</li>
      </ul>

      <h3>Gestión y uso del saldo</h3>
      <ul>
        <li>El cliente puede consultar en su área cliente el saldo disponible y cómo se ha aplicado a facturas anteriores.</li>
        <li>Para dudas sobre importes, el agente revisará el detalle de facturas y movimientos de saldo en los sistemas internos.</li>
      </ul>
    `,
    fidelizacion: `
      <ul>
        <li>Si el cliente percibe que “cobra poco” por los excedentes, explicar cómo el saldo acumulado puede compensar facturas en meses de menor producción.</li>
        <li>Comparar la atribución mensual estándar con la ventaja de poder acumular y concentrar descuentos cuando más lo necesite.</li>
      </ul>
    `,
    ejemplos: `
      <ul>
        <li>Clientes con instalaciones sobredimensionadas que generan muchos excedentes en verano y quieren utilizarlos para rebajar facturas de invierno.</li>
        <li>Clientes con segunda residencia que prefieren acumular excedentes para utilizarlos cuando más consumen en su vivienda principal.</li>
      </ul>
    `,
    argumentario: `
      “Solar Cloud le permite guardar el valor de sus excedentes como si fuera un ‘monedero’ para sus facturas de luz:
      en lugar de ajustar todo en el mismo mes, puede acumular y aplicar el saldo cuando más le convenga dentro de las condiciones del servicio.”
    `
  }
},
{
  id: "AISLAMIENTO_SMART",
  family: "SSAA Energía",
  name: "Aislamiento Smart",
  price: "Condiciones y precios según estudio de la vivienda",
  carencia: "No aplica como servicio de obra; se rige por plazos de ejecución y garantía",
  fidelizacionResumen: "Promos puntuales ligadas a campañas de eficiencia energética; revisar condiciones vigentes",
  resumenCorto: "Servicio orientado a mejorar el aislamiento térmico de la vivienda para reducir consumo y aumentar confort.",
  sections: {
    info: `
      Aislamiento Smart es un servicio asociado a soluciones de eficiencia energética, que busca mejorar la envolvente térmica
      de la vivienda (fachadas, cubiertas o cámaras de aire) mediante técnicas de aislamiento específicas. Su objetivo es reducir
      pérdidas de calor/frío, mejorar el confort y disminuir la demanda energética de calefacción y refrigeración.
    `,
    coberturas: `
      <ul>
        <li>Estudio inicial de la vivienda para valorar el tipo de actuación de aislamiento más adecuado.</li>
        <li>Propuesta técnica y económica personalizada según superficie, estado y accesibilidad.</li>
        <li>Ejecución de las obras de aislamiento por parte de empresas colaboradoras homologadas.</li>
        <li>Información sobre posibles ayudas o subvenciones de eficiencia energética, si las hubiera en la zona del cliente.</li>
      </ul>
    `,
    exclusiones: `
      <ul>
        <li>No es un servicio de mantenimiento, sino una actuación puntual de mejora; no cubre reparaciones futuras de elementos ajenos al aislamiento instalado.</li>
        <li>Determinados edificios o comunidades pueden requerir acuerdos previos (permiso de comunidad, licencias) que no están incluidos en el servicio.</li>
        <li>La mejora del confort y del ahorro energético depende también de otros factores (tipo de ventanas, uso del inmueble, etc.).</li>
      </ul>
    `,
    procesos: `
      <h3>Contratación e interés</h3>
      <ul>
        <li>Identificar clientes con consumos elevados en calefacción/refrigeración o con problemas de confort (frío en invierno, calor excesivo en verano).</li>
        <li>Registrar el interés y derivar al canal o distribuidor encargado de Aislamiento Smart para estudio.</li>
      </ul>

      <h3>Estudio y propuesta</h3>
      <ul>
        <li>Visita técnica para analizar paredes, cubiertas y posibles cámaras de aire.</li>
        <li>Presupuesto detallado con actuaciones recomendadas y estimación de ahorro orientativa.</li>
      </ul>

      <h3>Ejecución</h3>
      <ul>
        <li>Planificación de las obras, con explicación de duración y posibles molestias al cliente.</li>
        <li>Entrega de documentación final y garantías de los trabajos realizados.</li>
      </ul>
    `,
    fidelizacion: `
      <ul>
        <li>En clientes que valoran el ahorro y el confort, reforzar que el aislamiento es una mejora estructural que actúa todos los días del año.</li>
        <li>Recordar que, a diferencia de un servicio mensual, es una inversión que se amortiza con el tiempo en forma de menor demanda de calefacción y refrigeración.</li>
      </ul>
    `,
    ejemplos: `
      <ul>
        <li>Viviendas con paredes frías en invierno y calor excesivo en verano, especialmente en climas extremos.</li>
        <li>Clientes con facturas altas de calefacción que ya han optimizado potencia y tarifas y buscan actuaciones sobre la vivienda.</li>
      </ul>
    `,
    argumentario: `
      “Aislamiento Smart ataca el problema de raíz: en lugar de solo ajustar la tarifa, mejora la vivienda para que necesite menos energía
      para estar cómoda todo el año. Es una inversión en confort y en ahorro a medio plazo.”
    `
  }
},
  {
  id: "PEH_RAC",
  family: "PYS Protección",
  name: "PEH/PEH+ R&C · Protección Repair & Care",
  price: "Consultar precio vigente",
  carencia: "Sin carencia",
  fidelizacionResumen: "No tiene promociones ni descuentos. Permanencia obligatoria de 1 año.",
  resumenCorto: "Versión Repair & Care de PEH/PEH+: 1ª reparación con descuento directo de 72,6 € (IVA incluido) y sin carencia.",
  sections: {
    info: `
      PEH/PEH+ Repair & Care es una versión especial del servicio, pensada únicamente para clientes que ya tienen una avería
      en su instalación eléctrica o electrodomésticos y NO tienen ningún servicio activo que la cubra. Permite contratar el servicio
      sin carencia e incluye un descuento directo de 72,6 € (IVA incluido) aplicado en la primera reparación tras el alta, siempre
      que esta se solicite dentro de los 3 primeros días.
    `,
    coberturas: `
      <ul>
        <li>Mismas coberturas que PEH/PEH+ estándar.</li>
        <li>Descuento directo de 72,6 € (IVA incluido) en la primera reparación tras el alta.</li>
        <li>Aplicación del descuento si la avería se comunica en los 3 primeros días desde la contratación.</li>
        <li>Sin carencia: la cobertura es inmediata.</li>
      </ul>
    `,
    exclusiones: `
      <ul>
        <li>Solo puede contratarse cuando el cliente ya tiene una avería sin servicio activo que la cubra.</li>
        <li>No incluye descuentos ni promociones en energía.</li>
        <li>No se aplica el descuento si no se solicita la reparación dentro de los primeros 3 días.</li>
      </ul>
    `,
    procesos: `
      <ul>
        <li>Confirmar que el cliente tiene avería.</li>
        <li>Validar que no existe otro servicio activo que pudiera cubrir la reparación.</li>
        <li>Aclarar que el servicio tiene permanencia de 1 año.</li>
        <li>Recordar que si se da de baja antes del año, se factura al cliente el descuento aplicado (72,6 €).</li>
      </ul>
    `,
    fidelizacion: `
      <ul>
        <li>Recordar que el servicio permite cubrir la avería inmediata sin carencia.</li>
        <li>Comparar el coste de una reparación eléctrica externa con la cobertura + descuento incluido.</li>
      </ul>
    `,
    ejemplos: `
      <ul>
        <li>Cliente con avería eléctrica que no tiene PEH/PEH+.</li>
        <li>Derivaciones, cortocircuitos, enchufes que no funcionan.</li>
      </ul>
    `,
    argumentario: `
      “Este servicio está diseñado justo para este tipo de averías inesperadas: lo contratas ahora SIN carencia,
      cubre la intervención y además se descuenta 72,6 € de la reparación si la solicita en los primeros tres días.”
    `
  }
},
{
  id: "PMG_RAC",
  family: "PYS Gas",
  name: "PMG R&C · Mantenimiento Repair & Care",
  price: "Consultar precio vigente",
  carencia: "Sin carencia",
  fidelizacionResumen: "No tiene promociones ni descuentos. Permanencia obligatoria de 1 año.",
  resumenCorto: "Versión Repair & Care de PMG: elimina la carencia y permite reparar la avería actual con cobertura inmediata.",
  sections: {
    info: `
      PMG Repair & Care es una versión especial para clientes con avería en caldera o instalación de gas que no tienen
      ningún servicio activo de mantenimiento. Permite contratarlo sin carencia y cubrir la avería inmediatamente.
      Tiene permanencia de un año y elimina la carencia tradicional de 15 días del PMG estándar.
    `,
    coberturas: `
      <ul>
        <li>Mismas coberturas que PMG estándar: revisión anual + asistencia de caldera + instalación de gas.</li>
        <li>Sin carencia: cobertura inmediata desde el alta.</li>
        <li>Materiales y mano de obra según límites de PMG estándar.</li>
      </ul>
    `,
    exclusiones: `
      <ul>
        <li>Solo puede contratarse cuando existe una avería actual y ningún servicio la está cubriendo.</li>
        <li>No tiene promociones ni descuentos en gas.</li>
        <li>Permanencia obligatoria de 1 año: si se da de baja antes, aplica regularización del servicio.</li>
      </ul>
    `,
    procesos: `
      <ul>
        <li>Confirmar que hay avería en caldera o circuito.</li>
        <li>Validar que el cliente no tiene PMG/AG/PG/otros activos.</li>
        <li>Aclarar que se elimina la carencia de 15 días habitual del PMG.</li>
        <li>Recordar que la baja anticipada implica regularización según condiciones.</li>
      </ul>
    `,
    fidelizacion: `
      <ul>
        <li>Es el servicio más útil cuando la avería ya existe y el cliente quiere resolverla sin esperar carencia.</li>
        <li>Recordar el coste real de una reparación de caldera sin servicio (normalmente alto).</li>
      </ul>
    `,
    ejemplos: `
      <ul>
        <li>Caldera sin calentar, sin presión o con errores de seguridad.</li>
        <li>Fuga o fallo en la instalación de gas del domicilio.</li>
      </ul>
    `,
    argumentario: `
      “PMG Repair & Care está creado para este caso concreto: el cliente tiene una avería ahora mismo y quiere resolverla
      sin esperar la carencia normal. Se repara desde el primer día y además obtiene revisión y mantenimiento durante un año.”
    `
  }
}
];

let currentFamily = "Todas las familias";
let currentProduct = null;
let currentSection = "info";

function renderFamilyButtons() {
  const container = document.getElementById("familyButtons");
  container.innerHTML = "";
  FAMILIES.forEach(family => {
    const button = document.createElement("button");
    button.className = "pill" + (family === currentFamily ? " pill-active" : "");
    button.textContent = family;
    button.addEventListener("click", () => {
      currentFamily = family;
      renderFamilyButtons();
      renderCards();
    });
    container.appendChild(button);
  });
}

function renderCards() {
  const container = document.getElementById("cardsContainer");
  container.innerHTML = "";
  const filtered = currentFamily === "Todas las familias"
    ? PRODUCTS
    : PRODUCTS.filter(p => p.family === currentFamily);

  if (filtered.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "No hay productos en esta familia.";
    container.appendChild(empty);
    return;
  }

  filtered.forEach(product => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <div class="card-header">
        <h3>${product.name}</h3>
        <span class="card-family">${product.family}</span>
      </div>
      <div class="card-body">
        <p class="card-resumen">${product.resumenCorto}</p>
        <div class="card-meta">
          <div class="meta-item">
            <span class="meta-label">Precio</span>
            <span class="meta-value">${product.price}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Carencia</span>
            <span class="meta-value">${product.carencia}</span>
          </div>
        </div>
        <button class="primary-button" data-product-id="${product.id}">Ver ficha completa</button>
      </div>
    `;
    container.appendChild(card);
  });

  const buttons = container.querySelectorAll("button[data-product-id]");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-product-id");
      const product = PRODUCTS.find(p => p.id === id);
      if (product) {
        openModal(product);
      }
    });
  });
}

function openModal(product) {
  currentProduct = product;
  currentSection = "info";
  renderModalContent();
  const modal = document.getElementById("modal");
  modal.classList.remove("hidden");
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.add("hidden");
  currentProduct = null;
}

function renderModalContent() {
  if (!currentProduct) return;
  const body = document.getElementById("modalBody");
  const sectionButtons = Object.keys(SECTION_LABELS)
    .filter(key => currentProduct.sections[key])
    .map(key => {
      const activeClass = key === currentSection ? "tab-button-active" : "";
      return `<button class="tab-button ${activeClass}" data-section="${key}">${SECTION_LABELS[key]}</button>`;
    })
    .join("");

  const sectionContent = currentProduct.sections[currentSection] || "";

  body.innerHTML = `
    <header class="modal-header">
      <div>
        <h2>${currentProduct.name}</h2>
        <p class="modal-family">${currentProduct.family}</p>
      </div>
      <div class="modal-price-block">
        <div class="modal-price">${currentProduct.price}</div>
        <div class="modal-sub">${currentProduct.carencia}</div>
        <div class="modal-sub">${currentProduct.fidelizacionResumen}</div>
      </div>
    </header>
    <div class="modal-tabs">
      ${sectionButtons}
    </div>
    <div class="modal-section">
      ${sectionContent}
    </div>
  `;

  const tabButtons = body.querySelectorAll(".tab-button");
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const section = btn.getAttribute("data-section");
      currentSection = section;
      renderModalContent();
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const backdrop = modal.querySelector(".modal-backdrop");
  const closeButton = document.getElementById("modalClose");

  backdrop.addEventListener("click", closeModal);
  closeButton.addEventListener("click", closeModal);
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      closeModal();
    }
  });

  renderFamilyButtons();
  renderCards();
});


