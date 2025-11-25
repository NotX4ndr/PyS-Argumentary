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
  carencia: "30 días general · 6 meses Asesoramiento Energético",
  fidelizacionResumen: "50% 12 meses si elegible (según Manual de Fidelización PYS)",
  
  resumenCorto: "Pack integral con averías eléctricas urgentes, reparación de electrodomésticos, bricolaje eléctrico, Asistente Smart, Hogar Digital, Asesoramiento Energético y Protección de Pagos Esencial.",

  sections: {

    info: `
      El Pack Iberdrola Hogar (PIH) es un servicio que sustituye al antiguo Pack Iberdrola en nuevas ventas, ampliando sus prestaciones con la cobertura de Hogar Digital. Ofrece una solución integral en averías eléctricas urgentes, electrodomésticos, bricolaje eléctrico, Asistente Smart, asesoramiento energético y Protección de Pagos Esencial.
      El servicio debe contratarse siempre asociado a un suministro eléctrico con potencia inferior a 15 kW.
    `,

    coberturas: `
      <h3>Avería Eléctrica Urgente</h3>
      <ul>
        <li>Atención en menos de 3 horas.</li>
        <li>Incluye desplazamiento, mano de obra, piezas e impuestos.</li>
        <li>Cobertura económica anual: hasta 550 €.</li>
      </ul>

      <h3>Reparación de Electrodomésticos</h3>
      <ul>
        <li>Incluye desplazamiento, mano de obra, piezas e impuestos.</li>
        <li>Electrodomésticos cubiertos:
          Frigorífico, Lavadora, Cocina eléctrica, Campana, Lavavajillas, Horno (no microondas independiente),
          Secadora, Congelador, Termo/caldera eléctricos y Televisor.
        </li>
        <li>Límite económico: 300 € por electrodoméstico y año.</li>
        <li>Antigüedad máxima: menos de 11 años para electrodomésticos de cocina y menos de 6 años para TV.</li>
        <li>Atención en menos de 48 horas laborables.</li>
      </ul>

      <h3>Bricolaje Eléctrico</h3>
      <ul>
        <li>1 intervención anual realizada por un técnico cualificado.</li>
      </ul>

      <h3>Hogar Digital</h3>
      <ul>
        <li>Servicios de ciberseguridad.</li>
        <li>Monitorización de tarjetas y cuentas de correo (hasta 3 emails).</li>
        <li>10 GB de almacenamiento en la nube.</li>
        <li>Hasta 3 borrados digitales al año.</li>
        <li>Soporte tecnológico en el hogar.</li>
        <li>Requiere registro en https://hogardigitaliberdrola.es/ mediante el código enviado en el email de bienvenida.</li>
      </ul>

      <h3>Asistente Smart</h3>
      <ul>
        <li>Información detallada del consumo por electrodoméstico y categorías en la App/Web IBD Clientes.</li>
        <li>Notificaciones personalizadas y alertas de consumo.</li>
        <li>Informes mensuales.</li>
        <li>Es imprescindible completar el perfil para una correcta estimación.</li>
        <li>Si no es posible obtener los datos necesarios en 4 meses, se activa “PIH sin Asistente Smart”.</li>
      </ul>

      <h3>Asesoramiento Energético</h3>
      <ul>
        <li>Diagnóstico energético del hogar.</li>
        <li>El informe se remite en un máximo de 10 días laborables desde la visita.</li>
      </ul>

      <h3>Protección de Pagos Esencial</h3>
      <ul>
        <li>Fallecimiento: 600 €.</li>
        <li>Incapacidad Absoluta y Permanente: 600 €.</li>
        <li>Incapacidad Temporal: 250 € a los 30 días + 250 € a los 210 días.</li>
        <li>Hospitalización: 250 € a los 3 días.</li>
        <li>Sin carencia.</li>
      </ul>
    `,

    exclusiones: `
      <ul>
        <li>Electrodomésticos con antigüedad superior a 11 años (cocina) o 6 años (TV).</li>
        <li>Microondas cuando sea un equipo independiente.</li>
        <li>Costes que excedan los límites económicos (550 € en urgencias eléctricas o 300 €/año por electrodoméstico).</li>
        <li>Asistente Smart: imposibilidad de proporcionar datos del contador tras 4 meses (activa PIH sin AS).</li>
        <li>Hogar Digital: Iberdrola no gestiona solicitudes; la atención depende exclusivamente del proveedor.</li>
      </ul>
      <p>Nota: Los anexos detallados de exclusiones no están incluidos en los documentos proporcionados.</p>
    `,

    procesos: `
      <h3>Contratación</h3>
      <ul>
        <li>Debe contratarse siempre asociado a un suministro eléctrico.</li>
        <li>No es posible la contratación independiente.</li>
        <li>Potencia contratada inferior a 15 kW.</li>
        <li>Incompatible con: PEH, PEH+, Protección Electrodomésticos, Protección Climatización, Urgencias Eléctricas, Pack Iberdrola (SPI), Asistente Smart independiente, Hogar Digital independiente, Asistencia CC.PP, API/UUEE Negocios.</li>
        <li>Carencia de 30 días excepto Asesoramiento Energético (6 meses).</li>
      </ul>

      <h3>Uso del servicio</h3>
      <ul>
        <li>Avería eléctrica urgente: atención en menos de 3 horas.</li>
        <li>Electrodomésticos: atención en menos de 48 horas laborables.</li>
        <li>AE: informe en máximo 10 días laborables.</li>
        <li>Hogar Digital: el cliente debe registrarse en la web indicada.</li>
      </ul>
    `,

    fidelizacion: `
      <ul>
        <li>Aplicable el descuento de fidelización del 50% durante 12 meses si el cliente es elegible.</li>
        <li>El descuento no aplica si el cliente está disfrutando un descuento de captación vigente.</li>
      </ul>
    `,

    ejemplos: `
      <ul>
        <li>Clientes con varios electrodomésticos dentro de la antigüedad cubierta.</li>
        <li>Hogares que buscan soporte digital, ciberseguridad y control de consumo.</li>
        <li>Clientes que desean cobertura completa en urgencias eléctricas y electrodomésticos.</li>
      </ul>
    `,

    argumentario: `
      “Una sola avería eléctrica urgente o una reparación de electrodomésticos puede superar con facilidad los límites anuales cubiertos por el Pack Iberdrola Hogar, lo que convierte el servicio en una opción eficiente y de gran valor.”
    `
  }
},
{
  id: "PEH",
  family: "PYS Protección",
  name: "PEH · Protección Eléctrica Hogar",
  price: "6,95 €/mes + impuestos",
  carencia: "30 días general · 6 meses Asesoramiento Energético",
  fidelizacionResumen: "50% 12 meses si elegible",
  
  resumenCorto: "Servicio que cubre averías eléctricas urgentes, reparación de electrodomésticos, bricolaje eléctrico y una visita de Asesoramiento Energético.",

  sections: {

    info: `
      El Servicio de Protección Eléctrica Hogar (PEH) incluye cobertura de averías eléctricas urgentes,
      reparación de electrodomésticos de cocina y TV, un trabajo anual de bricolaje eléctrico y una visita
      de Asesoramiento Energético cada 4 años. Es un PYS asociado al suministro eléctrico y requiere
      potencia contratada inferior a 15 kW.
    `,

    coberturas: `
      <h3>Averías Eléctricas Urgentes</h3>
      <ul>
        <li>Atención en menos de 3 horas.</li>
        <li>Incluye desplazamiento, mano de obra y materiales.</li>
        <li>Límite anual de 550 € en reparaciones.</li>
      </ul>

      <h3>Reparación de Electrodomésticos</h3>
      <ul>
        <li>Electrodomésticos cubiertos: Frigorífico, Lavadora, Cocina eléctrica, Campana,
            Lavavajillas, Horno (no microondas independiente), Secadora, Congelador,
            Termo/Caldera eléctricos y Televisor.</li>
        <li>Cubre desplazamiento, mano de obra, piezas e impuestos.</li>
        <li>Antigüedad máxima: menos de 11 años en electrodomésticos de cocina y menos de 6 años en TV.</li>
        <li>Límite económico: 300 € por electrodoméstico y año.</li>
        <li>Atención en un máximo de 48 horas laborables.</li>
      </ul>

      <h3>Bricolaje Eléctrico</h3>
      <ul>
        <li>1 trabajo anual.</li>
        <li>Incluye desplazamiento y hasta 3 horas de mano de obra.</li>
      </ul>

      <h3>Asesoramiento Energético</h3>
      <ul>
        <li>Un diagnóstico energético cada 4 años.</li>
        <li>Informe con recomendaciones de ahorro.</li>
        <li>Plazo: el técnico contacta en un máximo de 10 días desde la solicitud.</li>
      </ul>
    `,

    exclusiones: `
      <ul>
        <li>Microondas independiente.</li>
        <li>Electrodomésticos con antigüedad superior a 11 años (cocina) o 6 años (TV).</li>
        <li>Electrodomésticos en garantía del fabricante.</li>
        <li>Urgencias eléctricas en viviendas con potencia superior a 15 kW.</li>
        <li>Coste de materiales en trabajos de bricolaje eléctrico.</li>
        <li>Elementos de medida propiedad de la distribuidora.</li>
      </ul>
      <p>Nota: los anexos detallados de PEH no están incluidos en los documentos proporcionados.</p>
    `,

    procesos: `
      <h3>Contratación</h3>
      <ul>
        <li>Debe ir asociado a suministro eléctrico en IBERCLI.</li>
        <li>Potencia contratada inferior a 15 kW.</li>
        <li>Carencia: 30 días en averías y bricolaje, 6 meses en Asesoramiento Energético.</li>
        <li>Posible contratación independiente solo si cumple requisitos según anexo del manual.</li>
      </ul>

      <h3>Uso del servicio</h3>
      <ul>
        <li>Urgencia eléctrica: atención &lt; 3 horas.</li>
        <li>Electrodomésticos: atención &lt; 48 horas laborables.</li>
        <li>Asesoramiento Energético: solicitud al Grupo PYS; diagnóstico cada 4 años.</li>
      </ul>
    `,

    fidelizacion: `
      <ul>
        <li>Puedes aplicar el descuento de fidelización del 50% durante 12 meses si el cliente es elegible.</li>
        <li>Recordar que las reparaciones tienen garantía de 6 meses.</li>
      </ul>
    `,

    ejemplos: `
      <ul>
        <li>Cortocircuito o pérdida de energía en la instalación interior.</li>
        <li>Avería en electrodomésticos como frigorífico, lavadora o televisor.</li>
        <li>Sustitución de enchufes o instalación de apliques mediante el trabajo anual de bricolaje.</li>
      </ul>
    `,

    argumentario: `
      “El PEH cubre las averías eléctricas urgentes, la reparación de 9 electrodomésticos de la cocina y la TV,
      un trabajo anual de bricolaje eléctrico y una visita de Asesoramiento Energético. Una sola reparación externa
      puede superar fácilmente el coste anual del servicio.”
    `
  }
},
{
  id: "PEH_PLUS",
  family: "PYS Protección",
  name: "PEH+ · Protección Eléctrica Hogar Plus",
  price: "8,95 €/mes + impuestos",
  carencia: "30 días general · 6 meses Asesoramiento Energético",
  fidelizacionResumen: "50% 12 meses si elegible",
  resumenCorto: "Servicio que cubre averías eléctricas urgentes, reparación de electrodomésticos, bricolaje eléctrico, climatización y Asesoramiento Energético, con Protección de Pagos Esencial.",

  sections: {

    info: `
      El Servicio de Protección Eléctrica Hogar Plus (PEH+) tiene las mismas coberturas que el PEH,
      pero añade la protección de equipos de climatización y la inclusión del Servicio de Protección de Pagos Esencial.
      Incluye averías eléctricas urgentes, reparación de electrodomésticos de cocina y TV, un trabajo anual de bricolaje
      eléctrico, una visita de Asesoramiento Energético cada 4 años y protección en climatización.
    `,

    coberturas: `
      <h3>Averías Eléctricas Urgentes</h3>
      <ul>
        <li>Mismas coberturas que el servicio Urgencias Eléctricas.</li>
        <li>Incluye desplazamiento, mano de obra y materiales hasta un límite de 550 € anuales.</li>
        <li>Sin límite de intervenciones.</li>
        <li>Atención en menos de 3 horas los 365 días del año.</li>
        <li>Excluidos garajes, trasteros, anexos, piscinas e iluminación exterior.</li>
      </ul>

      <h3>Reparación de Electrodomésticos</h3>
      <ul>
        <li>Mismas coberturas que Protección Electrodomésticos 10.</li>
        <li>Electrodomésticos cubiertos: frigorífico, lavadora, cocina eléctrica, campana,
            lavavajillas, horno, secadora, congelador, termo/caldera eléctricos y televisor.</li>
        <li>Cubre 300 € por electrodoméstico y año para equipos dentro de la antigüedad permitida.</li>
        <li>Sin límite de intervenciones.</li>
        <li>Si la antigüedad supera el límite, queda cubierto el desplazamiento y hasta 3 horas de mano de obra.</li>
        <li>Atención en un máximo de 48 horas laborables.</li>
        <li>Con opción a pago de sustitución por reparación inviable de hasta 300 €, en función de la antigüedad y a decisión del técnico.</li>
      </ul>

      <h3>Bricolaje Eléctrico</h3>
      <ul>
        <li>Incluye una intervención anual (desplazamiento y hasta 3 horas de mano de obra) a elegir por el cliente entre:
          <ul>
            <li>Sustitución/reparación de enchufes, interruptores y pulsadores.</li>
            <li>Conexión y puesta en marcha de varios electrodomésticos de cocina y de equipamiento tecnológico
                (televisores, DVD, consolas y equipos home cinema).</li>
            <li>Instalación o sustitución de extractores en cocina y baños (no incluye la campana del extractor).</li>
            <li>Instalación de temporizadores y termostatos.</li>
            <li>Instalación o sustitución de lámparas o apliques donde exista punto de luz.</li>
          </ul>
        </li>
      </ul>

      <h3>Asesoramiento Energético</h3>
      <ul>
        <li>Incluye una visita de un técnico para evaluar la vivienda y su equipación energética.</li>
        <li>Se elabora un informe con medidas para hacer más eficiente el consumo y obtener ahorro económico.</li>
        <li>El cliente puede solicitarlo una vez cada 4 años.</li>
        <li>El técnico solo acude bajo demanda del cliente.</li>
      </ul>

      <h3>Protección Climatización</h3>
      <ul>
        <li>Mismas coberturas que el Servicio Protección Climatización.</li>
        <li>Cubre 300 € por equipo de climatización y año para equipos hasta la antigüedad permitida.</li>
        <li>Sin límite de intervenciones.</li>
        <li>Si la antigüedad es superior, queda cubierto el desplazamiento y hasta 3 horas de mano de obra.</li>
        <li>Con opción a pago de sustitución por reparación inviable de hasta 300 €, en función de la antigüedad y a decisión del técnico.</li>
      </ul>

      <h3>Servicio de Protección de Pagos Esencial (SPP Esencial)</h3>
      <ul>
        <li>Incluye las coberturas del SPP Esencial.</li>
        <li>Fallecimiento: 600 €.</li>
        <li>Incapacidad Absoluta y Permanente: 600 €.</li>
        <li>Incapacidad Temporal: 250 € a los 30 días y otros 250 € a los 210 días.</li>
        <li>Hospitalización: 250 € a los 3 días.</li>
      </ul>
    `,

    exclusiones: `
      <ul>
        <li>Electrodomésticos en periodo de garantía del fabricante.</li>
        <li>Electrodomésticos que no estén ubicados habitualmente en el domicilio del punto de suministro energético.</li>
        <li>Las urgencias eléctricas en viviendas o locales con potencia contratada superior a 15 kW.</li>
        <li>El coste de los materiales empleados en los trabajos de bricolaje eléctrico.</li>
        <li>La reparación de los elementos de medida cuando éstos sean propiedad de la compañía distribuidora.</li>
      </ul>
      <p>Nota: los anexos completos de alcance y exclusiones no están incluidos en los documentos proporcionados.</p>
    `,

    procesos: `
      <h3>Contratación</h3>
      <ul>
        <li>Servicio asociado a un contrato de energía en IBERCLI.</li>
        <li>Potencia contratada inferior a 15 kW.</li>
        <li>Carencia de 30 días en averías y bricolaje eléctrico.</li>
        <li>Carencia de 6 meses para la cobertura de Asesoramiento Energético.</li>
      </ul>

      <h3>Uso del servicio</h3>
      <ul>
        <li>Averías eléctricas urgentes: atención en menos de 3 horas.</li>
        <li>Electrodomésticos y climatización: atención en un máximo de 48 horas laborables.</li>
        <li>Bricolaje eléctrico: una intervención anual según el listado de trabajos cubiertos.</li>
        <li>Asesoramiento Energético: solicitud a través del Grupo PYS; se presta una vez cada 4 años.</li>
      </ul>
    `,

    fidelizacion: `
      <ul>
        <li>Aplicar, si el cliente es elegible, el descuento de fidelización del 50% durante 12 meses.</li>
        <li>Recordar que las reparaciones tienen 6 meses de garantía.</li>
      </ul>
    `,

    ejemplos: `
      <h4>Ejemplos de averías de Urgencias Eléctricas</h4>
      <ul>
        <li>Urgencia eléctrica por cortocircuito.</li>
        <li>Fallo eléctrico en la red interior de la vivienda.</li>
      </ul>

      <h4>Ejemplos de averías de electrodomésticos</h4>
      <ul>
        <li>Fallo en la TV.</li>
        <li>La nevera no enfría.</li>
        <li>El lavavajillas no desagua.</li>
        <li>El tambor de la lavadora no gira.</li>
        <li>El termo eléctrico no calienta.</li>
      </ul>

      <h4>Ejemplos de trabajos de bricolaje eléctrico</h4>
      <ul>
        <li>Sustitución de enchufes e interruptores.</li>
        <li>Instalación de un aplique donde ya existe punto de luz.</li>
        <li>Instalación de un ventilador de techo.</li>
      </ul>
    `,

    argumentario: `
      “PEH+ incluye en un único servicio averías eléctricas urgentes, reparación de electrodomésticos,
      bricolaje eléctrico, protección de climatización, Asesoramiento Energético y Servicio de Protección de Pagos Esencial,
      para viviendas con potencia contratada hasta 15 kW.”
    `
  }
},
{
  id: "PB",
  family: "PYS Protección",
  name: "PB · Pack Bienestar",
  price: "8,95 €/mes + impuestos",
  carencia: "30 días general · 6 meses Asesoramiento Energético",
  fidelizacionResumen: "50% 12 meses si elegible",

  resumenCorto: "Servicio que cubre urgencias eléctricas, reparación de electrodomésticos, bricolaje eléctrico, Asesoramiento Energético, Asesoramiento Legal y Protección de Pagos Esencial.",

  sections: {

    info: `
      El Pack Bienestar (PB) tiene las mismas coberturas que el PEH, pero incluye además
      Asesoramiento Legal y el Servicio de Protección de Pagos Esencial.
      Es un producto diseñado especialmente para clientes NO digitales y debe ofrecerse
      como alternativa cuando el cliente rechaza los servicios digitales del PIH.
      Requiere potencia contratada inferior a 15 kW o tarifas de gas RL1, RL2 o RL3.
    `,

    coberturas: `
      <h3>Averías Eléctricas Urgentes</h3>
      <ul>
        <li>Mismas coberturas que el servicio Urgencias Eléctricas.</li>
        <li>Incluye desplazamiento, mano de obra y materiales hasta 550 € anuales.</li>
        <li>Sin límite de intervenciones.</li>
        <li>Atención en menos de 3 horas los 365 días del año.</li>
        <li>Excluidos garajes, trasteros, anexos, piscinas e iluminación exterior.</li>
      </ul>

      <h3>Reparación de Electrodomésticos</h3>
      <ul>
        <li>Mismas coberturas que Protección Electrodomésticos 10.</li>
        <li>Cubre 300 € por electrodoméstico y año (frigorífico, lavadora, campana, horno, etc.).</li>
        <li>Atención en un máximo de 48 horas laborables.</li>
        <li>Sin límite de intervenciones.</li>
        <li>Antigüedad máxima: 10 años (5 para TV), según ficha PE10.</li>
      </ul>

      <h3>Bricolaje Eléctrico</h3>
      <ul>
        <li>Mismas coberturas que PEH+.</li>
        <li>1 intervención anual.</li>
        <li>Incluye desplazamiento y hasta 3 horas de mano de obra.</li>
        <li>Trabajos cubiertos:
          <ul>
            <li>Sustitución o reparación de enchufes, interruptores y pulsadores.</li>
            <li>Instalación de lámparas o apliques donde exista punto de luz.</li>
            <li>Instalación de temporizadores y termostatos.</li>
            <li>Instalación de extractores en cocina y baño (no incluye campanas).</li>
            <li>Conexión y puesta en marcha de electrodomésticos y equipos tecnológicos (TV, DVD, consolas, home cinema).</li>
          </ul>
        </li>
      </ul>

      <h3>Asesoramiento Energético</h3>
      <ul>
        <li>Incluye un diagnóstico energético presencial o telefónico.</li>
        <li>Se entrega informe con recomendaciones de ahorro.</li>
        <li>Puede solicitarse una vez cada 4 años.</li>
        <li>Carencia: 6 meses desde la contratación.</li>
      </ul>

      <h3>Asesoramiento Legal</h3>
      <ul>
        <li>Mismas coberturas que Tu Asesor Legal (TAL).</li>
        <li>Materias cubiertas: vivienda, familia, trabajo, consumo, impuestos, seguros, internet, automóvil, seguridad vial, asuntos penales y administración.</li>
        <li>Servicio prestado por abogados colegiados.</li>
      </ul>

      <h3>Servicio de Protección de Pagos Esencial</h3>
      <ul>
        <li>Incluye coberturas del SPP Esencial.</li>
        <li>Fallecimiento: 600 €.</li>
        <li>Incapacidad Absoluta y Permanente: 600 €.</li>
        <li>Incapacidad Temporal: 250 € + 250 €.</li>
        <li>Hospitalización: 250 € a los 3 días.</li>
      </ul>
    `,

    exclusiones: `
      <ul>
        <li>Electrodomésticos en garantía del fabricante.</li>
        <li>Electrodomésticos que no estén en el domicilio habitual del suministro.</li>
        <li>Urgencias eléctricas en suministros con potencia superior a 15 kW.</li>
        <li>Materiales en trabajos de bricolaje eléctrico (solo mano de obra y desplazamiento).</li>
        <li>Elementos propiedad de la distribuidora (contadores de luz).</li>
        <li>Asesoramiento Legal no disponible si existe conflicto de intereses (p. ej. contra Iberdrola o contra Legálitas).</li>
      </ul>
      <p>Nota: los anexos completos de alcance y exclusiones no están incluidos en los documentos proporcionados.</p>
    `,

    procesos: `
      <h3>Contratación</h3>
      <ul>
        <li>Debe ir asociado a suministro en IBERCLI.</li>
        <li>Potencia inferior a 15 kW o tarifas RL1-RL3.</li>
        <li>Carencia: 30 días general y 6 meses para Asesoramiento Energético.</li>
      </ul>

      <h3>Uso del servicio</h3>
      <ul>
        <li>Averías eléctricas urgentes: atención &lt; 3 horas.</li>
        <li>Electrodomésticos: atención &lt; 48 horas laborables.</li>
        <li>Bricolaje eléctrico: 1 intervención anual, bajo listado de trabajos permitido.</li>
        <li>Asesoramiento Legal: transferencia a proveedor.</li>
        <li>Asesoramiento Energético: solicitud vía Grupo PYS; un diagnóstico cada 4 años.</li>
      </ul>
    `,

    fidelizacion: `
      <ul>
        <li>Si el cliente es elegible, ofrecer 50% durante 12 meses.</li>
        <li>Recordar que las reparaciones tienen garantía de 6 meses.</li>
        <li>Poner en valor que incluye Asesoramiento Legal y SPP Esencial sin coste adicional.</li>
      </ul>
    `,

    ejemplos: `
      <ul>
        <li>Urgencia eléctrica por cortocircuito.</li>
        <li>Fallo en frigorífico o lavadora.</li>
        <li>Sustitución de un enchufe o instalación de un aplique.</li>
        <li>Consulta legal sobre vivienda, alquiler o consumo.</li>
      </ul>
    `,

    argumentario: `
      “El Pack Bienestar combina en una sola cuota: averías eléctricas urgentes, electrodomésticos,
      bricolaje eléctrico, Asesoramiento Legal, Asesoramiento Energético y Protección de Pagos Esencial.
      Una sola reparación o consulta legal puede costar más que la cuota anual del servicio.”
    `
  }
},
{
  id: "TAL",
  family: "PYS Protección",
  name: "TAL · Tu Asesor Legal",
  price: "3,95 €/mes + impuestos",
  carencia: "30 días",
  fidelizacionResumen: "50% 12 meses si elegible",

  resumenCorto: "Asesoramiento y asistencia jurídica telefónica o telemática, 24h en urgencias legales, revisión y redacción de documentos, gestión de reclamaciones y solicitud de certificados.",

  sections: {

    info: `
      Tu Asesor Legal es un servicio de asesoramiento y asistencia jurídica prestado por
      abogados colegiados ejercientes. Las consultas se atienden por vía telefónica y/o
      telemática y abarcan todas las cuestiones jurídicas del ámbito personal y familiar.
      Está asociado al contrato de electricidad en IberCLI. Carencia: 30 días. Sin permanencia.
    `,

    coberturas: `
      <h3>Ámbitos jurídicos cubiertos</h3>
      <ul>
        <li>Vivienda</li>
        <li>Familia</li>
        <li>Trabajo</li>
        <li>Consumo</li>
        <li>Impuestos</li>
        <li>Seguros</li>
        <li>Internet</li>
        <li>Automóvil</li>
        <li>Seguridad vial y tráfico</li>
        <li>Relaciones con Administraciones Públicas</li>
        <li>Asuntos penales</li>
      </ul>

      <h3>Prestaciones del servicio</h3>
      <ul>
        <li>Asesoramiento jurídico telefónico ilimitado.</li>
        <li>Urgencias legales 24h (delitos, accidentes, problemas graves en el hogar, menores, etc.).</li>
        <li>Revisión de documentación y contratos (laborales, alquiler, bancarios…).</li>
        <li>Redacción de documentos y escritos NO judiciales.</li>
        <li>Gestión de reclamaciones en nombre del cliente.</li>
        <li>Negociaciones con la parte contraria para la defensa de intereses del cliente.</li>
        <li>Recurso de multas.</li>
        <li>Solicitud de certificados a la Administración Pública:
          <ul>
            <li>Seguridad Social (vida laboral, prestaciones…)</li>
            <li>Ministerio de Justicia (delitos sexuales, defunción…)</li>
            <li>DGT (duplicado carnet, cambio titularidad vehículo…)</li>
            <li>Registro de la Propiedad y Mercantil (notas simples, fincas…)</li>
            <li>Ayuntamientos (IVTM, ZBEDEP…)</li>
          </ul>
        </li>
        <li>Acceso preferente a la red de despachos en caso de juicio.</li>
        <li>Cobertura para titular + pareja.</li>
      </ul>
    `,

    exclusiones: `
      <h3>Exclusiones del servicio</h3>
      <ul>
        <li>No cubre abogado presencial ni costas judiciales.</li>
        <li>No se presta el servicio en caso de conflicto de intereses:
          asesoramiento contra Iberdrola, contra Legálitas o cuando dos usuarios
          tengan intereses contrapuestos en el mismo asunto.</li>
        <li>Quedan excluidos:
          <ul>
            <li>Revisión de aranceles.</li>
            <li>Redacción de documentos relacionados con:
              procedimientos arbitrales privados, responsabilidad patrimonial
              de la Administración, convenios reguladores, particiones de herencia,
              conciliaciones laborales.</li>
            <li>Servicios de gestoría.</li>
            <li>Quejas sin contenido jurídico ante colegios profesionales.</li>
            <li>Cualquier documento que requiera presentación judicial posterior,
              intervención notarial o elevación a público.</li>
          </ul>
        </li>
      </ul>
    `,

    procesos: `
      <h3>Contratación</h3>
      <ul>
        <li>Debe contratarse asociado a suministro eléctrico en IberCLI.</li>
        <li>Carencia de 30 días.</li>
        <li>Sin permanencia.</li>
      </ul>

      <h3>Gestión de consultas</h3>
      <ul>
        <li>Las llamadas se transfieren al proveedor jurídico (Legálitas) mediante la botonera.</li>
        <li>Horario general: L-V de 9h a 20h.</li>
        <li>Urgencias legales: servicio 24h.</li>
        <li>Fuera de horario no urgente, el cliente es atendido pero se le remite al horario oficial.</li>
        <li>El cliente puede enviar consultas por email a clientesIB@legalitas.es indicando:
          nombre, apellidos y teléfono de contacto.</li>
      </ul>
    `,

    fidelizacion: `
      <ul>
        <li>Recordar que una sola consulta jurídica externa puede costar entre 100 y 300€.</li>
        <li>Posible aplicar 50% durante 12 meses si el cliente es elegible.</li>
        <li>Poner en valor urgencias 24h, redacción de documentos y gestión completa de reclamaciones.</li>
      </ul>
    `,

    ejemplos: `
      <ul>
        <li>Revisión de contrato de alquiler o hipoteca.</li>
        <li>Recurso de multa de tráfico.</li>
        <li>Reclamación por compra online no entregada.</li>
        <li>Trámites con la Seguridad Social o solicitud de certificados.</li>
        <li>Conflictos familiares o dudas legales sobre separaciones.</li>
        <li>Dudas sobre herencias o fiscalidad básica.</li>
      </ul>
    `,

    argumentario: `
      “TAL ofrece asesoramiento jurídico ilimitado, urgencias legales 24h, revisión y redacción de
      documentos, gestión de reclamaciones y solicitud de certificados. Una sola consulta externa
      suele costar más que varios meses del servicio.”
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
  resumenCorto: "Visita anual de mantenimiento y dos averías al año con desplazamiento incluido, 3 horas de mano de obra y 50€ en materiales.",

  sections: {

    info: `
      El Pack de Mantenimiento de Gas (PMG) es el servicio más completo para el mantenimiento de la instalación de gas,
      caldera/calentador y circuito hidráulico de calefacción. Incluye una visita anual de mantenimiento, dos intervenciones
      por avería al año y atención en un máximo de 24 horas. Carencia de 15 días. Se contrata para un año completo,
      prorrogable automáticamente. No tiene permanencia, pero la baja anticipada implica el pago de las mensualidades
      restantes del año contratado.
    `,

    coberturas: `
      <h3>Visita anual de mantenimiento</h3>
      <ul>
        <li>Análisis de productos de combustión de la caldera.</li>
        <li>Limpieza del quemador.</li>
        <li>Revisión del vaso de expansión.</li>
        <li>Revisión de la instalación, caldera, calentador y circuito hidráulico de calefacción.</li>
      </ul>

      <h3>Intervenciones por avería</h3>
      <ul>
        <li>Incluye hasta <strong>2 averías al año</strong>.</li>
        <li>Desplazamiento siempre incluido.</li>
        <li>Incluye hasta <strong>3 horas de mano de obra</strong> por avería.</li>
        <li>Incluye hasta <strong>50 € en materiales</strong> por avería.</li>
        <li>A partir de la 3ª avería del año, solo cubre el desplazamiento.</li>
        <li>Cubre todos los gasodomésticos de la vivienda, incluidas dos calderas si las hubiera.</li>
        <li>Atención en un plazo máximo de 24 horas desde la apertura de la solicitud.</li>
        <li>6 meses de garantía por intervención.</li>
      </ul>

      <h3>Alcance del servicio</h3>
      <ul>
        <li>Instalación de gas visible.</li>
        <li>Aparatos de gas de potencia menor de 70 kW (calderas, calentadores y aparatos de cocción domésticos).</li>
        <li>Circuito hidráulico de calefacción visto.</li>
      </ul>
    `,

    exclusiones: `
      <h3>Exclusiones generales del PMG</h3>
      <ul>
        <li>La visita anual del PMG no sustituye la Inspección Obligatoria de la Distribuidora cada 5 años.</li>
        <li>Instalaciones con aparatos de gas superiores a 70 kW.</li>
        <li>Cocinas vitrocerámicas de gas.</li>
        <li>Elementos no visibles o no accesibles en la revisión.</li>
        <li>Sustitución o mejora de elementos por cambio normativo.</li>
        <li>Instalaciones comerciales o industriales.</li>
        <li>Daños personales o materiales por mal uso o conservación.</li>
        <li>Daños a terceros.</li>
        <li>Daños por heladas, incendios, explosiones, inundaciones o fuerza mayor.</li>
        <li>No se garantiza reparación de aparatos con antigüedad superior a 10 años.</li>
      </ul>
    `,

    procesos: `
      <h3>Alta</h3>
      <ul>
        <li>Carencia de 15 días desde la contratación.</li>
        <li>Aplica a clientes con tarifa RL1, RL2 o RL3.</li>
        <li>Puede contratarse asociado al gas o como servicio independiente.</li>
        <li>En caso de baja anticipada, el cliente paga las mensualidades pendientes del año.</li>
      </ul>

      <h3>Uso (solicitudes en Opera)</h3>
      <ul>
        <li>Las solicitudes de visita y avería se gestionan en Opera (nunca se transfieren al proveedor).</li>
        <li>Visita anual: se genera como "Solicitud de Visita PMG".</li>
        <li>Avería: se genera como "Avería Mantenimiento de Gas".</li>
        <li>Tiempo de atención: máximo 24 horas desde apertura.</li>
      </ul>

      <h3>Baja</h3>
      <ul>
        <li>Baja asociada a cambio de comercializadora del suministro de gas.</li>
        <li>Emisión de factura de regularización salvo en casos de baja inmediata (< 1 mes desde contratación/renovación).</li>
        <li>Si vuelve a contratar en los 12 días siguientes a la baja, no se emite regularización.</li>
      </ul>
    `,

    fidelizacion: `
      <ul>
        <li>Recordar al cliente que la visita anual de mantenimiento y las dos averías cubiertas pueden superar ampliamente el coste del servicio.</li>
        <li>Aplicar, si corresponde, descuento del 50% durante 12 meses.</li>
        <li>Recordar que todas las intervenciones tienen 6 meses de garantía.</li>
      </ul>
    `,

    ejemplos: `
      <ul>
        <li>Fuga leve en instalación individual detectada por el cliente.</li>
        <li>Caldera que no enciende o falla intermitentemente.</li>
        <li>Escape de agua en circuito de calefacción.</li>
        <li>Cliente que solicita revisión previa a inspección obligatoria de distribuidora.</li>
      </ul>
    `,

    argumentario: `
      “PMG incluye la visita anual completa y cubre dos averías al año con desplazamiento, mano de obra y materiales.
      Una sola reparación de caldera o un fallo en la instalación de gas puede superar el coste anual del servicio.”
    `
  }
},
{
  id: "AG",
  family: "PYS Gas",
  name: "AG · Asistencia Gas",
  price: "5,95 €/mes + impuestos",
  carencia: "15 días",
  fidelizacionResumen: "50% 12 meses si elegible",
  resumenCorto: "Asistencia en averías de instalación de gas, aparatos de gas y circuito hidráulico, con desplazamiento incluido y coberturas económicas en mano de obra y materiales.",

  sections: {

    info: `
      Asistencia Gas (AG) es un servicio orientado a resolver averías puntuales de la instalación individual de gas,
      aparatos de gas domésticos y el circuito hidráulico de calefacción visto. No incluye mantenimiento preventivo
      ni revisión anual, por lo que está pensado para clientes que solo necesitan cobertura frente a incidencias.
      El contrato es anual con carencia de 15 días.
    `,

    coberturas: `
      <h3>Averías cubiertas</h3>
      <ul>
        <li>Incluye <strong>hasta 2 averías al año</strong>.</li>
        <li>En cada una de las dos primeras averías:
          <ul>
            <li>Desplazamiento del técnico incluido.</li>
            <li>Hasta <strong>3 horas de mano de obra</strong>.</li>
            <li>Hasta <strong>50 € en materiales</strong> (importe sin IVA).</li>
          </ul>
        </li>
        <li>A partir de la 3ª avería:
          <ul>
            <li>Desplazamiento gratuito.</li>
            <li>Mano de obra y materiales a cargo del cliente.</li>
          </ul>
        </li>
      </ul>

      <h3>Ámbito de la prestación</h3>
      <ul>
        <li>Instalación receptora individual de gas: tuberías vistas, llaves, conexiones, estanquidad.</li>
        <li>Aparatos de gas de potencia inferior a 70 kW:
          calentadores, calderas y aparatos de cocción doméstica
          (excluye cocinas y vitrocerámicas de gas).</li>
        <li>Circuito hidráulico de calefacción visto: radiadores, llaves, purgadores, detentores.</li>
      </ul>

      <h3>Plazos de atención</h3>
      <ul>
        <li>El técnico acude en un <strong>máximo de 24 horas</strong> desde la apertura de la solicitud.</li>
      </ul>
    `,

    exclusiones: `
      <ul>
        <li>No incluye revisión anual de mantenimiento (sin visita preventiva).</li>
        <li>No cubre cocinas ni vitrocerámicas de gas.</li>
        <li>No cubre elementos ocultos o no accesibles de la instalación.</li>
        <li>No cubre daños por mal uso, corrosión, golpes o defectos estructurales.</li>
        <li>No cubre aparatos con potencia superior a 70 kW ni instalaciones industriales/comerciales.</li>
        <li>Fugas peligrosas deben gestionarse con la distribuidora (obligatorio por normativa).</li>
      </ul>
    `,

    procesos: `
      <h3>Alta</h3>
      <ul>
        <li>Carencia de 15 días desde la contratación.</li>
        <li>Contratable para suministros de gas RL1, RL2 y RL3 asociados a IBERCLI.</li>
      </ul>

      <h3>Gestión de averías</h3>
      <ul>
        <li>Las solicitudes se gestionan en Opera (no se transfieren al proveedor).</li>
        <li>Clasificar la avería como: instalación / aparato de gas / circuito hidráulico.</li>
        <li>En caso de fuga con riesgo: instruir al cliente a contactar con la distribuidora.</li>
        <li>Tipos de avería frecuentes: falta de gas (regulador), fuga leve en aparato, escape de agua en caldera,
            calentador que no enciende, fallo de calefacción, goteo de radiadores.</li>
      </ul>

      <h3>Baja</h3>
      <ul>
        <li>Regularización solo si el cliente ha hecho uso del servicio.</li>
        <li>Baja automática si el cliente cambia de comercializadora de gas.</li>
      </ul>
    `,

    fidelizacion: `
      <ul>
        <li>Recordar que dos averías con mano de obra y materiales suelen costar más que la cuota anual.</li>
        <li>Si el cliente quiere prevención o revisión anual: ofrecer PMG.</li>
        <li>Aplicar 50% 12 meses si el cliente es elegible.</li>
      </ul>
    `,

    ejemplos: `
      <ul>
        <li>Caldera que no arranca o falla intermitentemente.</li>
        <li>Fuga leve en la instalación individual de gas.</li>
        <li>Radiadores que pierden agua o no calientan.</li>
        <li>Calentador que no enciende o no aporta ACS.</li>
      </ul>
    `,

    argumentario: `
      “AG cubre dos averías al año con desplazamiento, mano de obra y materiales incluidos.
      Una sola intervención sin servicio puede costar más que varios meses de cuota, por lo que es
      la opción ideal si el cliente quiere protección económica ante incidencias puntuales.”
    `
  }
},
{
  id: "PG",
  family: "PYS Gas",
  name: "PG · Protección Gas",
  price: "4,95 €/mes + impuestos",
  carencia: "15 días",
  fidelizacionResumen: "50% 12 meses si elegible",

  resumenCorto: "Cobertura de averías en instalación de gas, aparatos y circuito hidráulico, con 2 intervenciones al año que incluyen desplazamiento, mano de obra y materiales.",

  sections: {

    info: `
      Protección Gas (PG) es un servicio orientado a resolver averías tanto en la instalación individual de gas
      como en aparatos domésticos de gas y el circuito hidráulico de calefacción visto. Comparte el mismo nivel
      económico de cobertura que PMG, pero sin revisión anual, por lo que es ideal para clientes que quieren
      protección amplia frente a incidencias sin incluir mantenimiento preventivo.
    `,

    coberturas: `
      <h3>Averías cubiertas</h3>
      <ul>
        <li>Incluye <strong>hasta 2 averías al año</strong>.</li>
        <li>En cada avería cubierta:
          <ul>
            <li>Desplazamiento incluido.</li>
            <li>Hasta <strong>3 horas de mano de obra</strong>.</li>
            <li>Hasta <strong>50 € en materiales</strong> (importe sin IVA).</li>
          </ul>
        </li>
        <li>A partir de la 3ª avería:
          <ul>
            <li>Desplazamiento incluido.</li>
            <li>Mano de obra y materiales a cargo del cliente.</li>
          </ul>
        </li>
      </ul>

      <h3>Ámbito de actuación</h3>
      <ul>
        <li><strong>Instalación de gas visible:</strong> tuberías, llaves, conexiones y estanquidad.</li>
        <li><strong>Aparatos de gas</strong> de potencia inferior a 70 kW:
          <ul>
            <li>Calderas</li>
            <li>Calentadores</li>
            <li>Aparatos de cocción doméstica (excepto cocinas/vitrocerámicas de gas)</li>
          </ul>
        </li>
        <li><strong>Circuito hidráulico de calefacción visto:</strong> radiadores, llaves, purgadores, detentores.</li>
        <li>Cubre una o dos calderas si existieran.</li>
        <li>Atención en un máximo de <strong>24 horas</strong> desde la solicitud.</li>
      </ul>
    `,

    exclusiones: `
      <ul>
        <li>Instalaciones con aparatos de gas superiores a 70 kW.</li>
        <li>Elementos no visibles u ocultos de la instalación.</li>
        <li>Cocinas y vitrocerámicas de gas.</li>
        <li>Daños por mal uso, golpes, corrosión o defectos estructurales.</li>
        <li>Instalaciones comerciales o industriales.</li>
        <li>Averías por heladas, inundaciones, incendios o causas de fuerza mayor.</li>
        <li>No garantiza reparación en aparatos con antigüedad superior a 10 años.</li>
      </ul>
    `,

    procesos: `
      <h3>Alta</h3>
      <ul>
        <li>Carencia de 15 días desde la contratación.</li>
        <li>Válido para tarifas RL1, RL2 y RL3 asociadas a Iberdrola.</li>
      </ul>

      <h3>Gestión de averías</h3>
      <ul>
        <li>Las solicitudes se gestionan a través de Opera; no se transfieren al proveedor.</li>
        <li>Clasificar la avería entre instalación / aparato de gas / circuito hidráulico.</li>
        <li>Si existe fuga con riesgo inminente, debe actuarse con distribuidora según normativa.</li>
      </ul>

      <h3>Baja</h3>
      <ul>
        <li>Regularización si el cliente ha hecho uso del servicio en el periodo.</li>
        <li>Baja automática si el cliente cambia de comercializadora de gas.</li>
      </ul>
    `,

    fidelizacion: `
      <ul>
        <li>Recordar que una sola reparación de caldera o de instalación puede superar con facilidad el coste anual del servicio.</li>
        <li>Si el cliente quiere incluir revisión anual, ofrecer migración a PMG.</li>
        <li>Aplicar descuento de fidelización del 50% si cumple condiciones.</li>
      </ul>
    `,

    ejemplos: `
      <ul>
        <li>Caldera que no arranca, pierde presión o muestra códigos de error.</li>
        <li>Radiadores que gotean o no calientan por fallo de circuitos visibles.</li>
        <li>Fuga leve en la instalación individual de gas.</li>
        <li>Averías en calentadores o quemadores domésticos.</li>
      </ul>
    `,

    argumentario: `
      “PG cubre dos averías al año en instalación y aparatos de gas con desplazamiento, mano de obra y materiales incluidos.
      Una reparación externa de caldera o instalación suele superar el valor anual del servicio, por lo que ofrece un ahorro y
      una protección económica significativa.”
    `
  }
},
{
  id: "AS",
  family: "SSAA Asistente Smart",
  name: "AS · Asistente Smart (Residencial)",
  price: "2,95 €/mes + impuestos",
  carencia: "30 días para reparaciones · 6 meses para Asesoramiento Energético",
  fidelizacionResumen: "50% 12 meses si no tiene descuentos de captación activos",

  resumenCorto: "Servicio digital que ofrece información detallada de consumos, reparación de electrodomésticos de cocina y Asesoramiento Energético.",

  sections: {

    info: `
      Asistente Smart Iberdrola permite al cliente entender mejor cómo consume electricidad en su hogar
      a través de la App Iberdrola Clientes, sin necesidad de instalar dispositivos adicionales. 
      Además, incorpora un servicio de reparación de electrodomésticos de cocina y la posibilidad
      de recibir asesoramiento energético para mejorar la eficiencia del hogar.
    `,

    coberturas: `
      <h3>Información detallada de consumos</h3>
      <ul>
        <li>Visualización del consumo desglosado por electrodomésticos y categorías en la App Iberdrola Clientes.</li>
        <li>Histórico de consumos en euros y kWh.</li>
        <li>Informes periódicos de consumo enviados por correo electrónico.</li>
        <li>Notificaciones personalizadas sobre consumos elevados, optimización de potencia y tarifa, y recomendaciones de ahorro.</li>
      </ul>

      <h3>Reparación de electrodomésticos de cocina</h3>
      <ul>
        <li>Cobertura para: frigorífico, lavadora, cocina eléctrica, horno (no microondas independiente), campana, lavavajillas, secadora y congelador.</li>
        <li>Incluye desplazamiento del técnico y 2 horas de mano de obra por intervención.</li>
        <li>Las reparaciones realizadas disponen de 6 meses de garantía.</li>
        <li>Carencia de 30 días desde la activación del servicio para poder utilizar esta cobertura.</li>
        <li>Si se superan las 2 horas de mano de obra o se necesitan piezas, el importe adicional corre a cargo del cliente.</li>
      </ul>

      <h3>Asesoramiento Energético (AE)</h3>
      <ul>
        <li>Análisis del consumo del hogar y recomendaciones de eficiencia energética.</li>
        <li>Carencia de 6 meses desde el alta para poder solicitar el servicio.</li>
      </ul>
    `,

    exclusiones: `
      <ul>
        <li>No compatible con Asistente Smart Empresas ni con determinados productos digitales que usan la misma lógica de consumo.</li>
        <li>Quedan fuera de la cobertura de reparación: calderas, termos eléctricos, televisores y microondas independientes.</li>
        <li>No se cubren electrodomésticos que se encuentren en periodo de garantía del fabricante.</li>
        <li>No se cubren aparatos que no estén ubicados en el domicilio asociado al contrato de suministro.</li>
        <li>Se excluyen daños por uso inadecuado, golpes externos, corrosión, oxidación o mantenimiento periódico del aparato.</li>
        <li>La información de consumo no se ofrece en tiempo real, ya que depende de la validación de datos por parte de la distribuidora.</li>
      </ul>
    `,

    procesos: `
      <h3>Contratación</h3>
      <ul>
        <li>Cliente residencial con contrato de electricidad en Iberdrola y tarifa 2.0TD.</li>
        <li>Potencia contratada inferior a 15 kW.</li>
        <li>Es necesario disponer de contador inteligente telegestionado.</li>
        <li>La contratación se realiza desde Front Office a través de IberU.</li>
      </ul>

      <h3>Uso del servicio</h3>
      <ul>
        <li>Una vez completado el perfil del hogar en la App, los datos de consumo comienzan a mostrarse en los días posteriores.</li>
        <li>Las dudas sobre consumos o funcionamiento del servicio se resuelven guiando al cliente en el uso de la App/Web y, si procede, abriendo reclamación.</li>
        <li>Las reparaciones de electrodomésticos se solicitan a través del teléfono de servicio, donde se gestiona la visita del técnico.</li>
        <li>Para Asesoramiento Energético, se debe verificar que se ha superado la carencia de 6 meses antes de ofrecerlo.</li>
      </ul>
    `,

    fidelizacion: `
      <ul>
        <li>Recordar al cliente que una sola reparación con desplazamiento y mano de obra puede superar varios meses de cuota.</li>
        <li>Si es elegible, se puede aplicar un descuento de fidelización del 50% durante 12 meses siempre que no tenga descuentos de captación activos.</li>
        <li>En clientes que piden más valor (ciberseguridad, protección de pagos, etc.), plantear la migración a Asistente Smart Hogar.</li>
      </ul>
    `,

    ejemplos: `
      <ul>
        <li>Cliente que quiere saber qué electrodoméstico está incrementando su factura y busca desglose de consumos.</li>
        <li>Cliente con varias averías en lavadora o frigorífico que quiere evitar asumir cada desplazamiento y mano de obra.</li>
        <li>Cliente que recibe facturas más altas de lo esperado y necesita un informe detallado de su consumo.</li>
      </ul>
    `,

    argumentario: `
      “Con Asistente Smart el cliente ve cómo y cuándo consume, recibe avisos para ahorrar y, además, tiene cubiertas
      las averías de los electrodomésticos de cocina más importantes con desplazamiento y 2 horas de mano de obra ya incluidas.
      Una sola reparación sin servicio puede costar más que varios meses de cuota.”
    `
  }
},
  {
  id: "ASH",
  family: "SSAA Asistente Smart",
  name: "ASH · Asistente Smart Hogar",
  price: "3,45 €/mes + impuestos",
  carencia: "30 días para reparaciones · 1 mes en Hogar Digital · 6 meses para Asesoramiento Energético",
  fidelizacionResumen: "50% 12 meses o meses gratis según campañas activas",

  resumenCorto: "Servicio integral que combina información de consumos, reparación de electrodomésticos, Hogar Digital y Protección de Pagos Esencial.",

  sections: {

    info: `
      Asistente Smart Hogar es la evolución del servicio Asistente Smart para clientes domésticos y
      se ofrece como opción prioritaria. Incorpora cuatro bloques principales: análisis detallado
      de consumos, reparación de electrodomésticos de cocina, servicios de Hogar Digital y la
      cobertura del Servicio de Protección de Pagos Esencial.
      Requiere disponer de contador inteligente telegestionado y potencia contratada inferior a 15 kW.
    `,

    coberturas: `
      <h3>Información detallada de consumos</h3>
      <ul>
        <li>Consumo desglosado por electrodomésticos y categorías dentro de la App Iberdrola Clientes.</li>
        <li>Histórico en euros y kWh y comparativas con periodos anteriores.</li>
        <li>Notificaciones automáticas por desviaciones de consumo, optimización de potencia o cambios recomendados.</li>
        <li>Informes periódicos de consumo enviados por correo electrónico.</li>
      </ul>

      <h3>Reparación de electrodomésticos de cocina</h3>
      <ul>
        <li>Electrodomésticos cubiertos: frigorífico, lavadora, cocina eléctrica, horno (no microondas independiente),
            campana extractora, lavavajillas, secadora y congelador.</li>
        <li>Incluye desplazamiento y 2 horas de mano de obra por intervención.</li>
        <li>Las reparaciones incluyen 6 meses de garantía.</li>
        <li>Si se requieren piezas o más horas, el coste adicional lo asume el cliente.</li>
        <li>Carencia de 30 días para esta cobertura.</li>
      </ul>

      <h3>Hogar Digital</h3>
      <ul>
        <li>Servicios de ciberseguridad: antivirus, control parental, protección de identidad y banca online.</li>
        <li>Informes sobre presencia digital y solicitudes de borrado de contenido.</li>
        <li>Soporte técnico remoto 24h para ordenadores y dispositivos conectados.</li>
        <li>Hasta 2 visitas presenciales anuales si la incidencia no puede resolverse de forma remota.</li>
        <li>Posibilidad de configuración y optimización de dispositivos conectados en el hogar.</li>
        <li>Carencia de 1 mes para esta prestación.</li>
      </ul>

      <h3>Asesoramiento Energético (AE)</h3>
      <ul>
        <li>Análisis detallado del consumo del hogar con recomendaciones personalizadas de eficiencia.</li>
        <li>Carencia de 6 meses desde la contratación.</li>
      </ul>

      <h3>Servicio de Protección de Pagos Esencial (SPP Esencial)</h3>
      <ul>
        <li>Incluye las coberturas básicas en caso de incapacidad, fallecimiento, hospitalización o desempleo según tipología del cliente.</li>
        <li>Se activa automáticamente al contratar ASH.</li>
      </ul>
    `,

    exclusiones: `
      <ul>
        <li>No compatible con Asistente Smart Empresas ni con productos que utilicen sistemas equivalentes de análisis de consumo.</li>
        <li>Electrodomésticos excluidos: calderas, termos eléctricos, televisores y microondas independientes.</li>
        <li>No se cubren aparatos en garantía del fabricante.</li>
        <li>No se cubren aparatos situados fuera del domicilio del suministro.</li>
        <li>No se cubren reparaciones por golpes, daños estéticos, corrosión, oxidación o mantenimiento periódico.</li>
        <li>Hogar Digital no cubre daños físicos en los dispositivos, únicamente servicio y soporte.</li>
      </ul>
    `,

    procesos: `
      <h3>Contratación</h3>
      <ul>
        <li>Cliente residencial con contrato de electricidad activo en Iberdrola y tarifa 2.0TD.</li>
        <li>Potencia contratada inferior a 15 kW y contador inteligente operativo.</li>
        <li>Es el servicio que debe ofrecerse por defecto a clientes domésticos dentro de SSAA.</li>
        <li>Carencias: 30 días para reparaciones, 1 mes para Hogar Digital y 6 meses para AE.</li>
      </ul>

      <h3>Uso del servicio</h3>
      <ul>
        <li>Los consumos comienzan a mostrarse una vez completado el perfil del hogar en la App.</li>
        <li>Las incidencias relacionadas con el análisis de consumo se gestionan desde Front Office.</li>
        <li>Las reparaciones se solicitan a través del canal telefónico habilitado.</li>
        <li>Hogar Digital se activa a través del portal correspondiente con las credenciales enviadas al cliente.</li>
        <li>Para AE, se debe verificar previamente la carencia de 6 meses.</li>
      </ul>
    `,

    fidelizacion: `
      <ul>
        <li>Destacar que integra varios servicios en uno solo: consumos, reparaciones, soporte digital y protección de pagos.</li>
        <li>Si el cliente es elegible, se puede aplicar un descuento del 50% durante 12 meses o las campañas vigentes.</li>
        <li>Si el cliente no usa Hogar Digital, se puede valorar la migración al servicio Asistente Smart estándar.</li>
      </ul>
    `,

    ejemplos: `
      <ul>
        <li>Familias con uso intensivo de electrodomésticos y dispositivos conectados.</li>
        <li>Clientes que necesitan apoyo digital frecuente para ordenadores u otros equipos tecnológicos.</li>
        <li>Clientes que quieren controlar su consumo y recibir avisos ante incrementos inesperados.</li>
      </ul>
    `,

    argumentario: `
      “Asistente Smart Hogar combina en una única cuota control de consumo, reparaciones,
      servicios de ciberseguridad y soporte digital, junto con una cobertura que ayuda al
      cliente en situaciones económicas imprevistas. El valor conjunto de estas prestaciones
      supera con creces el coste mensual del servicio.”
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
},
{
  id: "SPP_PLUS",
  family: "PYS Protección",
  name: "SPP Plus · Protección de Pagos Plus",
  price: "Cuota según contrato",
  carencia: "Habitualmente sin carencia para siniestros sobrevenidos tras el alta (siempre revisar póliza)",
  fidelizacionResumen: "No aplica fidelización",
  resumenCorto: "Seguro que refuerza el pago de facturas de energía ante desempleo, incapacidad, hospitalización o fallecimiento, con importes superiores al SPP Esencial.",

  sections: {
    info: `
      SPP Plus es un seguro de Protección de Pagos orientado a que el cliente pueda seguir afrontando los pagos
      de sus facturas (electricidad y otros suministros asociados al contrato asegurado) cuando atraviesa una
      situación económica complicada: desempleo, incapacidad, hospitalización o fallecimiento.
      
      Es una versión reforzada frente al Seguro Protección de Pagos Esencial (SPP Esencial), con importes de
      indemnización más elevados y/o más supuestos cubiertos (según póliza vigente). En caso de que el cliente
      tenga contratado SPP Esencial junto con SPP Plus, las coberturas de ambos seguros se suman sobre el mismo
      contrato asegurado (hasta los límites de cada póliza).
    `,
    coberturas: `
      <ul>
        <li>
          <strong>Desempleo involuntario (trabajador por cuenta ajena)</strong>:
          se abona una indemnización por mensualidades, orientada a cubrir las facturas del contrato asegurado
          mientras dura la situación, hasta los límites económicos previstos en la póliza.
        </li>
        <li>
          <strong>Incapacidad Temporal (trabajador en activo)</strong>:
          pago de una cantidad prefijada por periodo de baja, destinada a cubrir total o parcialmente
          los recibos de energía asociados al contrato asegurado.
        </li>
        <li>
          <strong>Incapacidad Absoluta y Permanente</strong>:
          indemnización única de importe superior a la del SPP Esencial, destinada a cubrir facturas futuras
          del contrato asegurado hasta agotar el capital contratado.
        </li>
        <li>
          <strong>Fallecimiento</strong>:
          capital asegurado para liquidar o cubrir el pago de las facturas de energía del contrato asegurado
          hasta el límite económico definido en la póliza.
        </li>
        <li>
          <strong>Hospitalización</strong>:
          pago de una indemnización cuando el asegurado permanece hospitalizado un número mínimo de días,
          con el objetivo de que no tenga que asumir el pago de las facturas de suministros durante ese periodo.
        </li>
        <li>
          <strong>Aplicación de la indemnización</strong>:
          el importe se aplica directamente sobre las facturas del contrato asegurado (electricidad u otros
          suministros vinculados) hasta agotar el capital disponible. Si coexiste con SPP Esencial, se acumulan
          los importes de ambos seguros sobre el mismo contrato.
        </li>
      </ul>
      <p>
        <em>Nota para el agente:</em> los importes concretos por cobertura (capital en fallecimiento,
        incapacidad, número de mensualidades cubiertas, etc.) vienen detallados en el Manual SPP / condicionado
        específico. En ficha solo indicamos que SPP Plus supone un nivel de protección superior al SPP Esencial.
      </p>
    `,
    exclusiones: `
      <ul>
        <li>
          Situaciones <strong>voluntarias</strong> como baja voluntaria, abandono del puesto,
          despidos pactados o finalización de contrato por mutuo acuerdo.
        </li>
        <li>
          Situaciones de desempleo o incapacidad que <strong>no cumplan el periodo mínimo de cotización
          o afiliación</strong> exigido por la aseguradora (según póliza).
        </li>
        <li>
          Enfermedades preexistentes no declaradas o excluidas expresamente en el cuestionario de salud.
        </li>
        <li>
          Siniestros ocurridos <strong>antes de la fecha de efecto</strong> del seguro o durante un posible
          periodo de carencia específico indicado en el condicionado (si lo hubiera).
        </li>
        <li>
          Sucesos derivados de actos dolosos o fraudulentos del asegurado o de beneficiarios.
        </li>
      </ul>
    `,
    procesos: `
      <ul>
        <li>
          <strong>Contratación</strong>:
          <ul>
            <li>Siempre vinculado a un contrato de suministro (habitualmente electricidad) en Iberdrola.</li>
            <li>La cuota y los capitales asegurados quedan definidos en el condicionado/póliza.</li>
            <li>El cliente debe aceptar las condiciones del seguro (aseguradora, coberturas, exclusiones y capitales).</li>
          </ul>
        </li>
        <li>
          <strong>Comunicación de siniestro</strong>:
          <ul>
            <li>El cliente debe declarar el siniestro directamente a la aseguradora (actualmente MetLife, según documentación vigente).</li>
            <li>Canales habituales: teléfono, email y formulario online de siniestros de la aseguradora.</li>
          </ul>
        </li>
        <li>
          <strong>Documentación típica</strong> (según causa):
          <ul>
            <li>Desempleo: certificado de empresa y de prestación por desempleo.</li>
            <li>Incapacidad: partes médicos y resolución del organismo competente si aplica.</li>
            <li>Hospitalización: informe y justificante de ingreso y alta hospitalaria.</li>
            <li>Fallecimiento: certificado de defunción y documentación de beneficiarios.</li>
          </ul>
        </li>
        <li>
          <strong>Aplicación de la indemnización</strong>:
          la aseguradora comunica a Iberdrola el capital aprobado y este se aplica sobre las facturas
          del contrato asegurado hasta agotar el importe disponible.
        </li>
      </ul>
    `,
    fidelizacion: `
      <ul>
        <li>Al ser un seguro regulado, no se aplican descuentos comerciales tipo fidelización.</li>
        <li>
          En objeciones por precio o baja, recordar el impacto económico de un desempleo,
          incapacidad o fallecimiento sin cobertura (varios meses de facturas sin poder pagar).
        </li>
        <li>
          Si el cliente tiene también SPP Esencial, recalcar que las coberturas se <strong>acumulan</strong>,
          aumentando el colchón de protección sobre su contrato.
        </li>
      </ul>
    `,
    ejemplos: `
      <ul>
        <li>
          Cliente que pasa a <strong>desempleo involuntario</strong> y durante varios meses no puede asumir
          el pago completo de su factura de luz: SPP Plus activa indemnizaciones periódicas para cubrir esas facturas.
        </li>
        <li>
          Cliente que sufre una <strong>baja laboral</strong> con ingresos reducidos:
          el seguro cubre un importe fijo por incapacidad temporal que se aplica a las facturas del contrato asegurado.
        </li>
        <li>
          Fallecimiento del titular del contrato: el capital de SPP Plus permite seguir pagando las facturas
          de la vivienda mientras la familia regulariza su situación económica.
        </li>
      </ul>
    `,
    argumentario: `
      “SPP Plus refuerza el colchón económico del cliente en los momentos más delicados: desempleo,
      incapacidad, hospitalización o fallecimiento. En lugar de dejar de pagar las facturas de luz y otros
      suministros, el seguro asume esos importes hasta el límite contratado. Si además tiene SPP Esencial,
      las coberturas se suman y aumenta la protección de su hogar.”
    `
  }
},
{
  id: "PACK_T_GAS",
  family: "PYS Gas",
  name: "Pack Tranquilidad Gas",
  price: "Cuota según contrato",
  carencia: "Según póliza",
  fidelizacionResumen: "No aplica fidelización",
  resumenCorto: "Pack asegurador ligado al gas que cubre averías y asistencia sobre la instalación de gas del hogar, especialmente para clientes de IberCUR.",

  sections: {
    info: `
      Pack Tranquilidad Gas es un seguro vinculado al suministro de gas que protege al cliente frente a averías
      o incidencias en la instalación interior de gas de su vivienda, ofreciendo asistencia técnica y cobertura
      económica para reparaciones dentro de los límites fijados en la póliza.
      
      Es el producto de referencia para clientes con contrato de gas en IberCUR cuando contactan con el teléfono
      de CUR solicitando un servicio equivalente a los PYS de gas (PMG, AG, PG). En cambio, cuando el cliente
      pertenece a Iberdrola Clientes (CLI) se ofrece el PMG/AG/PG según proceda.
    `,
    coberturas: `
      <ul>
        <li>
          <strong>Asistencia técnica por avería en la instalación de gas</strong>:
          tuberías interiores, llaves, juntas y elementos de la instalación receptora individual, según alcance de póliza.
        </li>
        <li>
          <strong>Desplazamiento del técnico</strong>:
          incluido en las intervenciones cubiertas.
        </li>
        <li>
          <strong>Mano de obra y materiales</strong>:
          cubiertos hasta el límite económico anual establecido en la póliza. A partir de ese límite,
          el cliente puede aceptar presupuesto y asumir el exceso.
        </li>
        <li>
          <strong>Asistencia urgente</strong> en caso de sospecha de fuga o riesgo:
          priorización de la intervención y coordinación con la distribuidora cuando proceda.
        </li>
      </ul>
      <p>
        <em>Nota para el agente:</em> Pack Tranquilidad Gas es un seguro (no un PYS gestionado por Grupo PYS). Los límites
        económicos concretos (importe máximo por siniestro y por año) figuran en el condicionado del seguro.
      </p>
    `,
    exclusiones: `
      <ul>
        <li>No cubre la caldera ni aparatos de combustión como calentadores (salvo que la póliza lo indique expresamente).</li>
        <li>No cubre daños estructurales en la vivienda no vinculados directamente a la instalación de gas.</li>
        <li>Quedan excluidas las instalaciones no homologadas, manipuladas o fuera de normativa.</li>
        <li>No cubre intervenciones en instalaciones comunitarias o elementos propiedad de la distribuidora.</li>
      </ul>
    `,
    procesos: `
      <ul>
        <li>
          <strong>Contratación</strong>:
          se ofrece a clientes con contrato de gas en IberCUR cuando llaman al teléfono de CUR
          y solicitan cobertura de mantenimiento/averías de gas. La cuota y coberturas vienen definidas en el condicionado.
        </li>
        <li>
          <strong>Gestión de averías</strong>:
          el cliente llama al teléfono de asistencia del seguro; se abre parte y se envía un técnico
          al domicilio en función de la urgencia (fuga/riesgo vs. incidencia menor).
        </li>
        <li>
          <strong>Liquidación</strong>:
          la aseguradora aplica al siniestro los límites de mano de obra y materiales previstos.
          Si la reparación supera esos límites, el técnico puede facilitar presupuesto para el exceso.
        </li>
      </ul>
    `,
    fidelizacion: `
      <ul>
        <li>
          Recordar que la visita de un técnico de gas sin seguro (desplazamiento + mano de obra + materiales)
          suele superar fácilmente el coste anual del Pack Tranquilidad Gas.
        </li>
        <li>
          En objeciones por precio, comparar con lo que podría costar una sola fuga o reparación en instalación de gas
          sin ningún tipo de cobertura.
        </li>
      </ul>
    `,
    ejemplos: `
      <ul>
        <li>Olor a gas en cocina o zona de caldera y necesidad de revisión de la instalación interior.</li>
        <li>Pérdida de presión o corte de suministro interno por defecto en la instalación receptora individual.</li>
      </ul>
    `,
    argumentario: `
      “Pack Tranquilidad Gas garantiza que, si surge una incidencia en la instalación de gas, el cliente tiene un
      técnico especializado, desplazamiento y parte de la reparación cubiertos por el seguro. Frente al coste de una
      sola avería sin cobertura, la cuota del pack suele estar más que justificada.”
    `
  }
},
{
  id: "T_AVERIA_GAS",
  family: "PYS Gas",
  name: "Tranquilidad Avería Gas",
  price: "Cuota según contrato",
  carencia: "Según póliza",
  fidelizacionResumen: "No aplica fidelización",
  resumenCorto: "Seguro que cubre averías en la instalación interior de gas con asistencia urgente y límite económico asegurado.",

  sections: {
    info: `
      Tranquilidad Avería Gas es un seguro focalizado exclusivamente en las averías de la instalación interior de gas.
      Está pensado para clientes que no necesitan un mantenimiento preventivo, pero sí quieren tener cubierta la
      reparación de defectos o incidencias en tuberías, llaves y elementos de la instalación, con asistencia urgente
      cuando hay riesgo.
    `,
    coberturas: `
      <ul>
        <li>
          <strong>Reparación de averías en la instalación interior de gas</strong>:
          incluye conducción interior, llaves y elementos visibles, según alcance definido en la póliza.
        </li>
        <li>
          <strong>Asistencia urgente</strong> ante fugas o situaciones de riesgo percibido por el cliente:
          priorización de la visita y, si procede, coordinación con la distribuidora.
        </li>
        <li>
          <strong>Desplazamiento, mano de obra y materiales</strong>:
          cubiertos hasta el límite económico por siniestro y/o anual establecido en el contrato del seguro.
        </li>
      </ul>
    `,
    exclusiones: `
      <ul>
        <li>No cubre aparatos de gas (caldera, calentador, cocina, etc.), salvo indicación expresa en la póliza.</li>
        <li>No cubre instalaciones exteriores, comunitarias o propiedad de la distribuidora.</li>
        <li>No cubre intervenciones en instalaciones manipuladas o que no cumplan normativa vigente.</li>
      </ul>
    `,
    procesos: `
      <ul>
        <li>
          <strong>Declaración de avería</strong>:
          el cliente llama al teléfono de asistencia del seguro y describe el problema (olor a gas, pérdida de presión, etc.).
        </li>
        <li>
          <strong>Priorización</strong>:
          si hay sospecha de fuga o riesgo, se considera aviso urgente y se da prioridad a la intervención técnica.
        </li>
        <li>
          <strong>Intervención</strong>:
          el técnico realiza la reparación y la aseguradora aplica los límites de mano de obra y materiales
          definidos en la póliza; si se supera el límite, se ofrecerá presupuesto adicional al cliente.
        </li>
      </ul>
    `,
    fidelizacion: `
      <ul>
        <li>
          Recalcar que en instalaciones antiguas son habituales pequeñas fugas o defectos en llaves y tuberías,
          y que cada intervención sin seguro puede ser costosa.
        </li>
        <li>
          Presentarlo como una forma de evitar facturas imprevistas por averías puntuales de la instalación de gas.
        </li>
      </ul>
    `,
    ejemplos: `
      <ul>
        <li>Fuga localizada en un tramo de tubería interior que requiere sustitución de un pequeño tramo.</li>
        <li>Llave de corte interior que pierde gas o no cierra correctamente y debe ser sustituida.</li>
      </ul>
    `,
    argumentario: `
      “Tranquilidad Avería Gas es una solución sencilla y económica para tener la instalación interior de gas cubierta:
      si aparece una fuga o un defecto en tuberías o llaves, el seguro responde con asistencia urgente y asume el coste
      de la reparación dentro de los límites contratados.”
    `
  }
},
{
  id: "T_REVISION_GAS",
  family: "PYS Gas",
  name: "Tranquilidad Revisión Gas",
  price: "Cuota según contrato",
  carencia: "Según póliza",
  fidelizacionResumen: "No aplica fidelización",
  resumenCorto: "Seguro que cubre la revisión periódica obligatoria de la instalación de gas y pequeñas correcciones asociadas.",

  sections: {
    info: `
      Tranquilidad Revisión Gas es un seguro orientado a cubrir el coste de la revisión periódica obligatoria de la
      instalación de gas (habitualmente cada 5 años), incluyendo el desplazamiento del técnico y determinadas
      actuaciones menores necesarias para superar la revisión, según los límites económicos que marque la póliza.
    `,
    coberturas: `
      <ul>
        <li>
          <strong>Coste de la revisión periódica obligatoria</strong> de la instalación interior de gas,
          realizada por un técnico autorizado.
        </li>
        <li>
          <strong>Desplazamiento del técnico</strong> al domicilio para realizar la revisión.
        </li>
        <li>
          <strong>Pequeñas reparaciones o ajustes</strong> directamente ligados a la revisión y necesarios para
          corregir defectos menores dentro del límite económico fijado en la póliza (por ejemplo, ajustes de llaves,
          sustitución de juntas u otros elementos de bajo coste).
        </li>
      </ul>
    `,
    exclusiones: `
      <ul>
        <li>No cubre revisiones realizadas fuera de los periodos legales o no programadas según calendario oficial.</li>
        <li>No cubre reformas de gran entidad ni sustitución completa de la instalación de gas.</li>
        <li>No cubre daños estructurales ni intervenciones ajenas al alcance de la revisión periódica.</li>
      </ul>
    `,
    procesos: `
      <ul>
        <li>
          <strong>Planificación</strong>:
          el cliente puede solicitar que se programe la revisión dentro del periodo legal establecido; la aseguradora
          o el proveedor concertarán fecha y hora.
        </li>
        <li>
          <strong>Visita y revisión</strong>:
          el técnico revisa la instalación interior, toma medidas de estanqueidad y verifica que cumple normativa.
        </li>
        <li>
          <strong>Informe</strong>:
          se entrega al cliente un informe sobre el estado de la instalación y, si hay defectos, se corrigen
          en el momento en la medida en que estén cubiertos por el seguro.
        </li>
      </ul>
    `,
    fidelizacion: `
      <ul>
        <li>
          Recordar que una revisión de gas contratada de manera independiente suele tener un coste significativo
          (desplazamiento + trabajo + posibles ajustes).
        </li>
        <li>
          Presentarlo como una forma de tener la revisión “prepagada” y sin sobresaltos, cumpliendo la normativa
          y evitando posibles cortes de suministro por no superar la inspección.
        </li>
      </ul>
    `,
    ejemplos: `
      <ul>
        <li>Revisión obligatoria de la instalación interior cada 5 años según normativa.</li>
        <li>Ajuste de una llave o sustitución de una junta para subsanar un defecto menor detectado en la revisión.</li>
      </ul>
    `,
    argumentario: `
      “Con Tranquilidad Revisión Gas el cliente se asegura de que la revisión obligatoria de su instalación está cubierta:
      no tiene que preocuparse por cuánto le va a costar la visita ni por pequeñas correcciones necesarias para superar
      la inspección y seguir cumpliendo la normativa.”
    `
  }
},
{
  id: "SPP_MASCOTAS",
  family: "PYS Protección",
  name: "Protección de Pagos Plus Mascotas",
  price: "Cuota según aseguradora",
  carencia: "Según póliza (habitualmente sin carencia para siniestros sobrevenidos)",
  fidelizacionResumen: "No aplica fidelización",
  resumenCorto: "Seguro que vincula eventos graves de salud de la mascota con una indemnización para ayudar a cubrir pagos del hogar.",

  sections: {
    info: `
      Protección de Pagos Plus Mascotas es un seguro que adapta el concepto de Protección de Pagos a situaciones
      relacionadas con la mascota del cliente. Cuando la mascota asegurada sufre una enfermedad grave, accidente o
      requiere intervención u hospitalización, el seguro abona una indemnización destinada a ayudar al propietario a
      afrontar pagos del hogar (como facturas de energía), dentro de los límites contratados.
    `,
    coberturas: `
      <ul>
        <li>
          <strong>Cobertura por hospitalización de la mascota</strong>:
          indemnización si la mascota debe permanecer ingresada un mínimo de días en un centro veterinario.
        </li>
        <li>
          <strong>Cobertura por intervención quirúrgica</strong>:
          pago de una cuantía fija o variable (según póliza) en caso de operación relevante de la mascota asegurada.
        </li>
        <li>
          <strong>Indemnización orientada a pagos del hogar</strong>:
          el capital se utiliza para ayudar al cliente a hacer frente a facturas de luz, gas u otros gastos esenciales
          durante el periodo en el que la mascota requiere atención intensiva.
        </li>
      </ul>
    `,
    exclusiones: `
      <ul>
        <li>Enfermedades preexistentes o crónicas no declaradas en el momento de la contratación del seguro.</li>
        <li>Accidentes o daños derivados de negligencia grave, maltrato o incumplimiento de normativa sobre animales.</li>
        <li>Gastos veterinarios que excedan el ámbito o límites económicos fijados en la póliza.</li>
        <li>Eventos que ocurran antes de la fecha de efecto del seguro o durante un posible periodo de carencia inicial.</li>
      </ul>
    `,
    procesos: `
      <ul>
        <li>
          <strong>Declaración de siniestro</strong>:
          el cliente contacta con la aseguradora y facilita los datos de la mascota, la clínica veterinaria y el tipo de evento
          (hospitalización, cirugía, etc.).
        </li>
        <li>
          <strong>Documentación</strong>:
          suele requerirse informe veterinario detallado, justificantes de ingreso y/o intervención y, cuando aplique,
          presupuestos o facturas asociadas.
        </li>
        <li>
          <strong>Evaluación y pago</strong>:
          la aseguradora analiza la documentación y, si el siniestro está cubierto, abona la indemnización según
          las condiciones contratadas (importe y número de eventos cubiertos al año).
        </li>
      </ul>
    `,
    fidelizacion: `
      <ul>
        <li>
          El propietario suele tener un vínculo emocional muy fuerte con su mascota; este seguro le da tranquilidad
          tanto desde el punto de vista emocional como económico.
        </li>
        <li>
          En objeciones por precio, comparar el coste mensual del seguro con lo que puede suponer una hospitalización
          o cirugía veterinaria y, además, tener que seguir pagando todas las facturas del hogar.
        </li>
      </ul>
    `,
    ejemplos: `
      <ul>
        <li>
          Mascota que sufre un accidente de tráfico y requiere cirugía y varios días de hospitalización:
          el seguro activa una indemnización que ayuda a cubrir facturas del hogar.
        </li>
        <li>
          Diagnóstico de enfermedad grave que obliga a la mascota a permanecer ingresada y bajo tratamiento intensivo:
          el cliente recibe una prestación económica que le da margen financiero durante ese periodo.
        </li>
      </ul>
    `,
    argumentario: `
      “Protección de Pagos Plus Mascotas está pensado para quienes consideran a su mascota parte de la familia.
      Si ocurre algo grave y necesita cirugía u hospitalización, el seguro no solo ayuda con los costes asociados,
      sino que también aporta un colchón para mantener al día los pagos esenciales del hogar.”
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







