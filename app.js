const SECTION_LABELS = {
  info: "Info general",
  coberturas: "Coberturas",
  exclusiones: "Exclusiones",
  procesos: "Procesos clave",
  fidelizacion: "Fidelización / Promos",
  ejemplos: "Ejemplos de uso",
  argumentario: "Argumentario simple"
};

const PRODUCTS = [
  {
    id: "PIH",
    family: "Servicios de protección",
    name: "PIH · Pack Iberdrola Hogar",
    price: "8,95 €/mes + impuestos",
    carencia: "Carencia 1 mes (6 meses para Asesoramiento Energético)",
    fidelizacionResumen: "Fidelización estándar PYS: 50% en la cuota durante 12 meses. En campañas concretas puede aplicarse 100% 12 meses si el cliente no disfruta descuentos de captación.",
    resumenCorto: "Servicio integral con urgencias eléctricas, reparación de electrodomésticos, bricolaje eléctrico, asesoramiento energético, Hogar Digital y Seguro de Protección de Pagos Esencial.",
    sections: {
      info: `
        <p>El Pack Iberdrola Hogar es el servicio prioritario dentro de los servicios de protección. Sustituye al antiguo SPI en nuevas altas y añade la cobertura Hogar Digital sobre el paquete clásico de protección hogar.</p>
        <p>Está asociado al contrato de suministro eléctrico (potencia inferior a 15 kW) y no es contratable de forma independiente. Es un servicio recurrente mensual, renovable, con carencia de 30 días para la mayoría de coberturas y 6 meses para el Asesoramiento Energético.</p>
        <p>Es el servicio de referencia a ofrecer cuando el cliente busca protección global del hogar y tiene perfil digital.</p>
      `,
      coberturas: `
        <h3>Bloque hogar y confort</h3>
        <ul>
          <li>Averías eléctricas urgentes en menos de 3 horas, con cobertura económica anual de hasta 550 € en desplazamiento, mano de obra y materiales en la instalación eléctrica interior del hogar (no zonas comunes ni exteriores).</li>
          <li>Reparación de 9 electrodomésticos de cocina y la TV: frigorífico, congelador, lavadora, lavavajillas, secadora, cocina eléctrica, horno, campana y termo/caldera eléctricos, más televisor, con hasta 300 € por aparato/año y sin límite de intervenciones mientras no se supere el tope anual.</li>
          <li>Bricolaje eléctrico: una intervención anual con desplazamiento y hasta 3 horas de mano de obra para trabajos como cambio de enchufes, interruptores y apliques, instalación de lámparas, pequeños trabajos de cableado interior o conexión y puesta en marcha de equipos.</li>
        </ul>
        <h3>Bloque eficiencia y digital</h3>
        <ul>
          <li>Asesoramiento Energético: diagnóstico de consumo del hogar, análisis de curva de carga y propuesta de medidas de ahorro. Visita periódica (habitualmente cada 4 años) bajo demanda del cliente y emisión de informe con propuestas.</li>
          <li>Asistente Smart Hogar: información de consumos detallados, tendencias, alarmas de uso anómalo y recomendaciones de ahorro desde la App Clientes.</li>
          <li>Hogar Digital: ciberseguridad (antivirus, protección de identidad, control parental), monitorización de presencia online y soporte digital/tecnológico remoto y, si procede, presencial hasta un máximo de intervenciones anuales.</li>
        </ul>
        <h3>Bloque protección de pagos</h3>
        <ul>
          <li>Seguro de Protección de Pagos Esencial incluido: genera un saldo a favor del cliente para cubrir facturas de luz y gas en caso de siniestro cubierto (incapacidad, fallecimiento, y coberturas que dependen de edad y situación laboral).</li>
          <li>Carencia y capitales adaptados a la edad; es obligatorio registrar la fecha de nacimiento en IberU al contratar.</li>
        </ul>
      `,
      exclusiones: `
        <ul>
          <li>No cubre electrodomésticos en garantía del fabricante ni equipos que no estén ubicados en el domicilio del punto de suministro.</li>
          <li>No cubre averías en garajes, trasteros, anexos, piscinas ni iluminación exterior, salvo que se indiquen explícitamente en las condiciones particulares.</li>
          <li>No cubre reparaciones en elementos propiedad de la distribuidora (equipos de medida, contadores de compañía, etc.).</li>
          <li>En electrodomésticos con antigüedad superior al límite (habitualmente más de 10 años, o más de 5 años para TV) la cobertura se limita a desplazamiento y 3 horas de mano de obra; las piezas corren a cargo del cliente.</li>
          <li>Hogar Digital no cubre daños materiales en equipos, sino servicios de ciberseguridad, soporte digital y gestión de huella digital.</li>
          <li>El Seguro de Protección de Pagos no cubre todos los tipos de siniestros para todos los perfiles; las coberturas y capitales dependen de la edad y situación (empleado, autónomo, pensionista, etc.).</li>
        </ul>
      `,
      procesos: `
        <h3>Información general</h3>
        <ul>
          <li>Producto asociado al contrato de electricidad IberCLI, con potencia inferior a 15 kW y cliente residencial.</li>
          <li>No compatible con otros servicios de protección equivalentes (PEH, PEH+, SPI, determinados packs o servicios de protección independientes).</li>
          <li>Alta, bajas y modificaciones se gestionan en IberU, en la ficha del contrato de suministro.</li>
        </ul>
        <h3>Contratación / Alta</h3>
        <ol>
          <li>Desde IberU, acceder al catálogo de productos y seleccionar Pack Iberdrola Hogar, asociándolo al suministro correcto.</li>
          <li>Comprobar requisitos: potencia, mercado libre, ausencia de incompatibilidades activas. En caso de incompatibilidad, valorar sustitución o cambio de servicio (upgrade/downgrade).</li>
          <li>Revisar en la pantalla de detalles de oferta que aparecen los descuentos de captación o campañas vigentes, incluyendo promocionales sobre energía, si los hubiera.</li>
          <li>Explicar claramente carencias, permanencia si aplica por campañas, y contenido de coberturas clave (urgencias eléctricas, electrodomésticos y Hogar Digital).</li>
          <li>Enviar documentación y consentimiento al cliente, y cerrar la contratación en IberU una vez aceptada la oferta.</li>
        </ol>
        <h3>Gestión de servicio y averías</h3>
        <ol>
          <li>Para aperturas de servicio (electrodomésticos, urgencias eléctricas, bricolaje, asesoramiento energético) acceder al módulo de Gestión de PYS e identificar el servicio PIH activo en la ficha del cliente.</li>
          <li>Seleccionar tipo de servicio: avería electrodomésticos, urgencia eléctrica, bricolaje, asesoramiento energético o soporte digital según el caso, comprobando el saldo remanente y los límites anuales antes de abrir la solicitud.</li>
          <li>Completar los datos de la incidencia, persona de contacto, teléfonos y breve descripción de la avería. Registrar las observaciones con máximo detalle para el proveedor.</li>
          <li>Informar al cliente de los tiempos de atención: urgencias eléctricas en menos de 3 horas, electrodomésticos y bricolaje en torno a 48 horas laborables, asesoramiento energético bajo cita y soporte digital según procedimiento de Hogar Digital.</li>
        </ol>
        <h3>GEIR PYS</h3>
        <ul>
          <li>Si el cliente indica que desconoce la contratación, no recuerda haber aceptado el PIH o indica error de comercialización, seguir circuito GEIR PYS y no aplicar argumentario de fidelización estándar hasta aclarar el origen del alta.</li>
          <li>Registrar la gestión GEIR en la tipificación correcta y documentar claramente el relato del cliente, la revisión de interacciones y grabaciones, y el resultado de la verificación.</li>
        </ul>
      `,
      fidelizacion: `
        <h3>Criterios generales de fidelización</h3>
        <ul>
          <li>Objetivo principal: evitar la baja y mantener el PIH destacando las coberturas y el valor frente a alternativas (seguro hogar, servicios sueltos o competencia).</li>
          <li>Si el cliente amenaza baja por precio pero valora el servicio, ofrecer primero la promoción de fidelización estándar: 50 % de descuento en la cuota durante 12 meses, siempre que el cliente no esté ya disfrutando de un descuento de captación.</li>
          <li>En determinadas campañas puede aplicarse 100 % de descuento 12 meses para ciertos servicios recurrentes; revisar siempre en el Manual de Fidelización y en IberU si el PIH es elegible.</li>
          <li>Si el cliente no acepta mantener el PIH aunque se ofrezca fidelización, plantear downgrade a PEH/PEH+ o PB según perfil digital y necesidades, explicando el cambio de coberturas.</li>
        </ul>
        <h3>Pasos orientativos</h3>
        <ol>
          <li>Escuchar y sondear el motivo principal (precio, desconocimiento, insatisfacción por gestión de averías, duplicidad con seguro hogar, etc.).</li>
          <li>Reformular resaltando coberturas usadas o potencialmente útiles: urgencias eléctricas sin costes adicionales, reparaciones de electrodomésticos, asesoramiento energético e higiene digital.</li>
          <li>Si el motivo es precio y el cliente ve valor en el servicio, plantear explícitamente la promoción: por ejemplo, señalando la nueva cuota con 50 % durante 12 meses.</li>
          <li>Registrar siempre en IberU la aceptación o rechazo de la promoción y la interacción de fidelización correspondiente.</li>
        </ol>
      `,
      ejemplos: `
        <ul>
          <li>Cliente con varias averías recientes en electrodomésticos y preocupado por costes futuros: reforzar el valor de las reparaciones incluidas y la garantía de 6 meses frente a precios de mercado (reparaciones de TV, nevera u horno pueden superar fácilmente los 100 € por intervención).</li>
          <li>Cliente con dudas sobre consumos: poner en valor Asistente Smart y Asesoramiento Energético para detectar consumos anómalos, optimizar potencia y proponer soluciones de eficiencia.</li>
          <li>Cliente muy digital preocupado por seguridad online de su familia: enfatizar Hogar Digital, control parental, protección de identidad y soporte técnico remoto.</li>
        </ul>
      `,
      argumentario: `
        <p>“Este pack concentra en una sola cuota la parte más cara de cualquier problema en casa: las urgencias eléctricas, las averías de electrodomésticos de cocina y el soporte tecnológico, además de un seguro que protege el pago de sus facturas si ocurre algo grave. Una sola reparación de nevera, termo o TV suele costar más que varios meses del servicio. Con el Pack Iberdrola Hogar tiene un técnico de confianza, asistencia digital y protección económica, todo centralizado con Iberdrola y con tiempos de respuesta pactados.”</p>
        <p>“Si lo que le preocupa es el precio mensual, podemos revisar la posibilidad de aplicar un descuento temporal de fidelización y, si aun así prefiere algo más básico, adaptar el servicio a uno de menor cuota manteniendo parte de la protección.”</p>
      `
    }
  },
  {
    id: "PEH_PLUS",
    family: "Servicios de protección",
    name: "PEH+ · Protección Eléctrica Hogar Plus",
    price: "8,95 €/mes + impuestos",
    carencia: "Carencia 1 mes (6 meses para Asesoramiento Energético)",
    fidelizacionResumen: "Fidelización estándar PYS: 50% 12 meses, con posibilidad de campañas reforzadas. Prioritario como alternativa cuando el cliente no quiere PIH pero sí protección amplia.",
    resumenCorto: "Protección avanzada de instalación eléctrica, electrodomésticos, climatización y bricolaje eléctrico, con asesoramiento energético, protección de pagos esencial y fuerte foco en urgencias.",
    sections: {
      info: `
        <p>PEH+ es la evolución del servicio PEH, con las mismas coberturas base y la ampliación a climatización y asesoramiento energético. Es un servicio recurrente mensual, asociado al suministro eléctrico, pensado para clientes que quieren protección amplia pero sin componentes digitales añadidos como Hogar Digital o Asistente Smart.</p>
      `,
      coberturas: `
        <h3>Urgencias eléctricas</h3>
        <ul>
          <li>Atención de averías eléctricas urgentes en menos de 3 horas, los 365 días del año, con un límite económico anual de 550 € en desplazamiento, mano de obra y materiales sobre la instalación interior de la vivienda.</li>
        </ul>
        <h3>Reparación de electrodomésticos</h3>
        <ul>
          <li>Reparación de frigorífico, lavadora, cocina eléctrica, campana, lavavajillas, horno, secadora, congelador, termo/caldera eléctricos y TV.</li>
          <li>Hasta 300 € por electrodoméstico y año, en aparatos con antigüedad igual o inferior a 10 años (5 años en el caso del televisor).</li>
          <li>Sin límite de intervenciones mientras no se supere el límite económico por aparato; para equipos más antiguos, cubre desplazamiento y 3 horas de mano de obra.</li>
        </ul>
        <h3>Bricolaje eléctrico</h3>
        <ul>
          <li>Una intervención anual con desplazamiento y hasta 3 horas de mano de obra para trabajos eléctricos domésticos: sustitución de enchufes o interruptores, instalación de lámparas o apliques donde ya exista punto de luz, instalación de temporizadores, termostatos o pequeños ajustes de cableado interior.</li>
        </ul>
        <h3>Climatización</h3>
        <ul>
          <li>Incluye las coberturas del servicio Protección Climatización: averías en equipos de aire acondicionado y bombas de calor, con hasta 300 € por equipo y año en equipos de hasta 10 años, atención en unas 48 horas laborables y posibilidad de pago de sustitución en caso de reparación inviable.</li>
        </ul>
        <h3>Asesoramiento Energético y protección de pagos</h3>
        <ul>
          <li>Asesoramiento Energético con visita de técnico bajo demanda y emisión de informe de ahorro y eficiencia, disponible una vez cada varios años.</li>
          <li>Seguro de Protección de Pagos Esencial incluido, generando saldo a favor en caso de siniestro cubierto para pagar facturas futuras de luz y gas.</li>
        </ul>
      `,
      exclusiones: `
        <ul>
          <li>No cubre electrodomésticos en periodo de garantía del fabricante ni equipos situados fuera de la vivienda asociada al contrato.</li>
          <li>Quedan excluidas urgencias eléctricas en suministros con potencia contratada superior a 15 kW o en usos no residenciales fuera de las condiciones particulares.</li>
          <li>No cubre materiales en trabajos de bricolaje eléctrico, solo desplazamiento y mano de obra dentro de los límites del servicio.</li>
          <li>Equipos de climatización con antigüedad superior al límite tienen cobertura reducida a desplazamiento y mano de obra; la sustitución completa puede requerir copago o estar fuera de cobertura.</li>
          <li>No cubre daños derivados de mala fe, manipulación indebida, falta de mantenimiento obligatorio o modificaciones no autorizadas de la instalación.</li>
        </ul>
      `,
      procesos: `
        <h3>Contratación / Alta</h3>
        <ol>
          <li>En IberU, seleccionar la línea de producto PEH y dentro de ella el servicio PEH+. Asociarlo al contrato de electricidad correcto.</li>
          <li>Verificar requisitos generales: mercado libre, potencia residencial, ausencia de servicios equivalentes incompatibles (PIH, PB, PEH estándar si se trata de alta nueva).</li>
          <li>Informar de carencias: 1 mes para reparaciones y urgencias, 6 meses para Asesoramiento Energético.</li>
          <li>Revisar hoja de precios en IberU para indicar cuota al cliente, explicando que los precios se actualizan anualmente según IPC.</li>
        </ol>
        <h3>Gestión de servicio y averías</h3>
        <ol>
          <li>Acceder al módulo de Gestión PYS y consultar los servicios activos del cliente; confirmar que PEH+ está marcado.</li>
          <li>Seleccionar tipo de solicitud: avería electrodomésticos, urgencia eléctrica, climatización o bricolaje eléctrico según corresponda.</li>
          <li>Comprobar saldo de coberturas y avisar al cliente si está próximo al límite anual por aparato o servicio.</li>
          <li>Registrar detalladamente la avería, número de contacto y franja horaria de disponibilidad. Informar de tiempos estándar: urgencias en menos de 3 horas, resto de intervenciones en torno a 48 horas laborables.</li>
        </ol>
        <h3>GEIR PYS</h3>
        <ul>
          <li>Ante dudas de contratación o reclamación de alta no consentida, seguir el flujo de Gestiones GEIR PYS antes de plantear fidelización o baja directa, revisando interacciones, contratos y grabaciones asociadas.</li>
        </ul>
      `,
      fidelizacion: `
        <h3>Estrategia sobre PEH+</h3>
        <ul>
          <li>Cuando el cliente amenace baja por precio, poner en valor el alcance: incluye urgencias eléctricas, reparación de electrodomésticos, climatización, bricolaje y asesoramiento energético, más protección de pagos.</li>
          <li>Si el cliente valora el servicio pero no el coste, ofertar primero descuento de fidelización del 50% 12 meses sobre la cuota mensual de PEH+.</li>
          <li>Si pese a la promoción sigue viendo el precio alto, plantear cambio a un servicio con menor cuota (PEH estándar o un pack más sencillo), informando de qué coberturas perdería.</li>
          <li>En clientes muy sensibles a precio, revisar si tiene sentido moverle a PB o PIH según su perfil digital y necesidades, para concentrar valor en un solo servicio.</li>
        </ul>
      `,
      ejemplos: `
        <ul>
          <li>Cliente con varias incidencias en aire acondicionado y reparaciones de electrodomésticos en los últimos años: reforzar el ahorro frente a reparar por libre cada vez y la tranquilidad de tener un servicio único para electricidad, electrodomésticos y climatización.</li>
          <li>Cliente con familia numerosa preocupada por quedarse sin luz por avería interna: insistir en urgencias eléctricas en menos de 3 horas con cobertura económica amplia y sin límite de intervenciones.</li>
        </ul>
      `,
      argumentario: `
        <p>“Con PEH Plus tiene un único servicio que cubre tanto urgencias eléctricas como la mayor parte de las averías de electrodomésticos y climatización. El coste de una sola reparación de aire acondicionado o de una nevera suele superar con creces varios meses de cuota del servicio. Además, dispone de asesoramiento energético y un seguro que protege el pago de sus facturas en caso de imprevisto.”</p>
        <p>“Si el precio le preocupa, podemos aplicar un descuento temporal de fidelización y así mantiene toda la protección por un importe mucho más ajustado durante el primer año.”</p>
      `
    }
  },
  {
    id: "PMG",
    family: "PYS de Gas",
    name: "PMG · Pack Mantenimiento Gas",
    price: "9,95 €/mes + impuestos",
    carencia: "Carencia 15 días",
    fidelizacionResumen: "Aplican descuentos de fidelización 50% 12 meses como resto de PYS, siempre que no haya descuentos de captación activos. Atención especial a regularización por baja anticipada.",
    resumenCorto: "Servicio de mantenimiento completo de instalación y equipos de gas, con visita anual y cobertura en averías, pensado para evitar imprevistos y facturas elevadas en calderas y calefacción.",
    sections: {
      info: `
        <p>El Pack Mantenimiento Gas es el servicio más completo para la instalación de gas y los equipos asociados (caldera, calentador y circuito hidráulico). Puede asociarse al contrato de gas o contratarse de forma independiente manteniendo las mismas coberturas y precio.</p>
        <p>Tiene una vigencia de 12 meses, con carencia de 15 días y permanencia anual: si el cliente causa baja anticipada es posible la emisión de factura de regularización con el importe pendiente del año.</p>
      `,
      coberturas: `
        <h3>Visita de mantenimiento</h3>
        <ul>
          <li>Una visita anual de mantenimiento de la instalación de gas y equipos asociados.</li>
          <li>Incluye análisis de combustión de caldera, limpieza del quemador, revisión del vaso de expansión, revisión de la instalación de gas y del circuito de calefacción.</li>
          <li>Alternancia entre visita completa RITE y visita reducida según el ciclo establecido.</li>
        </ul>
        <h3>Averías</h3>
        <ul>
          <li>Cubre hasta 2 averías al año, con desplazamiento gratuito en todas las intervenciones.</li>
          <li>Incluye hasta 3 horas de mano de obra y 50 € en materiales por cada una de las dos primeras averías.</li>
          <li>A partir de la tercera avería, el servicio cubre el desplazamiento; mano de obra y materiales corren a cargo del cliente según tarifa del proveedor.</li>
          <li>Atención en un máximo de 24 horas desde la apertura de la solicitud (plazos indicativos de servicio).</li>
        </ul>
        <h3>Alcance</h3>
        <ul>
          <li>Cubre caldera o calentador de gas, instalación de gas y circuito hidráulico de calefacción del punto de suministro.</li>
          <li>Cubre todos los gasodomésticos de la vivienda, incluyendo hasta dos calderas si existen en el domicilio.</li>
        </ul>
      `,
      exclusiones: `
        <ul>
          <li>La visita de mantenimiento del PMG no sustituye a la inspección obligatoria de la distribuidora (cada 5 años); esta sigue siendo responsabilidad del cliente.</li>
          <li>No cubre aparatos o instalaciones que no sean del punto de suministro contratado, ni instalaciones en segundas viviendas si el contrato está asociado a otra dirección.</li>
          <li>Excluye daños por manipulación indebida, modificaciones no autorizadas, falta de mantenimiento mínimo o uso incorrecto evidente.</li>
          <li>Determinados elementos decorativos, reformas o mejoras estéticas no están incluidos; el foco está en seguridad, funcionamiento y normativa.</li>
          <li>En caso de baja anticipada, el cliente puede recibir una factura de regularización por el tramo de anualidad pendiente, independientemente de si ha usado o no el servicio.</li>
        </ul>
      `,
      procesos: `
        <h3>Contratación / Alta</h3>
        <ol>
          <li>Si el cliente ya tiene gas con IberCLI y quiere añadir PMG, realizar la contratación desde “Servicios adicionales” en IberU para mantener condiciones de gas y añadir el servicio.</li>
          <li>Si no se muestran los descuentos asociados a la nueva contratación, valorar realizar Modificación de contrato, asumiendo que se modificará la tarifa de gas.</li>
          <li>Para contratación independiente (sin gas en IberCLI), seguir la operativa específica de PMG independiente, verificando que el cliente cumple requisitos (cliente residencial RL1, RL2, RL3, etc.).</li>
          <li>Informar siempre de vigencia anual, carencia de 15 días y posibilidad de regularización por baja anticipada.</li>
        </ol>
        <h3>Gestión de servicio y averías</h3>
        <ol>
          <li>Acceder desde IberU a la ficha de cliente y entrar en la operativa de Gestión de PYS de Gas.</li>
          <li>Para visitas de mantenimiento, programar la visita anual cuando corresponda, recordando alternancia RITE/reducida según indique el sistema.</li>
          <li>Para averías, abrir solicitud indicando el tipo de incidencia (caldera, calentador, instalación, circuito de calefacción), nivel de urgencia y datos de contacto del cliente.</li>
          <li>Informar de que la atención se realizará en torno a las 24 horas desde la apertura de la solicitud, salvo picos excepcionales.</li>
        </ol>
        <h3>Bajas y regularización (clave en retención)</h3>
        <ul>
          <li>Al tratarse de un servicio anual, la baja anticipada puede conllevar factura de regularización por el importe pendiente de la anualidad.</li>
          <li>No se emite factura de regularización si la baja se solicita durante el mes posterior a la contratación inicial o alrededor de la fecha de renovación, según condiciones detalladas en el manual.</li>
          <li>En clientes que han hecho uso del servicio (visita o averías), explicar de forma clara el valor ya recibido frente al importe de la cuota anual y la posible regularización si insiste en la baja.</li>
        </ul>
      `,
      fidelizacion: `
        <h3>En llamadas de amenaza de baja</h3>
        <ol>
          <li>Sondear motivo: factura alta, desconocimiento del servicio, cambio de compañía de gas, mala experiencia con una intervención, etc.</li>
          <li>Si el motivo es económico y el cliente reconoce valor en tener visita anual y cobertura de averías, plantear descuentos de fidelización estándar (50% 12 meses) si aplica.</li>
          <li>Explicar siempre, antes de cerrar la baja, el impacto de la regularización: si ha habido visita o averías, se puede emitir una factura con el importe pendiente de la anualidad.</li>
          <li>En clientes que cambian de comercializadora de gas, aclarar que la baja de gas puede implicar baja automática del servicio asociado, y que perderá tanto las visitas como la cobertura ante averías futuras.</li>
        </ol>
      `,
      ejemplos: `
        <ul>
          <li>Cliente que quiere dar de baja PMG tras haber tenido varias intervenciones: explicar coste de mercado de visitas y reparaciones de caldera y el ahorro frente a gestionar cada avería por libre.</li>
          <li>Cliente que aún no ha usado el servicio pero tiene caldera antigua: poner en valor la revisión anual y la tranquilidad de tener una intervención rápida y parcialmente financiada si se avería en invierno.</li>
        </ul>
      `,
      argumentario: `
        <p>“El Pack Mantenimiento Gas le evita sorpresas con la caldera: cada año tendrá una revisión completa y, si se avería, las dos primeras intervenciones incluyen desplazamiento, hasta 3 horas de mano de obra y 50 € en materiales. Una sola avería de caldera sin servicio suele costar más que varios meses de cuota.”</p>
        <p>“Antes de que valore la baja, es importante que sepa que es un servicio anual. Si lo cancela antes de tiempo, puede emitirse una regularización con el importe pendiente del año. Por eso normalmente compensa mantenerlo al menos hasta completar la anualidad.”</p>
      `
    }
  },
  {
    id: "TAL",
    family: "Servicios de protección",
    name: "TAL · Tu Asesor Legal",
    price: "3,95 €/mes + impuestos",
    carencia: "Carencia 30 días",
    fidelizacionResumen: "Aplican descuentos de fidelización PYS (50% 12 meses) cuando el cliente amenaza baja y no tiene descuentos de captación activos.",
    resumenCorto: "Servicio de asesoramiento y asistencia jurídica telefónica y telemática con abogados colegiados, urgencias legales 24h y revisión y redacción de documentación.",
    sections: {
      info: `
        <p>Tu Asesor Legal es un servicio de asesoramiento jurídico para clientes residenciales, prestado por abogados colegiados. Ofrece apoyo continuo en temas de vivienda, familia, trabajo, consumo, impuestos, seguros, tráfico, internet y asuntos penales, entre otros.</p>
        <p>El servicio está asociado al contrato de electricidad en IberCLI, con una cuota fija mensual y carencia de 30 días desde la contratación. No tiene permanencia: el cliente puede darse de baja sin penalización, salvo campañas específicas que indiquen lo contrario.</p>
      `,
      coberturas: `
        <h3>Asesoramiento jurídico general</h3>
        <ul>
          <li>Consultas telefónicas y por canales telemáticos sobre un amplio abanico de materias: vivienda, familia, trabajo, consumo, impuestos, seguros, internet, automóvil, seguridad vial y tráfico, relaciones con la Administración Pública y asuntos penales.</li>
          <li>Consultas ilimitadas dentro del ámbito personal y familiar del cliente, durante la vigencia del servicio.</li>
        </ul>
        <h3>Urgencias legales 24h</h3>
        <ul>
          <li>Atención prioritaria en situaciones urgentes, como delitos, conflictos graves en el hogar, problemas legales con hijos menores, incidentes de tráfico o reclamaciones críticas.</li>
        </ul>
        <h3>Documentación y gestiones</h3>
        <ul>
          <li>Revisión de contratos y documentos: laborales, hipotecarios, de alquiler, bancarios, de compra-venta de vivienda o vehículo, etc.</li>
          <li>Redacción de documentos y escritos extrajudiciales necesarios para reclamaciones, comunicaciones formales o acuerdos entre partes.</li>
          <li>Gestión de reclamaciones en nombre del cliente frente a empresas, entidades financieras, aseguradoras, administraciones o terceros.</li>
          <li>Negociación con la parte contraria buscando el mejor acuerdo posible dentro del marco jurídico.</li>
          <li>Recurso de multas de tráfico y apoyo en sanciones administrativas.</li>
          <li>Solicitud, en nombre del cliente, de certificados a Seguridad Social, DGT, Ministerio de Justicia, Registros y Ayuntamientos cuando sea necesario para la gestión del caso.</li>
        </ul>
        <h3>Acceso a red de despachos</h3>
        <ul>
          <li>En caso de requerir abogado presencial para procedimientos judiciales, el cliente accede a una red de despachos con condiciones económicas preferentes respecto al mercado.</li>
        </ul>
      `,
      exclusiones: `
        <ul>
          <li>No se presta servicio cuando existe conflicto de intereses, por ejemplo cuando la reclamación es contra Iberdrola o contra el propio proveedor jurídico del servicio.</li>
          <li>Quedan fuera de cobertura la redacción de determinados documentos complejos ligados a procesos judiciales que requieren elevación a público o intervención notarial, y servicios de gestoría puros.</li>
          <li>No cubre el pago de costas judiciales, tasas o indemnizaciones; el servicio presta asesoramiento y apoyo, pero no asume esos costes.</li>
          <li>No cubre servicios profesionales que excedan el asesoramiento y la asistencia extrajudicial incluida en el producto, salvo los que se contraten con despacho de la red en condiciones preferentes.</li>
        </ul>
      `,
      procesos: `
        <h3>Contratación / Alta</h3>
        <ol>
          <li>En IberU, dentro del catálogo de productos, seleccionar “Tu Asesor Legal” y añadirlo a la oferta del contrato de electricidad correspondiente.</li>
          <li>Comprobar que el cliente cumple condiciones de contratación (cliente persona física, contrato residencial, etc.).</li>
          <li>Informar de carencia de 30 días desde la contratación y coste mensual según hoja de precios.</li>
          <li>Finalizar la contratación, enviar documentación y registrar la interacción comercial correspondiente.</li>
        </ol>
        <h3>Gestión de consultas</h3>
        <ol>
          <li>Cuando el cliente llama a Iberdrola para utilizar el servicio, validar que el TAL está activo en IberU.</li>
          <li>Transferir la llamada al proveedor jurídico (por ejemplo, Legálitas) usando la botonera específica, tras explicar al cliente que será atendido por un abogado.</li>
          <li>Fuera del horario regular, informar de que, si es urgencia legal, será atendido por el servicio 24h, y si no lo es, se gestionará en el horario laboral indicado.</li>
          <li>Ofrecer la opción de que el cliente envíe la documentación por correo electrónico al buzón habilitado si lo prefiere, indicándole la información mínima que debe adjuntar.</li>
        </ol>
      `,
      fidelizacion: `
        <h3>Fidelización y retención</h3>
        <ul>
          <li>Ante amenazas de baja por precio, comparar el coste del servicio (alrededor de 3,95 €/mes) con lo que puede costar una sola consulta en despacho físico (entre 100 y 300 € según complejidad y ubicación).</li>
          <li>Recordar la utilidad de tener un abogado “de cabecera” al que poder llamar sin preocuparse por el coste por consulta, especialmente ante multas, conflictos con compras, alquileres, herencias o problemas laborales.</li>
          <li>Si el cliente valora el servicio pero considera alto el precio, explorar descuentos de fidelización de 50% 12 meses para suavizar el impacto y animarle a mantenerlo.</li>
          <li>Si el cliente realmente no utiliza el servicio y no percibe valor, valorar reconducir la conversación a otros PYS más alineados con sus necesidades, manteniendo la satisfacción global con la compañía.</li>
        </ul>
      `,
      ejemplos: `
        <ul>
          <li>Cliente que va a firmar una hipoteca y quiere que revisen las condiciones: explicar que el TAL permite revisión detallada del contrato y recomendaciones antes de firmar.</li>
          <li>Cliente con varias multas o problemas recurrentes con la comunidad de propietarios: poner en valor la capacidad de reclamación, redacción de escritos y recurso de sanciones.</li>
          <li>Cliente que compra online con frecuencia: destacar que puede apoyarse en el servicio cuando los productos no llegan, llegan defectuosos o las empresas no responden a sus reclamaciones.</li>
        </ul>
      `,
      argumentario: `
        <p>“Tu Asesor Legal le permite tener un abogado disponible por teléfono o correo cuando lo necesite, para cualquier tema del día a día: vivienda, trabajo, compras, impuestos o tráfico. Una sola consulta en un despacho suele costar mucho más que la cuota mensual del servicio.”</p>
        <p>“Además de resolver dudas, revisan contratos, redactan escritos y gestionan reclamaciones en su nombre. Es una forma muy económica de asegurarse de que siempre va a tomar decisiones importantes con respaldo jurídico.”</p>
      `
    }
  }
];

const FAMILIES = [
  "Todas las familias",
  "Servicios de protección",
  "PYS de Gas"
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
    empty.textContent = "No hay PyS en esta familia con la configuración actual.";
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
