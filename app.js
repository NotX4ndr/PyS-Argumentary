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
    price: "X,XX €/mes + impuestos (sustituir por precio vigente)",
    carencia: "Carencia general 1 mes; 6 meses para Asesoramiento Energético",
    fidelizacionResumen: "Fidelización habitual: 50% de descuento en la cuota durante 12 meses, si no hay descuento de captación activo.",
    resumenCorto: "Pack completo que integra averías eléctricas, reparación de electrodomésticos, bricolaje, asesoramiento energético, servicios digitales y protección de pagos.",
    sections: {
      info: `
        <p>Pack Iberdrola Hogar es el servicio de referencia cuando el cliente quiere máxima tranquilidad en su vivienda. Reúne en una sola cuota varias coberturas que antes se contrataban por separado: urgencias eléctricas, reparación de electrodomésticos, bricolaje eléctrico, servicios digitales y un seguro de protección de pagos.</p>
        <p>Se asocia al contrato de luz de Iberdrola en mercado libre y está orientado a clientes residenciales con potencia hasta 15 kW.</p>
      `,
      coberturas: `
        <h3>Urgencias y averías eléctricas</h3>
        <ul>
          <li>Atención de averías eléctricas urgentes en la instalación interior de la vivienda, con tiempos de respuesta preferentes.</li>
          <li>Cobertura de desplazamiento, mano de obra y materiales hasta un límite económico anual predefinido en condiciones particulares.</li>
        </ul>
        <h3>Reparación de electrodomésticos</h3>
        <ul>
          <li>Cobertura para electrodomésticos de cocina y televisor dentro de la antigüedad máxima permitida.</li>
          <li>Incluye desplazamiento y mano de obra, y materiales hasta un importe máximo por aparato y año.</li>
        </ul>
        <h3>Bricolaje eléctrico</h3>
        <ul>
          <li>Intervención anual para trabajos eléctricos de pequeña entidad (sustitución de enchufes, interruptores, instalación de lámparas sobre puntos existentes, etc.).</li>
        </ul>
        <h3>Servicios digitales y eficiencia</h3>
        <ul>
          <li>Servicios digitales tipo Hogar Digital: soporte tecnológico, ciberseguridad, control parental o servicios equivalentes según modalidad vigente.</li>
          <li>Asesoramiento energético con análisis de consumo y recomendaciones de ahorro, con carencia superior (habitualmente 6 meses).</li>
        </ul>
        <h3>Protección de pagos</h3>
        <ul>
          <li>Seguro de protección de pagos esencial, que genera saldo a favor del cliente para cubrir facturas de luz y gas en supuestos concretos (baja laboral, desempleo, fallecimiento, etc., según perfil y condiciones).</li>
        </ul>
      `,
      exclusiones: `
        <ul>
          <li>No cubre averías en instalaciones o equipos que no sean del domicilio asociado al contrato.</li>
          <li>Quedan excluidos equipos que superen la antigüedad límite detallada en condiciones (por ejemplo, televisores demasiado antiguos o electrodomésticos fuera de rango).</li>
          <li>No cubre daños derivados de mala fe, manipulación indebida, reformas sin boletín o incumplimiento grave de normativa eléctrica.</li>
          <li>Los servicios digitales no cubren daños físicos en dispositivos, sino soporte y servicios de ciberseguridad y configuración.</li>
          <li>El seguro de protección de pagos no cubre todos los supuestos posibles; las coberturas dependen de la edad y situación laboral del titular.</li>
        </ul>
      `,
      procesos: `
        <h3>Contratación / Alta</h3>
        <ol>
          <li>Comprobar en sistema que el cliente es residencial, en mercado libre y con potencia compatible.</li>
          <li>Verificar que no tiene otros productos incompatibles activos (por ejemplo, servicios antiguos que se sustituyen por PIH).</li>
          <li>Explicar de forma sencilla las coberturas clave y las carencias, especialmente la de Asesoramiento Energético.</li>
          <li>Formalizar el alta en la herramienta comercial y enviar documentación con condiciones al cliente.</li>
        </ol>
        <h3>Gestión del servicio</h3>
        <ol>
          <li>Para averías y servicios, abrir solicitudes desde la operativa de PYS indicando tipo de intervención: eléctrica, electrodomésticos, bricolaje, digital, etc.</li>
          <li>Comprobar siempre si quedan importes disponibles en la cobertura antes de confirmar al cliente.</li>
          <li>Informar de plazos estándar: urgencias en pocas horas, resto de servicios en 24/48 horas laborables, salvo picos de demanda.</li>
        </ol>
        <h3>GEIR y reclamaciones</h3>
        <ul>
          <li>Si el cliente duda de la contratación o de la facturación, seguir el circuito GEIR PYS y revisar origen del alta, campañas aplicadas y uso del servicio antes de tomar decisiones sobre devoluciones o anulaciones.</li>
        </ul>
      `,
      fidelizacion: `
        <h3>Estrategia de retención</h3>
        <ul>
          <li>Recordar que PIH agrupa varias coberturas de alto coste si se contratan por separado (urgencias, electrodomésticos, digital, protección de pagos).</li>
          <li>Si el cliente ve valor pero le preocupa el precio, ofrecer un descuento de fidelización (por ejemplo, 50% 12 meses) en la cuota del pack, siempre que no haya descuentos de captación vigentes.</li>
          <li>Si no quiere un pack tan completo, proponer bajar a un servicio más sencillo (PEH, PEH+ u otro) manteniendo al menos la protección básica más importante para su caso.</li>
        </ul>
      `,
      ejemplos: `
        <ul>
          <li>Cliente con varias averías en electrodomésticos en pocos años: comparar el coste de una reparación independiente con la cuota anual del pack.</li>
          <li>Cliente que trabaja desde casa y depende de electrónica y conexión: enfatizar el soporte digital y la rapidez en urgencias eléctricas.</li>
          <li>Familias preocupadas por gastos imprevistos: explicar el papel del seguro de protección de pagos si ocurre una situación grave.</li>
        </ul>
      `,
      argumentario: `
        <p>“Con el Pack Iberdrola Hogar concentra en una sola cuota la parte más cara de los problemas en casa: las urgencias eléctricas, las averías de electrodomésticos y el soporte digital, además de un seguro que ayuda a pagar sus facturas si ocurre algo grave. Una sola reparación de nevera, caldera eléctrica o televisor suele costar más que varios meses de servicio.”</p>
        <p>“Si el precio es lo que más le preocupa, podemos revisar un descuento de fidelización para que mantenga toda la protección con una cuota más baja durante el primer año.”</p>
      `
    }
  },
  {
    id: "PEH_PLUS",
    family: "PYS Protección",
    name: "PEH+ · Protección Eléctrica Hogar Plus",
    price: "X,XX €/mes + impuestos (sustituir por precio vigente)",
    carencia: "Carencia 1 mes; 6 meses para servicios de asesoramiento energético si aplica",
    fidelizacionResumen: "Aplica fidelización del 50% 12 meses sobre la cuota, según campañas y elegibilidad.",
    resumenCorto: "Protección avanzada de instalación eléctrica, electrodomésticos, climatización y bricolaje eléctrico, con foco en urgencias y averías frecuentes.",
    sections: {
      info: `
        <p>PEH+ amplía la protección clásica de PEH añadiendo coberturas sobre equipos de climatización y mayor detalle en reparaciones. Es adecuado para clientes con muchos electrodomésticos, aire acondicionado y alta dependencia de la instalación eléctrica.</p>
      `,
      coberturas: `
        <h3>Instalación eléctrica y urgencias</h3>
        <ul>
          <li>Atención urgente de averías eléctricas interiores con desplazamiento, mano de obra y materiales hasta el límite económico anual fijado en condiciones.</li>
        </ul>
        <h3>Electrodomésticos</h3>
        <ul>
          <li>Reparación de electrodomésticos de cocina y televisión hasta un límite económico por aparato y año.</li>
          <li>Incluye desplazamiento y mano de obra; piezas incluidas hasta el máximo definido para equipos dentro de la antigüedad permitida.</li>
        </ul>
        <h3>Climatización</h3>
        <ul>
          <li>Cobertura para averías de aire acondicionado y equipos de climatización dentro de la antigüedad máxima.</li>
        </ul>
        <h3>Bricolaje</h3>
        <ul>
          <li>Trabajos de mejora y pequeños ajustes en la instalación eléctrica interior (instalación de puntos de luz, enchufes, cambio de mecanismos, etc.).</li>
        </ul>
      `,
      exclusiones: `
        <ul>
          <li>No cubre averías causadas por reformas sin legalizar o instalaciones que no cumplan normativa.</li>
          <li>Equipos fuera de la antigüedad máxima se cubren en modalidad reducida (solo desplazamiento/mano de obra) o quedan excluidos, según condiciones.</li>
          <li>No cubre trabajos de obra civil importantes ni ampliaciones de instalación que superen el concepto de reparación o bricolaje.</li>
        </ul>
      `,
      procesos: `
        <h3>Contratación</h3>
        <ol>
          <li>Validar potencia y tipo de suministro, y que el cliente no tenga contratado un pack superior que haga redundante PEH+.</li>
          <li>Explicar claramente qué diferencia PEH+ de PEH básico (climatización, mayor alcance en reparaciones).</li>
        </ol>
        <h3>Gestión de servicio</h3>
        <ol>
          <li>En averías, tipificar correctamente si es eléctrica, de electrodoméstico o de climatización, para enviar al técnico adecuado.</li>
          <li>Revisar límites económicos y antigüedad del equipo antes de prometer una cobertura total de piezas.</li>
        </ol>
      `,
      fidelizacion: `
        <h3>Retención</h3>
        <ul>
          <li>Si el cliente ha utilizado el servicio recientemente, recordar el coste de mercado de ese tipo de intervención.</li>
          <li>Ofrecer fidelización sobre la cuota (por ejemplo, 50% 12 meses) si el precio es el motivo principal de baja.</li>
          <li>Si PEH+ sigue siendo percibido como caro, plantear bajar a PEH estándar manteniendo núcleo de protección.</li>
        </ul>
      `,
      ejemplos: `
        <ul>
          <li>Usuario con aire acondicionado y varios electrodomésticos críticos (nevera, horno, lavadora) preocupado por averías en verano.</li>
        </ul>
      `,
      argumentario: `
        <p>“PEH Plus agrupa en un solo servicio las urgencias eléctricas, la reparación de electrodomésticos y climatización y el bricolaje eléctrico. Una avería en aire acondicionado o en la nevera puede costar fácilmente más que varios meses de la cuota.”</p>
      `
    }
  },
  {
    id: "TAL",
    family: "PYS Protección",
    name: "TAL · Tu Asesor Legal",
    price: "X,XX €/mes + impuestos (sustituir por precio vigente)",
    carencia: "Carencia 30 días",
    fidelizacionResumen: "Aplica fidelización estándar PYS (50% 12 meses) si el cliente amenaza baja y no tiene descuentos de captación.",
    resumenCorto: "Asesoría jurídica para temas de vivienda, familia, trabajo, consumo, impuestos, tráfico y más, con abogados colegiados y consultas ilimitadas.",
    sections: {
      info: `
        <p>Tu Asesor Legal permite al cliente disponer de abogados colegiados a los que consultar cualquier duda jurídica del ámbito personal y familiar. El foco está en prevención y orientación antes de tomar decisiones importantes.</p>
      `,
      coberturas: `
        <h3>Asesoramiento jurídico</h3>
        <ul>
          <li>Consultas sobre vivienda, alquileres, hipotecas, comunidad de propietarios.</li>
          <li>Consultas laborales (contratos, despidos, sanciones, bajas, etc.).</li>
          <li>Consultas sobre consumo, compras, servicios bancarios y seguros.</li>
          <li>Asesoramiento en materia de familia, herencias y sucesiones.</li>
        </ul>
        <h3>Documentación</h3>
        <ul>
          <li>Revisión de contratos y documentos antes de firmar.</li>
          <li>Redacción de escritos y cartas de reclamación.</li>
        </ul>
        <h3>Urgencias legales</h3>
        <ul>
          <li>Servicio de urgencias legales 24h en supuestos graves según condiciones.</li>
        </ul>
      `,
      exclusiones: `
        <ul>
          <li>No incluye el pago de costas judiciales ni de abogados externos en procedimientos presenciales.</li>
          <li>No cubre conflictos con Iberdrola ni supuestos con conflicto de intereses con el proveedor jurídico.</li>
          <li>No cubre asesoramiento de naturaleza empresarial o profesional fuera del ámbito particular.</li>
        </ul>
      `,
      procesos: `
        <h3>Contratación</h3>
        <ol>
          <li>Ofrecerlo como complemento de tranquilidad jurídica para cualquier cliente residencial.</li>
          <li>Explicar que es más económico que acudir a un despacho por consulta suelta.</li>
        </ol>
        <h3>Uso del servicio</h3>
        <ol>
          <li>Validar que TAL está activo y trasferir al proveedor jurídico a través del circuito específico.</li>
          <li>En caso de urgencia legal, informar de disponibilidad 24h según el procedimiento.</li>
        </ol>
      `,
      fidelizacion: `
        <h3>Retención</h3>
        <ul>
          <li>Si el cliente dice “no lo uso”, preguntar por situaciones recientes (alquiler, trabajo, multas, bancos) donde podría haberle sido útil.</li>
          <li>Ofrecer descuento temporal si el problema es el precio, reforzando que el coste de una sola consulta externa supera el de muchos meses de TAL.</li>
        </ul>
      `,
      ejemplos: `
        <ul>
          <li>Cliente a punto de firmar alquiler o hipoteca que quiere que revisen el contrato.</li>
          <li>Cliente con multa de tráfico dudosa o cláusulas bancarias que no entiende.</li>
        </ul>
      `,
      argumentario: `
        <p>“Con Tu Asesor Legal puede consultar con un abogado cualquier duda importante de su día a día antes de firmar o aceptar nada. Una sola consulta en un despacho suele costar más que varios meses de servicio, aquí lo tiene todo incluido.”</p>
      `
    }
  },
  {
    id: "PMG",
    family: "PYS Gas",
    name: "PMG · Pack Mantenimiento Gas",
    price: "X,XX €/mes + impuestos (sustituir por precio vigente)",
    carencia: "Carencia 15 días",
    fidelizacionResumen: "Aplica fidelización (50% 12 meses) y hay que explicar siempre la posible regularización por baja anticipada.",
    resumenCorto: "Servicio anual de mantenimiento de instalación de gas y caldera, con visita periódica y cobertura para averías, incluyendo desplazamiento, mano de obra y materiales hasta ciertos límites.",
    sections: {
      info: `
        <p>El Pack Mantenimiento Gas es un servicio anual que incluye revisión de la instalación de gas y del equipo (caldera o calentador), además de cobertura de averías con desplazamiento y mano de obra incluida hasta un límite.</p>
      `,
      coberturas: `
        <h3>Visita de mantenimiento</h3>
        <ul>
          <li>Una visita anual de mantenimiento de la instalación de gas y de la caldera/calentador.</li>
          <li>Verificación de seguridad y eficiencia, limpieza básica de componentes y ajustes necesarios.</li>
        </ul>
        <h3>Averías</h3>
        <ul>
          <li>Cobertura de un número determinado de averías al año con desplazamiento y mano de obra incluida, y materiales hasta un importe máximo por avería.</li>
          <li>Atención en un plazo orientativo de 24 horas desde la apertura de la solicitud, salvo saturación puntual.</li>
        </ul>
      `,
      exclusiones: `
        <ul>
          <li>No sustituye la inspección periódica obligatoria de la distribuidora.</li>
          <li>No cubre instalaciones que no cumplan normativa o que estén en situación irregular.</li>
          <li>Puede haber exclusiones para equipos con antigüedad superior a la permitida o para determinadas marcas no soportadas.</li>
        </ul>
      `,
      procesos: `
        <h3>Contratación</h3>
        <ol>
          <li>Explicar que es un servicio anual, con posible regularización si se da de baja antes de cumplir el año.</li>
          <li>Formalizar el alta asociándolo al contrato de gas o como servicio independiente según proceda.</li>
        </ol>
        <h3>Gestión del servicio</h3>
        <ol>
          <li>Para programar la visita, abrir la solicitud de mantenimiento e informar al cliente de la fecha estimada.</li>
          <li>Para averías, recoger bien el tipo de problema y datos del equipo (marca, modelo, antigüedad).</li>
        </ol>
        <h3>Bajas y regularización</h3>
        <ul>
          <li>Antes de tramitar la baja, explicar de forma clara que, al ser un servicio anual, puede generarse una factura de regularización si ya se ha prestado servicio (visita o averías) y no se completa el año.</li>
        </ul>
      `,
      fidelizacion: `
        <h3>Retención</h3>
        <ul>
          <li>Si el cliente ya ha tenido visitas o averías cubiertas, comparar el coste que habría tenido sin PMG frente a la cuota del servicio.</li>
          <li>Ofrecer descuento temporal en la cuota si el motivo es el precio pero el cliente reconoce que le da tranquilidad tener cubierta la caldera.</li>
        </ul>
      `,
      ejemplos: `
        <ul>
          <li>Caldera con varios años de antigüedad en vivienda principal: el cliente valora no quedarse sin calefacción en invierno.</li>
        </ul>
      `,
      argumentario: `
        <p>“Con PMG tiene la revisión anual y la atención en averías incluida. Una sola avería de caldera en invierno puede costar bastante más que la cuota del servicio, aquí tiene el desplazamiento y la mano de obra incluidos dentro de los límites.”</p>
      `
    }
  },
  {
    id: "ASH",
    family: "SSAA Asistente Smart",
    name: "ASH · Asistente Smart Hogar",
    price: "X,XX €/mes + impuestos (sustituir por precio vigente)",
    carencia: "Consultar infografía vigente (habitualmente carencia corta o nula en parte digital, y mayor en coberturas de reparación si las incluye).",
    fidelizacionResumen: "Fidelización habitual por descuento en cuota o meses gratis, según campaña de SSAA vigente.",
    resumenCorto: "Servicio digital para monitorizar consumos, recibir recomendaciones de ahorro y disponer de soporte tecnológico y ciberseguridad en el hogar.",
    sections: {
      info: `
        <p>Asistente Smart Hogar está orientado a clientes con perfil digital que quieren entender mejor su consumo, recibir alertas y tener soporte tecnológico y de ciberseguridad. Se comercializa como servicio adicional, no como PYS ligado a la instalación.</p>
      `,
      coberturas: `
        <h3>Monitorización y ahorro</h3>
        <ul>
          <li>Información de consumos y alertas ante comportamientos anómalos.</li>
          <li>Recomendaciones de ahorro y optimización de potencia contratada.</li>
        </ul>
        <h3>Soporte digital</h3>
        <ul>
          <li>Asistencia remota para incidencias básicas en dispositivos conectados al hogar digital (configuración, conexiones, aplicaciones).</li>
        </ul>
        <h3>Ciberseguridad</h3>
        <ul>
          <li>Servicios de protección frente a amenazas online, control parental y, en su caso, protección de identidad digital según modalidad vigente.</li>
        </ul>
      `,
      exclusiones: `
        <ul>
          <li>No cubre daños físicos en dispositivos, solo soporte y servicios digitales.</li>
          <li>No sustituye un seguro de hogar ni un seguro de dispositivos; se centra en monitorización, asesoramiento y soporte.</li>
        </ul>
      `,
      procesos: `
        <h3>Contratación</h3>
        <ol>
          <li>Confirmar que el cliente dispone de conexión a internet y cierto nivel de uso de la App de Iberdrola.</li>
          <li>Explicar que se trata de un servicio adicional y que parte de su gestión se hace desde el entorno digital (App/Web).</li>
        </ol>
        <h3>Uso del servicio</h3>
        <ol>
          <li>Si un cliente llama por dudas, orientar hacia la sección correspondiente de la App y, en caso de incidencias, abrir solicitud hacia el proveedor digital.</li>
        </ol>
      `,
      fidelizacion: `
        <h3>Retención</h3>
        <ul>
          <li>En clientes que valoran la parte digital pero ven alto el precio, revisar si hay campañas con meses gratis o % de descuento.</li>
          <li>Si solo quiere monitorización básica, valorar mover a un producto de menor alcance si existe una versión más sencilla.</li>
        </ul>
      `,
      ejemplos: `
        <ul>
          <li>Cliente que quiere controlar consumos y recibir alertas cuando se dispara el gasto.</li>
          <li>Familias con hijos menores que buscan control parental y protección online.</li>
        </ul>
      `,
      argumentario: `
        <p>“Con Asistente Smart Hogar no solo ve lo que paga al final de mes, sino qué está pasando en su consumo día a día y cómo ahorrar. Además, cuenta con apoyo tecnológico y herramientas de protección online para su hogar digital.”</p>
      `
    }
  },
  {
    id: "IPACK",
    family: "SSAA Mobility",
    name: "I+ Pack Mobility",
    price: "X,XX €/mes + impuestos (sustituir por precio vigente)",
    carencia: "Carencia 1 mes en la mayoría de coberturas (consultar ficha concreta).",
    fidelizacionResumen: "Promociones habituales con meses al 50% o gratis en captación; en fidelización se pueden mantener o ajustar descuentos según campaña.",
    resumenCorto: "Servicio asociado a la movilidad eléctrica que cubre averías del punto de recarga y asistencia en desplazamientos, pensado para usuarios de vehículo eléctrico.",
    sections: {
      info: `
        <p>I+ Pack Mobility reúne servicios para propietarios de vehículo eléctrico que tienen punto de recarga vinculado a Iberdrola. Incluye coberturas sobre reparación del punto, asistencia en vacaciones y ayudas en traslados por incidencias relacionadas con la recarga.</p>
      `,
      coberturas: `
        <h3>Reparación del punto de recarga</h3>
        <ul>
          <li>Cobertura de mano de obra, desplazamiento y materiales hasta un límite económico por intervención y año.</li>
          <li>Atención de averías en el punto de recarga instalado, siempre que sea compatible con las condiciones del servicio.</li>
        </ul>
        <h3>Solución vacaciones y traslado</h3>
        <ul>
          <li>Servicios de asistencia durante desplazamientos, incluyendo traslado del beneficiario hasta un importe máximo.</li>
          <li>Ayuda en caso de imposibilidad de cargar el vehículo por avería del punto o incidencia similar, según condiciones.</li>
        </ul>
      `,
      exclusiones: `
        <ul>
          <li>No cubre daños intencionados, vandalismo o siniestros derivados de accidentes de circulación (cubiertos por el seguro del vehículo).</li>
          <li>No abarca puntos de recarga no incluidos en el ámbito del contrato o instalaciones realizadas por terceros fuera del circuito autorizado.</li>
        </ul>
      `,
      procesos: `
        <h3>Contratación</h3>
        <ol>
          <li>Confirmar que el cliente dispone de punto de recarga compatible y que entiende que el servicio se asocia a dicho punto.</li>
          <li>Informar de carencias y vigencia mínima según detalle de la ficha.</li>
        </ol>
        <h3>Uso</h3>
        <ol>
          <li>Para averías del punto, abrir solicitud hacia el proveedor específico de movilidad, indicando todos los datos del equipo y del vehículo eléctrico.</li>
          <li>En caso de incidencias durante desplazamientos, seguir el teléfono y protocolo de asistencia definidos para I+ Pack Mobility.</li>
        </ol>
      `,
      fidelizacion: `
        <h3>Retención</h3>
        <ul>
          <li>Recordar que el coste de una intervención en un punto de recarga sin servicio puede ser elevado frente a la cuota mensual.</li>
          <li>Aplicar descuentos de fidelización sobre la cuota si el motivo es precio y no hay campañas de captación activas que lo impidan.</li>
        </ul>
      `,
      ejemplos: `
        <ul>
          <li>Cliente con punto de recarga en garaje comunitario, preocupado por qué hacer si se avería estando de vacaciones.</li>
        </ul>
      `,
      argumentario: `
        <p>“Con I+ Pack Mobility tiene cubierta la parte más delicada de la movilidad eléctrica: el punto de recarga y la asistencia en caso de problemas para cargar. Así evita quedarse tirado por una avería del punto y sabe a quién llamar.”</p>
      `
    }
  },
  {
    id: "KIT_HOGAR",
    family: "SSAA Seguridad",
    name: "Seguridad Iberdrola · Kit Hogar",
    price: "Cuota mensual según oferta vigente (equipos financiados; instalación incluida).",
    carencia: "Consultar según condiciones del contrato de seguridad (normalmente sin carencia en el servicio de alarma una vez instalada).",
    fidelizacionResumen: "Las promociones (meses gratis, cuotas reducidas) se rigen por la política de Seguridad Iberdrola y Securitas Direct; revisar campaña vigente.",
    resumenCorto: "Sistema de alarma para el hogar con instalación profesional, conexión a central receptora de alarmas y servicios de disuasión y respuesta.",
    sections: {
      info: `
        <p>Seguridad Iberdrola Hogar ofrece un sistema de alarma conectado a central receptora, con equipos adecuados para viviendas principales y la instalación realizada por Securitas Direct. El servicio incluye atención 24/7 y protocolos de verificación en caso de alarma.</p>
      `,
      coberturas: `
        <h3>Equipos y servicios</h3>
        <ul>
          <li>Kit de alarma con panel, sensores y dispositivos de detección según las necesidades del hogar.</li>
          <li>Conexión permanente a central receptora de alarmas y aviso en caso de intrusión, sabotaje o emergencias definidas.</li>
          <li>Servicios de intervención según protocolo: aviso a fuerzas de seguridad cuando procede y comunicación con el cliente.</li>
        </ul>
      `,
      exclusiones: `
        <ul>
          <li>No es un seguro de hogar; no cubre indemnizaciones por robo o daños, sino la prestación de servicios de alarma y respuesta.</li>
          <li>La cobertura depende del correcto uso y armado del sistema y de la cobertura de comunicaciones.</li>
        </ul>
      `,
      procesos: `
        <h3>Contratación</h3>
        <ol>
          <li>Precalificar al cliente y derivar la solicitud al canal específico de Seguridad Iberdrola para estudio y presupuesto personalizado.</li>
          <li>La instalación y configuración la realiza Securitas Direct, que formaliza la parte operativa de la alarma.</li>
        </ol>
        <h3>Gestión</h3>
        <ol>
          <li>Las incidencias operativas del sistema se gestionan con Securitas Direct a través de sus canales dedicados.</li>
        </ol>
      `,
      fidelizacion: `
        <h3>Retención</h3>
        <ul>
          <li>Recordar la importancia de la disuasión, la respuesta en tiempo real y la tranquilidad para el hogar frente a intentos de intrusión.</li>
          <li>Revisar promociones o ajustes de cuota disponibles en seguridad según la antigüedad del cliente y campañas activas.</li>
        </ul>
      `,
      ejemplos: `
        <ul>
          <li>Cliente con vivienda principal en planta baja o unifamiliar que quiere mejorar seguridad ante robos.</li>
        </ul>
      `,
      argumentario: `
        <p>“Con Seguridad Iberdrola Hogar dispone de un sistema profesional de alarma con conexión a central y respuesta inmediata. No es solo una alarma sonora, sino un servicio completo de protección 24/7 para su vivienda.”</p>
      `
    }
  },
  {
    id: "SOLAR_CLOUD",
    family: "SSAA Energía",
    name: "Solar Cloud",
    price: "Cuota mensual o comisión sobre excedentes según modalidad vigente.",
    carencia: "Consultar condiciones; normalmente se aplica desde la activación del servicio.",
    fidelizacionResumen: "Promociones ligadas a autoconsumo y excedentes; conviene revisar campañas específicas antes de ofrecer descuentos adicionales.",
    resumenCorto: "Servicio que permite acumular el valor de excedentes de autoconsumo en una especie de monedero virtual para aplicarlo a facturas futuras.",
    sections: {
      info: `
        <p>Solar Cloud está orientado a clientes con instalación fotovoltaica que vierten excedentes a la red. En lugar de liquidar los excedentes de forma estándar, el servicio permite acumularlos y utilizarlos en facturas futuras, mejorando el aprovechamiento económico de la instalación.</p>
      `,
      coberturas: `
        <ul>
          <li>Acumulación del valor económico de los excedentes en un saldo virtual asociado al contrato.</li>
          <li>Aplicación del saldo a facturas de energía futuras según el esquema definido en las condiciones.</li>
        </ul>
      `,
      exclusiones: `
        <ul>
          <li>No sustituye a la compensación de excedentes regulada si el cliente no cumple requisitos para Solar Cloud.</li>
          <li>Pueden existir límites al volumen de saldo acumulable o plazos máximos para su consumo.</li>
        </ul>
      `,
      procesos: `
        <h3>Contratación</h3>
        <ol>
          <li>Confirmar que el cliente dispone de instalación de autoconsumo compatible y que está interesado en optimizar el valor de sus excedentes.</li>
          <li>Explicar de forma sencilla cómo se acumula el saldo y cómo se aplica a las facturas posteriores.</li>
        </ol>
        <h3>Gestión</h3>
        <ol>
          <li>Las dudas sobre saldo acumulado y su aplicación se resuelven consultando el detalle de facturación y el módulo de Solar Cloud.</li>
        </ol>
      `,
      fidelizacion: `
        <h3>Retención</h3>
        <ul>
          <li>Ante quejas por “pago bajo de excedentes”, explicar el funcionamiento de acumulación y aplicación del saldo, comparando con el esquema estándar.</li>
        </ul>
      `,
      ejemplos: `
        <ul>
          <li>Cliente con instalación sobredimensionada que genera excedentes importantes y quiere aprovechar más su valor a lo largo del año.</li>
        </ul>
      `,
      argumentario: `
        <p>“Con Solar Cloud el valor de sus excedentes no se pierde en un solo mes, sino que se acumula como saldo para ir descontando futuras facturas, adaptándose mejor a su patrón de consumo anual.”</p>
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
