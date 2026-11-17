const config = window.SITE_CONFIG || {};
const contacts = config.contacts || {};

const iconPaths = {
  whatsapp: '<path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8A8.5 8.5 0 0 1 12.5 20a8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8A8.5 8.5 0 0 1 12.5 3a8.5 8.5 0 0 1 8.5 8.5Z"/><path d="M9 9.5c.3 2.1 2.2 4 4.3 4.5l1.3-1 1.9.8-.3 1.4c-.3.9-1.5 1.1-2.6.9-3.1-.7-5.2-2.9-6-5.9-.3-1 .1-2.2 1-2.5l1.3-.2.8 1.7-1 1.3Z"/>',
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/>',
  linkedin: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7.5 10.5v6m0-9v.1M12 16.5v-6m0 2.7a2.5 2.5 0 0 1 5 0v3.3"/>',
  portfolio: '<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13a25 25 0 0 0 18 0M10 12h4"/>',
  github: '<path d="M9 19c-4.3 1.3-4.3-2.5-6-3m12 6v-3.3a2.9 2.9 0 0 0-.8-2.3c2.6-.3 5.3-1.3 5.3-5.9a4.6 4.6 0 0 0-1.3-3.2A4.2 4.2 0 0 0 18 4s-1 0-3 1.5a10.4 10.4 0 0 0-6 0C7 4 6 4 6 4a4.2 4.2 0 0 0-.2 3.2 4.6 4.6 0 0 0-1.3 3.2c0 4.6 2.7 5.6 5.3 5.9A2.9 2.9 0 0 0 9 18.7V22"/>',
  email: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  lumos: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/>',
  arrow: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
};

const contactItems = [
  { key: "whatsapp", title: "WhatsApp", description: "Converse comigo" },
  { key: "instagram", title: "Instagram", description: "Acompanhe meu dia a dia" },
  { key: "linkedin", title: "LinkedIn", description: "Minha rede profissional" },
  { key: "portfolio", title: "Meu Portfólio", description: "Projetos e experiências", accent: true },
  { key: "github", title: "GitHub", description: "Explore meus códigos" },
  { key: "email", title: "E-mail", description: "Contato profissional" },
  { key: "lumos", title: "Lumos Connect", description: "Conheça nossa startup" },
];

function icon(name, className = "") {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("fill", "none");
  svg.setAttribute("stroke", "currentColor");
  svg.setAttribute("stroke-width", "1.65");
  svg.setAttribute("stroke-linecap", "round");
  svg.setAttribute("stroke-linejoin", "round");
  svg.setAttribute("aria-hidden", "true");
  svg.classList.add("contact-icon");
  if (className) svg.classList.add(className);
  svg.innerHTML = iconPaths[name]; // Somente SVGs estáticos definidos neste arquivo.
  return svg;
}

function usableUrl(key, value) {
  if (typeof value !== "string" || !value.trim()) return null;
  if (key === "email") {
    const email = value.trim().replace(/^mailto:/i, "");
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? `mailto:${email}` : null;
  }
  try {
    const parsed = new URL(value.trim());
    return ["https:", "http:"].includes(parsed.protocol) ? parsed.href : null;
  } catch {
    return null;
  }
}

function createContactCard(item) {
  const href = usableUrl(item.key, contacts[item.key]);
  const card = document.createElement(href ? "a" : "div");
  card.className = `contact-card${item.accent ? " contact-card--accent" : ""}${href ? " is-active" : " is-unavailable"}`;
  if (href) {
    card.href = href;
    if (!href.startsWith("mailto:")) {
      card.target = "_blank";
      card.rel = "noopener noreferrer";
    }
    card.setAttribute("aria-label", `Abrir ${item.title}`);
  } else {
    card.setAttribute("aria-label", `${item.title}: link ainda não configurado`);
  }

  const top = document.createElement("div");
  top.className = "contact-card-top";
  top.append(icon(item.key), icon("arrow", "contact-arrow"));

  const bottom = document.createElement("div");
  const title = document.createElement("span");
  title.className = "contact-title";
  title.textContent = item.title;
  const subtitle = document.createElement("span");
  subtitle.className = "contact-subtitle";
  subtitle.textContent = href ? item.description : "Em breve · " + item.description;
  bottom.append(title, subtitle);
  card.append(top, bottom);
  return card;
}

const contactGrid = document.getElementById("contact-grid");
contactItems.forEach((item) => contactGrid.appendChild(createContactCard(item)));
document.getElementById("year").textContent = new Date().getFullYear();
