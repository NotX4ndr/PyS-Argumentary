// Datos de productos (puedes ampliar o ajustar textos)
const PRODUCTS = [
  {
    id: "peh",
    nombre: "PEH · Protección Eléctrica Hogar",
    familia: "proteccion",
    tipo: [
      "info-general",
      "contratacion",
      "gestion-servicio",
      "averias",
      "fidelizacion",
      "bajas",
      "ejemplos-argumentario",
    ],
    descripcion:
      "Protección eléctrica para el hogar: averías eléctricas urgentes y reparación de electrodomésticos básicos.",
    precio:
      "Cuota mensual PEH: consultar importe actual en herramienta comercial.",
    promociones: [
      "Suele ser elegible para campañas de fidelización (p.ej. 50 % durante 12 meses), según condiciones comerciales vigentes.",
    ],
    coberturas: [
      "Atención de averías eléctricas urgentes en el hogar, según condiciones.",
      "Reparación de electrodomésticos de gama blanca dentro de la antigüedad máxima.",
      "Servicio de bricolaje eléctrico (normalmente 1 intervención / año).",
      "Asesoramiento energético básico para optimizar consumos.",
    ],
    exclusiones: [
      "Instalaciones con potencia contratada superior al límite definido.",
      "Electrodomésticos que superen la antigüedad máxima permitida.",
      "Materiales que excedan los importes máximos cubiertos por intervención.",
    ],
    procesosClave: {
      "info-general":
        "Recomendado para hogares que han sufrido averías eléctricas o quieren prevenirlas.",
      contratacion:
        "Alta asociada al contrato de energía; revisar potencia y tipo de suministro antes de ofrecer.",
      "gestion-servicio":
        "Las averías y el bricolaje se gestionan mediante solicitudes; el proveedor contacta con el cliente para concertar cita.",
      averias:
        "Antes de abrir una avería, descartar incidencia de distribuidora o corte por impago.",
      fidelizacion:
        "Comparar el coste de una avería (desplazamiento + mano de obra + piezas) con el coste de varias cuotas de PEH.",
      bajas:
        "Recordar que pierde la cobertura de averías y bricolaje, y posibles descuentos vinculados al servicio.",
    },
    ejemplos: [
      "Cliente sin luz en parte de la vivienda por fallo en instalación interior.",
      "Fallo en un electrodoméstico de cocina, evitando pagar una reparación completa por su cuenta.",
      "Cliente que quiere un único número para cualquier incidencia eléctrica en casa.",
    ],
    argumentario: [
      "Una sola avería eléctrica puede costar más que varios meses de servicio.",
      "Incluye mano de obra y desplazamiento de técnicos especializados.",
      "Evita tener que buscar técnico de urgencia y negociar precios en cada incidencia.",
    ],
    fidelModalId: "fid-peh",
  },
  {
    id: "pih",
    nombre: "PIH · Pack Iberdrola Hogar",
    familia: "proteccion",
    tipo: [
      "info-general",
      "contratacion",
      "gestion-servicio",
      "averias",
      "geir",
      "fidelizacion",
      "bajas",
      "ejemplos-argumentario",
    ],
    descripcion:
      "Pack completo que integra protección eléctrica, reparación de electrodomésticos, bricolaje, servicios digitales y, según modalidad, protección de pagos.",
    precio:
      "Cuota mensual PIH: consultar importe actual. Suele ser inferior a contratar todos los servicios por separado.",
    promociones: [
      "Descuentos porcentuales sobre la cuota durante X meses según campaña.",
      "Condiciones específicas para migrar desde servicios individuales a PIH.",
    ],
    coberturas: [
      "Avería eléctrica urgente con atención prioritaria.",
      "Reparación de electrodomésticos y televisión hasta un límite anual por aparato.",
      "Bricolaje eléctrico para pequeñas mejoras (punto de luz, enchufe, etc.).",
      "Servicios digitales (según modalidad): ciberseguridad, soporte, monitorización.",
      "En algunas modalidades, protección de pagos ante ciertas situaciones del titular.",
    ],
    exclusiones: [
      "Equipos fuera de antigüedad o no ubicados en el domicilio declarado.",
      "Trabajos que equivalgan a reformas completas o grandes obras.",
      "Cualquier actuación no descrita en las condiciones particulares del pack.",
    ],
    procesosClave: {
      "info-general":
        "Posicionarlo como solución ‘todo en uno’ para clientes que valoran tranquilidad global en el hogar.",
      contratacion:
        "Priorizar PIH cuando el cliente tiene varias necesidades (averías, digital, protección económica).",
      geir:
        "Si hay dudas de facturación o contratación, revisar fecha de alta, uso del servicio y campañas aplicadas.",
      "gestion-servicio":
        "Cada ámbito (averías, digital, pagos, etc.) se tramita mediante solicitudes específicas pero el cliente ve un solo producto.",
      fidelizacion:
        "Recordar que sin PIH debería contratar varios servicios separados; ofrecer descuento temporal si campaña lo permite.",
      bajas:
        "Explicar que la baja implica perder de golpe averías, digital y protección de pagos si la hay.",
    },
    ejemplos: [
      "Hogar con varios electrodomésticos y alto uso digital (ordenadores, móviles, TV…).",
      "Cliente que quiere simplificar y concentrar servicios en una sola cuota.",
      "Familias que valoran tanto la parte de averías como la parte digital y económica.",
    ],
    argumentario: [
      "Agrupa varios servicios en un solo pack, simplificando gestión y facturación.",
      "Normalmente sale más económico que contratar cada servicio por separado.",
      "Da una cobertura amplia: averías, digital, asesoramiento y protección económica.",
    ],
    fidelModalId: "fid-pih",
  },
  {
    id: "pmg",
    nombre: "PMG · Pack Mantenimiento Gas",
    familia: "gas",
    tipo: [
      "info-general",
      "contratacion",
      "gestion-servicio",
      "averias",
      "geir",
      "fidelizacion",
      "bajas",
      "ejemplos-argumentario",
    ],
    descripcion:
      "Mantenimiento completo de instalación de gas y caldera/calentador, con revisión periódica y cobertura de averías.",
    precio:
      "Cuota mensual PMG: consultar importe actual. La regularización puede aplicar si se ha hecho uso del servicio.",
    promociones: [
      "Descuentos temporales en la cuota si hay campañas activas.",
      "Posibilidad de migrar a productos más sencillos (p.ej. AG) si el cliente solo quiere averías.",
    ],
    coberturas: [
      "Visita periódica de mantenimiento de la instalación de gas y equipos.",
      "Cobertura de un número determinado de averías al año con mano de obra y materiales hasta un límite.",
      "Desplazamiento del técnico incluido según condiciones.",
    ],
    exclusiones: [
      "Instalaciones que no cumplan normativa o se encuentren fuera del ámbito de aplicación.",
      "Averías causadas por manipulación inadecuada o falta grave de mantenimiento.",
      "Materiales y trabajos que excedan los límites económicos del servicio.",
    ],
    procesosClave: {
      "info-general":
        "Proponer a clientes con caldera que quieren tranquilidad tanto en revisiones como en averías.",
      contratacion:
        "Informar de posibles carencias y desde cuándo podría utilizar el servicio.",
      "gestion-servicio":
        "Planificación de revisiones y gestión de avisos con coordinación de agenda con el cliente.",
      averias:
        "Tipificar bien (no enciende, fuga, falta de presión, etc.) para que el técnico vaya preparado.",
      geir:
        "En discrepancias de facturación/baja, revisar visitas y averías ya realizadas antes de decidir devoluciones.",
      fidelizacion:
        "Comparar el coste de una avería importante de caldera con la cuota anual de PMG.",
      bajas:
        "Explicar impacto de la baja y la posible regularización si ha disfrutado ya de servicios.",
    },
    ejemplos: [
      "Caldera que falla todos los inviernos; el cliente quiere evitar quedarse sin calefacción.",
      "Instalación de gas antigua que requiere revisiones frecuentes.",
      "Clientes que prefieren pagar una cuota fija y evitar sustos en reparaciones de caldera.",
    ],
    argumentario: [
      "Ayuda a prevenir problemas graves en la instalación de gas.",
      "Evita tener que asumir íntegramente el coste de averías importantes.",
      "Revisiones periódicas aumentan la seguridad del hogar.",
    ],
    fidelModalId: "fid-pmg",
  },
  {
    id: "tal",
    nombre: "TAL · Tu Asesor Legal",
    familia: "legal-digital",
    tipo: [
      "info-general",
      "contratacion",
      "gestion-servicio",
      "fidelizacion",
      "ejemplos-argumentario",
    ],
    descripcion:
      "Asesoría jurídica telefónica y telemática para temas personales y familiares, prestada por abogados colegiados.",
    precio:
      "Cuota mensual TAL: consultar importe actual. Suele ser muy inferior al coste de una consulta presencial.",
    promociones: [
      "Descuentos en la cuota según campañas activas.",
    ],
    coberturas: [
      "Consultas sobre vivienda, familia, trabajo, consumo, impuestos y otros temas cotidianos.",
      "Atención a urgencias legales 24h en casos sensibles.",
      "Revisión de contratos (alquiler, laboral, bancario, etc.).",
    ],
    exclusiones: [
      "No incluye representación en juicio salvo que se indique explícitamente.",
      "No cubre procedimientos ajenos al ámbito personal o familiar.",
      "Puede haber límites en el número de consultas sobre un mismo asunto.",
    ],
    procesosClave: {
      "info-general":
        "Explicar que es tener un abogado al otro lado del teléfono para dudas del día a día.",
      contratacion:
        "Recalcar que el coste mensual es muy inferior a una consulta presencial individual.",
      "gestion-servicio":
        "El cliente expone el caso, se revisan documentos y se le orienta sobre sus opciones.",
      fidelizacion:
        "Frente a “no lo uso”, usar ejemplos de situaciones típicas (alquiler, trabajo, compras, bancos).",
    },
    ejemplos: [
      "Revisión de contrato de alquiler antes de firmar.",
      "Consulta sobre despido, finiquito o modificaciones de contrato.",
      "Dudas sobre reclamaciones a bancos o comercios.",
    ],
    argumentario: [
      "Previene errores legales antes de que se conviertan en problemas costosos.",
      "Da tranquilidad al tener un profesional disponible cuando surge una duda.",
      "Es más económico que acudir a un despacho para cada consulta puntual.",
    ],
    fidelModalId: "fid-tal",
  },
];

// Estado de filtros
const state = {
  family: "all",
  process: "all",
};

// Mapeos

function mapFamilyLabel(f) {
  switch (f) {
    case "proteccion":
      return "Protección eléctrica / Hogar";
    case "gas":
      return "PYS de Gas";
    case "legal-digital":
      return "Legal / Digital";
    case "seguros-asistentes":
      return "Seguros / Asistentes Smart";
    default:
      return "Todas las familias";
  }
}

function mapProcessLabel(p) {
  switch (p) {
    case "info-general":
      return "Info. general";
    case "contratacion":
      return "Contratación / Alta";
    case "gestion-servicio":
      return "Gestión servicio";
    case "averias":
      return "Averías";
    case "geir":
      return "GEIR PYS";
    case "fidelizacion":
      return "Fidelización";
    case "bajas":
      return "Bajas / Regularización";
    case "ejemplos-argumentario":
      return "Ejemplos / Argumentario";
    default:
      return "Todos los procesos";
  }
}

// Render principal

const cardsGrid = document.getElementById("cards-grid");
const emptyState = document.getElementById("empty-state");
const resultsCount = document.getElementById("results-count");
const resultsContext = document.getElementById("results-context");
const activeTags = document.getElementById("active-tags");

function applyFilters() {
  const filtered = PRODUCTS.filter((p) => {
    if (state.family !== "all" && p.familia !== state.family) return false;
    if (state.process !== "all" && !p.tipo.includes(state.process)) return false;
    return true;
  });

  renderProducts(filtered);
  updateMeta(filtered.length);
  updateActiveTags();
}

function renderProducts(list) {
  cardsGrid.innerHTML = "";
  if (list.length === 0) {
    emptyState.style.display = "block";
    return;
  }
  emptyState.style.display = "none";

  list.forEach((p) => {
    const card = document.createElement("article");
    card.className = "card";

    // Header
    const header = document.createElement("div");
    header.className = "card-header";

    const titleWrap = document.createElement("div");
    const title = document.createElement("div");
    title.className = "card-title";
    title.textContent = p.nombre;

    const subtitle = document.createElement("div");
    subtitle.className = "card-subtitle";
    subtitle.textContent = p.descripcion;

    titleWrap.appendChild(title);
    titleWrap.appendChild(subtitle);

    const badge = document.createElement("div");
    badge.className = "badge-family";
    badge.textContent = mapFamilyLabel(p.familia);

    header.appendChild(titleWrap);
    header.appendChild(badge);

    // Barra de botones de secciones
    const sectionsToolbar = document.createElement("div");
    sectionsToolbar.className = "card-sections-toolbar";

    const sectionNames = [
      { key: "coberturas", label: "Coberturas" },
      { key: "exclusiones", label: "Exclusiones" },
      { key: "procesos", label: "Procesos" },
      { key: "precio", label: "Precio y promociones" },
      { key: "ejemplos", label: "Ejemplos" },
      { key: "argumentario", label: "Argumentario" },
    ];

    const sectionContents = {};

    sectionNames.forEach((s) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "section-toggle";
      btn.textContent = s.label;
      btn.dataset.section = s.key;
      sectionsToolbar.appendChild(btn);

      const content = document.createElement("div");
      content.className = "section-content hidden";
      content.dataset.section = s.key;

      // rellenar contenido según tipo
      if (s.key === "coberturas") {
        fillListSection(content, "Coberturas principales", p.coberturas);
      } else if (s.key === "exclusiones") {
        fillListSection(content, "Exclusiones clave", p.exclusiones);
      } else if (s.key === "procesos") {
        fillProcessSection(content, "Procesos clave", p.procesosClave);
      } else if (s.key === "precio") {
        fillPrecioSection(content, p.precio, p.promociones);
      } else if (s.key === "ejemplos") {
        fillListSection(content, "Ejemplos de uso", p.ejemplos);
      } else if (s.key === "argumentario") {
        fillListSection(
          content,
          "Argumentario simple",
          p.argumentario,
          "Frases sencillas para usar con el cliente."
        );
      }

      sectionContents[s.key] = content;

      // toggle
      btn.addEventListener("click", () => {
        const isActive = !content.classList.contains("hidden");
        // cerrar todas
        Object.values(sectionContents).forEach((c) =>
          c.classList.add("hidden")
        );
        sectionsToolbar
          .querySelectorAll(".section-toggle")
          .forEach((b) => b.classList.remove("active"));

        if (!isActive) {
          content.classList.remove("hidden");
          btn.classList.add("active");
        }
      });
    });

    // Footer
    const footer = document.createElement("div");
    footer.className = "card-footer";

    const footerText = document.createElement("div");
    footerText.className = "card-footer-text";
    footerText.textContent =
      "Abre solo 1–2 secciones a la vez para centrar el discurso en la necesidad del cliente.";

    const footerActions = document.createElement("div");
    footerActions.className = "card-footer-actions";

    const btnProcesos = document.createElement("button");
    btnProcesos.className = "btn-ghost";
    btnProcesos.type = "button";
    btnProcesos.textContent = "Ver procesos";
    btnProcesos.addEventListener("click", () => {
      const btn = sectionsToolbar.querySelector(
        '.section-toggle[data-section="procesos"]'
      );
      const content = sectionContents["procesos"];
      if (content.classList.contains("hidden")) {
        // simular click
        btn.click();
        card.scrollIntoView({ behavior: "smooth", block: "center" });
      } else {
        content.classList.add("hidden");
        btn.classList.remove("active");
      }
    });

    footerActions.appendChild(btnProcesos);

    if (p.fidelModalId) {
      const btnFid = document.createElement("button");
      btnFid.className = "btn-ghost primary";
      btnFid.type = "button";
      btnFid.textContent = "Fidelización / Precio";
      btnFid.addEventListener("click", () => openModal(p.fidelModalId));
      footerActions.appendChild(btnFid);
    }

    footer.appendChild(footerText);
    footer.appendChild(footerActions);

    // Montar card
    card.appendChild(header);
    card.appendChild(sectionsToolbar);
    sectionNames.forEach((s) => {
      card.appendChild(sectionContents[s.key]);
    });
    card.appendChild(footer);

    cardsGrid.appendChild(card);
  });
}

function fillListSection(container, title, items, subtitle) {
  const header = document.createElement("div");
  header.className = "card-section-title";
  header.textContent = title;

  const body = document.createElement("div");
  body.className = "card-section-body";

  if (subtitle) {
    const p = document.createElement("p");
    p.textContent = subtitle;
    body.appendChild(p);
  }

  if (Array.isArray(items) && items.length) {
    const ul = document.createElement("ul");
    items.forEach((i) => {
      const li = document.createElement("li");
      li.textContent = i;
      ul.appendChild(li);
    });
    body.appendChild(ul);
  } else {
    body.textContent =
      "Pendiente de completar según manuales específicos del producto.";
  }

  container.appendChild(header);
  container.appendChild(body);
}

function fillProcessSection(container, title, procesos) {
  const header = document.createElement("div");
  header.className = "card-section-title";
  header.textContent = title;

  const body = document.createElement("div");
  body.className = "card-section-body";

  if (procesos && Object.keys(procesos).length) {
    const ul = document.createElement("ul");
    Object.entries(procesos).forEach(([clave, texto]) => {
      const li = document.createElement("li");
      const badge = document.createElement("span");
      badge.className = "pill-process";
      badge.textContent = mapProcessLabel(clave);
      li.appendChild(badge);
      li.append(" " + texto);
      ul.appendChild(li);
    });
    body.appendChild(ul);
  } else {
    body.textContent =
      "No se han definido procesos específicos para este PYS todavía.";
  }

  container.appendChild(header);
  container.appendChild(body);
}

function fillPrecioSection(container, precio, promociones) {
  const header = document.createElement("div");
  header.className = "card-section-title";
  header.textContent = "Precio y promociones";

  const body = document.createElement("div");
  body.className = "card-section-body";

  const pPrecio = document.createElement("p");
  pPrecio.textContent = precio || "Consulta la cuota en tu herramienta comercial.";
  body.appendChild(pPrecio);

  if (Array.isArray(promociones) && promociones.length) {
    const ul = document.createElement("ul");
    promociones.forEach((pr) => {
      const li = document.createElement("li");
      li.textContent = pr;
      ul.appendChild(li);
    });
    body.appendChild(ul);
  }

  container.appendChild(header);
  container.appendChild(body);
}

function updateMeta(count) {
  resultsCount.textContent = `${count} resultado${count === 1 ? "" : "s"}`;
  const familyText =
    state.family === "all" ? "todas" : mapFamilyLabel(state.family);
  const processText =
    state.process === "all" ? "todos" : mapProcessLabel(state.process);
  resultsContext.textContent = `Familia: ${familyText} · Proceso: ${processText}`;
}

function updateActiveTags() {
  activeTags.innerHTML = "";
  if (state.family !== "all") {
    const span = document.createElement("span");
    span.className = "tag-pill";
    span.textContent = mapFamilyLabel(state.family);
    activeTags.appendChild(span);
  }
  if (state.process !== "all") {
    const span = document.createElement("span");
    span.className = "tag-pill";
    span.textContent = mapProcessLabel(state.process);
    activeTags.appendChild(span);
  }
}

// Gestión modales generales

function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

document.querySelectorAll("[data-open-modal]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = btn.getAttribute("data-open-modal");
    openModal(id);
  });
});

document.querySelectorAll("[data-close-modal]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = btn.getAttribute("data-close-modal");
    closeModal(id);
  });
});

document.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) {
      backdrop.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelectorAll(".modal-backdrop.active").forEach((m) =>
      m.classList.remove("active")
    );
    document.body.style.overflow = "";
  }
});

// Botones de familia / proceso

document.querySelectorAll("[data-family]").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll("[data-family]")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    state.family = btn.getAttribute("data-family");
    applyFilters();
  });
});

document.querySelectorAll("[data-process]").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll("[data-process]")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    state.process = btn.getAttribute("data-process");
    applyFilters();
  });
});

// Inicial
applyFilters();
