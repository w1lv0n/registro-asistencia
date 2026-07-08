// ╔══════════════════════════════════════════════════════════════╗
// ║  CONFIGURACIÓN COMPARTIDA — AIP Registro de Firmas             ║
// ║  Usada por index.html y registro.html. Edita solo aquí.        ║
// ╚══════════════════════════════════════════════════════════════╝

// MODO_DEMO: true = usa datos de prueba, no guarda nada real.
// En producción debe quedar en false.
const MODO_DEMO = false;

// URL del CSV publicado del Sheet
// (Archivo → Compartir → Publicar en la web → esta hoja → CSV → Publicar)
const CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTdsOiLJ-TJF_2LMpo95ShBnFOvW5xUF21nvIC07swQ3FNO4mD8vNi9OBrZTz8m5dLl-aB3eMkS1-oS/pub?gid=0&single=true&output=csv';

// URL del Web App de Apps Script (Implementar → Nueva implementación)
const GAS_URL = 'https://script.google.com/macros/s/AKfycbwiWm3ZSJ1Hi78rI5R8s530fHth8nfhXvYLRYBcP0XPvUnbdd7iCYA6IpTEvbGOd0hs7Q/exec';
